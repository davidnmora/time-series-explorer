import React, { useState } from 'react'
import injectSheet from 'react-jss'
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
    padding: '40vh 2vw 70vh',
    display: 'flex',
    fontFamily: 'Helvetica',
    justifyContent: 'space-between',
  },
  graphic: {
    flexBasis: '60%',
    position: 'sticky',
    width: '100%',
    padding: '5rem 0',
    top: '100px',
    alignSelf: 'flex-start',
    backgroundColor: '#aaa',
    '& p': {
      fontSize: '1rem',
      textAlign: 'center',
      color: '#fff',
    },
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
            offset={0.4}
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

        <div className={classes.graphic}>
          <p>{state.data && state.data.visibleYears.join(', ')}</p>
          {[...dataByRegion.keys()].splice(1, 2).map((regionId) => (
            <RegionDataSection
              key={regionId}
              visibleYears={state.data.visibleYears}
              regionDataByYear={dataByRegion.get(regionId)}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default injectSheet(styles)(ScrollytellingContainer)
