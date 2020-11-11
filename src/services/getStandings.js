// kept the async part of the function directly inside the useEffect hook instead of here
// had trouble exporting this as an arrow function however
export function getStandings() {
  return fetch("https://v2.api-football.com/leagueTable/2790", {
    headers: {
      "x-rapidapi-host": "https://v2.api-football.com/",
      "x-rapidapi-key": "2515190a1e55c446a077ec4d2fafe848"
    },
    method: "GET"
  }).then(response => response.json());
}
