import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'semantic-ui-css/semantic.min.css';
import { Player } from 'video-react';
import "../../../node_modules/video-react/dist/video-react.css";
import MovieInfoItem from './MovieInfoItem';


class MovieInfo extends Component {

    addToList = () => {
        this.props.dispatch({type: "TURN_TRUE", payload: this.props.movie.id})
    }

    render() {
        return (
            <div>
                <h1>INFO</h1>
                {this.props.reduxState.movieInfo.movieInfoReducer.map(movie =>
                <MovieInfoItem key={movie.id} movie={movie}/>

                )}
                {this.props.reduxState.movieInfo.movieInfoReducer.map(movie =>
                <section key={movie.id}>
                    
                     <Player
                        playsInline
                        poster={movie.image_url}
                        src={movie.video_url}
                    />
                </section>
                )}
            </div>
        )
    }
}     

const mapReduxStateToProps = reduxState => ({
    reduxState
});

export default connect(mapReduxStateToProps)(MovieInfo)