import React, { Component } from 'react';
import { connect } from 'react-redux';

class NewAnimalForm extends Component {

    componentDidMount() {
        const action = { type: 'GET_CLASSES' };
        this.props.dispatch(action);
    }


    render() {
        return (
           <>
                <p>Species:</p> 
                <div>
           <input className="select-css" onChange={(event) => {this.handleChange('species', event)}}></input>
                </div>
                <p>Class:</p>
                <div className="select-wrapper">
           <select className="select-css" onChange={(event) => { this.handleChange('class', event) }}>
                {this.props.reduxState.animalClasses.map(classOne => (
                            <option key={classOne.id}>
                                {classOne.class_name}
                            </option>
                        ))}
               <option></option>
           </select>
                </div>
           <div className="add-btn">
                <button className="generalBtn" onClick={(event) => this.addAnimal()}>Add Animal</button>
                </div>
           </>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(NewAnimalForm);