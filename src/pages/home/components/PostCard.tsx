import { Link } from 'react-router-dom';

const PostCard = ({ post }: { post: any }) => (
  <div className="bg-slate-800 rounded-xl p-4">
    <div className="flex items-center mb-2">
      <Link to={`/profile/${post?.userId || ''}`}>
        <img src={post?.userAvatar || ''} alt="avatar" className="w-8 h-8 rounded-full mr-2" />
      </Link>
      <Link to={`/profile/${post?.userId || ''}`} className="font-bold text-white">
        {post?.userName || 'User'}
      </Link>
    </div>
    <img src={post?.imageURL || ''} alt="post" className="w-full rounded-xl mb-2" />
    <div className="text-slate-300">{post?.caption || ''}</div>
    <div className="text-xs text-slate-500 mt-1">{/* timestamp, likes, etc. */}</div>
  </div>
);

export default PostCard; 