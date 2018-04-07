import React, {Component} from 'react';
import './Row.css';

class Row extends Component {
    constructor(props) {
        super(props);
        this.state = this.handleProps(props);
    }
    render() {
        const {className, onClick, children, otherProps} = this.state;
        const myClassName = className ? 'row ' + className : 'row';
        return (
            <div className={myClassName} {...otherProps}>
            {children}
            </div>
        );
    }
    componentWillReceiveProps(newProps) {
        this.setState(this.handleProps(newProps));
    }
    handleProps(props) {
        const {className, onClick, ...otherProps} = props;
        return {
            className: className,
            onClick: onClick,
            otherProps: otherProps,
            children: props.children
        };
    }
}

export default Row;