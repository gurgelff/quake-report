/**
 * Quake Player
 * @property {string} username - The username of the player
 * @method {number} getScore - Returns the score of the player based on the kills and deaths
 * @method {string} toString - Returns the string representation of the player
 * @example
 * const player = new Player('Top Gear');
 * player.getUsername(); // Top Gear
 * player.getScore(); // 0
 * player.incrementKills();
 * player.toString(); // Player: Top Gear, Score: 1
 */
class Player {
  private username: string;
  private kills_count: number;
  private deaths_by_wolrd: number;

  constructor(username: string) {
    this.username = username;
    this.kills_count = 0;
    this.deaths_by_wolrd = 0;
  }

  getUsername(): string {
    return this.username;
  }

  setUsername(username: string) {
    this.username = username;
  }

  /**
   * Get the score of the player based on the kills and deaths by world
   * @returns {number} - The score of the player based on those criteria
   */
  getScore(): number {
    return this.kills_count - this.deaths_by_wolrd;
  }

  incrementKills() {
    this.kills_count++;
  }

  incrementDeathsByWorld() {
    this.deaths_by_wolrd++;
  }

  toString() {
    return `Player: ${this.username}, Score: ${this.getScore()}`;
  }
}

export default Player;
