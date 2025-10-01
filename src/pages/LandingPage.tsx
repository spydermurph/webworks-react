import { useEffect, useState } from "react";
import { blogPostDTO } from "../lib/blogpost.model";
import axios, { AxiosError, AxiosResponse } from "axios";
import { pagingDTO } from "../lib/paging.model";
import BlogCard from "../components/BlogCard";

export default function LandingPage() {
  const [blogPosts, setBlogPosts] = useState<blogPostDTO[]>([]);

  useEffect(() => {
    //loadStaticData();
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const response: AxiosResponse<pagingDTO<blogPostDTO>> = await axios.get(
        "https://localhost:7287/api/posts",
        { params: { startindex: 0, pagenumber: 1, pagesize: 6 } }
      );
      console.log(response.data.items);
      setBlogPosts(response.data.items);
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error.response?.data);
      }
    }
  };

  /*function loadStaticData() {
    const posts: blogPostDTO[] = [
      {
        postId: 1,
        title: "First post",
        content: "This is the first post",
        categoryId: 1,
        categoryName: "Category 1",
        publicationDate: new Date(),
      },
      {
        postId: 2,
        title: "Second post",
        content: "This is the Second post",
        categoryId: 2,
        categoryName: "Category 2",
        publicationDate: new Date(),
      },
    ];
    setBlogPosts(posts);
  }*/

  return (
    <>
      <h2>Blog posts</h2>
      <div className="container">
        <div className="row">
          <nav className="col-md-3 col-lg-2 bg-light p-3">
            <h4>Menu</h4>
            <ul className="nav flex-column">
              <li className="nav-item" style={{ margin: "1px 0" }}>
                <a href="#" className="nav-link" style={{ padding: "0 10px" }}>
                  All
                </a>
              </li>
              <li className="nav-item" style={{ margin: "1px 0" }}>
                <a href="#" className="nav-link" style={{ padding: "0 10px" }}>
                  Development
                </a>
              </li>
              <li className="nav-item" style={{ margin: "1px 0" }}>
                <a href="#" className="nav-link" style={{ padding: "0 10px" }}>
                  Crafting
                </a>
              </li>
            </ul>
          </nav>
          <main className="col-md-9 col-lg-10 ">
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
              {blogPosts.map((post) => (
                <BlogCard key={post.postId} post={post} />
              ))}
            </div>
          </main>
        </div>
      </div>
    </>
  );

  /*return (
    <>
      <h2>Blog posts</h2>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {blogPosts.map((post) => (
            <div className="col" key={post.postId}>
              <div className="card h-100">
                <img src={placeholderpic} alt="placeholder" />
                <div className="card-body">
                  <h5 className="card-title">{post.title}</h5>
                  <p className="card-text">{post.content}</p>
                  <Link
                    to={`/blog/${post.postId}`}
                    className="stretched-link"
                  ></Link>
                </div>
                <div className="card-footer">
                  <small className="text-body-secondary">{post.postId}</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );*/
}
