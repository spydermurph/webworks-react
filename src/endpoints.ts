// Base API URL from environment variables
const BASE_API_URL =
  import.meta.env.VITE_APP_API_URL || "https://localhost:7287/api";

// REST API Endpoints following RESTful conventions
// Categories are treated as post metadata since they only exist to classify posts
export const API_ENDPOINTS = {
  // Blog Posts
  posts: {
    list: `${BASE_API_URL}/posts`, // GET /api/posts
    getById: (id: number) => `${BASE_API_URL}/posts/${id}`, // GET /api/posts/{id}
    create: `${BASE_API_URL}/posts`, // POST /api/posts
    update: (id: number) => `${BASE_API_URL}/posts/${id}`, // PUT /api/posts/{id}
    delete: (id: number) => `${BASE_API_URL}/posts/${id}`, // DELETE /api/posts/{id}

    // Categories as post metadata
    categories: {
      list: `${BASE_API_URL}/posts/categories`, // GET /api/posts/categories
      getById: (id: number) => `${BASE_API_URL}/posts/categories/${id}`, // GET /api/posts/categories/{id}
      create: `${BASE_API_URL}/posts/categories`, // POST /api/posts/categories
      update: (id: number) => `${BASE_API_URL}/posts/categories/${id}`, // PUT /api/posts/categories/{id}
      delete: (id: number) => `${BASE_API_URL}/posts/categories/${id}`, // DELETE /api/posts/categories/{id}
    },

    // Posts filtered by category
    byCategory: (categoryId: number) =>
      `${BASE_API_URL}/posts?categoryId=${categoryId}`,

    // Search posts
    search: `${BASE_API_URL}/posts/search`, // GET /api/posts/search?q=term
  },
};

// Legacy support (deprecated - use API_ENDPOINTS instead)
export const urlBlogs = API_ENDPOINTS.posts.list;

// Backward compatibility aliases
export const legacyEndpoints = {
  categories: API_ENDPOINTS.posts.categories.list,
  postsByCategory: API_ENDPOINTS.posts.byCategory,
};
