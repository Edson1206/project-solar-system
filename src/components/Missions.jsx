import React, { Component } from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends Component {
  render() {
    return (
      <>
        <div data-testid="missions">
          <Title headline="Missões" />
        </div>
        <div className="missions">
          {missions.map((mission) => (
            <div key={ mission.name }>
              <MissionCard
                name={ mission.name }
                year={ mission.year }
                country={ mission.country }
                destination={ mission.destination }
              />
            </div>))}
        </div>
      </>
    );
  }
}

export default Missions;
