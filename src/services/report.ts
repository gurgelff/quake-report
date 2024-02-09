import Game from "@models/Game";
import Player from "@models/Player";
import { getAllKillsInfo } from "@services/logParser";
import { GameData, GameReport, KillData } from "@src/types/Game";

/**
 * Get all usernames from the kill data leveraging a Set to avoid duplicates
 * @param usernames The set of usernames
 * @param allKillsData The array of all kill data
 * @returns An array of unique usernames
 */
const getUsernames = (usernames: Set<string>, allKillsData: KillData[]): string[] => {

  for (const killData of allKillsData) {
    if (killData) {
      usernames.add(killData.assassin);
      usernames.add(killData.victim);
    }
  }

  return Array.from(usernames);
}

const computePlayersKills = (game: Game, playerByUsername: Map<string, Player>, killData: KillData): void => {
  if (!killData) return;
  game.incrementTotalKills();

  const { assassin, victim } = killData;
  const assassinPlayer = playerByUsername.get(assassin);
  const victimPlayer = playerByUsername.get(victim);

  assassinPlayer?.incrementKills();

  if (assassin === "<world>") {
    victimPlayer?.incrementDeathsByWorld();
  }
}

/**
 * Get game report with the relevetant stats
 * @param id The number that will compose the game name
 * @param log The log file content
 * @returns The game report ready to be sent through the API
 */
export const getGameReport = async (id: number, log?: string): Promise<GameReport> => {
  const allKillsData = await getAllKillsInfo(log);
  const usernames = getUsernames(new Set(), allKillsData);

  const players = usernames.map((username) => new Player(username));
  const playerByUsername: Map<string, Player> = new Map(
    players.map((player) => [player.getUsername(), player])
  );

  const game = new Game({
    id,
    total_kills: 0,
    players: usernames,
  });

  allKillsData.map((killData) => computePlayersKills(game, playerByUsername, killData));

  const gameData: GameData = {
    total_kills: game.getTotalKills(),
    players: game.getPlayersUsernames(),
    kills: game.getKillsScoreList(players),
  };
  
  return { [game.getGameName()]: gameData };
};
