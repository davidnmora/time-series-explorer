import React, { PureComponent } from 'react'
import injectSheet from 'react-jss'
import { Scrollama, Step } from 'react-scrollama'
import LineChart, { YEAR_COLORS } from './data-viz/LineChart'

const YEARS = Object.keys(YEAR_COLORS).map((year) => +year)

const styles = {
  navbar: {
    position: 'fixed',
    display: 'flex',
    top: 0,
    right: 0,
    zIndex: 1,
    '& a': {
      display: 'block',
      fontFamily: 'Helvetica',
      fontSize: '20px',
      color: '#00e',
      padding: '20px',
    },
  },
  pageTitle: {
    fontFamily: 'Helvetica',
    textAlign: 'center',
    fontSize: '30px',
    margin: '110px 0 10px',
    '& a': {
      color: '#00e',
    },
  },
  pageSubtitle: {
    margin: 0,
    fontFamily: 'Helvetica',
    textAlign: 'center',
    fontSize: '24px',
    color: '#888',
  },
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
    top: '160px',
    alignSelf: 'flex-start',
    backgroundColor: '#aaa',
    '& p': {
      fontSize: '5rem',
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

class ScrollytellingContainer extends PureComponent {
  state = {
    data: 0,
    progress: 0,
  }

  onStepEnter = ({ element, data }) => {
    element.style.backgroundColor = 'lightgoldenrodyellow'
    this.setState({ data })
  }

  onStepExit = ({ element }) => {
    element.style.backgroundColor = '#fff'
  }

  onStepProgress = ({ element, progress }) => {
    this.setState({ progress })
  }

  render() {
    const { data, steps, progress } = this.state
    const { classes, regionData } = this.props

    return (
      <div>
        <div className={classes.navbar}>
          <a href="https://github.com/jsonkao/react-scrollama">GitHub</a>
        </div>
        <p className={classes.pageTitle}>
          <a href="https://github.com/jsonkao/react-scrollama">
            React Scrollama
          </a>{' '}
          Example
        </p>
        <p className={classes.pageSubtitle}>Scroll ↓</p>
        <div className={classes.graphicContainer}>
          <div className={classes.scroller}>
            <Scrollama
              onStepEnter={this.onStepEnter}
              onStepExit={this.onStepExit}
              progress
              onStepProgress={this.onStepProgress}
              offset={0.4}
              debug
            >
              {YEARS.map((year) => (
                <Step data={year} key={year}>
                  <div className={classes.step}>
                    <p>step year: {year}</p>
                    {year === data && <p>{Math.round(progress * 100)}%</p>}
                  </div>
                </Step>
              ))}
            </Scrollama>
          </div>
          <div className={classes.graphic}>
            <p>{data}</p>
            {[...regionData.keys()].splice(0, 2).map((regionId) => (
              <LineChart
                key={regionId}
                visibleYears={[data]}
                regionYearData={regionData.get(regionId)}
              />
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default injectSheet(styles)(ScrollytellingContainer)
