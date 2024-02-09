import { getGameReport } from "@services/report";
import { NextFunction, Request, Response } from "express";

/**
 * Check if the report is ok and pass it to the next middleware through res.locals
 * @param req Express request
 * @param res Express response
 * @param next Express next function that will pass a report or an error to the error handler middleware
 */
const checkReport = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const numericID = Number(req.query.id);
    const gameID = isNaN(numericID) ? 1 : numericID;

    const gameReport = await getGameReport(gameID);
    res.locals.gameReport = gameReport;

    next();
  } catch (error) {
    next(error);
  }
};

export default checkReport;
