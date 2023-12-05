import { useQuery } from "react-query";
import { Table } from "../Components/Table";

const Dashboard = () => {
  const { data, isLoading } = useQuery(
    ["userData"],
    async () =>
      await (
        await fetch("https://assets.alippo.com/catalog/static/data.json")
      ).json()
  );

  return (
    <div className="dashboardTable">
      <div>
        <div className="userDash">
          <h4>🧞‍♂️User Dashboard🧞</h4>
        </div>
        {isLoading ? <h4>Loading...</h4> : data && <Table users={data} />}
      </div>
    </div>
  );
};

export default Dashboard;
