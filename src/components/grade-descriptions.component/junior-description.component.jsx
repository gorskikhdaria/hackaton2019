import React from 'react';

export class JuniorDescriptionComponent extends React.Component {

  render() {
    return (
      <div>
        <div className='text text--size--2xl text--view--primary text--align--left text--type--anglecia margin'>
          Junior разработчик
        </div>

        <div style={paragraph}>
          В первую очередь джун работает над собой через работу над продуктом.
          Он учится у комьюнити, слышит других, принимает критику и аргументированно отстаивает своё мнение.
          Можно тыкать случайно, искать новые методы среди популярных,
          а ещё — ловить инсайты о причинно-следственных связях и значениях слов.
        </div>
        <div className='text text--size--xl text--type--anglecia '>Роли</div>
        <div style={paragraph}>
        Разработчик приложения
        </div>
        <div className='text text--size--xl text--type--anglecia '>Ожидания</div>
        <div style={paragraph}>
          <ul>
            <li>cамообучается</li>
            <li>реализует продуктовые и технические фичи в текущем стеке</li>
            <li>поддерживает свои фичи в работоспособном состоянии</li>
          </ul>
        </div>

      </div>
    );
  }
}

const paragraph = {
  margin: '0 0 30px'
};
