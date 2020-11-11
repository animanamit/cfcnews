import React from "react";
import { Header, Image, Table } from "semantic-ui-react";

const TeamCard = props => {
  return (
    <Table.Body>
      <Table.Row>
        <Table.Cell>
          <Header textAlign="center" as="h4" image>
            <Image src={props.logo} size="mini" />
            <Header.Content>{props.name}</Header.Content>
          </Header>
        </Table.Cell>
        <Table.Cell>{props.pos}</Table.Cell>
        <Table.Cell>{props.points}</Table.Cell>
      </Table.Row>
    </Table.Body>
  );
};

export default TeamCard;
