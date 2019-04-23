import React, { Component } from 'react';
import MovieToCard from './MovieToCard';
import { connect } from 'react-redux';

class MovieInfo extends Component {

    componentDidMount = () => {
        this.props.dispatch({ type: 'GET_MOVIE' })
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

const mapReduxStateToProps = reduxState => ({
    reduxState
});

export default connect(mapReduxStateToProps)(MovieInfo)