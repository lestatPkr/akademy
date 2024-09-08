import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ResponsiveRadar } from '@nivo/radar'
import { ResponsiveBar } from '@nivo/bar'

const playerPerformanceData = [
  {
    "id": "3f9d6f4a-7c1d-4e3b-8e0f-9f8b1d2c3e4f",
    "name": "attacking",
    "description": "Skills related to attacking abilities such as finishing and heading accuracy.",
    "attributes": [
      {
        "id": "a1b2c3d4-e5f6-4a7b-8c9d-0e1f2a3b4c5d",
        "name": "finishing",
        "value": 94
      },
      {
        "id": "b2c3d4e5-f6a7-4b8c-9d0e-1f2a3b4c5d6e",
        "name": "headingAccuracy",
        "value": 90
      },
      {
        "id": "c3d4e5f6-a7b8-4c9d-0e1f-2a3b4c5d6e7f",
        "name": "volleys",
        "value": 88
      },
      {
        "id": "d4e5f6a7-b8c9-4d0e-1f2a-3b4c5d6e7f8a",
        "name": "longShots",
        "value": 85
      },
      {
        "id": "e5f6a7b8-c9d0-4e1f-2a3b-4c5d6e7f8a9b",
        "name": "shotPower",
        "value": 91
      },
      {
        "id": "f6a7b8c9-d0e1-4f2a-3b4c-5d6e7f8a9b0c",
        "name": "attackingPositioning",
        "value": 93
      }
    ],
    "average": 90.17
  },
  {
    "id": "a7b8c9d0-e1f2-4a3b-4c5d-6e7f8a9b0c1d",
    "name": "passing",
    "description": "Skills related to passing abilities including short and long passing.",
    "attributes": [
      {
        "id": "b8c9d0e1-f2a3-4b4c-5d6e-7f8a9b0c1d2e",
        "name": "crossing",
        "value": 82
      },
      {
        "id": "c9d0e1f2-a3b4-4c5d-6e7f-8a9b0c1d2e3f",
        "name": "shortPassing",
        "value": 81
      },
      {
        "id": "d0e1f2a3-b4c5-4d6e-7f8a-9b0c1d2e3f4a",
        "name": "longPassing",
        "value": 77
      },
      {
        "id": "e1f2a3b4-c5d6-4e7f-8a9b-0c1d2e3f4a5b",
        "name": "throughBalls",
        "value": 88
      },
      {
        "id": "f2a3b4c5-d6e7-4f8a-9b0c-1d2e3f4a5b6c",
        "name": "freeKickAccuracy",
        "value": 85
      }
    ],
    "average": 82.6
  },
  {
    "id": "c1d2e3f4-g5h6-4i7j-8k9l-0m1n2o3p4q5r",
    "name": "dribbling",
    "description": "Skills related to ball control and dribbling.",
    "attributes": [
      {
        "id": "d2e3f4g5-h6i7-4j8k-9l0m-1n2o3p4q5r6s",
        "name": "dribbling",
        "value": 87
      },
      {
        "id": "e3f4g5h6-i7j8-4k9l-0m1n-2o3p4q5r6s7t",
        "name": "ballControl",
        "value": 92
      },
      {
        "id": "f4g5h6i7-j8k9-4l0m-1n2o-3p4q5r6s7t8u",
        "name": "curve",
        "value": 83
      },
      {
        "id": "g5h6i7j8-k9l0-4m1n-2o3p-4q5r6s7t8u9v",
        "name": "firstTouch",
        "value": 90
      },
      {
        "id": "h6i7j8k9-l0m1-4n2o-3p4q-5r6s7t8u9v0w",
        "name": "skillMoves",
        "value": 88
      }
    ],
    "average": 88
  },
  {
    "id": "i7j8k9l0-m1n2-4o3p-4q5r-6s7t8u9v0w1x",
    "name": "defending",
    "description": "Skills related to defensive abilities such as tackling and marking.",
    "attributes": [
      {
        "id": "j8k9l0m1-n2o3-4p4q-5r6s-7t8u9v0w1x2y",
        "name": "marking",
        "value": 32
      },
      {
        "id": "k9l0m1n2-o3p4-4q5r-6s7t-8u9v0w1x2y3z",
        "name": "standingTackle",
        "value": 35
      },
      {
        "id": "l0m1n2o3-p4q5-4r6s-7t8u-9v0w1x2y3z4a",
        "name": "slidingTackle",
        "value": 30
      },
      {
        "id": "m1n2o3p4-q5r6-4s7t-8u9v-0w1x2y3z4a5b",
        "name": "interceptions",
        "value": 28
      },
      {
        "id": "n2o3p4q5-r6s7-4t8u-9v0w-1x2y3z4a5b6c",
        "name": "defensiveAwareness",
        "value": 34
      },
      {
        "id": "o3p4q5r6-s7t8-4u9v-0w1x-2y3z4a5b6c7d",
        "name": "blockingAbility",
        "value": 33
      }
    ],
    "average": 32
  },
  {
    "id": "p4q5r6s7-t8u9-4v0w-1x2y-3z4a5b6c7d8e",
    "name": "physical",
    "description": "Physical attributes including speed, strength, and stamina.",
    "attributes": [
      {
        "id": "q5r6s7t8-u9v0-4w1x-2y3z-4a5b6c7d8e9f",
        "name": "acceleration",
        "value": 87
      },
      {
        "id": "r6s7t8u9-v0w1-4x2y-3z4a-5b6c7d8e9f0g",
        "name": "sprintSpeed",
        "value": 89
      },
      {
        "id": "s7t8u9v0-w1x2-4y3z-4a5b-6c7d8e9f0g1h",
        "name": "agility",
        "value": 85
      },
      {
        "id": "t8u9v0w1-x2y3-4z4a-5b6c-7d8e9f0g1h2i",
        "name": "balance",
        "value": 74
      },
      {
        "id": "u9v0w1x2-y3z4-4a5b-6c7d-8e9f0g1h2i3j",
        "name": "jumping",
        "value": 95
      },
      {
        "id": "v0w1x2y3-z4a5-4b6c-7d8e-9f0g1h2i3j4k",
        "name": "stamina",
        "value": 81
      },
      {
        "id": "w1x2y3z4-a5b6-4c7d-8e9f-0g1h2i3j4k5l",
        "name": "strength",
        "value": 84
      },
      {
        "id": "x2y3z4a5-b6c7-4d8e-9f0g-1h2i3j4k5l6m",
        "name": "endurance",
        "value": 83
      },
      {
        "id": "y3z4a5b6-c7d8-4e9f-0g1h-2i3j4k5l6m7n",
        "name": "flexibility",
        "value": 86
      }
    ],
    "average": 84.89
  },
  {
    "id": "z4a5b6c7-d8e9-4f0g-1h2i-3j4k5l6m7n8o",
    "name": "mental",
    "description": "Mental attributes including aggression, positioning, and composure.",
    "attributes": [
      {
        "id": "a5b6c7d8-e9f0-4g1h-2i3j-4k5l6m7n8o9p",
        "name": "aggression",
        "value": 63
      },
      {
        "id": "b6c7d8e9-f0g1-4h2i-3j4k-5l6m7n8o9p0q",
        "name": "positioning",
        "value": 94
      },
      {
        "id": "c7d8e9f0-g1h2-4i3j-4k5l-6m7n8o9p0q1r",
        "name": "vision",
        "value": 82
      },
      {
        "id": "d8e9f0g1-h2i3-4j4k-5l6m-7n8o9p0q1r2s",
        "name": "composure",
        "value": 89
      },
      {
        "id": "e9f0g1h2-i3j4-4k5l-6m7n-8o9p0q1r2s3t",
        "name": "reactions",
        "value": 92
      },
      {
        "id": "f0g1h2i3-j4k5-4l6m-7n8o-9p0q1r2s3t4u",
        "name": "decisionMaking",
        "value": 88
      },
      {
        "id": "g1h2i3j4-k5l6-4m7n-8o9p-0q1r2s3t4u5v",
        "name": "leadership",
        "value": 85
      }
    ],
    "average": 84.71
  }
]

export default function PlayerPerformanceProfile() {
  const [selectedCategory, setSelectedCategory] = useState(playerPerformanceData[0].name)

  const radarData = playerPerformanceData.map(category => ({
    category: category.name,
    value: category.average
  }))

  const selectedCategoryData = playerPerformanceData.find(category => category.name === selectedCategory)

  return (
    <div className="container mx-auto p-4">
    
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Overall Performance</CardTitle>
          </CardHeader>
          <CardContent className="h-[400px]">
            <ResponsiveRadar
              data={radarData}
              keys={['value']}
              indexBy="category"
              maxValue={100}
              margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
              borderColor={{ from: 'color' }}
              gridLabelOffset={36}
              dotSize={10}
              dotColor={{ theme: 'background' }}
              dotBorderWidth={2}
              colors={{ scheme: 'nivo' }}
              blendMode="multiply"
              motionConfig="wobbly"
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Category Breakdown</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs value={selectedCategory} onValueChange={setSelectedCategory}>
              <TabsList className="grid grid-cols-3 gap-2 mb-4">
                {playerPerformanceData.map(category => (
                  <TabsTrigger key={category.id} value={category.name} className="capitalize">
                    {category.name}
                  </TabsTrigger>
                ))}
              </TabsList>
              {playerPerformanceData.map(category => (
                <TabsContent key={category.id} value={category.name}>
                  <p className="mb-4">{category.description}</p>
                  <div className="h-[300px]">
                    <ResponsiveBar
                      data={category.attributes}
                      keys={['value']}
                      indexBy="name"
                      margin={{ top: 50, right: 60, bottom: 50, left: 60 }}
                      padding={0.3}
                      valueScale={{ type: 'linear' }}
                      indexScale={{ type: 'band', round: true }}
                      colors={{ scheme: 'nivo' }}
                      axisBottom={{
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: -45,
                        legend: 'Attribute',
                        legendPosition: 'middle',
                        legendOffset: 40
                      }}
                      axisLeft={{
                        tickSize: 5,
                        tickPadding: 5,
                        tickRotation: 0,
                        legend: 'Value',
                        legendPosition: 'middle',
                        legendOffset: -40
                      }}
                      labelSkipWidth={12}
                      labelSkipHeight={12}
                      labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
                      animate={true}
                      motionConfig="gentle"
                    />
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </CardContent>
        </Card>
      </div>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Detailed Attributes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {selectedCategoryData?.attributes.map(attribute => (
              <div key={attribute.id} className="bg-gray-100 p-4 rounded-lg">
                <h3 className="font-semibold mb-2 capitalize">{attribute.name}</h3>
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${attribute.value}%` }}></div>
                </div>
                <p className="text-right mt-1">{attribute.value}/100</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}