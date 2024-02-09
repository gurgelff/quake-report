import fs from "fs";
import { defaultLogPath } from "@assets";
import { KillData } from "@src/types/Game";

/**
 * Load log file from disk
 * @param logPath The absolute path to the log file
 * @returns The log file content
 */
export const loadLog = (logPath: string): Promise<string> => {
  return new Promise((resolve, reject) => {

    fs.readFile(logPath, "utf-8", (err, data) => {
      if (err) {
        console.error("Error reading file: ", err);
        reject(err);
        return;
      }

      resolve(data);
    });

  });
};

/**
 * Load the default log file from disk
 * @returns The default log file content
 */
const loadDefaultLog = async (): Promise<string> => {
  return await loadLog(defaultLogPath);  
};

/**
 * Extract kill data from a line of the log file
 * @param line A line from the log file
 * @returns 
 */
const getKillInfoFromLine = (line :string): KillData => {
  const killRegex = /Kill:.*:\s(.*)\skilled\s(.*)\sby\sMOD_(.*)/;

  if (line.length > 1000) {
    console.warn("Warning: Line length exceeds 1000 characters. Potential Regex DOS detected.");
    return null;
  }

  if (line.includes("Kill:")) {
    const killData = line.match(killRegex);
    if(!killData) return null;

    const [_, assassin, victim, killMode] = killData;
    return { assassin, victim, killMode } as KillData;
  }
}

/**
 * Extract all kill data from the log file
 * @param log The log file content
 * @returns An array of kill data
 */
export const getAllKillsInfo = async (log?: string): Promise<KillData[]> => {
  log ??= await loadDefaultLog();
  const lines = log.split("\n");

  const killsInfo: KillData[] = lines?.map(getKillInfoFromLine).filter((killData) => !!killData);
  return killsInfo;
};
