import { GameReportResponse } from "@src/types/Game";
import { Response } from "express";

export class Report {
  getGameReport = async (_req, res: Response): Promise<Response<GameReportResponse>> => {
    const gameReportResponse: GameReportResponse = {
        status: "Success",
        message: "Game report successfully retrieved",
        report: res.locals.gameReport
    };

    return res.json(gameReportResponse);
  };
}
