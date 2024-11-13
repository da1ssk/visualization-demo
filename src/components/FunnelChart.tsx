// src/components/FunnelChart.tsx
import React from "react"
import { ResponsiveFunnel } from "@nivo/funnel"

interface FunnelData {
  id: string
  value: number
}

const data: FunnelData[] = [
  { id: "Targeted Recipients", value: 447942 },
  { id: "Unique Messages Sent", value: 445320 },
  { id: "Delivered Messages", value: 212490 },
  { id: "Unique Clicks", value: 27071 },
  { id: "Donations", value: 1094 },
]

const FunnelChart: React.FC = () => (
  <ResponsiveFunnel
    data={data}
    direction="horizontal"
    shapeBlending={0}
    fillOpacity={0.7}
    spacing={20}
    enableLabel={true}
    labelColor={{ from: "color", modifiers: [["darker", 3]] }}
    margin={{ top: 20, right: 20, bottom: 0, left: 20 }}
    valueFormat=">-,"
    colors={{ scheme: "red_yellow_green" }}
    borderWidth={0}
    beforeSeparatorLength={80}
    beforeSeparatorOffset={20}
    afterSeparatorLength={0}
    afterSeparatorOffset={0}
    currentPartSizeExtension={20}
    currentBorderWidth={0}
    motionConfig="wobbly"
    layers={[
      "parts",
      "separators",
      ({ parts }) => (
        <g>
          {parts.map((part) => (
            <>
              <text
                key={part.data.id}
                x={part.x - part.width / 2}
                y={part.y - 210}
                textAnchor="left"
                style={{ fill: "grey", fontSize: "14px" }}
              >
                {part.data.id}
              </text>
              <text
                key={part.data.id}
                x={part.x - part.width / 2}
                y={part.y - 180}
                textAnchor="left"
                style={{ fill: "black", fontWeight: "bold", fontSize: "20px" }}
              >
                {new Intl.NumberFormat().format(part.data.value)}
              </text>
            </>
          ))}
        </g>
      ),
    ]}
  />
)

export default FunnelChart
