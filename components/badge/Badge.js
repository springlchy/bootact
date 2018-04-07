import React, { Component } from 'react';
import './Badge.css';

class Badge extends Component {
  constructor(props) {
    super(props);
    this.state = this.handleProps(props);
  }
  handleProps(props) {
    const {text, className, ...otherProps} = props;
    return {
      text: text,
      className: className,
      otherProps: otherProps,
      children: props.children
    };
  }
  render() {
    const {text, className, otherProps} = this.state;
    const defaultClassName = 'badge';
    var myClassName = className ? (defaultClassName + ' ' + className) : defaultClassName;

    return (
      <span className={myClassName} {...otherProps}>
      {text}
      </span>
    );
  }
  componentWillReceiveProps(newProps) {
    console.log("newProps", newProps);
    //return;
    this.setState(this.handleProps(newProps));
  }
}

export default Badge;