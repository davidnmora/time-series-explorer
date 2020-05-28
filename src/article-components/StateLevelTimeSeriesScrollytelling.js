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
import { YEAR_COLORS } from '../general-ui/colors'
import {
  FIRST_CASE,
  STAY_AT_HOME_ORDER,
} from '../data-viz/state-level-time-series-chart/chartAnnotations'

const STEPS_DATA = [
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
        Overall consumer spending grew between{' '}
        <ColoredText color={YEAR_COLORS['2018']}>2018</ColoredText> and{' '}
        <ColoredText color={YEAR_COLORS['2019']}>2019</ColoredText>.
      </>
    ),
  },
  {
    visibleYears: [2018, 2019, 2020],
    chartAnnotations: [FIRST_CASE],
    text: (
      <>
        But, as COVID struck in{' '}
        <ColoredText color={YEAR_COLORS['2020']}>2020</ColoredText>, Michigan
        saw unprecedented drop in spending relative to the national average.
      </>
    ),
  },
  {
    visibleYears: [2018, 2019, 2020],
    chartAnnotations: [FIRST_CASE, STAY_AT_HOME_ORDER],
    text:
      'Between March 24th and May 28th, Michigan Governor Gretchen Whitmer put in place some of the strictest stay-at-home orders in the nation, further impacting spend.',
  },
]

export const StateLevelTimeSeriesScrollytelling = ({
  stateMonthlyAveragesByYear,
}) => {
  // const supplementaryCountyData = useCartoData(
  //   dataConfig.COUNTY_TABLE,
  //   COUNTY_FIELDS_ARRAY,
  //   `WHERE  st_stusps = '${dataConfig.ABBREV_STATE_NAME}'`
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
          <StateLevelTimeSeriesChart
            data={stateMonthlyAveragesByYear}
            visibleYears={state.data.visibleYears}
            chartAnnotations={state.data.chartAnnotations}
            xLabel="Month"
            yLabel="Average total spend"
          />
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
