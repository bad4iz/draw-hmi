import React, {Component} from 'react';
import './ElemetnHMI.css';
import logo from '../logo.svg';

import MenuElement from "./menuElement";

class Element extends Component {

    state = {
        x: this.props.stat.x || 0,
        y: this.props.stat.y || 0,
        id: this.props.stat.id  || 0,
        img: this.props.stat.img || logo
    };

    isChange = () => {
        if (this.props.cannotChange) {

        }
    };

    componentDidMount() {
        // drawHMI(this);
    };

    componentDidUpdate() {
        //     this.addEventListener("mousedown", function (e) {
        //         // drawHMI(this, e);
        //     });
    };

    onMouseDownHandler = (event) => {
        this.props.onMouseDownHandler(this.refs.element, event);
    };

    setImage = (newImg) => {
        this.setState({
            img: newImg
        });
        console.log(this.state)
    }

    render() {
        const {x, y, id, img} = this.state;
        const myStyle = {
            position: 'absolute',
            left: x,
            top: y
        };

        return (
            <div id={id} ref="element" className="Element" onMouseDown={this.onMouseDownHandler} style={myStyle}>
                {
                    !this.props.cannotChange &&
                    <MenuElement id={id}
                    setImage={this.setImage}
                    />
                }

                <img  src={img} className="App-logo" alt="logo" />
            </div>
        );
    }
};

export default Element;
