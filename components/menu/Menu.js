import React, { Component } from 'react';
import './Menu.css';

import Icon from '../icon/Icon';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = this.handleProps(props);
    }
    render() {
        const {className, onClick,children, otherProps} = this.state;
        const defaultClassName = 'menu';
        const myClassName = className ? defaultClassName + ' ' + className : defaultClassName;
        const userClick = onClick || this.myOnClick;
        userClick.bind(this);
        return (
            <ul className={myClassName} {...otherProps}>
            {children}
            </ul>
        );
    }
    componentWillReceiveProps(newProps) {
        this.setState(this.handleProps(newProps));
    }
    handleProps(props) {
        const {className, onClick, children, ...otherProps} = props;
        return {
            className: className,
            onClick: onClick,
            children: children,
            otherProps: otherProps
        };
    }
    myOnClick(e) {
        console.log(e.target);
    }
}

class Submenu extends Component {
    constructor(props) {
        super(props);
        this.state = this.handleProps(props);
        this.state.isMenuOpen = false;
        this.keys = [];
    }
    render() {
        const {title, className, onClick,children, otherProps, menuIcon, isMenuOpen} = this.state;
        const defaultClassName = 'menu menu-sub';
        var myClassName = className ? defaultClassName + ' ' + className : defaultClassName;
        const userClick = onClick || this.myOnClick;
        if (isMenuOpen) {
            myClassName += (' menu-open');
        }
        this.keys = children.map(item => (item.key));
        return (
            <li className={myClassName} {...otherProps} onClick={userClick.bind(this)}>
                <a href={"javascript:void(0);"} onClick={this.mySubmenuClick.bind(this)}>{title}<Icon className="pull-right" type={isMenuOpen ? 'menu-down' : 'menu-left'}/></a>
                <ul className="menu" style={{display: isMenuOpen ? 'block' : 'none'}}>
                    {children}
                </ul>
            </li>
        );
    }
    componentWillReceiveProps(newProps) {
        this.setState(this.handleProps(newProps));
    }
    handleProps(props) {
        const {title, className, onClick, children, ...otherProps} = props;
        return {
            title: title,
            className: className,
            onClick: onClick,
            children: children,
            otherProps: otherProps
        };
    }
    myOnClick(e) {
        var target = e.target;
        console.log(target);
        var parent = target.parentElement.parentElement;
        var index = 0;
        
        for (var ele = parent.firstElementChild; ele.firstElementChild != target; ele=ele.nextElementSibling) {
            index+=1;
        }
        console.log(index);
        console.log(this.keys[index]);
    }
    mySubmenuClick(e) {
        var t = this.state;
        this.setState({
            isMenuOpen: !t.isMenuOpen,
        });
        e.stopPropagation();
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
            <li>
                <a {...otherProps}>{children}</a>
            </li>
        );
    }
    componentWillReceiveProps(newProps) {
        this.setState(this.handleProps(newProps));
    }
    handleProps(props) {
        const {children, ...otherProps} = props;
        return {
            children: children,
            otherProps: otherProps
        };
    }
}

class Divider extends Component{
    render() {
        return (
            <li role="separator" className="divider"></li>
        );
    }
}

Menu.Submenu = Submenu;
Menu.Item = Item;
Menu.Divider = Divider;

export default Menu;