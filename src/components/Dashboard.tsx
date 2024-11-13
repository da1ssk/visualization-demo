// src/components/Dashboard.tsx
import React from "react"
import FunnelChart from "./FunnelChart"
import BarChart from "./BarChart"

const Dashboard: React.FC = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
    <div style={{ height: "400px" }}>
      <FunnelChart />
    </div>
    <div style={{ height: "400px" }}>
      <BarChart />
    </div>
  </div>
)

export default Dashboard
