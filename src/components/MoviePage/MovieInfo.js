import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'semantic-ui-css/semantic.min.css';
import { Item, Label } from 'semantic-ui-react';
import { Player } from 'video-react';
import "../../../node_modules/video-react/dist/video-react.css";


class MovieInfo extends Component {

    render() {
        return (
            <div>
                <h1>INFO</h1>
                {this.props.reduxState.movieInfo.movieInfoReducer.map(movie =>
                <section>
                    <Item.Group divided key ={movie.id}>
                        <Item>
                            <Item.Image src={movie.image_url} />

                            <Item.Content>
                                <Item.Header as='a'>{movie.title}</Item.Header>
                                <Item.Meta>
                                    <span className='cinema'>{movie.year}</span>
                                </Item.Meta>
                                <Item.Description>{movie.description}</Item.Description>
                                <Item.Extra>
                                    <Label>{movie.length} minutes</Label>
                                    <Label icon='globe' content='Additional Languages' />
                                </Item.Extra>
                            </Item.Content>
                        </Item>
                    </Item.Group>
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