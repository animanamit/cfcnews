import React, { useState, useEffect } from "react";
import { getStandings } from "../services/getStandings";
import TeamCard from "./TeamCard";
import { Table, Header } from "semantic-ui-react";

const Standings = () => {
  const [standings, setStandings] = useState([]);

  const loading = false;

  useEffect(() => {
    // using an async await to allow the data to load
    // keeping the async await function inside useEffect and then invoking it straight away
    const fetchStandings = async () => {
      const data = await getStandings();
      console.log(data.api.standings[0]);
      setStandings(data.api.standings[0]);
    };
    fetchStandings();
  }, []);

  const table = standings.map(team => {
    return (
      <TeamCard
        key={team.team_id}
        name={team.teamName}
        logo={team.logo}
        form={team.forme}
        pos={team.rank}
        points={team.points}
      />
    );
  });

  return (
    <>
      <Header as="h2" textAlign="center">
        Table
      </Header>
      <div className="leaguetable">
        <Table collapsing size="small" celled>
          <Table.Row>
            <Table.Cell>
              {/* <Header textAlign="center" as="h4" image> */}
              NAME
              {/* </Header> */}
            </Table.Cell>
            <Table.Cell>POSITION</Table.Cell>
            <Table.Cell>POINTS</Table.Cell>
          </Table.Row>
          {loading ? <p>Loading items</p> : table}
        </Table>
      </div>
    </>
  );
};

export default Standings;
