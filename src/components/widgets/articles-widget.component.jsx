import React from 'react';


export class ArticlesWidgetComponent extends React.Component {
  render() {
    const articles = [
      {
        who: 'Стив Роджерс',
        action: 'поделился статьёй',
        time: '2 ч назад',
        description: 'Мобильная разработка в условиях крайнего Севера',
        bookmark: true
      },
      {
        who: 'Питер Паркер',
        action: 'обновил публикацию',
        time: 'Вчера',
        description: 'Джун, который смог',
        bookmark: false
      },
      {
        who: 'Брюс Бэннер',
        action: 'поделился статьёй',
        time: '3 мая 2019',
        description: 'Как перестать беспокоиться и начать кодить',
        bookmark: true
      }
    ];

    return (
      <>
        <div className='text text--size--2xl text--view--primary text--align--left text--type--anglecia margin'>
          Полезные ссылки
        </div>
        <div className='margin'>
          { articles.map((article, index) => (
            <div className='margin-small' style={{position: 'relative'}} key={index}>
              <div style={{color: '#a3a2a2', fontSize: '12px'}}>{article.time}</div>
              <div style={{color: '#a3a2a2', fontWeight: '500'}}>{article.who} поделился статьёй:</div>
              <div style={{textDecoration: 'underline'}}>{article.description}</div>
              <div style={{position: 'absolute', top: '2px', right: '5px'}}>
                { article.bookmark ? <img style={image} src="imgs/bookmark.svg"/> : <img style={image} src="imgs/not-bookmark.svg"/> }
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }
}

const image = {
  height: '10px'
};
