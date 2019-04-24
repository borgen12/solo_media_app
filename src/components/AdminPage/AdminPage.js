import React, { Component } from 'react';
import './AdminPage.css';
import { connect } from 'react-redux';
//import AdminList from '../AdminList/AdminList';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
        display: "inline-block",
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
    dense: {
        marginTop: 16,
    },
    menu: {
        width: 200,
    },
});
class AdminPage extends Component {
    state = {
        newMovie: {
            title: '',
            description: '',
            image_url: '',
            video_url: '',
            year: '',
            length: '',
        }
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

    addNewMovie = (event) => {
        event.preventDefault();
        this.props.dispatch({ type: 'ADD_MOVIES', payload: this.state.newMovie })
        this.setState({
            newProject: {
                title: '',
                description: '',
                image_url: '',
                video_url: '',
                year: '',
                length: '',
            }
        })
    }

    render() {
        const { classes } = this.props;
        return (
            <div className="Admin">
                <header>
                    <h1>Admin</h1>
                </header>
                <section>
                    <h1>Add a Movie</h1>
                    <form onSubmit={this.addNewMovie} className={classes.root} autoComplete="off" className={classes.container} noValidate>
                        <TextField
                            label="Title"
                            className={classes.textField}
                            value={this.state.newMovie.title}
                            onChange={this.handleChangeFor('title')}
                            margin="normal"
                        //variant="filled"
                        />
                        <TextField
                            label="Image URL"
                            className={classes.textField}
                            value={this.state.newMovie.image_url}
                            onChange={this.handleChangeFor('image_url')}
                            margin="normal"
                        />
                        <TextField
                            label="Video URL"
                            className={classes.textField}
                            value={this.state.newMovie.video_url}
                            onChange={this.handleChangeFor('video_url')}
                            margin="normal"
                        />
                        <TextField
                            label="Length (min)"
                            className={classes.textField}
                            value={this.state.newMovie.length}
                            onChange={this.handleChangeFor('length')}
                            margin="normal"
                        />
                        <TextField
                            label="Description"
                            className={classes.description}
                            value={this.state.newMovie.description}
                            onChange={this.handleChangeFor('description')}
                            margin="normal"
                        />
                        <br />
                        <Button onClick={this.addNewMovie}>Add Movie</Button>
                    </form>
                </section>
                {/* <AdminList /> */}
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