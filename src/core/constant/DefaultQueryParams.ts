export interface IDefaultQueryParams {
  pageNumber: number | undefined;
  pageSize: number | undefined;
  [key: string]: string | number | undefined;
}

export const DefaultQueryParams: IDefaultQueryParams = {
  pageNumber: 1,
  pageSize: 10,
};
