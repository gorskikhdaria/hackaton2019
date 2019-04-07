import React from 'react';

export class SeniorDescriptionComponent extends React.Component {

  render() {
    return (
      <div>
        <div className='text text--size--2xl text--view--primary text--align--left text--type--anglecia margin'>
          Senior разработчик
        </div>

        <div style={paragraph}>
          Перерабатывает инструменты под себя, ведёт большие истории, работает над новыми сложными задачами,
          которые качественно улучшают или вообще меняют продукт.
          В этой позиции разработчик может придумать собственный проект и принять решение —
          развиваться в глубь, вкладывать в себя и переходить уровень суперпрофессионала,
          либо брать на себя технический менеджмент.
        </div>

        <div className='text text--size--xl text--type--anglecia '>Роли</div>

        <div style={paragraph}>
          <ul>
            <li>aрхитектор приложения</li>
            <li>разработчик приложения</li>
            <li>релиз-инженер</li>
            <li>наставник</li>
            <li>читатель реквестов</li>
          </ul>
        </div>

        <div className='text text--size--xl text--type--anglecia '>Ожидания</div>
        <div style={paragraph}>
          <div style={grayHeader} className='text text--size--l text--type--anglecia'>Роль архитектора</div>

          <ul>
            <li>принимает меры к стабильности приложений</li>
            <li>консультирует по техвопросам</li>
            <li>следит за техническими метриками, логами и крэшами</li>
          </ul>
        </div>

        <div style={paragraph}>
          <div style={grayHeader} className='text text--size--l text--type--anglecia'>Роль разработчика</div>

          <ul>
            <li>cамообучается</li>
            <li>консультирует по техвопросам в соответствии с продуктовым фокусом</li>
            <li>совместно проектирует и влияет на улучшения и прочих зависимостей</li>
            <li>oбсуждает задачи с бизнесом и дизайном</li>
            <li>устраняет техдолг и минимизирует его появление</li>
          </ul>

        </div>

        <div style={paragraph}>
          <div style={grayHeader} className='text text--size--l text--type--anglecia'>Роль релиз-инженера</div>

          <ul>
            <li>готовит и отправляет в тестирование сборки в соответствии с календарём релизов</li>
            <li>быстро даёт обратную связь тестировщикам</li>
            <li>правит и отдаёт в правку баги</li>
            <li>публикует приложение</li>
            <li>мониторинг стабильности свежих релизов</li>
          </ul>

        </div>

        <div style={paragraph}>
          <div style={grayHeader} className='text text--size--l text--type--anglecia'>Роль наставника</div>

          <ul>
            <li>консультирует по техническим задачам, инструментам и ЖЦ разработки</li>
            <li>доводит новичка до состояния «сам может делать задачи»</li>
          </ul>

        </div>

      </div>
    );
  }
}

const paragraph = {
  margin: '0 0 30px'
};

const grayHeader = {
  color: '#6f6f6f'
};
