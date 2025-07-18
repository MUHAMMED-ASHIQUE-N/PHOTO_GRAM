import PostCard from './PostCard';

const Feed = () => {
  // TODO: Fetch posts from Firestore
  const posts: any[] = [];
  return (
    <div className="space-y-6">
      {posts.length === 0 ? (
        <div className="text-center text-slate-400">No posts yet.</div>
      ) : (
        posts.map(post => <PostCard key={post.id} post={post} />)
      )}
    </div>
  );
};

export default Feed; 