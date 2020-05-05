import React from 'react'

const headerStyle = {
  fontFamily: 'Rubik',
  fontWeight: '900',
  textAlign: 'center',
  fontSize: '48px',
  margin: '110px 0 10px',
}

const navStyle = {
  position: 'fixed',
  display: 'flex',
  top: 0,
  right: 0,
  zIndex: 1,
  fontFamily: 'Helvetica',
  fontSize: '20px',
  color: '#00e',
  padding: '20px',
}

const subTitleStyle = {
  margin: 0,
  fontFamily: 'Helvetica',
  textAlign: 'center',
  fontSize: '24px',
  color: '#888',
}

const ArticleHeader = () => (
  <>
    <div style={navStyle}>
      <a href="https://ruralinnovation.us/">The Center on Rural Innovation</a>
    </div>
    <p style={headerStyle}>
      Exploring change in spending in Michigan during COVID-19
    </p>
    <p style={subTitleStyle}>Scroll ↓</p>
  </>
)

export default ArticleHeader
