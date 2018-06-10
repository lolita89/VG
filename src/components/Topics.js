import React, { Component } from 'react';
import { Panel, Grid, Row, Col, Thumbnail } from 'react-bootstrap';
import './Topics.css';


class Topics extends Component {
    render() {
        return (
        <div class="border row">
  <div class="border col-sm-3">
  <Thumbnail href="#" src="assets/AndroidVirtuaGymUsers.png" alt="242x200">
        <h3>Android Users</h3>
      </Thumbnail>
  </div>
  <div class="border col-sm-3"> <Thumbnail href="#" src="assets/TheRookieAcademy.png" alt="242x200">
        <h3>The Rookie Academy</h3>
      </Thumbnail></div>
  <div class="border col-sm-3"> <Thumbnail href="#" src="assets/IOSVirtuaGymUsers.png" alt="242x200">
        <h3>IOS Users</h3>
      </Thumbnail></div>
  <div class="border col-sm-3"> <Thumbnail href="#" src="assets/HomeWorkout.png" alt="242x200">
        <h3>Home Workout</h3>
      </Thumbnail></div>
      <div class="border col-sm-3"> <Thumbnail href="#" src="assets/Nutrition.png" alt="242x200">
        <h3>Nutrition</h3>
      </Thumbnail></div>
      <div class="border col-sm-3"> <Thumbnail href="#" src="assets/FitnessMusic.png" alt="242x200">
        <h3>Fitness Music</h3>
      </Thumbnail></div>
      <div class="border col-sm-3"> <Thumbnail href="#" src="assets/WeightProb.png" alt="242x200">
        <h3>Weight Problems</h3>
      </Thumbnail></div>
      <div class="border col-sm-3"> <Thumbnail href="#" src="assets/HardcoreWorkouts.jpg" alt="242x200">
        <h3>Hardcore Workout</h3>
      </Thumbnail></div>
</div>
        );
    }
}

export default Topics;