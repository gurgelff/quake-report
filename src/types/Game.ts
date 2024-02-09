import { Response } from "express";

export interface KillsScore {
  [username: string]: number;
}

export type KillsScoreList = KillsScore[];

export type KillData =
| { assassin: string; victim: string; killMode: string }
| null
| undefined;

export interface GameProps {
  id: number;
  total_kills: number;
  players: string[];
}

export interface GameData {
  total_kills: number;
  players: string[];
  kills: KillsScoreList;
}

export interface GameReport {
  [gameName: string]: GameData;
}

export interface BaseResponse {
  status: string;
  message: string;
}

export interface GameReportResponse extends BaseResponse {
  report: GameReport;
}

export interface CheckReportResponseObject extends Response {
  locals: {
    gameReport: GameReport;
  };
}
