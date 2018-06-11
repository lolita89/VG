import React, { Component } from 'react';
import { Panel, Grid, Row, Col, Image, Thumbnail, FormGroup, FormControl, Glyphicon  } from 'react-bootstrap';
import './Home.css';
//import SearchBar from './SearchBar';
//import Topics from './Topic';


class Home extends Component {
    constructor() {
    super();
    this.state = {
        search: ''
    };
    }

    flagChange(eventcika) {

        var flagid = eventcika.target.id;
        var flaggclass = eventcika.target.className;

        console.log(flagid);
        console.log(flaggclass);

        if (flaggclass === "flagon"){
            document.getElementById(flagid).className = "flagoff";
        }

        else if (flaggclass === "flagoff"){
            document.getElementById(flagid).className = "flagon";

        }

    }

    updateSearch(event) {
        console.log('testing');
        var new_value = event.target.value;

        console.log(new_value);

        this.setState({
            search: new_value
        });
    }

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
              return topic.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
            }
          );

        return (
            <div className="container">
                <Grid>
                    <Panel>
                        <Panel.Body>
                            <Row className="show-grid">
                                <Col md={6} mdpush={6}>
                                    <h2><b>Groups</b></h2>
                                    <b />
                                    <h5><a href="#">Add new group +</a></h5>
                                    </Col>
                                    <Col md={6} mdpull={6}>
                                    <Image hspace="3" className="flagoff" id="flag1" onClick={this.flagChange} src="https://static.virtuagym.com/v29521123/images/flags/en.png" />
                                    <Image hspace="3" className="flagoff" id="flag2" onClick={this.flagChange} src="https://static.virtuagym.com/v29521123/images/flags/nl.png" />
                                    <Image hspace="3" className="flagon" id="flag3" onClick={this.flagChange} src="https://static.virtuagym.com/v29521123/images/flags/de.png" />
                                    <Image hspace="3" className="flagon" id="flag4" onClick={this.flagChange} src="https://static.virtuagym.com/v29521123/images/flags/es.png" />
                                    <Image hspace="3" className="flagon" id="flag5" onClick={this.flagChange} src="https://static.virtuagym.com/v29521123/images/flags/fr.png" />
                                    <Image hspace="3" className="flagon" id="flag6" onClick={this.flagChange} src="https://static.virtuagym.com/v29521123/images/flags/pt_br.png" />
                                    <Image hspace="3" className="flagon" id="flag7" onClick={this.flagChange} src="https://static.virtuagym.com/v29521123/images/flags/it.png" />
                                    <Image hspace="3" className="flagon" id="flag8" onClick={this.flagChange} src="https://static.virtuagym.com/v29521123/images/flags/ru.png" />
                                    <Image hspace="3" className="flagon" id="flag9" onClick={this.flagChange} src="https://static.virtuagym.com/v29521123/images/flags/tr.png" />
                                    <Image hspace="3" className="flagon" id="flag10" onClick={this.flagChange} src="https://static.virtuagym.com/v29521123/images/flags/pl.png" />
                                    <Image hspace="3" className="flagon" id="flag11" onClick={this.flagChange} src="https://static.virtuagym.com/v29521123/images/flags/el.png" />
                                    <Image hspace="3" className="flagon" id="flag12" onClick={this.flagChange} src="https://static.virtuagym.com/v29521123/images/flags/lt.png" />
                                    <Image hspace="3" className="flagon" id="flag13" onClick={this.flagChange} src="https://static.virtuagym.com/v29521123/images/flags/lv.png" />
                                    <Image hspace="3" className="flagon" id="flag14" onClick={this.flagChange} src="https://static.virtuagym.com/v29521123/images/flags/no.png" />
                                </Col>
                            </Row>
                            <div>
                                <div>
                                    <FormGroup controlId="formValidationSuccess3" validationState="success">
                                        <FormControl type="text" placeholder="Search" value={this.state.search} onChange={this.updateSearch.bind(this)}/>
                                        <FormControl.Feedback>
                                        <Glyphicon glyph="search" />
                                        </FormControl.Feedback>
                                    </FormGroup> 
                                </div>
                            </div>             
                        </Panel.Body>
                    </Panel> 
                    <div class="border row">
                        {filteredTopics.map((topic)=> {
                        return  <div class="border col-sm-3">
                                    <Thumbnail href="#" src={topic.source} alt="242x200">
                                        <h3>{topic.name}</h3>
                                    </Thumbnail>
                                </div>
                        })}

                    </div>
                </Grid>
            </div>
        );
    }
}

Home.propTypes = {

};

export default Home;