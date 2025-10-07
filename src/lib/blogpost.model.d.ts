export interface BlogPostDTO {
  postId: number;
  title: string;
  content: string;
  categoryId: number;
  categoryName: string;
  publicationDate: Date;
}

export interface CategoryDTO {
  categoryId: number;
  categoryName: string;
}
