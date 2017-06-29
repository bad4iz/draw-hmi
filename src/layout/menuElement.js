import React, {Component} from 'react';
import {IconButton, Menu, MenuItem} from "react-mdl";
import images from '../component/images.json';
import { SelectField, Option } from 'react-mdl-selectfield';

class menuElement extends Component {

    handleSelected = (event, key, payload) => {
        console.log(event);
        console.log(key);
        const newImage = images.filter(item => {
            return item.id == event;
        });
        this.props.setImage(newImage[0].url)
    }
    render() {
    console.log('render');
      return (
            <div style={{right: 0, position: 'absolute', zIndex: 9}}>
                <IconButton name="more_vert" id={this.props.id + "demo-menu-lower-left"} />
                <Menu target={this.props.id + "demo-menu-lower-left"} style={{ position: 'relative', height: '200px', width: '350px'}}>
                    <SelectField onChange={ this.handleSelected } label={'Выбрать изображение'} value={'sdfd45asd'}>
                        {images.map(user =>
                            <Option key={user.id} value={user.id}>
                                {` ${user.name}` }
                            </Option>
                        )}
                    </SelectField>
                    <MenuItem>Yet Another Action</MenuItem>
                </Menu>
            </div>
        );
    }
}

export default menuElement;