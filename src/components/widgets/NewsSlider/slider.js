import React, { Component } from "react";

import axios from "axios";

class NewsSlider extends Component {
    state = {
        news: []
    };

    componentWillMount() {
        axios.get(`http://localhost:3004/articles`).then(response => {
            this.setState({
                news: response.data
            });
        });
    }

    render() {
        console.log(this.state.news);

        return (
            <div>
                <h1>Slider</h1>
            </div>
        );
    }
}

export default NewsSlider;
