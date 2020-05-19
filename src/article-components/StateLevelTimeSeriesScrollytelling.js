import React, { useState } from 'react'
import { Scrollama, Step } from 'react-scrollama'
import {
  ScrollVizContainer,
  GraphicContainer,
  ScrollContainer,
  StepWrapper,
  StepContent,
  ColoredText,
} from '../general-ui/styles'
import { StateLevelTimeSeriesChart } from '../data-viz/state-level-time-series-chart/StateLevelTimeSeriesChart'
import config from '../config'
import { YEAR_COLORS } from '../general-ui/colors'
import { TREND_COLORS } from '../general-ui/colors'

const STEPS_DATA = [
  {
    visibleYears: [],
    text:
      "Let's explore the yearly changes in consumer spending (relative to the national average) in Michigan counties. We'll focus just on counties who's consumer spending sharply changed in 2020, relative to the national average.",
  },
  {
    visibleYears: [2018],
    text: (
      <>
        This is the overall consumer spending index across{' '}
        <ColoredText color={YEAR_COLORS['2018']}>2018</ColoredText> and from
        January to December.
      </>
    ),
  },
  {
    visibleYears: [2018, 2019],
    text: (
      <>
        Overall consumer spending changed little between{' '}
        <ColoredText color={YEAR_COLORS['2018']}>2018</ColoredText> and{' '}
        <ColoredText color={YEAR_COLORS['2019']}>2019</ColoredText>.
      </>
    ),
  },
  {
    visibleYears: [2018, 2019, 2020],
    text: (
      <>
        As COVID struck, counties saw unprecedented relative{' '}
        <ColoredText color={TREND_COLORS[config.cartoData.trends.boost]}>
          growth
        </ColoredText>{' '}
        and{' '}
        <ColoredText color={TREND_COLORS[config.cartoData.trends.plummet]}>
          decrease
        </ColoredText>
        .
      </>
    ),
  },
  {
    visibleYears: [2018, 2019, 2020],
    text: (
      <>
        Removing urban counties, we see that most relative{' '}
        <ColoredText color={TREND_COLORS[config.cartoData.trends.boost]}>
          growth
        </ColoredText>{' '}
        happened in rural counties, with two notable exceptions:{' '}
        <ColoredText color={TREND_COLORS[config.cartoData.trends.plummet]}>
          Grand Traverse & Isabella county
        </ColoredText>
        .
      </>
    ),
    ruralPercentLowerBound: 50,
  },
]

const COUNTY_FIELDS_ARRAY = Object.values(config.cartoData.COUNTY_FIELDS)

export const StateLevelTimeSeriesScrollytelling = ({
  stateMonthlyAveragesByYear,
}) => {
  // const supplementaryCountyData = useCartoData(
  //   config.cartoData.COUNTY_TABLE,
  //   COUNTY_FIELDS_ARRAY,
  //   `WHERE  st_stusps = '${config.cartoData.ABBREV_STATE_NAME}'`
  // )
  const [state, setState] = useState({ data: STEPS_DATA[0] })

  const onStepEnter = ({ element, data }) => {
    element.style.opacity = 1
    setState({ ...state, data })
  }

  const onStepExit = ({ element }) => {
    element.style.opacity = 0.7
  }

  if (!stateMonthlyAveragesByYear) return null

  return (
    <GraphicContainer>
      <ScrollContainer width="95vw">
        <ScrollVizContainer pad>
          <div>Hi, folks!</div>
          <StateLevelTimeSeriesChart data={stateMonthlyAveragesByYear} />
        </ScrollVizContainer>

        <Scrollama
          onStepEnter={onStepEnter}
          onStepExit={onStepExit}
          offset={0.7}
        >
          {STEPS_DATA.map((stepData, i) => (
            <Step data={stepData} key={i}>
              <StepWrapper>
                <StepContent>
                  <p>{stepData.text}</p>
                </StepContent>
              </StepWrapper>
            </Step>
          ))}
        </Scrollama>
      </ScrollContainer>
    </GraphicContainer>
  )
}
