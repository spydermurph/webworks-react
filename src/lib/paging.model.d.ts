export interface pagingDTO<T> {
  items: T[];
  pagenumber: number;
  recordnumber: number;
  totalcount: number;
}

/*export interface pageingDTO<T> {
  items: T[];
  totalItems: number;
  currentPage: number;
  totalPages: number;
  hasPrevious: boolean;
  hasNext: boolean;
}*/
