// src/components/BarChart.tsx
import React from "react"
import { ResponsiveBar } from "@nivo/bar"

interface BarData {
  time: string
  ClickThroughs: number
  Donations: number
  [key: string]: string | number
}

const barData: BarData[] = [
  { time: "30min", ClickThroughs: 200, Donations: 1000 },
  { time: "1hr", ClickThroughs: 180, Donations: 900 },
  { time: "2hr", ClickThroughs: 150, Donations: 750 },
  // Continue with your data points...
]

const BarChart: React.FC = () => (
  <ResponsiveBar
    data={barData}
    keys={["ClickThroughs", "Donations"]}
    indexBy="time"
    margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
    padding={0.3}
    colors={{ scheme: "set1" }}
    borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
    axisTop={null}
    axisRight={null}
    axisBottom={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "Time after send",
      legendPosition: "middle",
      legendOffset: 32,
    }}
    axisLeft={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "Counts",
      legendPosition: "middle",
      legendOffset: -40,
    }}
    labelSkipWidth={12}
    labelSkipHeight={12}
    labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
    legends={[
      {
        dataFrom: "keys",
        anchor: "bottom-right",
        direction: "column",
        justify: false,
        translateX: 120,
        translateY: 0,
        itemsSpacing: 2,
        itemWidth: 100,
        itemHeight: 20,
        itemDirection: "left-to-right",
        itemOpacity: 0.85,
        symbolSize: 20,
        effects: [
          {
            on: "hover",
            style: {
              itemOpacity: 1,
            },
          },
        ],
      },
    ]}
    animate={true}
    motionConfig="wobbly"
  />
)

export default BarChart
