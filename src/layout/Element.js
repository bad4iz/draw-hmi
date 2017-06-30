import React, {Component} from 'react';
import './ElemetnHMI.css';
import logo from '../logo.svg';

import MenuElement from "./menuElement";
import SimpleMenu from "./SimpleMenu";

class Element extends Component {

    state = {
        x: this.props.stat.x || 0,
        y: this.props.stat.y || 0,
        id: this.props.stat.id || 0,
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
    };

    onMouseDownHandler = (event) => {
        this.props.onMouseDownHandler(this.refs.element, event);
    };

    setImage = (newImg) => {
        this.setState({
            img: newImg
        });
        // console.log(this.state);
    }

    componentDidUpdate(prevProps, prevState) {

        const stateImg = this.state.img.substring(this.state.img.indexOf('img'));
        const prevStateImg = prevState.img.substring(prevState.img.indexOf('img'));

        if (stateImg !== prevStateImg) {
            this.props.onChangeHandler(this.refs.element);
            console.log('componentDidUpdate');
        }
        // в prevProps содержится объект с предыдущими параметрами
        // в prevState содержится объект с состоянием до изменения
        // измененные параметры и состояние могут быть получены через this.props и this.state
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
                    this.props.cannotChange &&
                    <div>
                        {/*<MenuElement*/}
                            {/*id={id}*/}
                            {/*imgUrl={img}*/}
                            {/*setImage={this.setImage}*/}
                        {/*/>*/}
                        <SimpleMenu/>
                    </div>
                }

                <img src={img} className="App-logo" alt="logo"/>
            </div>
        );
    }
}
;

export default Element;
