import React from 'react';

export class MainRoadMapComponent extends React.Component {
  render() {
    return (
      <div style={styles}>
        <div style={circleVioletStyles}></div>

        <div style={lineVioletStyles}></div>

        <div style={circleVioletStyles}></div>

        <div style={lineVioletStyles}></div>

        <div style={circleVioletStyles}></div>

        <div style={lineGrayStyles}></div>

        <div style={circleGrayStyles}></div>

        <div style={lineGrayStyles}></div>

        <div style={circleGrayStyles}></div>

        <div style={lineGrayStyles}></div>

        <div style={circleGrayStyles}></div>
      </div>
    );
  }
}

const styles = {
  margin: '60px 0'
};

const circleVioletStyles = {
  height: '20px',
  width: '20px',
  backgroundColor: '#7658e0',
  borderRadius: '50%',
  display: 'inline-block',
  cursor: 'pointer'
};

const lineVioletStyles = {
  height: '3px',
  width: '120px',
  backgroundColor: '#7658e0',
  display: 'inline-block',
  position: 'relative',
  bottom: '7px'
};

const circleGrayStyles = {
  height: '20px',
  width: '20px',
  backgroundColor: '#cbcaca',
  borderRadius: '50%',
  display: 'inline-block',
  cursor: 'pointer'
};

const lineGrayStyles = {
  height: '3px',
  width: '120px',
  backgroundColor: '#cbcaca',
  display: 'inline-block',
  position: 'relative',
  bottom: '7px'
};

