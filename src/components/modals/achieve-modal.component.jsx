import React from 'react';


export class AchieveModalComponent extends React.Component {

  render() {
    const { content } = this.props;
    return (
      <div style={styles}>
        <div onClick={() => this.props.onClose()} style={closeStyles}>
          <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(-464 -2396)" fill="none" fillRule="evenodd">
              <path d="M470.5858 2404l-6.293-6.2929c-.3904-.3905-.3904-1.0237 0-1.4142.3906-.3905 1.0238-.3905 1.4143 0l6.2929 6.2929 6.2929-6.293c.3905-.3904 1.0237-.3904 1.4142 0 .3905.3906.3905 1.0238 0 1.4143L473.4142 2404l6.293 6.2929c.3904.3905.3904 1.0237 0 1.4142-.3906.3905-1.0238.3905-1.4143 0L472 2405.4142l-6.2929 6.293c-.3905.3904-1.0237.3904-1.4142 0-.3905-.3906-.3905-1.0238 0-1.4143l6.2929-6.2929z" fill="#E0E0E1"/>
            </g>
          </svg>
        </div>

        <div className='text--align--center'>
          <div className='text text--size--2xl text--view--primary text--type--anglecia' style={{marginBottom: '10px'}}>
            {content.title}
          </div>
          <div className='text text--size--xl text--view--primary text--type--anglecia margin'>{content.focus}</div>
          <img style={{width: '60px', marginBottom: '20px'}} src={`imgs/smile-${content.smile}.png`} />
          <div style={{marginBottom: '10px'}}>{content.desc}</div>
          <div style={{textDecoration: 'underline'}}>{content.link}</div>
        </div>

      </div>
    );
  }
}

const styles = {
  padding: '40px 40px',
  position: 'relative'
};

const closeStyles = {
  position: 'absolute',
  top: '10px',
  right: '40px',
  cursor: 'pointer'
};
