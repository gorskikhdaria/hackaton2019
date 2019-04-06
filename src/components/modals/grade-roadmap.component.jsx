import React from 'react';

export class GradeRoadMapComponent extends React.Component {
  render() {
    return (
      <div style={styles}>
        <div style={circleVioletStyles} onClick={() => this.props.onSwitch('junior')}>
          <div style={label}>Junior</div>
        </div>

        <div style={lineVioletStyles}></div>

        <div style={circleVioletStyles} onClick={() => this.props.onSwitch('middle')}>
          <div style={label}>Middle</div>
        </div>

        <div style={lineGrayStyles}></div>

        <div style={circleGrayStyles} onClick={() => this.props.onSwitch('senior')}>
          <div style={label}>Senior</div>
        </div>
        <div style={verticalLine}></div>

        <div style={lineGrayStyles}></div>

        <div style={circleGrayStyles} onClick={() => this.props.onSwitch('arch')}>
          <div style={label}>Architector</div>
        </div>

        <div style={lastPoint}>

          <div style={lineGrayStyles}></div>

          <div style={circleGrayStyles} onClick={() => this.props.onSwitch('teamlead')}>
            <div style={label}>TeamLead</div>
          </div>

        </div>

      </div>
    );
  }
}

const styles = {
  margin: '80px 0 100px',
  position: 'relative'
};

const label = {
  position: 'absolute',
  top: '-35px',
  fontWeight: '500'
};

const verticalLine = {
  height: '60px',
  width: '3px',
  backgroundColor: '#cbcaca',
  display: 'inline-block',
  position: 'absolute',
  top: '20px',
  left: '409px'
};

const lastPoint = {
  position: 'absolute',
  top: '67px',
  left: '412px'
};

const circleVioletStyles = {
  height: '20px',
  width: '20px',
  backgroundColor: '#7658e0',
  borderRadius: '50%',
  display: 'inline-block',
  cursor: 'pointer',
  position: 'relative'
};

const lineVioletStyles = {
  height: '3px',
  width: '180px',
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
  cursor: 'pointer',
  position: 'relative'
};

const lineGrayStyles = {
  height: '3px',
  width: '180px',
  backgroundColor: '#cbcaca',
  display: 'inline-block',
  position: 'relative',
  bottom: '7px'
};

