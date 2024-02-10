import { NextFunction, Request, Response } from "express";
import { InvalidRequestError } from "@src/types/InvalidRequest";

/**
 * Handle invalid requests
 */
const invalidRequestHandler = (error: InvalidRequestError, _req: Request, res: Response, next: NextFunction) => {
    if (error) {
        console.error(error);

        return res.status(error.status).json({
            status: "Error",
            message: `An error occured while processing your request: ${error.message}`,
        });
    }

    next();
}

export default invalidRequestHandler;
