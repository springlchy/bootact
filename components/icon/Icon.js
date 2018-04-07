import React, {Component} from 'react';
import './Icon.css';

class Icon extends Component {
    constructor(props) {
        super(props);
        this.state = this.handleProps(props);
    }
    render() {
        const {type, className, otherProps} = this.state;
        const prefix = 'glyphicon';
        var myClassName = prefix + ' ' + prefix + '-' + type;
        if (className) {
            myClassName += (' ' + className);
        }
        return (
            <span className={myClassName} {...otherProps}></span>
        );
    }
    handleProps(props) {
        const {type, className, ...otherProps} = props;
        return {
            type: type,
            className,
            otherProps
        };
    }
    componentWillReceiveProps(newProps) {
        this.setState(this.handleProps(newProps));
    }
}

export default Icon;