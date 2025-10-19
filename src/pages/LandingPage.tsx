import { useEffect, useState } from "react";
import { BlogPostExcerptDTO, CategoryDTO } from "../lib/blogpost.model";
import { AxiosError } from "axios";
import BlogCard from "../components/BlogCard";
import { BlogApiService } from "../services/blogApiService";

export default function LandingPage() {
  const [blogPosts, setBlogPosts] = useState<BlogPostExcerptDTO[]>([]);
  const [categories, setCategories] = useState<CategoryDTO[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    //loadStaticData();
    loadBlogPosts();
    loadCategories();
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (dropdownOpen && !target.closest(".dropdown")) {
        setDropdownOpen(false);
      }
    };

    if (dropdownOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [dropdownOpen]);

  const loadBlogPosts = async (categoryId?: number) => {
    try {
      const params = {
        startindex: 0,
        pagenumber: 1,
        pagesize: 6,
        ...(categoryId && { categoryId }),
      };

      const data = await BlogApiService.getPosts(params);
      console.log(data.items);
      setBlogPosts(data.items);
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error.response?.data);
      }
    }
  };

  const loadCategories = async () => {
    try {
      const data = await BlogApiService.getCategories();
      console.log(data);
      setCategories(data);
    } catch (error) {
      console.log("Error loading categories:");
      if (error instanceof AxiosError) {
        console.log(error.response?.data);
      }
    }
  };

  const handleCategoryFilter = (categoryId: number | null) => {
    setSelectedCategory(categoryId);
    loadBlogPosts(categoryId || undefined);
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

  // Get the display name for the selected category
  const getSelectedCategoryName = () => {
    if (selectedCategory === null) return "All Categories";
    const category = categories.find(
      (cat) => cat.categoryId === selectedCategory
    );
    return category ? category.categoryName : "All Categories";
  };

  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h2>Blog Posts</h2>

          {/* Category Dropdown */}
          <div className="dropdown position-relative">
            <button
              className="btn btn-outline-secondary dropdown-toggle"
              type="button"
              onClick={() => setDropdownOpen(!dropdownOpen)}
              aria-expanded={dropdownOpen}
              style={{ minWidth: "160px" }}
            >
              <i className="bi bi-filter me-2"></i>
              {getSelectedCategoryName()}
            </button>
            {dropdownOpen && (
              <ul
                className="dropdown-menu show position-absolute"
                style={{ zIndex: 1000 }}
              >
                <li>
                  <button
                    className={`dropdown-item ${
                      selectedCategory === null ? "active" : ""
                    }`}
                    onClick={() => {
                      handleCategoryFilter(null);
                      setDropdownOpen(false);
                    }}
                  >
                    <i className="bi bi-list me-2"></i>
                    All Categories
                  </button>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                {categories.map((category) => (
                  <li key={category.categoryId}>
                    <button
                      className={`dropdown-item ${
                        selectedCategory === category.categoryId ? "active" : ""
                      }`}
                      onClick={() => {
                        handleCategoryFilter(category.categoryId);
                        setDropdownOpen(false);
                      }}
                    >
                      <i className="bi bi-tag me-2"></i>
                      {category.categoryName}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Blog Cards Grid */}
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {blogPosts.map((post) => (
            <BlogCard key={post.postId} post={post} />
          ))}
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
