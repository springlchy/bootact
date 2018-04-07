import React, { Component } from 'react';
import './Breadcrumb.css';

class Breadcrumb extends Component {
    constructor(props) {
        super(props);
        this.state = this.handleProps(props);
    }
    render() {
        const {className, children, otherProps} = this.state;
        const defaultClassName = 'breadcrumb';
        const myClassName = className ? defaultClassName + ' ' + className : defaultClassName;

        return (
            <ol className={myClassName} {...otherProps}>
            {children}
            </ol>
        );
    }
    componentWillReceiveProps(newProps) {
        this.setState(this.handleProps(newProps));
    }
    handleProps(props) {
        const {className, children, ...otherProps} = props;
        return {
            className: className,
            children: children,
            otherProps: otherProps
        };
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
Breadcrumb.Item = Item;

export default Breadcrumb;