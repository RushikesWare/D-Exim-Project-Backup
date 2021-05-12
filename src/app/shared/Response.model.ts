export class ResponseBase<T>{
    IsSuccess: boolean;
    Message: string;
    Data: T;
    IsNext: boolean;
    TotalRecords: number;
}