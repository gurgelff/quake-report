import { GameReportResponse } from "@src/types/Game";
import { Response } from "express";

export class Report {
  /**
   * @swagger
   * /report:
   *   get:
   *     summary: Get game report
   *     description: Get game report stats of a given match `ID`
   *     tags: [report]
   *     parameters:
   *       - in: query
   *         name: id
   *         schema:
   *           type: string
   *         description: Optional ID of the match, fallbacks to the default match if not provided
   *         required: false
   *     responses:
   *       200:
   *         description: Game report successfully retrieved
   *         content:
   *           application/json:
   *             schema: 
   *               $ref: '#/components/schemas/GameReportResponse'
   *             example:
   *               status: "Success"
   *               message: "Game report successfully retrieved"
   *               report:
   *                 "game_1":
   *                   total_kills: 200
   *                   players:
   *                     - "Top Gear"
   *                     - "Bowser"
   *                   kills:
   *                     - Top Gear: 147
   *                     - Bowser: 25
   *       500:
   *         description: Internal Server Error
   *         content:
   *           application/json:
   *             schema:
   *               type: object
   *               properties:
   *                 status:
   *                   type: string
   *                   description: The `Error` status of the response
   *                   example: "Error"
   *                 message:
   *                   type: string
   *                   description: Error message of the response
   *                   example: "Internal Server Error"
   */
  getGameReport = async (_req, res: Response): Promise<Response<GameReportResponse>> => {
    const gameReportResponse: GameReportResponse = {
        status: "Success",
        message: "Game report successfully retrieved",
        report: res.locals.gameReport
    };

    return res.json(gameReportResponse);
  };
}
