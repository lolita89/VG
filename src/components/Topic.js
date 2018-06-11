import React, { Component } from 'react';
import { Thumbnail } from 'react-bootstrap';
import './Topic.css';

class Topics extends React.Component {
  constructor() {
    super();
  };
    render() {
      let topics = [{
        id: 1,
        name: 'Android Users',
        source: 'assets/AndroidVirtuaGymUsers.png'
      }, {
        id: 2,
        name: 'The Rookie Academy',
        source: 'assets/TheRookieAcademy.png'
      }, {
        id: 3,
        name: 'IOS Users',
        source: "assets/IOSVirtuaGymUsers.png"
      }, {
        id: 4,
        name: 'Home Workout',
        source: 'assets/HomeWorkout.png'
      }, {
        id: 5,
        name: 'Nutrition',
        source: 'assets/Nutrition.png'
      }, {
        id: 6,
        name: 'Fitness Music',
        source: 'assets/FitnessMusic.png'
      }, {
        id: 7,
        name: 'Weight Problems',
        source: 'assets/WeightProb.png'
      }, {
        id: 8,
        name: 'Hardcore Workout',
        source: 'assets/HardcoreWorkouts.jpg'
      }];

      let filteredTopics = topics.filter(
        (topic) => {
          return topic.name.toLowerCase().indexOf(this.props.searchzz.toLowerCase()) !== -1;
        }
      );

      return (
        <div class="border row">

          {filteredTopics.map((topic)=> {
            return  <div class="border col-sm-3">
                      <Thumbnail href="#" src={topic.source} alt="242x200">
                        <h3>{topic.name}</h3>
                      </Thumbnail>
                    </div>
          })}

        </div>
      );
    }
}

export default Topics;