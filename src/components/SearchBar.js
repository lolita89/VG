import React, { Component } from 'react';
import { FormGroup, FormControl, Glyphicon } from 'react-bootstrap';
import Topics, { topics } from './Topic'
import './SearchBar.css';

class SearchBar extends React.Component {
    constructor() {
        super();
    }
        
    render() {
        return (
            <div>
                <div>
                    <FormGroup controlId="formValidationSuccess3" validationState="success">
                        <FormControl type="text" placeholder="Search" value={this.props.searchrr} onChange={this.props.updateSearch}/>
                        <FormControl.Feedback>
                        <Glyphicon glyph="search" />
                        </FormControl.Feedback>
                    </FormGroup> 
                </div>
            </div>
        );
    }
}

export default SearchBar;