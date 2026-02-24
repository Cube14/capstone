import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

function Dashboard() {
  const [activeUsers, setActiveUsers] = useState(0);

useEffect(() => {
  const updateData = () => {
    setActiveUsers(Math.floor(Math.random() * 50) + 1);

    const randomTraffic = Array.from({ length: 7 }, () =>
      Math.floor(Math.random() * 40) + 5
    );

    setTrafficData(randomTraffic);
  };

  updateData();
  const interval = setInterval(updateData, 50000);

  return () => clearInterval(interval);

}, []);

  const [trafficData, setTrafficData] = useState([]);
  const chartData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Network Traffic",
        data: trafficData,
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
          height: "100vh",
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
        <div className="row mb-4 g-4">

          <div className="col-md-4">
            <div className="card modern-card shadow p-4 h-100 text-center">
              <h5 className="mb-2">Active Users</h5>
              <h3 className="text-info fw-bold">{activeUsers}</h3>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card modern-card shadow p-4 h-100 text-center">
              <h5 className="mb-2">Network Status</h5>
              <h4 className="text-success fw-bold">Active</h4>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card modern-card shadow p-4 h-100 text-center">
              <h5 className="mb-2">Intrusion Alerts</h5>
              <h4 className="text-danger fw-bold">0 Detected</h4>
            </div>
          </div>

        </div>

        {/* ALERT */}
        <div className="alert alert-warning">
          No intrusion detected. System monitoring network traffic.
        </div>

        <div className="card shadow p-4 mb-4 modern-card">
          <h5 className="mb-3">Network Traffic Analysis</h5>

          <div className="chart-container">
            <Line
              data={chartData}
              options={{
                responsive: true,
                maintainAspectRatio: false,
              }}
            />
          </div>
        </div>

        {/* TABLE */}
        <div className="card shadow p-3 modern-card">
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