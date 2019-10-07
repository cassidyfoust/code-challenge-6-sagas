import React, { Component } from 'react';
import { connect } from 'react-redux';

class NewAnimalForm extends Component {

    componentDidMount() {
        const action = { type: 'GET_CLASSES' };
        this.props.dispatch(action);
    }

    state = {
        animalToAdd: {
            species: '',
            classId: ''
        }
    }

    handleChange = (propertyName, event) => {
        console.log('event happened')
        this.setState({
            animalToAdd: {
                ...this.state.animalToAdd,
                [propertyName]: event.target.value,
            }
        });
    }

    handleClassChange = (event) => {
        let idToAdd = ''
        if (event.target.value == 'Mammal'){
            idToAdd = 1
        }
        else if (event.target.value === 'Bird'){
            idToAdd = 2
        }
        else if (event.target.value === 'Fish'){
            idToAdd = 3
        }
        else if (event.target.value === 'Reptile') {
            idToAdd = 4
        }
        else if (event.target.value === 'Amphibian'){
            idToAdd = 5
        }
        this.setState({
            animalToAdd: {
                ...this.state.animalToAdd,
                classId: idToAdd
            }
        })
    }

    addAnimal = (event) => {
        if (this.state.animalToAdd.classId === '' || this.state.animalToAdd.species === ''){
            alert('Please fill in all inputs.')
        }
        else {
            this.props.dispatch({ type: 'ADD_ANIMAL', payload: this.state.animalToAdd })
        }
    }

    render() {
        return (
           <>
           {JSON.stringify(this.state.animalToAdd)}
                <p>Species:</p> 
                <div>
           <input className="select-css" onChange={(event) => {this.handleChange('species', event)}}></input>
                </div>
                <p>Class:</p>
                <div className="select-wrapper">
           <select className="select-css" onChange={(event) => { this.handleClassChange(event) }}>
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