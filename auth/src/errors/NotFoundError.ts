import {CustomError} from "./CustomError";

export class NotFoundError extends CustomError {
    statusCode = 404;

    constructor() {
        super('Route not found');
        Object.setPrototypeOf(this, NotFoundError.prototype);
    }

    serializeErrors() {
        return [{ message: 'Not found' }];
    }
}