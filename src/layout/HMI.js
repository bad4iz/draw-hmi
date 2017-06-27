import React, {Component} from 'react';
import MainMenu from "./MainMenu";
import {Content, Header, Layout, Navigation} from "react-mdl";
import Element from "./Element";

class HMI extends Component {

    state = {
        elements: [],
        isChange: false
    };

    _updateLocalStorage = () => {
        console.log('_updateLocalStorage()');
        const elements = JSON.stringify(this.state.elements);
        localStorage.setItem('elements', elements);
    };

    mousedownHandler = (event) => {
        if (this.state.isChange) return;

        const handleElemetnChange = this.handleElemetnChange.bind(this);

        console.log(event.target.id);
        const elementToDrag = event.target;

        // координаты мыши в начале перетаскивания.
        var startX = event.clientX,
            startY = event.clientY;

        // начальные координаты элемента, который будет перемещаться.
        var origX = elementToDrag.offsetLeft,
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
            const elem = e.target;
            handleElemetnChange(elem, {
                x:  elem.offsetLeft,
                y: elem.offsetTop
            })
        }

        function upHandler(e) {
            if (!e) e = window.event;

            document.removeEventListener("mouseup", upHandler, true);
            document.removeEventListener("mousemove", moveHandler, true);

        }

        console.log(startX, startY)
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


    handleElemetnChange(newElement, changes) {
    //  console.log('handleElemetnChange');
    //  const id = newElement.id;
    //  const newElem = this.state.elements.filter();
    //  this.setState({elements: newElem});
    }

    componentDidUpdate() {
        this._updateLocalStorage();
        console.log('componentDidUpdate');
    }

    render() {
        return (
            <div className="HMI">
                <Layout>
                    <Header title="Меню">
                        <Navigation>
                            <a href="#1">Link</a>
                            <a href="#2">Link</a>
                            <a href="#3">Link</a>
                            <a href="#4">Link</a>
                        </Navigation>
                    </Header>
                    <MainMenu addElemetnHandler={this.addElemetnHandler}/>
                    <Content>
                        <div className="page-content">
                            {
                                this.state.elements.map(element => {
                                    return (
                                        <Element
                                            ref="theInput"
                                            onMouseDownHandler={this.mousedownHandler}
                                            isChange={this.state.isChange}
                                            key={element.id}
                                            stat={element}/>
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
