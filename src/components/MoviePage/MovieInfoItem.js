import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'semantic-ui-css/semantic.min.css';
import { Item, Label } from 'semantic-ui-react';
import "../../../node_modules/video-react/dist/video-react.css";
import { Button } from 'semantic-ui-react'
//import classes from '*.module.css';



class MovieInfoItem extends Component {

    state = {
        watched: false
    }

    addToList = () => {
        this.setState({
            watched: !this.state.watched
        })
        this.props.dispatch({ type: "TURN_TRUE", payload: this.props.movie.id })
    }

    addDownload = () => {
        this.props.dispatch({type: "NEW_DOWNLOAD", payload: this.props.movie.id})
    }

    render() {
        const { classes } = this.props;
        return (
            <Item.Group divided key={this.props.movie.id}>
                <Item>
                    <Item.Image src={this.props.movie.image_url} />

                    <Item.Content>
                        <Item.Header as='a'>{this.props.movie.title}</Item.Header>
                        <Item.Meta>
                            <span className='cinema'>{this.props.movie.year}</span>
                        </Item.Meta>
                        <Item.Description>{this.props.movie.description}</Item.Description>
                        <Item.Extra>
                            <Label>{this.props.movie.length} minutes</Label>
                            <Label icon='globe' content='Additional Languages' />
                            <Button 
                            className="button"
                            onClick={this.addToList} >
                            {this.props.movie.viewed ?
                            
                            "Remove from Watchlist" : "Add to Watchlist"}
                            </Button>
                            <Button onClick={this.addDownload} className="button">Watch Now</Button>
                        </Item.Extra>
                    </Item.Content>
                </Item>
            </Item.Group>
        )
    }
}


const mapReduxStateToProps = reduxState => ({
    reduxState
});

export default connect(mapReduxStateToProps)(MovieInfoItem);