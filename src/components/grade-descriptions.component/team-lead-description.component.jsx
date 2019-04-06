import React from 'react';

export class TeamLeadDescriptionComponent extends React.Component {

  render() {
    return (
      <div>
        <div className='text text--size--2xl text--view--primary text--align--left text--type--anglecia margin'>
          TeamLead
        </div>

        <div style={paragraph}>
          Сильный спец, который умеет ловить инсайты и применять их в работе,
          находить стратегические решения задач, определяющие решение многих вопросов наперёд.
          Он умеет находить мастеров, и их желание развиваться, а ещё хочет рассказать о своём опыте,
          чтобы качать команду.
        </div>

        <div className='text text--size--xl text--type--anglecia '>Роли</div>

        <div style={paragraph}>
          <ul>
            <li>aрхитектор приложения</li>
            <li>мобильный девопс</li>
            <li>прокачиватель команды</li>
          </ul>
        </div>

        <div className='text text--size--xl text--type--anglecia '>Ожидания</div>
        <div style={paragraph}>
          <div style={grayHeader} className='text text--size--l text--type--anglecia'>Роль архитектора</div>

          <ul>
            <li>даёт обратную связь по принятым командой решениям</li>
            <li>создаёт в приложении архитектуру, которая позволяет эффективно решать задачи бизнеса и продуктовых команд</li>
            <li>устанавливает стандарты кода</li>
            <li>следит за консистентостью однотипных компонентов системы</li>
            <li>не дает копиться техдолгу</li>
            <li>принимает конечные решения по техническим вопросам</li>
            <li>проактивно использует современные и перспективные технологии в разработке мобильного приложения</li>
            <li>проактивно выявляет несоответствие мобильного приложения планам масштабирования бизнеса</li>
          </ul>
        </div>

        <div style={paragraph}>
          <div style={grayHeader} className='text text--size--l text--type--anglecia'>Роль мобильного девопса</div>

          <ul>
            <li>связывает системы для сборки и тестирования приложений</li>
            <li>CI/CD работают без сбоев и поддерживаются</li>
            <li>сообщает разработчикам и тестировщикам об успешных и свалившихся сборках</li>
            <li>сборка, тестирование и публикация приложений автоматизируются</li>
          </ul>

        </div>

        <div style={paragraph}>
          <div style={grayHeader} className='text text--size--l text--type--anglecia'>Роль прокачивателя команды</div>

          <ul>
            <li>следит за повышением профуровня команды</li>
            <li>создаёт систему оценки знаний</li>
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
