import React, { Component } from 'react';
import MovieToCard from './MovieToCard';
import { connect } from 'react-redux';

class MoviePage extends Component {

    componentDidMount = () => {
        this.props.dispatch({ type: 'GET_MOVIE' })
    } 
    render () {
        return (
            <div>
                <h2>Recently Watched</h2>
                <MovieToCard/> 
            </div>
        )
    }
}

const mapReduxStateToProps = reduxState => ({
    reduxState
});

export default connect(mapReduxStateToProps)(MoviePage)