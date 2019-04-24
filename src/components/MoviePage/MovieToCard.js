import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import MovieCard from './MovieCard';



//maps out project data to cards on ProjectItem
class MovieToCard extends Component {
    render () {
        return (
            <div className="Project">

                <section>
                    {
                        this.props.reduxState.movies.movieReducer.map(movie =>
                            <MovieCard key={movie.id} movie={movie} />)
                    }
                </section>
            </div>
        );
    }
}
const mapReduxStateToProps = reduxState => ({
    reduxState
});

export default withRouter(connect(mapReduxStateToProps)(MovieToCard));