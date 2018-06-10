import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Panel, Grid, Row, Col, Thumbnail } from 'react-bootstrap';
import './Home.css';
import SearchBar from './SearchBar';
import Topics from './Topics';

class Home extends Component {
    render() {
        return (
            <div className="container">
                <Grid>
               <Panel>
                   <Panel.Body>
                   <Row className="show-grid">
    <Col xs={6} md={4}>
      <h2><b>Groups</b></h2>
    </Col>
    <Col xs={6} md={4}>
      <h2 className="newgroup">Add new group</h2>
    </Col>
    <Col xsHidden md={4}>
      <code>&lt;{'Col xsHidden md={4}'} /">">">&gt;</code>
    </Col>
  </Row>

                    < SearchBar />                    
                    </Panel.Body>
                </Panel> 
    < Topics />
</Grid>
            </div>
        );
    }
}

Home.propTypes = {

};

export default Home;