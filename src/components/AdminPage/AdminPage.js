import React, { Component } from 'react';
import './AdminPage.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import AdminTable from './AdminTable';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';

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
                <header className="head">
                    <h1>Admin</h1>
                </header>
                <Divider />
                <section>
                    <h1>Add a Movie</h1>
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
                            label="Year (****)"
                            className={classes.textField}
                            value={this.state.newMovie.year}
                            onChange={this.handleChangeFor('year')}
                            margin="normal"
                        />
                        <TextField
                            label="Description"
                            className={classes.description}
                            value={this.state.newMovie.description}
                            onChange={this.handleChangeFor('description')}
                            margin="normal"
                        />
                    </form>
                </section>
                <Button onClick={this.addNewMovie} className="button">Add Movie</Button>
                <br/>
                <AdminTable/>
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