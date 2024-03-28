export enum CoreResponseType {
    Success = 1,
    BadRequest = 2,
    ServerError = 3,
}

export default interface CoreResponseDto<T> {
    type: CoreResponseType;
    traceId: string;
    content: T;
    message: string;
}

