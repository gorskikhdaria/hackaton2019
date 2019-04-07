import React from 'react';
import Modal from "react-modal";
import {AchieveModalComponent} from "./modals/achieve-modal.component";

export class MainRoadMapComponent extends React.Component {
  state = {
    isModalOpened: false,
    content: <></>
  };

  contentMap = [
    {
      title: 'Пройден продвинутый курс по Swift ',
      focus: 'Языки и фреймворки',
      smile: '1',
      desc: 'Месячный онлайн-курс по архитектуре MVVM под iOS на Swift.',
      link: 'Записаться сейчас '
    },
    {
      title: 'Создать курс для Junior-разработчиков',
      focus: 'Комьюнити',
      smile: '2',
      desc: 'Выбери тему об особенностях процесса разработки приложения Точки, которую сможешь раскрыть новичкам за несколько занятий, подготовь план и сделай курс. ',
      link: 'Создаем свой курс по разработке'
    },
    {
      title: 'Публичные выступления',
      focus: 'Доклад на внешней конференции',
      smile: '3',
      desc: 'Просто мы очень любим, когда наши разработчики начинают передавать свои знания наружу. ',
      link: 'Как стать докладчиком'
    },
    {
      title: 'Доклад на внутренних митапах ',
      focus: 'Публичные выступления',
      smile: '4',
      desc: 'Раскачивая внутренние митапы, ты вкладываешься не только в разработчиков, но и других представителей ИТ-комьюнити Точки. ',
      link: 'Как стать докладчиков в Точке'
    },
    {
      title: 'Закрыто 80% личного техдолга',
      focus: 'Продукт',
      smile: '5',
      desc: 'Будь героем — не тащи за собой техдолг, чтобы двигаться дальше без стоп-факторов',
      link: 'Курс: как не накапливать техдолг в большой команде'
    },
    {
      title: 'Выпущен в продакшн полноценный сервис',
      focus: 'Продукт',
      smile: '6',
      desc: 'Здорово, что ты собрался сам отвечать за целый набор функций приложения! ',
      link: 'Как проектировать на века'
    }
  ];

  setContent = (index) => {
    console.log(index);
    this.setState({
      isModalOpened: true,
      content: this.contentMap[index]
    })
  };

  render() {
    return (
      <div style={styles}>
        <a href="https://extranet.tochka.com/quiz/360/results/7070fa631148b47d7fd94938a73a89d6" target='_blank'>
          <div style={circleVioletFirstStyles} className='roadmap-circle'>
            <div style={{position: 'absolute', bottom: '35px', right: '-15px', fontWeight: '500', textAlign: 'center'}}>360 декабрь</div>
          </div>
        </a>

        <div style={lineVioletStyles}></div>

        <div style={circleVioletStyles} onClick={this.setContent.bind(this, 0)} className='roadmap-circle'>
          <div style={{position: 'absolute', bottom: '-55px', right: '-17px', textAlign: 'center', fontWeight: '500'}}>Знаешь Swift</div>
        </div>

        <div style={lineVioletStyles}></div>

        <div style={circleVioletStyles} onClick={this.setContent.bind(this, 1)} className='roadmap-circle'>
          <div style={{position: 'absolute', bottom: '35px', right: '-18px', textAlign: 'center', fontWeight: '500'}}>Курс джунам</div>
        </div>

        <div style={lineVioletStyles}></div>

        <div style={circleVioletStyles} onClick={this.setContent.bind(this, 2)} className='roadmap-circle'>
          <div style={{position: 'absolute', bottom: '-55px', right: '-20px', textAlign: 'center', fontWeight: '500'}}>Твой доклад</div>
        </div>

        <div style={lineGrayStyles}></div>

        <div style={circleGrayStyles} onClick={this.setContent.bind(this, 3)} className='roadmap-circle--gray'>
          <div style={{position: 'absolute', bottom: '35px', right: '-20px', textAlign: 'center', fontWeight: '500'}}>Звезда митапов</div>
        </div>

        <div style={lineGrayStyles}></div>

        <div style={circleGrayStyles} onClick={this.setContent.bind(this, 4)} className='roadmap-circle--gray'>
          <div style={{position: 'absolute', bottom: '-55px', right: '-28px', textAlign: 'center', fontWeight: '500'}}>Без техдолгов</div>
        </div>

        <div style={lineGrayStyles}></div>

        <div style={circleGrayStyles} onClick={this.setContent.bind(this, 5)} className='roadmap-circle--gray'>
          <div style={{position: 'absolute', bottom: '35px', right: '-18px', textAlign: 'center', fontWeight: '500'}}>Твой сервис</div>
        </div>

        <div style={lineGrayStyles}></div>

        <div style={circleGrayLastStyles} className='roadmap-circle--gray'>
          <div style={{position: 'absolute', bottom: '35px', right: '0px', textAlign: 'center', fontWeight: '500'}}>360 май</div>
        </div>

        <Modal
          style={modalStyles}
          isOpen={this.state.isModalOpened}>
          <AchieveModalComponent onClose={() => this.setState({isModalOpened: false})} content={this.state.content}/>
        </Modal>
      </div>
    );
  }
}

const styles = {
  margin: '120px 0 120px'
};

const circleVioletFirstStyles = {
  height: '30px',
  width: '30px',
  backgroundColor: '#7658e0',
  color: '#7658e0',
  borderRadius: '50%',
  display: 'inline-block',
  cursor: 'pointer',
  position: 'relative',
  top: '4px'
};

const circleVioletStyles = {
  height: '20px',
  width: '20px',
  backgroundColor: '#7658e0',
  color: '#7658e0',
  borderRadius: '50%',
  display: 'inline-block',
  position: 'relative',
  cursor: 'pointer'
};

const lineVioletStyles = {
  height: '3px',
  width: '90px',
  backgroundColor: '#7658e0',
  display: 'inline-block',
  position: 'relative',
  bottom: '7px'
};

const circleGrayStyles = {
  height: '20px',
  width: '20px',
  backgroundColor: '#cbcaca',
  color: '#cbcaca',
  borderRadius: '50%',
  display: 'inline-block',
  position: 'relative',
  cursor: 'pointer'
};

const circleGrayLastStyles = {
  height: '30px',
  width: '30px',
  backgroundColor: '#cbcaca',
  color: '#cbcaca',
  borderRadius: '50%',
  display: 'inline-block',
  cursor: 'pointer',
  position: 'relative',
  top: '4px'
};

const lineGrayStyles = {
  height: '3px',
  width: '90px',
  backgroundColor: '#cbcaca',
  display: 'inline-block',
  position: 'relative',
  bottom: '7px'
};


const modalStyles = {
  content:{
    width: '500px',
    boxShadow: '0 3px 38px #cbcaca, 0 0px 12px #cbcaca',
    borderRadius: '3px',
    borderWidth: '0',
    maxWidth: '500px',
    maxHeight: '450px',
    height: '450px'
  }
};

