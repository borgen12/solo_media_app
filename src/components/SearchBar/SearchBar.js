import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';

import SearchIcon from '@material-ui/icons/Search';

const styles = theme => ({
    margin: {
        margin: theme.spacing.unit,
    },
});

class SearchBar extends Component{
    
    render() {
        const { classes } = this.props;
        return (
            <div>
                <TextField
                    className={classes.margin}
                    id="input-with-icon-textfield"
                    label="TextField"
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <SearchIcon />
                            </InputAdornment>
                        ),
                    }}
                />
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

export default (connect(mapReduxStateToProps)(withStyles(styles)(SearchBar)));