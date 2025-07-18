import { useState } from 'react';
import { useUserAuth } from '../../../context/userAuthContext';
import { db } from '../../../firebase/firebaseConfig';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const UploadPost = () => {
  const { user } = useUserAuth();
  const [image, setImage] = useState<File | null>(null);
  const [caption, setCaption] = useState('');
  const [loading, setLoading] = useState(false);

  if (!user) return null;

  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!image) return;
    setLoading(true);
    try {
      // 1. Upload image to Firebase Storage
      const storage = getStorage();
      const storageRef = ref(storage, `posts/${user.uid}/${Date.now()}_${image.name}`);
      await uploadBytes(storageRef, image);
      const imageURL = await getDownloadURL(storageRef);
      // 2. Save post info to Firestore
      await addDoc(collection(db, 'posts'), {
        imageURL,
        caption,
        userId: user.uid,
        userName: user.displayName || user.email,
        userAvatar: user.photoURL || '',
        createdAt: serverTimestamp(),
      });
      setCaption('');
      setImage(null);
      alert('Post uploaded!');
    } catch (err) {
      alert('Failed to upload post');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleUpload} className="mb-8 p-4 bg-slate-800 rounded-xl">
      <input type="file" accept="image/*" onChange={e => setImage(e.target.files?.[0] || null)} required />
      <input
        type="text"
        placeholder="Write a caption..."
        value={caption}
        onChange={e => setCaption(e.target.value)}
        className="w-full mt-2 p-2 rounded"
      />
      <button type="submit" className="mt-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded text-white" disabled={loading}>
        {loading ? 'Posting...' : 'Post'}
      </button>
    </form>
  );
};

export default UploadPost; 