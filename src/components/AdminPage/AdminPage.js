import React, { Component } from 'react';
import './AdminPage.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import AdminTable from './AdminTable';
import { Button } from 'semantic-ui-react'
import Divider from '@material-ui/core/Divider';
import RawInputField from '../RawInputField/RawInputField'

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        display: "inline-block",
        color: "white",
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
        
    },
    description: {
        height: 100,
        width: 200,
    },
});
class AdminPage extends Component {

    state = {
        newMovie: {
            title: '',
            year: '',
            description: '',
            length: '',
            video_url: '',
            image_url: '',
        }
    }

    componentDidMount = () => {
        this.props.dispatch({ type: 'GET_MOVIE' })
    } 

    handleChangeFor = propertyName => {
        return (event) => {
            this.setState({
                newMovie: {
                    ...this.state.newMovie,
                    [propertyName]: event.target.value,
                }
            })
        }
    }

    addNewMovie = () => {
        
        this.props.dispatch({ type: 'ADD_MOVIE', payload: this.state.newMovie })
        this.setState({
            newProject: {
                title: '',
                year: '',
                description: '',
                length: '',
                video_url: '',
                image_url: '',
            }
        })
    }

    render() {
        const { classes } = this.props;
        return (
            <div className="Admin">
                <h1 className="head">Add a Movie</h1>
                <section className="submit">
                    <h3>1. Add Metadata</h3>
                    <div className="formdiv">
                        <form onSubmit={this.addNewMovie} className={classes.root} autoComplete="off" className={classes.container} noValidate>
                            <TextField
                                label="Title"
                                className={classes.textField}
                                value={this.state.newMovie.title}
                                onChange={this.handleChangeFor('title')}
                                margin="normal"
                            />

                            <TextField
                                label="Image URL"
                                className={classes.textField}
                                value={this.state.newMovie.image_url}
                                onChange={this.handleChangeFor('image_url')}
                                margin="normal"
                            />
                            <br />
                            <TextField
                                label="Length (min)"
                                className={classes.textField}
                                value={this.state.newMovie.length}
                                onChange={this.handleChangeFor('length')}
                                margin="normal"
                            />
                            <TextField
                                label="Year (****)"
                                className={classes.textField}
                                value={this.state.newMovie.year}
                                onChange={this.handleChangeFor('year')}
                                margin="normal"
                            />
                            <br />
                            <TextField
                                label="Description"
                                className={classes.description}
                                value={this.state.newMovie.description}
                                onChange={this.handleChangeFor('description')}
                                margin="normal"
                            />
                            <br />
                            <Button onClick={this.addNewMovie} className="button">Add MetaData</Button>
                            <br />
                        </form>
                        <h3 className="step2">2. Add Video File</h3>
                        <RawInputField />
                    </div>
                </section>
                <br/>
                <section className="table">
                <h3>Available Movies</h3>
                    <AdminTable />
                </section>
            </div>
        );
    }
}
const mapReduxStateToProps = reduxState => ({
    reduxState
});
AdminPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default connect(mapReduxStateToProps)(withStyles(styles)(AdminPage));