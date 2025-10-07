import { useParams } from "react-router-dom";
//import placeholderpic from "../../assets/dummy1000x750.png";
import { useEffect, useState } from "react";
import { BlogPostDTO } from "../../lib/blogpost.model";
import { BlogApiService } from "../../services/blogApiService";
import { AxiosError } from "axios";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function BlogDetails() {
  const { id } = useParams<{ id: string }>();
  const [blogPost, setBlogPost] = useState<BlogPostDTO>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadBlogPost = async () => {
      if (!id || isNaN(Number(id))) {
        setError("Invalid post ID");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);
        const data = await BlogApiService.getPostById(Number(id));
        console.log(data);
        setBlogPost(data);
      } catch (error) {
        if (error instanceof AxiosError) {
          setError(error.response?.data?.message || "Failed to load blog post");
          console.error("Error loading blog post:", error.response?.data);
        } else {
          setError("An unexpected error occurred");
        }
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      loadBlogPost();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="container">
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container">
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      </div>
    );
  }

  if (!blogPost) {
    return (
      <div className="container">
        <div className="alert alert-warning" role="alert">
          Blog post not found.
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="container">
        <div className="row row-cols-1 g-4">
          <div className="col">
            <div className="card h-100">
              {/*<img src={placeholderpic} alt="placeholder" />
              <div className="card-body">
                <h5 className="card-title">{blogPost.title}</h5>
                <p className="card-text">{blogPost.content}</p>
                <div className="mt-3">
                  <span className="badge bg-secondary">
                    {blogPost.categoryName}
                  </span>
                  <small className="text-muted ms-2">
                    Published:{" "}
                    {new Date(blogPost.publicationDate).toLocaleDateString()}
                  </small>
                </div>
              </div>*/}
              <div className="card-body">
                <Markdown remarkPlugins={[remarkGfm]}>
                  {blogPost.content}
                </Markdown>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
