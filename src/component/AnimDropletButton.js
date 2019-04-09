import React, { Component } from 'react';

import './AnimDropletButton.css';

class AnimDropletButton extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            isOpen: false,
            pos: {}
        }
        this.btnPos = React.createRef();
    }

    handleClick() {
        this.setState(state => ({
            isOpen: !state.isOpen,
            pos: this.btnPos.current.getBoundingClientRect()
        }))


        this.props.clickHandler(this.state);


    }
    render() {
        const dropletClassName = [
            "droplet", this.state.isOpen ? "state-close" : ""
        ];
        const indicatorClassName = [
            "indicator", this.state.isOpen ? "state-close" : ""
        ];
        return (
            <div ref={this.btnPos} className={dropletClassName.join(" ").trim()} onClick={this.handleClick}>
                <div className={indicatorClassName.join(" ").trim()}>+</div>
            </div>
        );
    }
}

export default AnimDropletButton;
