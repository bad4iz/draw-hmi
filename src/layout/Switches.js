// @flow

import React, { Component } from 'react';
import Switch from 'material-ui/Switch';

export default class Switches extends Component {

    onChangeHandler = (event, checked) => {
        // this.setState({ checkedA: checked })
        this.props.addElemetnHandler(checked);
    }
    render() {
        return (
            <div>
                <Switch
                    checked={this.props.cannotChange}
                    onChange={this.onChangeHandler}
                    aria-label="checkedA"
                    label="разрешить изменения"
                />
                {/*<Switch*/}
                    {/*checked={this.state.checkedB}*/}
                    {/*onChange={(event, checked) => this.setState({ checkedB: checked })}*/}
                    {/*aria-label="checkedB"*/}
                {/*/>*/}
                {/*<Switch checked={this.state.checkedC} aria-label="checkedC" disabled />*/}
                {/*<Switch checked={this.state.checkedD} aria-label="checkedD" disabled />*/}
            </div>
        );
    }
}