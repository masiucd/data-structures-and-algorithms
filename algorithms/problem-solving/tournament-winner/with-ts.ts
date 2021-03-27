const getLastElementInList = <T>(xs: Array<T>) => xs[xs.length - 1];
// Brute force solution
// 1 home team win
// 0 away team win
export function tournamentWinner(competitions: string[][], results: number[]) {
  const map: Map<string, number> = new Map();
  const winnersList = [];
  for (const [index, teams] of competitions.entries()) {
    const [home, away] = teams;
    if (results[index] === 0) {
      // push in the away team
      winnersList.push(away);
    } else {
      // push in the home team
      winnersList.push(home);
    }
  }

  for (const winner of winnersList) {
    const timesWinning = map.get(winner) ?? 0;
    if (!map.has(winner)) {
      map.set(winner, 1);
    } else {
      map.set(winner, timesWinning + 1);
    }
  }

  let max = 0;
  for (const val of map.values()) {
    if (max < val) {
      max = val;
    }
  }

  for (const key of map.keys()) {
    if (map.get(key) === max) {
      return key;
    }
  }
  return "";
}

// ****************** solution 2**************
const WINNING_TEAM = 1;
export function tournamentWinner2(competitions: string[][], results: number[]) {
  const scores: Record<string, number> = {};
  for (const [i, team] of competitions.entries()) {
    const result = results[i];
    const [home, away] = team;
    const winningTeam = result === WINNING_TEAM ? home : away;

    if (!scores[winningTeam]) {
      scores[winningTeam] = 1;
    } else {
      scores[winningTeam]++;
    }
  }

  const sortable = Object.entries(scores).sort(([, a], [, b]) => a - b);
  return getLastElementInList(sortable)[0];
}

function sortObj(record: Record<string, number>) {
  return Object.entries(record)
    .sort(([, a], [, b]) => a - b)
    .reduce((obj, [k, v]) => ({ ...obj, [k]: v }), []);
}
