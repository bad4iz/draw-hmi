import React, {Component} from 'react';
import Element from "./Element";
import AppBar from "./AppBar";
import {Button} from "material-ui";

// icon
import AddIcon from 'material-ui-icons/Add';
import CloseIcon from 'material-ui-icons/Close';
import ButtonsAddElement from "./addButtonElement/ButtonsAddElement";

import Transition from 'react-motion-ui-pack';
import {spring} from 'react-motion';

class HMI extends Component {

    state = {
        elements: [],
        cannotChange: true,
        visibleAddButtonElement: false
    };

    _updateLocalStorage = () => {
        const elements = JSON.stringify(this.state.elements);
        localStorage.setItem('elements', elements);
    };

    mousedownHandler = (elementToDrag, event) => {
        if (!this.state.cannotChange) return;

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

    addElementHandler = () => {
        this.setState({visibleAddButtonElement: !this.state.visibleAddButtonElement})
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

    allowEditingHandler = (event) => {
        console.log(event);
        this.setState({cannotChange: event})
    };

    onChangeHandler = (item) => {
        console.log('item');
        console.log(item.querySelector('img').src);

        this.handleElementChange(item);
    }

    render() {
        return (
            <div className="HMI">
                <AppBar
                    allowEditingHandler={this.allowEditingHandler}
                    cannotChange={this.state.cannotChange}
                />
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
                { this.state.cannotChange &&
                <div>
                    {this.state.visibleAddButtonElement ? <ButtonsAddElement /> : ''}

                    <Transition
                        component={false} // don't use a wrapping component
                        enter={{
                            opacity: 1,
                            scale: 1,
                            rotate: 0
                        }}
                        leave={{
                            opacity: 0,
                            translateY: 650,
                            scale: 0,
                            rotate: 360
                        }}
                    >
                        <Button
                            fab
                            raised
                            color='primary'
                            style={{position: 'fixed', bottom: 50, right: 50}}
                            onClick={this.addElementHandler}
                        >

                            { this.state.visibleAddButtonElement ? (
                                <Transition
                                    enter={{
                                        rotate: 0
                                    }}
                                    leave={{
                                        rotate: 180
                                    }}
                                >
                                    <CloseIcon />

                                </Transition>
                            ) : (
                                <Transition
                                    enter={{
                                        rotate: 180
                                    }}
                                    leave={{
                                        rotate: 0
                                    }}
                                >
                                <AddIcon/>
                                </Transition>

                            )}


                        </Button>
                    </Transition>
                </div>
                }
            </div>
        );
    }


}

export default HMI;
