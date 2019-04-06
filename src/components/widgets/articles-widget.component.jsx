import React from 'react';


export class ArticlesWidgetComponent extends React.Component {
  render() {
    const articles = [
      {
        description: 'Очень интересная статья'
      },
      {
        description: 'Очень интересная статья'
      },
      {
        description: 'Очень интересная статья'
      },
      {
        description: 'Очень интересная статья'
      },
      {
        description: 'Очень интересная статья'
      }
    ];

    return (
      <>
        <div className='text text--size--2xl text--view--primary text--align--left text--type--anglecia margin'>
          Публикации
        </div>
        <div className='margin'>
          { articles.map((article, index) => (
            <div className='margin-small widget-half' key={index}>
              <span>{article.description}</span>
            </div>
          ))}
        </div>
      </>
    );
  }
}

const styles = {

};
