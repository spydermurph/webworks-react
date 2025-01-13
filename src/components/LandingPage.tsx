import { useEffect, useState } from "react";
import { blogPostDTO } from "../lib/blogpost.model";
import placeholderpic from "../assets/dummy1000x750.png";

export default function LandingPage() {
  const [blogPosts, setBlogPosts] = useState<blogPostDTO[]>([]);

  useEffect(() => {
    loadData();
  }, []);

  function loadData() {
    const posts: blogPostDTO[] = [
      {
        id: 1,
        title: "First post",
        content: "This is the first post",
        categoryId: 1,
        categoryName: "Category 1",
        publicationDate: new Date(),
      },
      {
        id: 2,
        title: "Second post",
        content: "This is the Second post",
        categoryId: 2,
        categoryName: "Category 2",
        publicationDate: new Date(),
      },
    ];
    setBlogPosts(posts);
  }

  return (
    <>
      <h1>Welcome to React</h1>
      <p>React is a JavaScript library for building user interfaces.</p>
      <h2>Blog posts</h2>
      {/* {blogPosts.map((post) => ( 
        // <div key={post.id}>
        //   <h3
        //     style={{
        //       color: "white",
        //       textShadow:
        //         "-1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black",
        //     }}
        //   >
        //     {post.title}
        //   </h3>
        //   <p
        //     style={{
        //       color: "white",
        //       textShadow:
        //         "-1px -1px 0 black, 1px -1px 0 black, -1px 1px 0 black, 1px 1px 0 black",
        //     }}
        //   >
        //     {post.content}
        //   </p>
        //   <p>Category: {post.categoryName}</p>
        //   <p>Publication date: {post.publicationDate.toDateString()}</p>
        // </div>
        // <div className="card">
        //   <img
        //     src={testpic}
        //     alt=""
        //     className="card-img-top img-fluid"
        //     style={{ height: "15rem", width: "auto" }}
        //   />
        //   <div className="card-body">
        //     <h5 className="card-title">{post.title}</h5>
        //     <p className="card-text">{post.content}</p>
        //   </div>
        // </div>        
      ))}*/}
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {blogPosts.map((post) => (
            <div className="col">
              <div className="card h-100">
                <img src={placeholderpic} alt="placeholder" />
                <div className="card-body">
                  <h5 className="card-title">{post.title}</h5>
                  <p className="card-text">{post.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
