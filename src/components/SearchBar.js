import React, { Component } from 'react';
import { FormGroup, FormControl, Glyphicon } from 'react-bootstrap';
import Topics, { topics } from './Topic'

class SearchBar extends React.Component {
    constructor() {
        super();
        this.state = {
            search: 'test'
        };
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
        // let filteredTopics = this.props.topics.filter(
        //     (topic) => {
        //         return topic.name.indexOf(this.state.
        //             search) !== -1;
        //     }
        // );
        return (
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
        );
    }
}

export default SearchBar;