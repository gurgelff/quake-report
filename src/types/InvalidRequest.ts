export interface InvalidRequestError extends Error{
    status: number;
    message: string;
}