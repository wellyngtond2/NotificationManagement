export interface OperationResponseInterface<T> {
  data: T;
  message: string;
  isSuccess: boolean;
  pageNumber?: number;
  totalRegisters?: number;
}