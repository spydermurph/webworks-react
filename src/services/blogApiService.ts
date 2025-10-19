import axios, { AxiosResponse } from "axios";
import {
  BlogPostDTO,
  BlogPostExcerptDTO,
  CategoryDTO,
} from "../lib/blogpost.model";
import { pagingDTO } from "../lib/paging.model";
import { API_ENDPOINTS } from "../endpoints";

// Types for API parameters
export interface PostsQueryParams {
  startindex?: number;
  pagenumber?: number;
  pagesize?: number;
  categoryId?: number;
  search?: string;
}

// API Service class for better organization
export class BlogApiService {
  /**
   * Get paginated list of blog posts
   * @param params Query parameters for filtering and pagination
   */
  static async getPosts(
    params: PostsQueryParams = {}
  ): Promise<pagingDTO<BlogPostExcerptDTO>> {
    const response: AxiosResponse<pagingDTO<BlogPostExcerptDTO>> =
      await axios.get(API_ENDPOINTS.posts.list, { params });
    return response.data;
  }

  /**
   * Get a specific blog post by ID
   * @param id Post ID
   */
  static async getPostById(id: number): Promise<BlogPostDTO> {
    const response: AxiosResponse<BlogPostDTO> = await axios.get(
      API_ENDPOINTS.posts.getById(id)
    );
    return response.data;
  }

  /**
   * Get all categories used by posts
   */
  static async getCategories(): Promise<CategoryDTO[]> {
    const response: AxiosResponse<CategoryDTO[]> = await axios.get(
      API_ENDPOINTS.posts.categories.list
    );
    return response.data;
  }

  /**
   * Get a specific category by ID
   * @param id Category ID
   */
  static async getCategoryById(id: number): Promise<CategoryDTO> {
    const response: AxiosResponse<CategoryDTO> = await axios.get(
      API_ENDPOINTS.posts.categories.getById(id)
    );
    return response.data;
  }

  /**
   * Get posts by category ID
   * @param categoryId Category ID
   * @param params Additional query parameters
   */
  static async getPostsByCategory(
    categoryId: number,
    params: Omit<PostsQueryParams, "categoryId"> = {}
  ): Promise<pagingDTO<BlogPostDTO>> {
    const response: AxiosResponse<pagingDTO<BlogPostDTO>> = await axios.get(
      API_ENDPOINTS.posts.byCategory(categoryId),
      { params }
    );
    return response.data;
  }

  /**
   * Search posts
   * @param query Search query
   * @param params Additional parameters
   */
  static async searchPosts(
    query: string,
    params: Omit<PostsQueryParams, "search"> = {}
  ): Promise<pagingDTO<BlogPostDTO>> {
    const response: AxiosResponse<pagingDTO<BlogPostDTO>> = await axios.get(
      API_ENDPOINTS.posts.search,
      { params: { ...params, q: query } }
    );
    return response.data;
  }

  /**
   * Create a new category
   * @param categoryData Category data to create
   */
  static async createCategory(
    categoryData: Omit<CategoryDTO, "categoryId">
  ): Promise<CategoryDTO> {
    const response: AxiosResponse<CategoryDTO> = await axios.post(
      API_ENDPOINTS.posts.categories.create,
      categoryData
    );
    return response.data;
  }

  /**
   * Update an existing category
   * @param id Category ID
   * @param categoryData Updated category data
   */
  static async updateCategory(
    id: number,
    categoryData: Omit<CategoryDTO, "categoryId">
  ): Promise<CategoryDTO> {
    const response: AxiosResponse<CategoryDTO> = await axios.put(
      API_ENDPOINTS.posts.categories.update(id),
      categoryData
    );
    return response.data;
  }

  /**
   * Delete a category
   * @param id Category ID
   */
  static async deleteCategory(id: number): Promise<void> {
    await axios.delete(API_ENDPOINTS.posts.categories.delete(id));
  }
}

// Export individual functions for backward compatibility
export const apiService = BlogApiService;
