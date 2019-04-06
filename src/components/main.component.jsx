import React from 'react';
import {MainRoadMapComponent} from "./main-roadmap.component";
import {FocusWidgetComponent} from "./widgets/focus-widget.component";
import {ArticlesWidgetComponent} from "./widgets/articles-widget.component";
import {EventsWidgetComponent} from "./widgets/events-widget.component";
import Modal from 'react-modal';
import {FocusModalComponent} from "./modals/focus-modal.component";
import {ArticlesModalComponent} from "./modals/articles-modal.component";
import {EventsModalComponent} from "./modals/events-modal.component";
import {GradeModalComponent} from "./modals/grade-modal.component";

export class MainComponent extends React.Component {
  state = {
    isFocusModalOpened: false,
    isEventsModalOpened: false,
    isArticlesModalOpened: false,
    isGradeModalOpened: false
  };

  render() {
    return (
      <div>
        <div className='margin'>
          <div>
            <img style={imageStyle} src='imgs/toni.png' />
            <div style={{display: 'inline-block'}}>
              <div className='text text--size--5xl text--view--primary text--align--left text--type--anglecia'>Тони Старк</div>
              <a className='status' onClick={() => this.setState({isGradeModalOpened: true})}>
                Middle Mobile Developer
              </a>
            </div>
          </div>
          <Modal
            style={modalStyles}
            isOpen={this.state.isGradeModalOpened}>
            <GradeModalComponent onClose={() => this.setState({isGradeModalOpened: false})}/>
          </Modal>
        </div>

        <div className='margin'>
          <MainRoadMapComponent />
        </div>

        <div className='widget' onClick={() => this.setState({isFocusModalOpened: true})}>
          <FocusWidgetComponent />
        </div>
        <Modal
          style={modalStyles}
          isOpen={this.state.isFocusModalOpened}>
          <FocusModalComponent onClose={() => this.setState({isFocusModalOpened: false})}/>
        </Modal>

        <div className='widget-half'>

          <div className='widget widget-half--item' onClick={() => this.setState({isArticlesModalOpened: true})}>
            <ArticlesWidgetComponent/>
          </div>
          <Modal
            style={modalStyles}
            isOpen={this.state.isArticlesModalOpened}>
            <ArticlesModalComponent onClose={() => this.setState({isArticlesModalOpened: false})}/>
          </Modal>

          <div className='widget widget-half--item' onClick={() => this.setState({isEventsModalOpened: true})}>
            <EventsWidgetComponent />
          </div>
          <Modal
            style={modalStyles}
            isOpen={this.state.isEventsModalOpened}>
            <EventsModalComponent onClose={() => this.setState({isEventsModalOpened: false})}/>
          </Modal>

        </div>

      </div>
    );
  }
}

const modalStyles = {
  content:{
    width: '1100px',
    boxShadow: '0 3px 38px #cbcaca, 0 0px 12px #cbcaca',
    borderRadius: '3px',
    borderWidth: '0',
    maxWidth: '1100px'
  }
};

const imageStyle = {
  height: '90px',
  width: '90px',
  display: 'inline-block',
  marginRight: '25px'
};
