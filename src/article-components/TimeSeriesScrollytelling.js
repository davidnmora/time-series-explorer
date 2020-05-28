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
import { LineChartsWithTitle } from '../data-viz/line-chart/LineChartsWithTitle'
import { dataConfig } from '../dataConfig'
import { YEAR_COLORS } from '../general-ui/colors'
import { TREND_COLORS } from '../general-ui/colors'
import useCartoData from '../data/useCartoData'

const DATA_SUBTITLE =
  'Data is a total consumer spending index normalized against a fixed, historic, national average.'

const STEPS_DATA = [
  {
    visibleYears: [],
    text:
      "Of Michigan's 83 counties, these 30 experienced significant spending changes.",
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
        <ColoredText color={TREND_COLORS[dataConfig.trends.boost]}>
          growth
        </ColoredText>{' '}
        and{' '}
        <ColoredText color={TREND_COLORS[dataConfig.trends.plummet]}>
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
        <ColoredText color={TREND_COLORS[dataConfig.trends.boost]}>
          growth
        </ColoredText>{' '}
        happened in rural counties, with two notable exceptions:{' '}
        <ColoredText color={TREND_COLORS[dataConfig.trends.plummet]}>
          Grand Traverse & Isabella county
        </ColoredText>
        .
      </>
    ),
    ruralPercentLowerBound: 50,
  },
]

const COUNTY_FIELDS_ARRAY = Object.values(dataConfig.COUNTY_FIELDS)

export const TimeSeriesScrollytelling = ({ classes, dataByRegion }) => {
  const supplementaryCountyData = useCartoData(
    dataConfig.COUNTY_TABLE,
    COUNTY_FIELDS_ARRAY,
    `WHERE  st_stusps = '${dataConfig.ABBREV_STATE_NAME}'`
  )
  const [state, setState] = useState({ data: STEPS_DATA[0] })

  const onStepEnter = ({ element, data }) => {
    element.style.opacity = 1
    setState({ ...state, data })
  }

  const onStepExit = ({ element }) => {
    element.style.opacity = 0.7
  }

  if (!dataByRegion || ![...dataByRegion.keys()].length) return null

  return (
    <GraphicContainer>
      <ScrollContainer width="95vw">
        <ScrollVizContainer pad>
          <LineChartsWithTitle
            supplementaryCountyData={supplementaryCountyData}
            dataByRegion={dataByRegion}
            title={
              <>
                Counties that{' '}
                <ColoredText color={TREND_COLORS[dataConfig.trends.boost]}>
                  grew
                </ColoredText>{' '}
                during COVID-19
              </>
            }
            subtitle={DATA_SUBTITLE}
            trend={dataConfig.trends.boost}
            ruralPercentLowerBound={state.data.ruralPercentLowerBound}
            visibleYears={state.data.visibleYears}
          />
          <LineChartsWithTitle
            supplementaryCountyData={supplementaryCountyData}
            dataByRegion={dataByRegion}
            title={
              <>
                Counties that{' '}
                <ColoredText color={TREND_COLORS[dataConfig.trends.plummet]}>
                  decreased
                </ColoredText>{' '}
                during COVID-19
              </>
            }
            subtitle={DATA_SUBTITLE}
            trend={dataConfig.trends.plummet}
            ruralPercentLowerBound={state.data.ruralPercentLowerBound}
            visibleYears={state.data.visibleYears}
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
