import React, {Component} from 'react';
import {Button} from "material-ui";

import AddIcon from 'material-ui-icons/Add';
import Transition from 'react-motion-ui-pack';

class ButtonsAddElement extends Component {

    render() {
        return (
            <div>
                <Transition
                    component={false} // don't use a wrapping component
                    enter={{
                        opacity: 1,
                    }}
                    leave={{
                        opacity: 0,
                        translateY: 250
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
                </Transition>
                <Button
                    fab
                    raised
                    color='primary'
                    style={{position: 'fixed', bottom: 250, right: 50}}
                >
                    <AddIcon/>
                </Button>
            </div>
        );
    }
}

export default ButtonsAddElement;