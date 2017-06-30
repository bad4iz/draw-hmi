import React, {Component} from 'react';
import {IconButton, Menu, MenuItem, Textfield} from "react-mdl";
import images from '../component/images.json';
import {SelectField, Option} from 'react-mdl-selectfield';

class menuElement extends Component {

    state = {}

    getElement = () => {
        const newElement = images.filter(item => {
            return item.url == this.props.imgUrl;
        });
        return newElement;
    };

    componentWillMount() {
        // this.props.imgUrl.substring(this.props.imgUrl.indexOf('img'));
        // this.setState
        // urlImg: this.props.imgUrl.substring(this.props.imgUrl.indexOf('img')),
        //     element: images.filter(item => {
        //     return item.url == this.props.imgUrl.substring(this.props.imgUrl.indexOf('img'));
        // })
    }

    handleSelected = (key) => {
        const newImage = images.filter(item => {
            return item.id == key;
        });
        this.props.setImage(newImage[0].url)
    }

    render() {
        return (
            <div style={{right: 0, position: 'absolute', zIndex: 9}}>
                <IconButton name="more_vert" id={this.props.id + "demo-menu-lower-left"}/>
                <Menu target={this.props.id + "demo-menu-lower-left"}
                      style={{position: 'relative', height: '200px', width: '350px'}}>
                    <div>
                        <Textfield
                            onChange={() => {}}
                            label="Text..."
                            style={{width: '200px'}}
                        />

                    </div>
                    <SelectField onChange={ this.handleSelected } label={'Выбрать изображение'} value={2}>

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
