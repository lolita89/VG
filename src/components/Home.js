import React, { Component } from 'react';
import { Panel, Grid, Row, Col, Image, Thumbnail, FormGroup, FormControl, Glyphicon  } from 'react-bootstrap';
import './Home.css';
import Topics from './Topic';
import SearchBar from './SearchBar';


class Home extends Component {
    constructor() {
    super();
    this.state = {
        search: ''
    };
    this.updateSearch = this.updateSearch.bind(this)
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
        console.log('testing1');
        var new_value = event.target.value;

        console.log(new_value);

        this.setState({
            search: new_value
        });
    }

    render() {

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
                            <SearchBar searchrr={this.state.search} updateSearch={this.updateSearch} />           
                            <Topics searchzz={this.state.search} />
                        </Panel.Body>
                    </Panel> 
                </Grid>
            </div>
        );
    }
}

Home.propTypes = {

};

export default Home;