import React, { Component } from 'react';
import MainMenu from "../component/MainMenu";
import {Content, Header, Layout, Navigation} from "react-mdl";

class HMI extends Component {

    render() {
        return (
            <div className="HMI">
                <Layout>
                    <Header title="Title" scroll>
                        <Navigation>
                            <a href="#">Link</a>
                            <a href="#">Link</a>
                            <a href="#">Link</a>
                            <a href="#">Link</a>
                        </Navigation>
                    </Header>
                    <MainMenu/>
                    <Content>
                        <div className="page-content" />
                    </Content>
                </Layout>
            </div>
        );
    }
}

export default HMI;
