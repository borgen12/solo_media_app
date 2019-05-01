import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom'

import SearchIcon from '@material-ui/icons/Search';

const styles = theme => ({
    margin: {
        margin: theme.spacing.unit,
        marginleft: 400
    },
});

class SearchBar extends Component{
    state = {
        query: '',
    }
    
    handleChangeFor = () => {
        return (event) => {
            this.setState({
                query: event.target.value
            })
        }
    }

    searchQuery = () => {

        this.props.dispatch({ type: 'NEW_SEARCH', payload: this.state.query })
        this.props.history.push('/')
        this.setState({
            query: ''
        })
    }
    
    render() {
        const { classes } = this.props;
        return (
            <div>
                <form>
                    <TextField
                        className={classes.margin}
                        value={this.state.query}
                        onChange={this.handleChangeFor('query')} 
                        id="input-with-icon-textfield"
                        label=""
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                        }}
                    />
                    <Button onClick={this.searchQuery} className="button">Search</Button>
                </form>
            </div>

        )
    }
} 

SearchBar.propTypes = {
    classes: PropTypes.object.isRequired,
};
const mapReduxStateToProps = reduxState => ({
    reduxState
});

export default withRouter(connect(mapReduxStateToProps)(withStyles(styles)(SearchBar)));