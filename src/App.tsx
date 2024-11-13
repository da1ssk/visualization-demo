// src/App.tsx
import React from "react"
import Dashboard from "./components/Dashboard"

const App: React.FC = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Nivo Visualization Demo</h1>
      <Dashboard />
    </div>
  )
}

export default App
