import React, { Component } from 'react';
import './Label.css';

class Label extends Component {
  constructor(props) {
    super(props);
    this.state = this.handleProps(props);
  }
  handleProps(props) {
    const {type, className, clickHandler, ...otherProps} = props;
    return {
      type: type,
      className: className,
      clickHandler: clickHandler,
      otherProps: otherProps,
      children: props.children
    };
  }
  render() {
    const {type, className, clickHandler, otherProps, children} = this.state;
    const defaultClassName = 'label';
    let myClassName = (type && type!=='default') ? (defaultClassName + ' label-' + type) : (defaultClassName + ' label-default');
    if (className) {
        myClassName += (' ' + className);
    }
    const userClick = clickHandler || this.myClickHandler;
    userClick.bind(this);
    return (
      <span className={myClassName} {...otherProps} onClick={userClick}>
      {children}
      </span>
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

export default Label;