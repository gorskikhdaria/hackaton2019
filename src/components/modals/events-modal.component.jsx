import React from 'react';


export class EventsModalComponent extends React.Component {
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

        <div className='text text--size--2xl text--view--primary text--align--left text--type--anglecia margin'>
          События
        </div>

        <div className='margin text--align--left'>
          В ленте событий будут появляться анонсы предстоящих мероприятий по твоей роли в сообществе: митапов,
          курсов, тренингов и других образовательных движух в Точке и за её пределами.
        </div>

        <div className='margin'>
          { this.props.events.map((event, index) => (
            <div className='margin' key={index}>
              <div style={{color: '#a3a2a2'}}>{event.date}</div>
              <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <span style={{fontWeight: '600'}}>{event.description}</span>
                <button className="tui-button tui-button--view--secondary tui-button--size--xs" onClick={this.openModal}>
                  Добавить в календарь
                </button>
              </div>
              <div style={{}}>Место: {event.place}</div>
            </div>
          ))}
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