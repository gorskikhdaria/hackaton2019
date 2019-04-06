import React from 'react';


export class EventsWidgetComponent extends React.Component {
  render() {
    const events = [
      {
        description: 'Онлайн-курс по архитектуре MVVM под iOS на Swift',
        date: '08 апреля'
      },
      {
        description: 'Митап в Точке «iOS the best»',
        date: '12 апреля'
      },
      {
        description: 'Обучение по холакратии',
        date: '20 апреля'
      },
      {
        description: 'Тренинг: «Разработка, анимация, размещение в App Store»',
        date: '13 мая'
      },
      {
        description: 'Обучение по безопасности',
        date: '25 мая'
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
