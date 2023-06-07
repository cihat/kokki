import MessageResponse from './MessageResponse';

export default interface ErrorResponse extends MessageResponse {
  stack?: string;
}

export interface ErrorType extends ErrorResponse {
  status: number
  message: string
}