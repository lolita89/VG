import React, { Component } from 'react';
import { FormGroup, FormControl, Glyphicon } from 'react-bootstrap';
import Topics from './Topic'

class SearchBar extends React.Component {
    constructor() {
        super();
        this.state = {
            search: ''
        };
    }

    updateSearch(event) {
        this.setState({search: event.target.value.substr(0,
        20)});
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
                {/* <div>
                    {this.props.topics.map((topic)=> {
                        return <Topics topic={topic}
                        key={topic.id}/>
                    })}
                    </div> */}
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