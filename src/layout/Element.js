import React, {Component} from 'react';
import './ElemetnHMI.css';
import logo from '../logo.svg';

class Element extends Component {

    isChange = () => {
        if (this.props.isChange) {

        }
    };

    componentDidMount() {
        // drawHMI(this);
    };

    componentDidUpdate() {
        //     this.addEventListener("mousedown", function (e) {
        //         // drawHMI(this, e);
        //     });
    }

    render() {
        const {x, y, id} = this.props.stat;
        const myStyle = {
            position: 'absolute',
            left: x,
            top: y
        };

        return (
            <div className="Element">
                <img id={id} src={logo} className="App-logo" alt="logo" onMouseDown={this.props.onMouseDownHandler}
                     style={myStyle}/>

            </div>

        );
    }
}

export default Element;
