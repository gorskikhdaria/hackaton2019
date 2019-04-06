import React from 'react';


export class EventsWidgetComponent extends React.Component {
  render() {
    const events = [
      {
        description: 'Митап',
        date: '20.04.2019'
      },
      {
        description: 'Митап',
        date: '20.04.2019'
      },
      {
        description: 'Митап',
        date: '20.04.2019'
      },
      {
        description: 'Митап',
        date: '20.04.2019'
      },
      {
        description: 'Митап',
        date: '20.04.2019'
      }
    ];

    return (
      <>
        <div className='text text--size--2xl text--view--primary text--align--left text--type--anglecia margin'>
          События
        </div>
        <div className='margin'>
          { events.map((event, index) => (
            <div className='margin-small widget-half' key={index}>
              <span>{event.description}</span>
              <span>{event.date}</span>
            </div>
          ))}
        </div>
      </>
    );
  }
}

const styles = {

};
