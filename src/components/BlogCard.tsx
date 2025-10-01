import { Link } from "react-router-dom";
import { blogPostDTO } from "../lib/blogpost.model";
import placeholderpic from "../assets/dummy1000x750.png";

interface BlogCardProps {
  post: blogPostDTO;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <div className="col">
      <div className="card h-100">
        <img src={placeholderpic} alt="placeholder" />
        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>
          <p className="card-text">{post.content}</p>
          <Link to={`/blog/${post.postId}`} className="stretched-link"></Link>
        </div>
        <div className="card-footer">
          <small className="text-body-secondary">{post.postId}</small>
        </div>
      </div>
    </div>
  );
}
