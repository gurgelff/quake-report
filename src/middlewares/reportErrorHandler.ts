import { GameReportResponse } from "@src/types/Game";
import { Request, Response, NextFunction } from "express";

const gameReportErrorHandler = (error: Error, _req: Request, res: Response, next: NextFunction) => {
    if (error) {
        console.error(error);

        const gameReportErrorResponse: GameReportResponse = {
            status: "Error",
            message: error.message,
            report: {},
        };

        return res.status(500).json(gameReportErrorResponse);
    }

    next();
};

export default gameReportErrorHandler;