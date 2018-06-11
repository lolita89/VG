import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Image } from 'react-bootstrap';
import './Flag.css';


class Flag extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
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
    render() {
        return (
            <div>
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
            </div>
        );
    }
}

Flag.propTypes = {};

export default Flag;
