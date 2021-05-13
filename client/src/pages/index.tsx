import { useEffect } from "react";
import { Container } from "../components/Container";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { useGetAlertsQuery } from "../generated/graphql";

const Index = () => {
  const { data, loading } = useGetAlertsQuery({ pollInterval: 1000 });

  let alerts: number = 0;

  return (
    <Container height="100vh">
      <DarkModeSwitch />
      {loading && <p>Loading...</p>}
      <ul>
        {!loading &&
          data.getAlerts.data !== null &&
          data.getAlerts.data.map((city) => {
            alerts++;
            console.log(alerts);
            <li>{city}</li>;
          })}
      </ul>
    </Container>
  );
};

export default Index;
