import React, { Component } from 'react';
import MovieToCard from './MovieToCard';
import { connect } from 'react-redux';

class MovieInfo extends Component {

    render() {
        return (
            <div>
                <h3>INFO</h3>
                <h3>{this.props.reduxState.movieInfo.movieInfoReducer.description}</h3>
            </div>
        )
    }
}

const mapReduxStateToProps = reduxState => ({
    reduxState
});

export default connect(mapReduxStateToProps)(MovieInfo)