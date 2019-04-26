import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'semantic-ui-css/semantic.min.css';
import { Item, Label } from 'semantic-ui-react';
import "../../../node_modules/video-react/dist/video-react.css";
import Button from '@material-ui/core/Button';


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

    render() {
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
                            <Button onClick={this.addToList} className="button">
                            {this.props.movie.viewed ?
                            
                            "Remove from Watchlist" : "Add to Watchlist"}
                            </Button>
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

export default connect(mapReduxStateToProps)(MovieInfoItem)