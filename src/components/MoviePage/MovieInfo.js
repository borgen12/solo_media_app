import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'semantic-ui-css/semantic.min.css';
import { Player } from 'video-react';
import "../../../node_modules/video-react/dist/video-react.css";
import MovieInfoItem from './MovieInfoItem';
import Footer from '../Footer/Footer';



class MovieInfo extends Component {
    


    render() {
        return (
            <div>
                <h1>INFO</h1>
                
                {this.props.reduxState.movieInfo.movieInfoReducer.map(movie =>
                <MovieInfoItem key={movie.id} movie={movie}/>

                )}
                {/* <Images /> */}
                {this.props.reduxState.downloads.downloadReducer.map(movie =>
                <section key={movie.id}>
                    
                     <Player
                        playsInline
                        //poster={movie.image_url}
                        src={movie.media_url}
                    />
                </section>
                )}
                <Footer/>
            </div>
        )
    }
}     

const mapReduxStateToProps = reduxState => ({
    reduxState
});

export default connect(mapReduxStateToProps)(MovieInfo)