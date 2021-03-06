import React, { Component } from 'react';
import MovieToCard from './MovieToCard';
import './MoviePage.css';
import { connect } from 'react-redux';
import Divider from '@material-ui/core/Divider';
import MovieCard from './MovieCard';
import Footer from '../Footer/Footer';

class MoviePage extends Component {

    componentDidMount = () => {
        this.props.dispatch({ type: 'GET_MOVIE' })
    } 

    render () {
        return (
            <div className="moviepage">
                <section>

                    <h2 className="recent">Watchlist</h2>
                    {this.props.reduxState.movies.movieReducer.map(movie =>
                    <section key={movie.id} className="watched">
                            {movie.viewed ?
                                <MovieCard key={movie.id} movie={movie} />: <span></span> }
                    </section>
                        )}
                </section>
                
                <Divider />
                
                <section id="display">
                    <h2>All Movies</h2>
                    <MovieToCard/> 
                </section>
                <Footer/>
            </div>
        )
    }
}

const mapReduxStateToProps = reduxState => ({
    reduxState
});

export default connect(mapReduxStateToProps)(MoviePage)