// @flow

export default class ServiceError extends Error {
  code: number;

  constructor(message: string, code: number) {
    super(message);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ServiceError);
    }

    this.code = code;
  }
}
