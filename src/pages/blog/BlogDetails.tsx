import { useParams } from "react-router-dom";
import placeholderpic from "../../assets/dummy1000x750.png";
import { urlBlogs } from "../../endpoints";
import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { blogPostDTO } from "../../lib/blogpost.model";

export default function BlogDetails() {
  const { id } = useParams<{ id: string }>();
  const [blogPost, setBlogPost] = useState<blogPostDTO>();

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    axios
      .get(`${urlBlogs}/${id}`)
      .then((response: AxiosResponse<blogPostDTO>) => {
        console.log(response.data);
        setBlogPost(response.data);
      });
  };

  return (
    <>
      <div className="container">
        <div className="row row-cols-1 g-4">
          <div className="col">
            <div className="card h-100">
              <img src={placeholderpic} alt="placeholder" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">{blogPost?.content}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
