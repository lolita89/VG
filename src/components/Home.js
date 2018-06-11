import React, { Component } from 'react';
import { Panel, Grid, Row, Col, Image, Thumbnail, FormGroup, FormControl, Glyphicon  } from 'react-bootstrap';
import './Home.css';
import Topics from './Topic';
import SearchBar from './SearchBar';
import Flag from './Flag';


class Home extends Component {
    constructor() {
    super();
    this.state = {
        search: ''
    };
    
    this.updateSearch = this.updateSearch.bind(this)
};

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
                            <Flag />
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