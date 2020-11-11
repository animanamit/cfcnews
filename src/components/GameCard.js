import React from "react";
import { Card, Image, Grid, Header } from "semantic-ui-react";

const GameCard = props => {
  return (
    <Grid textAlign="center" padded columns={3}>
      <Grid.Column width={2}>
        <Image centered src={props.homeLogo} size="tiny" />
        <Header>{props.home}</Header>
      </Grid.Column>
      <Grid.Column padded="vertical" width={2}>
        <Header>vs</Header>
        <Header as="h5" color="grey">
          {props.venue}
        </Header>
      </Grid.Column>
      <Grid.Column width={2}>
        <Image centered src={props.awayLogo} size="tiny" />
        <Header>{props.away}</Header>
      </Grid.Column>
    </Grid>
  );
};

export default GameCard;
