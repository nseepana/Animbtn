import React, { Component } from 'react';

import './AnimDropletButton.css';

class AnimDropletButton extends Component {
    constructor(props){
        super(props);
        this.state = {isOpen: true};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){  
        // console.log("cool"); 
        this.setState(state => ({
            isOpen: !state.isOpen
        }));
    }
    render() {
        const dropletClassName = [
            "droplet", this.state.isOpen ? "": "state-close"
        ];
        const indicatorClassName = [
            "indicator", this.state.isOpen ? "": "state-close"
        ];
        return (
            <div className={dropletClassName.join(" ").trim()} onClick={this.handleClick}>
                <div className={indicatorClassName.join(" ").trim()}>+</div>
            </div>
        );
    }
}

export default AnimDropletButton;
