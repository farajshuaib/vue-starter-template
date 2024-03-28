export default interface PagedContent<T> {
  numberOfPages: number;
  pageSize: number;
  pageNumber: number;
  pageContent: T[];
}
