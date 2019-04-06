import React from 'react';

export class MiddleDescriptionComponent extends React.Component {

  render() {
    return (
      <div>
        <div className='text text--size--2xl text--view--primary text--align--left text--type--anglecia margin'>
          Middle Developer
        </div>

        <div style={paragraph}>
          Миддл пилит фичи с меньшей помощью, он умеет накапливать больше информации с меньшими усилиями,
          распоряжаться своим временем и расставлять приоритеты,
          предлагает свои подходы после того, как задал вопросы «зачем» и «почему».
        </div>
        <div className='text text--size--xl text--type--anglecia '>Роли</div>
        <div style={paragraph}>
          Разработчик приложения
        </div>
        <div className='text text--size--xl text--type--anglecia '>Ожидания</div>
        <div style={paragraph}>
          <ul>
            <li>pеализует и поддерживает продуктовые фичи в работоспособном состоянии</li>
            <li>предлагает инструменты и подходы к разработке фич и компонентов</li>
          </ul>
        </div>

      </div>
    );
  }
}

const paragraph = {
  margin: '0 0 30px'
};