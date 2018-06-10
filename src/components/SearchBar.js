import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl, Glyphicon } from 'react-bootstrap';


class SearchBar extends Component {
    render() {
        return (
            <div>
                <FormGroup controlId="formValidationSuccess3" validationState="success">
    <FormControl type="text" placeholder="Search"/>
    <FormControl.Feedback>
      <Glyphicon glyph="search" />
    </FormControl.Feedback>
  </FormGroup> 
            </div>
        );
    }
}

export default SearchBar;