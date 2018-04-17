import React, {Component} from 'react';
import {findDOMNode} from 'react-dom';
import './Dropdown.css';

import Icon from '../icon/Icon';

class Dropdown extends Component {
    constructor(props){
        super(props);
        this.state = this.handleProps(props);
        this.state.menuWrapClass = 'hidden';
    }
    render() {
        const {className, overlay, onClick, children, otherProps} = this.state;
        const defaultClassName = 'dropdown';
        const myClassName = className ? defaultClassName + ' ' + className : defaultClassName;
        const userClick = onClick || this.myOnClick;
        userClick.bind(this);
        return (
            <div className={myClassName} {...otherProps} onClick={userClick} onMouseOut={this.myOnMouseOut.bind(this)}>
                <div className="dropdown-item-wraper" onMouseEnter={this.myOnMouseEnter.bind(this)}>{children}</div>
                <div className={this.state.menuWrapClass} ref="menuWraper">{overlay}</div>
            </div>
        );
    }
    componentWillReceiveProps(newProps) {
        this.setState(this.handleProps(newProps));
    }
    handleProps(props) {
        const {className, overlay, onClick, children, ...otherProps} = props;
        return {
            className: className,
            overlay: overlay,
            onClick: onClick,
            children: children,
            otherProps: otherProps
        };
    }
    myOnClick(e) {
        console.log(e.target);
    }
    myOnMouseEnter(e) {
        this.setState({
            menuWrapClass: ''
        });
    }
    myOnMouseOut(e) {
        console.log(e);
        const me = findDOMNode(this);
        const myRect = me.getBoundingClientRect();
        const menuWraper = this.refs.menuWraper.firstElementChild; 
        const mwRect = menuWraper.getBoundingClientRect();
        const top = Math.min(myRect.top, mwRect.top);
        const bot = Math.max(myRect.bottom, mwRect.bottom);
        const left = Math.min(myRect.left, mwRect.left);
        const right = Math.max(myRect.right, mwRect.right);
        const x = e.clientX, y = e.clientY;
         console.log("x=",x);console.log("y=",y);
         console.log(myRect);
         console.log(mwRect);
        if (y < top || y > bot) {
            this.setState({
                menuWrapClass: 'hidden'
            });
            return;
        } else if (x >= myRect.left && x<=myRect.right && y>=myRect.top && y<=myRect.bottom) {
        } else if (x >= mwRect.left && x<=mwRect.right && y>=mwRect.top && y<=mwRect.bottom) {
        } else {
            this.setState({
                menuWrapClass: 'hidden'
            });
        }
    }
}

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = this.handleProps(props);
    }
    render() {
        const {otherProps, children} = this.state;

        return (
            <li {...otherProps}>
            {children}
            </li>
        );
    }
    componentWillReceiveProps(newProps) {
        this.setState(this.handleProps(newProps));
    }
    handleProps(props) {
        const {children, ...otherProps} = props;
        return {
            otherProps: otherProps,
            children: children
        };
    }
}

class Carcet extends Component {
    render() {
        return (
            <Icon type="menu-down" style={{top: 0, lineHeight: 0}}/>
        );
    }
}

Dropdown.Item = Item;
Dropdown.Carcet = Carcet;

export default Dropdown;