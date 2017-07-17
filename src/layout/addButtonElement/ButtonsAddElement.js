import React, {Component} from 'react';
import {Button} from "material-ui";

import AddIcon from 'material-ui-icons/Add';
import Transition from 'react-motion-ui-pack';

class ButtonsAddElement extends Component {

    render() {
        return (
            <div>
                <Transition

                    leave={{
                        translateY: 0,
                        scale: 0.2,
                        rotate: 360,

                    }}
                    onLeave={{
                        translateY: 0,
                        scale: 2,
                        rotate: 360,

                    }}
                    enter={{
                        scale: 0.7,
                        rotate: 0

                    }}
                >
                    <Button
                        fab
                        raised
                        color='primary'
                        style={{position: 'fixed', bottom: 150, right: 50}}
                    >
                        <AddIcon/>
                    </Button>
                    <Button
                        fab
                        raised
                        color='primary'
                        style={{position: 'fixed', bottom: 250, right: 50}}
                    >
                        <AddIcon/>
                    </Button>
                </Transition>
            </div>
        );
    }
}

export default ButtonsAddElement;