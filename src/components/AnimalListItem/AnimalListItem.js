import React, { Component } from 'react';
import { connect } from 'react-redux';

// DO NOT MODIFY THIS FILE FOR BASE MODE!

class AnimalListItem extends Component {
    // Renders the list of animals

    // transfers (deletes) animal
    transferAnimal = (id) => {
    this.props.dispatch({ type: 'TRANSFER_ANIMAL', payload: id})
    }

    render() {
        return (
            <tr>
                <td>{this.props.classData.species_name}</td>
                <td>{this.props.classData.class_name}</td>
                <td className="transfer-column"><button className="transferBtn" onClick={(event) => this.transferAnimal(this.props.classData.id)}>Transfer</button></td>
            </tr>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(AnimalListItem);