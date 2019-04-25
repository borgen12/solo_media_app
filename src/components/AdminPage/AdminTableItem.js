import React, { Component } from 'react';
import { Table } from 'semantic-ui-react'
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import './AdminPage.css';

class AdminTableItem extends Component {

    deleteMovie = () => {
        this.props.dispatch({ type: 'DELETE_MOVIE', payload: this.props.movie.id })
    } 

    render() {
        return (
            
                <Table.Row key={this.props.movie.id}>
                    <Table.Cell>{this.props.movie.title}</Table.Cell>
                    <Table.Cell><Button onClick={this.deleteMovie} className="button">Delete</Button></Table.Cell>
                </Table.Row>
            
        )
    }
}

const mapReduxStateToProps = reduxState => ({
    reduxState
});

export default connect(mapReduxStateToProps)(AdminTableItem)