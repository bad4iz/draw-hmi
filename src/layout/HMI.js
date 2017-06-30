import React, {Component} from 'react';
import MainMenu from "./MainMenu";
import {Content, Header, Layout, Navigation} from "react-mdl";
import Element from "./Element";
import AppBar from "./AppBar";

class HMI extends Component {

    state = {
        elements: [],
        cannotChange: false
    };

    _updateLocalStorage = () => {
        const elements = JSON.stringify(this.state.elements);
        localStorage.setItem('elements', elements);
    };

    mousedownHandler = (elementToDrag, event) => {
        if (this.state.cannotChange) return;

        const handleElementChange = this.handleElementChange.bind(this);

        // координаты мыши в начале перетаскивания.
        var startX = event.clientX,
            startY = event.clientY;

        // начальные координаты элемента, который будет перемещаться.
        var origX = elementToDrag.offsetLeft,
            origId = elementToDrag.id,
            origY = elementToDrag.offsetTop;

        // разница между координатами мыши и координатами перетаскиваемого элемента.
        var deltaX = startX - origX,
            deltaY = startY - origY;

        // Регистрация событий mouseup и mousemove
        document.addEventListener("mousemove", moveHandler, true);
        document.addEventListener("mouseup", upHandler, true);

        function moveHandler(e) {

            if (!e) e = window.event;

            // перемещаем элемент с учетом отступа от первоначального клика.
            elementToDrag.style.left = (e.clientX - deltaX) + "px";
            elementToDrag.style.top = (e.clientY - deltaY) + "px";
        }

        function upHandler(e) {
            if (!e) e = window.event;

            document.removeEventListener("mouseup", upHandler, true);
            document.removeEventListener("mousemove", moveHandler, true);

            handleElementChange(elementToDrag);
        }

        elementToDrag.ondragstart = function () {
            return false;
        };
    }

    addElemetnHandler = () => {
        const newElements = this.state.elements.slice();
        const element = {
            id: Date.now(),
            x: 500,
            y: 500
        };
        newElements.push(element);
        this.setState({elements: newElements});
    };

    componentDidMount() {
        const localElements = JSON.parse(localStorage.getItem('elements'));
        if (localElements) {
            this.setState({elements: localElements});
        }
    }

    handleElementChange = (newElement) => {
        const newElementLocal = {
            id: newElement.id,
            x: newElement.offsetLeft,
            y: newElement.offsetTop,
            img: newElement.querySelector('img').src
        };

        let tmpElement = this.state.elements.slice();
        const newElem = tmpElement.map(item => {
            return (newElementLocal.id == item.id) ? newElementLocal : item;
        });
        this.setState({elements: newElem});
    }

    componentDidUpdate() {
        this._updateLocalStorage();
    };

    handleChange = (event) => {
        this.setState({cannotChange: !this.state.cannotChange})
    };

    onChangeHandler = (item) => {
        console.log('item');
        console.log(item.querySelector('img').src);

        this.handleElementChange(item);
    }

    render() {
        return (
            <div className="HMI">
                <AppBar   addElemetnHandler={this.addElemetnHandler}/>
                <Layout>
                    <Header title="Меню">

                    </Header>
                    <MainMenu cannotChange={this.state.cannotChange} inHandleChange={this.handleChange}
                              addElemetnHandler={this.addElemetnHandler}/>
                    <Content>
                        <div className="page-content">
                            {
                                this.state.elements.map(element => {
                                    return (
                                        <Element
                                            ref="theInput"
                                            onMouseDownHandler={this.mousedownHandler}
                                            cannotChange={this.state.cannotChange}
                                            key={element.id}
                                            stat={element}
                                            onChangeHandler={this.onChangeHandler}
                                        />
                                    )
                                })
                            }
                        </div>
                    </Content>
                </Layout>
            </div>
        );
    }


}

export default HMI;
