import React from 'react';


export class FocusWidgetComponent extends React.Component {
  render() {
    const focuses = [
      {
        description: 'Пройти продвинутый курс по Kotlin'
      },
      {
        description: 'Пройти продвинутый курс по Kotlin'
      },
      {
        description: 'Пройти продвинутый курс по Kotlin'
      },
      {
        description: 'Пройти продвинутый курс по Kotlin'
      },
      {
        description: 'Пройти продвинутый курс по Kotlin'
      }
    ];
    return (
      <div className=''>
        <div className='text text--size--2xl text--view--primary text--align--left text--type--anglecia margin'>
          Фокусы
        </div>
        <div className='magrin'>
          { focuses.map((focus, index) => (
            <div className='magrin-small widget-half' key={index}>
              <span>{focus.description}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const styles = {

};
