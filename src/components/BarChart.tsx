// src/components/BarChart.tsx
import React from "react"
import { ResponsiveBar } from "@nivo/bar"
import { ResponsiveLineCanvas } from "@nivo/line"

interface BarData {
  time: string
  ClickThroughs: number
  Donations: number
  [key: string]: string | number
}

const barData: BarData[] = [
  { time: "30min", ClickThroughs: 243, Donations: 8910 },
  { time: "1hr", ClickThroughs: 198, Donations: 9120 },
  { time: "1hr 30min", ClickThroughs: 156, Donations: 7340 },
  { time: "2hr", ClickThroughs: 187, Donations: 8030 },
  { time: "2hr 30min", ClickThroughs: 142, Donations: 6450 },
  { time: "3hr", ClickThroughs: 167, Donations: 7210 },
  { time: "3hr 30min", ClickThroughs: 134, Donations: 5430 },
  { time: "4hr", ClickThroughs: 145, Donations: 6120 },
  { time: "4hr 30min", ClickThroughs: 98, Donations: 4870 },
  { time: "5hr", ClickThroughs: 123, Donations: 5340 },
  { time: "5hr 30min", ClickThroughs: 87, Donations: 4230 },
  { time: "6hr", ClickThroughs: 92, Donations: 3780 },
  { time: "6hr 30min", ClickThroughs: 76, Donations: 4120 },
  { time: "7hr", ClickThroughs: 65, Donations: 2890 },
  { time: "7hr 30min", ClickThroughs: 82, Donations: 3450 },
  { time: "8hr", ClickThroughs: 54, Donations: 2340 },
  { time: "8hr 30min", ClickThroughs: 43, Donations: 1870 },
  { time: "9hr", ClickThroughs: 38, Donations: 1560 },
  { time: "9hr 30min", ClickThroughs: 45, Donations: 1980 },
  { time: "10hr", ClickThroughs: 23, Donations: 1230 },
  { time: "10hr 30min", ClickThroughs: 18, Donations: 870 },
  { time: "11hr", ClickThroughs: 25, Donations: 920 },
  { time: "11hr 30min", ClickThroughs: 12, Donations: 450 },
  { time: "12hr", ClickThroughs: 8, Donations: 340 },
]

// Create line data format from the same data
const lineData = [
  {
    id: "ClickThroughs",
    data: barData.map((d) => ({
      x: d.time,
      y: d.ClickThroughs,
    })),
  },
]

const BarChart: React.FC = () => (
  <div style={{ position: "relative", height: "400px" }}>
    <text
      style={{
        color: "grey",
        fontSize: 18,
        fontWeight: "bold",
        textAlign: "left",
        paddingLeft: 40,
      }}
    >
      Click-throughs and donations over time
    </text>
    <ResponsiveBar
      data={barData}
      keys={["Donations"]}
      indexBy="time"
      margin={{ top: 60, right: 130, bottom: 80, left: 60 }}
      padding={0.3}
      colors={["#2196f3"]}
      borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
      axisTop={null}
      axisRight={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        format: (value) => `$${value}`,
        legend: "",
        legendPosition: "middle",
        legendOffset: 50,
      }}
      axisBottom={{
        tickSize: 0,
        tickPadding: 5,
        tickRotation: -45,
        legend: "Time after send",
        legendPosition: "middle",
        legendOffset: 62,
      }}
      theme={{
        axis: {
          legend: {
            text: {
              fontWeight: "bold",
              fontSize: 16,
            },
          },
        },
      }}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        tickRotation: 0,
        legend: "",
        legendPosition: "middle",
        legendOffset: -40,
        tickValues: [
          0,
          Math.round(Math.max(...barData.map((d) => d.Donations)) / 2),
          Math.round(Math.max(...barData.map((d) => d.Donations))),
        ],
        format: (value) =>
          Math.round(
            value *
              (Math.max(...barData.map((d) => d.ClickThroughs)) /
                Math.max(...barData.map((d) => d.Donations)))
          ),
      }}
      enableLabel={false}
      labelSkipWidth={12}
      labelSkipHeight={12}
      labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
      legends={[
        {
          dataFrom: "keys",
          anchor: "top",
          direction: "column",
          justify: false,
          translateX: -50,
          translateY: -30,
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
    />
    <div
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
    >
      <ResponsiveLineCanvas
        data={lineData}
        margin={{ top: 85, right: 155, bottom: 60, left: 85 }}
        yScale={{
          type: "linear",
          min: 0,
          max: "auto",
        }}
        curve="linear"
        axisTop={null}
        axisRight={null}
        axisBottom={null}
        axisLeft={null}
        enableGridX={false}
        enableGridY={false}
        pointSize={0}
        pointColor="#ffffff"
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        enableArea={false}
        colors={["#e41a1c"]}
        legends={[
          {
            anchor: "top",
            direction: "column",
            justify: false,
            translateX: 50,
            translateY: -33,
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
      />
    </div>
  </div>
)

export default BarChart
