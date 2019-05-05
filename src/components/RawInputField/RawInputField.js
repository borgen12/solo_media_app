import React, { Component } from 'react';
import { sendFileToServer } from '../../requests/sendFormToServer';
import { Button, Icon } from 'semantic-ui-react'

class RawInputField extends Component {
    triggerFileSend = event => {
        const file = event.target.files[0];
        sendFileToServer(file);
    }

    render() {
        return (
            <div>
                <input type="file" onChange={this.triggerFileSend}/>
                <br/>
                {/* <Button onClick={this.triggerFileSend}>
                    <Icon name='cloud upload'/>
                    Upload File
                </Button> */}
            </div>
        );
    }
}
export default RawInputField;