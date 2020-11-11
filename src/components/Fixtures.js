import React, { useState, useEffect } from "react";
import { getFixtures } from "../services/getFixtures";
import GameCard from "./GameCard";
import { Card, Header, Grid } from "semantic-ui-react";

const Fixtures = () => {
  const [fixtures, setFixtures] = useState([]);

  //   const [showFixtures, setShowFixtures] = useState(false);

  let showFixtures = true;
  const setShowFixtures = () => {
    showFixtures = !showFixtures;
    console.log(showFixtures);
  };

  useEffect(() => {
    getFixtures().then(data => {
      console.log(data.api.fixtures);
      setFixtures(data.api.fixtures);
    });
  }, []);

  const matches = fixtures.map(game => {
    return (
      <Grid.Row>
        <GameCard
          key={game.fixture_id}
          awayLogo={game.awayTeam.logo}
          homeLogo={game.homeTeam.logo}
          venue={game.venue}
          away={game.awayTeam.team_name}
          home={game.homeTeam.team_name}
        />
      </Grid.Row>
    );
  });
  return (
    <div>
      <Header as="h2" icon textAlign="center" onClick={setShowFixtures}>
        Fixtures
      </Header>
      <Grid padded columns={1}>
        {matches}
      </Grid>
    </div>
  );
};

export default Fixtures;
