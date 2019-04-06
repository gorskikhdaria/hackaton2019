import React from 'react';


export class FocusWidgetComponent extends React.Component {
  render() {

    return (
      <div className=''>
        <div className='text text--size--2xl text--view--primary text--align--left text--type--anglecia margin'>
          Фокусы и достижения
        </div>
        <div style={{marginBottom: '15px'}}>Выполнено 3 из 6 достижений в 4 фокусах</div>
        <div style={{display: 'flex', marginBottom: '15px'}} className='text text--size--m text--type--anglecia'>
          <div style={column}>Фокус</div>
          <div style={column}>Достижения</div>
        </div>
        <div>
          { this.props.focuses.map((focus, index) => (
            <div style={row} className='' key={index}>
              <div style={column}>{focus.name}</div>
              <div>
                {focus.achieves.map((achieve, index) => (
                  <div>
                    { achieve.done && <div style={done}>
                      <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30"><defs><style></style></defs><path d="M24.9,4.5,12.3,17.86,5.1,10.23,1.5,14,12.3,25.5,28.5,8.32Z"/></svg>
                    </div>}
                    <span key={index} style={achieve.done ? achieved : {}}>{achieve.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const row = {
  display: 'flex',
  padding: '10px 0',
  borderBottom: '1px solid #f4f4f4'
};

const column = {
  width: '350px',
  display: 'inline-block'
};

const achieved = {
  color: 'rgb(118, 88, 224)',
  fontWeight: '500'
};

const done = {
  width: '10px',
  height: '10px',
  display: 'inline-block',
  marginRight: '10px'
};
