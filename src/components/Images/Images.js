import React, { Component } from 'react';
import axios from 'axios';
import { Player } from 'video-react';

class Images extends Component {
    constructor(props) {
        super(props);
        this.state = {
            images: [],
        }
    }
    componentDidMount = () => {
        axios.get('api/post')
            .then(response => {
                this.setState({
                    images: response.data
                })
            })
            .catch(error => {
                console.log('Error getting images: ', error);
            })
    }

    render() {
        return (
            <div>
                {this.state.images.map((image, index) => {
                    return (
                        <div key={index} className="post">
                            
                            <Player
                                playsInline
                                //poster={movie.image_url}
                                src={image.media_url}
                            />
                            <button onClick={this.downloadMe} >Download</button>
                        </div>
                        
                    )
                })}
            </div>
        );
    }
}
export default Images;