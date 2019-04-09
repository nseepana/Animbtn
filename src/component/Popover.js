import React, { Component } from 'react';
import AnimDropletButton from './AnimDropletButton';
import './Popover.css';

export default class Popover extends Component {

    constructor(state) {
        super(state);
        this.state = {
            isOpen: false,
            openPopover: false
        }
        this.containerRef = React.createRef();
        this.openPopoverHandler = this.openPopoverHandler.bind(this);
    }

    openPopoverHandler(state) {
        console.log(state);
        // const popoverRect = this.containerRef.current.getBoundingClientRect();
        this.setState(state => ({ openPopover: !state.openPopover, isOpen: !state.isOpen }));
    }

    componentDidMount() {
        // console.log(this.containerRef.current.getBoundingClientRect());
    }


    render() {
        let openPopover = this.state.openPopover;
        let popover;
        if (openPopover) {
            popover = <div ref={this.containerRef} className='popover'>
                <h1>popover</h1>
            </div>
        }
        return (
            <div>
                <AnimDropletButton clickHandler={this.openPopoverHandler}></AnimDropletButton>
                {popover}
            </div>
        )
    }
}