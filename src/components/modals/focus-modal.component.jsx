import React from 'react';


export class FocusModalComponent extends React.Component {

  render() {
    return (
      <div style={styles}>
        <div onClick={() => this.props.onClose()} style={closeStyles}>
          <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(-464 -2396)" fill="none" fillRule="evenodd">
              <path d="M470.5858 2404l-6.293-6.2929c-.3904-.3905-.3904-1.0237 0-1.4142.3906-.3905 1.0238-.3905 1.4143 0l6.2929 6.2929 6.2929-6.293c.3905-.3904 1.0237-.3904 1.4142 0 .3905.3906.3905 1.0238 0 1.4143L473.4142 2404l6.293 6.2929c.3904.3905.3904 1.0237 0 1.4142-.3906.3905-1.0238.3905-1.4143 0L472 2405.4142l-6.2929 6.293c-.3905.3904-1.0237.3904-1.4142 0-.3905-.3906-.3905-1.0238 0-1.4143l6.2929-6.2929z" fill="#E0E0E1"/>
            </g>
          </svg>
        </div>

        <div className=''>
          <div className='text text--size--3xl text--view--primary text--align--left text--type--anglecia margin'>
            Фокусы и достижения
          </div>

          <div>
            { this.props.focuses.map((focus, index) => (
              <div style={{marginBottom: '40px'}} className='' key={index}>
                <div className='text text--size--2xl text--type--anglecia '>{focus.name}</div>
                <div className='margin-small'>{focus.description}</div>

                <div className='text text--size--l text--view--primary text--align--left text--type--anglecia'>
                  Достижения
                </div>
                <div className='margin-small'>
                  {focus.achieves.map((achieve, index) => (
                    <div key={index}>
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
      </div>
    );
  }
}

const styles = {
  padding: '20px 40px',
  position: 'relative'
};

const closeStyles = {
  position: 'absolute',
  top: '10px',
  right: '40px',
  cursor: 'pointer'
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
