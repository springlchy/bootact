import React, {Component} from 'react';
import './Dropdown.css';

class Dropdown extends Component {
    constructor(props){
        super(props);
        this.state = this.handleProps(props);
    }
    render() {
        const {className, overlay, onClick, children, otherProps} = this.state;
        const defaultClassName = 'dropdown';
        const myClassName = className ? defaultClassName + ' ' + className : defaultClassName;
        const userClick = onClick || this.myOnClick;
        userClick.bind(this);
        return (
            <div className={myClassName} {...otherProps} onClick={userClick}>
                {children}
                {overlay}
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
            <span className="caret"></span>
        );
    }
}

Dropdown.Item = Item;
Dropdown.Carcet = Carcet;

export default Dropdown;