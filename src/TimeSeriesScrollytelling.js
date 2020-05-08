import React, { useState } from 'react'
import injectSheet from 'react-jss'
import { ScrollVizContainer, LineChartSection, Subtitle } from './styles'
import { Scrollama, Step } from 'react-scrollama'
import RegionDataSection from './data-viz/RegionDataSection'
import { COVID_FIELDS, TRENDS } from './useCartoData'

const STEPS_DATA = [
  {
    visibleYears: [2018, 2019],
    text: 'Spending was fairly similar across 2018 and 2019',
  },
  {
    visibleYears: [2018, 2019, 2020],
    text: 'But COVID changed things.',
  },
  {
    visibleYears: [2018, 2019, 2020],
    text: 'Particularly for rural areas (urban are faded out)',
    ruralPercentLowerBound: 50,
  },
]

const styles = {
  graphicContainer: {
    // padding: '40vh 2vw 70vh',
    display: 'flex',
    fontFamily: 'Rubik',
    justifyContent: 'space-between',
  },
  scroller: {
    flexBasis: '35%',
  },
  step: {
    margin: '0 auto 2rem auto',
    paddingTop: 200,
    paddingBottom: 200,
    border: '1px solid #333',
    '& p': {
      textAlign: 'center',
      padding: '1rem',
      fontSize: '1.5rem',
    },
    '&:last-child': {
      marginBottom: 0,
    },
  },
}

const TimeSeriesScrollytelling = ({ classes, dataByRegion }) => {
  const [state, setState] = useState({ data: STEPS_DATA[0] })
  const [progress, setProgress] = useState(0)

  const onStepEnter = ({ element, data }) => {
    element.style.backgroundColor = 'lightgoldenrodyellow'
    setState({ ...state, data })
  }

  const onStepExit = ({ element }) => {
    element.style.backgroundColor = '#fff'
  }

  const onStepProgress = ({ element, progress }) => {
    setProgress(progress)
  }

  if (![...dataByRegion.keys()].length) return null

  return (
    <div>
      <div className={classes.graphicContainer}>
        <div className={classes.scroller}>
          <Scrollama
            onStepEnter={onStepEnter}
            onStepExit={onStepExit}
            progress
            onStepProgress={onStepProgress}
            offset={0.5}
          >
            {STEPS_DATA.map((stepData, i) => (
              <Step data={stepData} key={i}>
                <div className={classes.step}>
                  <p>{stepData.text}</p>
                  {stepData === state.data && (
                    <p>{Math.round(progress * 100)}%</p>
                  )}
                </div>
              </Step>
            ))}
          </Scrollama>
        </div>

        <ScrollVizContainer>
          {/*TODO: abstract these into their own components*/}
          <div>
            <Subtitle>Counties that grew during COVID</Subtitle>
            <LineChartSection>
              {dataByRegionFilter(
                dataByRegion,
                COVID_FIELDS.TOTAL_SPEND_COVID_TREND,
                TRENDS.boost
              ).map((regionId) => (
                <RegionDataSection
                  key={regionId}
                  visibleYears={state.data.visibleYears}
                  regionDataByYear={dataByRegion.get(regionId)}
                  ruralPercentLowerBound={
                    state.data.ruralPercentLowerBound || 0
                  }
                />
              ))}
            </LineChartSection>
          </div>
          <div>
            <Subtitle>Counties that decreased during COVID</Subtitle>
            <LineChartSection>
              {dataByRegionFilter(
                dataByRegion,
                COVID_FIELDS.TOTAL_SPEND_COVID_TREND,
                TRENDS.plummet
              ).map((regionId) => (
                <RegionDataSection
                  key={regionId}
                  visibleYears={state.data.visibleYears}
                  regionDataByYear={dataByRegion.get(regionId)}
                  ruralPercentLowerBound={
                    state.data.ruralPercentLowerBound || 0
                  }
                />
              ))}
            </LineChartSection>
          </div>
        </ScrollVizContainer>
      </div>
    </div>
  )
}

const dataByRegionFilter = (dataByRegion, filterField, match) =>
  [...dataByRegion.keys()].filter(
    (regionId) => dataByRegion.get(regionId).get(2020)[0][filterField] === match
  )

export default injectSheet(styles)(TimeSeriesScrollytelling)
