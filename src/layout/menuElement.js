// @flow weak
import React, { Component } from 'react';
import Menu, { MenuItem } from 'material-ui/Menu';
import DeleteForeverIcon from 'material-ui-icons/DeleteForever';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui-icons/MoreVert';
// import SelectField from 'material-ui/SelectField';

// components my
import images from '../component/images.json';
import TextField from '../component/defaultLayout_MUI/textField';

class MenuElement extends Component {
    state = {
        anchorEl: undefined,
        open: false,
    };

    handleSelected = (key) => {
        const newImage = images.filter(item => {
            return item.id == key;
        });
        this.props.setImage(newImage[0].url)
    }


    button = undefined;

    handleClick = event => {
        this.setState({ open: true, anchorEl: event.currentTarget });
    };

    handleRequestClose = () => {
        this.setState({ open: false });
    };

    render() {
        return (
            <div>
                <IconButton
                    style={{right: '-40px', top: '-40px', position: 'absolute', zIndex: 9}}
                    aria-owns="simple-menu" aria-haspopup="true" onClick={this.handleClick}>
                   <MoreVertIcon />
                </IconButton >
                <Menu
                    id="simple-menu"
                    anchorEl={this.state.anchorEl}
                    open={this.state.open}
                    onRequestClose={this.handleRequestClose}
                >
                    <TextField
                        label="название"
                        placeholder='Введите название элемента'
                    />
                    <MenuItem onClick={this.handleRequestClose}>My account</MenuItem>
                    {/*<SelectField onChange={ this.handleSelected } label={'Выбрать изображение'} value={2}>*/}

                        {/*{images.map(user =>*/}
                            {/*<Option key={user.id} value={user.id}>*/}
                                {/*{` ${user.name}` }*/}
                            {/*</Option>*/}
                        {/*)}*/}
                    {/*</SelectField>*/}
                    <MenuItem onClick={this.handleRequestClose}>Logout</MenuItem>
                    <MenuItem >
                        <DeleteForeverIcon/>
                    </MenuItem>

                    {/*<SelectField>*/}
                        {/*<MenuItem value={1} primaryText="Custom width" />*/}
                        {/*<MenuItem value={2} primaryText="Every Night" />*/}
                        {/*<MenuItem value={3} primaryText="Weeknights" />*/}
                        {/*<MenuItem value={4} primaryText="Weekends" />*/}
                        {/*<MenuItem value={5} primaryText="Weekly" />*/}
                    {/*</SelectField>*/}

                </Menu>
            </div>
        );
    }
}

export default MenuElement;