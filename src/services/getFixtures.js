export function getFixtures() {
  return fetch("https://v2.api-football.com/fixtures/team/49/next/5", {
    headers: {
      "x-rapidapi-host": "https://v2.api-football.com/",
      "x-rapidapi-key": "2515190a1e55c446a077ec4d2fafe848"
    },
    method: "GET"
  }).then(response => response.json());
}
