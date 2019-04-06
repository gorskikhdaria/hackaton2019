import React from 'react';


export class EventsWidgetComponent extends React.Component {
  render() {
    return (
      <>
        <div className='text text--size--2xl text--view--primary text--align--left text--type--anglecia margin'>
          События
        </div>
        <div className='margin'>
          { this.props.events.map((event, index) => (
            <div className='margin-small widget-half' key={index}>
              <span style={{overflow: 'hidden', textOverflow: 'ellipsis', width: '250px'}}>{event.description}</span>
              <span style={{color: '#a3a2a2'}}>{event.date}</span>
            </div>
          ))}
        </div>
      </>
    );
  }
}

const styles = {

};
