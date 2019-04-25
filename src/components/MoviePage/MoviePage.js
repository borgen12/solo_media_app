import React, { Component } from 'react';
import MovieToCard from './MovieToCard';
import './MoviePage.css';
import { connect } from 'react-redux';
import Divider from '@material-ui/core/Divider';
import MovieCard from './MovieCard';

class MoviePage extends Component {

    componentDidMount = () => {
        this.props.dispatch({ type: 'GET_MOVIE' })
    } 

    render () {
        return (
            <div>
                <section>

                    <h2 className="recent">Recently Watched</h2>
                    {this.props.reduxState.movies.movieReducer.map(movie =>
                    <section key={movie.id} className="watched">
                            {movie.viewed ?
                                <MovieCard key={movie.id} movie={movie} />: <span></span> }
                    </section>
                        )}
                </section>
                
                <Divider />
                
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