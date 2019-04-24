import React, { Component } from 'react';
import MovieToCard from './MovieToCard';
import './MoviePage.css';
import { connect } from 'react-redux';

class MoviePage extends Component {

    componentDidMount = () => {
        this.props.dispatch({ type: 'GET_MOVIE' })
    } 
    render () {
        return (
            <div>
                <h2 className="recent">Recently Watched</h2>
                <section className="display">All Movies
                    <MovieToCard/> 
                </section>
            </div>
        )
    }
}

const mapReduxStateToProps = reduxState => ({
    reduxState
});

export default connect(mapReduxStateToProps)(MoviePage)