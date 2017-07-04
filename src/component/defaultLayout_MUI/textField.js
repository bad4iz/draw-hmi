// @flow

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import TextField from 'material-ui/TextField';

const styleSheet = createStyleSheet('TextFields', theme => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    input: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
    },
}));

class TextFields extends Component {

    handleChange = (event) => {
        this.props.handleChange(event.target.value)
    }

     render() {

        const { classes, helperText, label, placeholder } = this.props;

        return (
            <div className={classes.container}>
                <TextField
                    id="placeholder"
                    label={label}
                    className={classes.input}
                    type="text"
                    InputProps={{ placeholder }}
                    helperText={helperText}
                    marginForm

                    onChange={this.handleChange}
                />
            </div>
        );
    }
}

TextFields.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(TextFields);