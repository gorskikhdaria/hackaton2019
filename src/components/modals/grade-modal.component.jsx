import React from 'react';
import {GradeRoadMapComponent} from "./grade-roadmap.component";
import {JuniorDescriptionComponent} from "../grade-descriptions.component/junior-description.component";
import {MiddleDescriptionComponent} from "../grade-descriptions.component/middle-description.component";
import {SeniorDescriptionComponent} from "../grade-descriptions.component/senior-description.component";
import {ArchDescriptionComponent} from "../grade-descriptions.component/arch-description.component";
import {TeamLeadDescriptionComponent} from "../grade-descriptions.component/team-lead-description.component";


export class GradeModalComponent extends React.Component {

  state = {
    current: 'middle'
  };

  renderSwitch() {
    switch(this.state.current) {
      case 'junior': return <JuniorDescriptionComponent/>;
      case 'middle': return <MiddleDescriptionComponent/>;
      case 'senior': return <SeniorDescriptionComponent/>;
      case 'arch': return <ArchDescriptionComponent/>;
      case 'teamlead': return <TeamLeadDescriptionComponent/>;
      default: return <MiddleDescriptionComponent/>
    }
  }

  render() {
    return (
      <div style={styles}>
        <div onClick={() => this.props.onClose()} style={closeStyles}>
          <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg">
            <g transform="translate(-464 -2396)" fill="none" fillRule="evenodd">
              <path d="M470.5858 2404l-6.293-6.2929c-.3904-.3905-.3904-1.0237 0-1.4142.3906-.3905 1.0238-.3905 1.4143 0l6.2929 6.2929 6.2929-6.293c.3905-.3904 1.0237-.3904 1.4142 0 .3905.3906.3905 1.0238 0 1.4143L473.4142 2404l6.293 6.2929c.3904.3905.3904 1.0237 0 1.4142-.3906.3905-1.0238.3905-1.4143 0L472 2405.4142l-6.2929 6.293c-.3905.3904-1.0237.3904-1.4142 0-.3905-.3906-.3905-1.0238 0-1.4143l6.2929-6.2929z" fill="#E0E0E1"/>
            </g>
          </svg>
        </div>

        <div className='text text--size--3xl text--view--primary text--align--left text--type--anglecia margin'>
          Грейды
        </div>

        <GradeRoadMapComponent onSwitch={(current) => this.setState({ current })}/>

        {this.renderSwitch()}

      </div>
    );
  }
}

const styles = {
  padding: '20px 50px',
  position: 'relative'
};

const closeStyles = {
  position: 'absolute',
  top: '10px',
  right: '40px',
  cursor: 'pointer'
};
