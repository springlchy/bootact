import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = this.handleProps(props);
  }
  handleProps(props) {
    const {type, size, className, clickHandler, ...otherProps} = props;
    return {
      type: type,
      size: size,
      className: className,
      clickHandler: clickHandler,
      otherProps: otherProps,
      children: props.children
    };
  }
  render() {
    const {type, size, className, clickHandler, otherProps, children} = this.state;
    const defaultClassName = size ? 'btn btn-' + size : 'btn';
    const defaultType = type ? 'btn-' +type : 'btn-primary';
    var myClassName = defaultClassName + ' ' + defaultType;
    if (className) {
      myClassName += (' ' + className);
    }
    //delete this.props.type;
    //delete this.props.className;
    const userClick = clickHandler || this.myClickHandler;
    userClick.bind(this);
    return (
      <button type="button" className={myClassName} {...otherProps} onClick={userClick}>
      {children}
      </button>
    );
  }
  componentWillReceiveProps(newProps) {
    console.log("newProps", newProps);
    //return;
    this.setState(this.handleProps(newProps));
  }
  myClickHandler() {
  }
}

export default Button;