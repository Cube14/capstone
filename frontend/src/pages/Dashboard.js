import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

function Dashboard() {
  const [activeUsers, setActiveUsers] = useState(0);

  useEffect(() => {
    setActiveUsers(Math.floor(Math.random() * 50) + 1);
  }, []);

  const chartData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Network Traffic",
        data: [12, 19, 8, 15, 22, 30, 18],
        borderColor: "blue",
        backgroundColor: "rgba(0,0,255,0.2)",
      },
    ],
  };

  return (
    <div className="d-flex">

      {/* SIDEBAR */}
      <div
        className="bg-dark text-white p-4"
        style={{
          width: "240px",
          height: "calc(108vh - 70px)",
          position: "sticky",
          top: "0"
        }}
>
        <h4 className="sidebar-title">IDS Panel</h4>

        <div className="list-group list-group-flush sidebar-menu">

          <button className="list-group-item list-group-item-action bg-dark text-white border-0">
            Dashboard
          </button>

          <button className="list-group-item list-group-item-action bg-dark text-white border-0">
            Network Logs
          </button>

          <button className="list-group-item list-group-item-action bg-dark text-white border-0">
            Alerts
          </button>

          <button className="list-group-item list-group-item-action bg-dark text-white border-0">
            Settings
          </button>

        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="flex-grow-1 p-4 overflow-auto">

        <h2 className="mb-4">SDN Intrusion Detection Dashboard</h2>

        {/* CARDS */}
        <div className="row mb-4">
          <div className="col-md-4">
            <div className="card shadow p-3">
              <h5>Active Users</h5>
              <h3 className="text-primary">{activeUsers}</h3>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow p-3">
              <h5>Network Status</h5>
              <p className="text-success">Active</p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow p-3">
              <h5>Intrusion Alerts</h5>
              <p className="text-danger">0 Detected</p>
            </div>
          </div>
        </div>

        {/* ALERT */}
        <div className="alert alert-warning">
          No intrusion detected. System monitoring network traffic.
        </div>

        {/* CHART */}
        <div className="card shadow p-4 mb-4">
          <h5>Network Traffic Analysis</h5>
          <Line data={chartData} />
        </div>

        {/* TABLE */}
        <div className="card shadow p-4">
          <h5>Recent Network Activity</h5>

          <table className="table table-striped mt-3">
            <thead>
              <tr>
                <th>IP Address</th>
                <th>Status</th>
                <th>Packets</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>192.168.1.1</td>
                <td className="text-success">Safe</td>
                <td>120</td>
              </tr>
              <tr>
                <td>192.168.1.15</td>
                <td className="text-warning">Suspicious</td>
                <td>560</td>
              </tr>
              <tr>
                <td>192.168.1.33</td>
                <td className="text-danger">Blocked</td>
                <td>900</td>
              </tr>
            </tbody>
          </table>

        </div>

      </div>
    </div>
  );
}

export default Dashboard;