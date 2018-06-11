import React, { Component } from 'react';
import { Thumbnail } from 'react-bootstrap';
import './Topic.css';

class Topics extends Component {
    render() {
      let topics = [{
        id: 1,
        name: 'Android Users'
      }, {
        id: 2,
        name: 'The Rookie Academy'
      }, {
        id: 3,
        name: 'IOS Users'
      }, {
        id: 4,
        name: 'Home Workout'
      }, {
        id: 5,
        name: 'Nutrition'
      }, {
        id: 6,
        name: 'Fitness Music'
      }, {
        id: 7,
        name: 'Weight Problems'
      }, {
        id: 8,
        name: 'Hardcore Workout'
      }]
        return (
        <div class="border row">
  <div class="border col-sm-3">
  <Thumbnail href="#" src="assets/AndroidVirtuaGymUsers.png" alt="242x200">
        <h3>{topics[0].name}</h3>
      </Thumbnail>
  </div>
  <div class="border col-sm-3"> <Thumbnail href="#" src="assets/TheRookieAcademy.png" alt="242x200">
        <h3>{topics[1].name}</h3>
      </Thumbnail></div>
  <div class="border col-sm-3"> <Thumbnail href="#" src="assets/IOSVirtuaGymUsers.png" alt="242x200">
        <h3>{topics[2].name}</h3>
      </Thumbnail></div>
  <div class="border col-sm-3"> <Thumbnail href="#" src="assets/HomeWorkout.png" alt="242x200">
        <h3>{topics[3].name}</h3>
      </Thumbnail></div>
      <div class="border col-sm-3"> <Thumbnail href="#" src="assets/Nutrition.png" alt="242x200">
        <h3>{topics[4].name}</h3>
      </Thumbnail></div>
      <div class="border col-sm-3"> <Thumbnail href="#" src="assets/FitnessMusic.png" alt="242x200">
        <h3>{topics[5].name}</h3>
      </Thumbnail></div>
      <div class="border col-sm-3"> <Thumbnail href="#" src="assets/WeightProb.png" alt="242x200">
        <h3>{topics[6].name}</h3>
      </Thumbnail></div>
      <div class="border col-sm-3"> <Thumbnail href="#" src="assets/HardcoreWorkouts.jpg" alt="242x200">
        <h3>{topics[7].name}</h3>
      </Thumbnail></div>
</div>
        );
    }
}

export default Topics;