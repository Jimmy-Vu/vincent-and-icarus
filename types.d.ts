export interface TypedRequestBody<T> extends Express.Request {
  body: T
}
export interface Response {
  user: any;
}
export interface Error {
  status: number;
  message: string;
}
