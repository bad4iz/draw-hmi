import React, {Component} from 'react';
import MainMenu from "./MainMenu";
import {Content, Header, Layout, Navigation} from "react-mdl";
import Element from "./Element";

class HMI extends Component {

    state = {
        elements: [
            {
                id: 50,
                x: 50,
                y: 50
            },
            {
                id: 51,
                x: 100,
                y: 50
            },
            {
                id: 54,
                x: 105,
                y: 500
            },
            {
                id: 56,
                x: 500,
                y: 100
            }],
        isChange: false
    };

    mousedownHandler = (event) => {

        if (this.state.isChange) return;
        console.log(event);

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

        this.setState({ elements: newElements });
        console.log(654465465);
    };

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
                                            stat={element} />
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
