import React from 'react';

export class MainRoadMapComponent extends React.Component {
  // state = {
  //   hover: false
  // };

  render() {
    return (
      <div style={styles}>
        <div style={circleVioletFirstStyles}>
          <div style={{position: 'absolute', bottom: '35px', right: '-15px', fontWeight: '500', textAlign: 'center'}}>360 декабрь</div>
        </div>

        <div style={lineVioletStyles}></div>

        <div style={circleVioletStyles}>
          <div style={{position: 'absolute', bottom: '-55px', right: '-15px', textAlign: 'center', fontWeight: '500'}}>Знаешь Swift</div>
        </div>

        <div style={lineVioletStyles}></div>

        <div style={circleVioletStyles}>
          <div style={{position: 'absolute', bottom: '35px', right: '-15px', textAlign: 'center', fontWeight: '500'}}>Курс джунам</div>
        </div>

        <div style={lineVioletStyles}></div>

        <div style={circleVioletStyles}>
          <div style={{position: 'absolute', bottom: '-55px', right: '-15px', textAlign: 'center', fontWeight: '500'}}>Твой доклад!</div>
        </div>

        <div style={lineGrayStyles}></div>

        <div style={circleGrayStyles}>
          <div style={{position: 'absolute', bottom: '35px', right: '-15px', textAlign: 'center', fontWeight: '500'}}>Звезда митапов</div>
        </div>

        <div style={lineGrayStyles}></div>

        <div style={circleGrayStyles}>
          <div style={{position: 'absolute', bottom: '-55px', right: '-15px', textAlign: 'center', fontWeight: '500'}}>Без техдолгов</div>
        </div>

        <div style={lineGrayStyles}></div>

        <div style={circleGrayStyles}>
          <div style={{position: 'absolute', bottom: '35px', right: '-15px', textAlign: 'center', fontWeight: '500'}}>Твой раздел!</div>
        </div>

        <div style={lineGrayStyles}></div>

        <div style={circleGrayLastStyles}>
          <div style={{position: 'absolute', bottom: '35px', right: '-15px', textAlign: 'center', fontWeight: '500'}}>360 май</div>
        </div>
      </div>
    );
  }
}

const styles = {
  margin: '120px 0 120px'
};

const circleVioletFirstStyles = {
  height: '30px',
  width: '30px',
  backgroundColor: '#7658e0',
  borderRadius: '50%',
  display: 'inline-block',
  cursor: 'pointer',
  position: 'relative',
  top: '4px'
};

// const hovered = {
//   height: '35px',
//   width: '35px',
// };

const circleVioletStyles = {
  height: '20px',
  width: '20px',
  backgroundColor: '#7658e0',
  borderRadius: '50%',
  display: 'inline-block',
  position: 'relative',
  cursor: 'pointer'
};

const lineVioletStyles = {
  height: '3px',
  width: '90px',
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
  position: 'relative',
  cursor: 'pointer'
};

const circleGrayLastStyles = {
  height: '30px',
  width: '30px',
  backgroundColor: '#cbcaca',
  borderRadius: '50%',
  display: 'inline-block',
  cursor: 'pointer',
  position: 'relative',
  top: '4px'
};

const lineGrayStyles = {
  height: '3px',
  width: '90px',
  backgroundColor: '#cbcaca',
  display: 'inline-block',
  position: 'relative',
  bottom: '7px'
};

