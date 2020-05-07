import React, { useState } from 'react'
import injectSheet from 'react-jss'
import { ScrollVizContainer } from './styles'
import { Scrollama, Step } from 'react-scrollama'
import RegionDataSection from './data-viz/RegionDataSection'

const STEPS_DATA = [
  { visibleYears: [] },
  {
    visibleYears: [2018],
  },
  {
    visibleYears: [2018, 2019],
  },
  {
    visibleYears: [2018, 2019, 2020],
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

const ScrollytellingContainer = ({ classes, dataByRegion }) => {
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
            offset={0.6}
            debug
          >
            {STEPS_DATA.map((stepData, i) => (
              <Step data={stepData} key={i}>
                <div className={classes.step}>
                  <p>Here's the data from {stepData.visibleYears.join(', ')}</p>
                  {stepData === state.data && (
                    <p>{Math.round(progress * 100)}%</p>
                  )}
                </div>
              </Step>
            ))}
          </Scrollama>
        </div>

        <ScrollVizContainer>
          {[...dataByRegion.keys()].splice(1, 200).map((regionId) => (
            <RegionDataSection
              key={regionId}
              visibleYears={state.data.visibleYears}
              regionDataByYear={dataByRegion.get(regionId)}
            />
          ))}
        </ScrollVizContainer>
      </div>
    </div>
  )
}

export default injectSheet(styles)(ScrollytellingContainer)
