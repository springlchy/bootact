import React, { Component } from 'react';
import {findDOMNode} from 'react-dom';
import './Alert.css';

class Alert extends Component {
  constructor(props) {
    super(props);
    this.state = this.handleProps(props);
  }
  handleProps(props) {
    const {type, withClose, className, clickHandler, ...otherProps} = props;
    return {
      type: type,
      withClose: withClose || false,
      className: className,
      clickHandler: clickHandler,
      otherProps: otherProps,
      children: props.children
    };
  }
  render() {
    const {type, withClose, className, clickHandler, otherProps, children} = this.state;
    const defaultClassName = 'alert';
    var myClassName = type ? (defaultClassName + ' alert-' + type) : defaultClassName ;
    if (className) {
        myClassName += (' ' + className);
    }
    const userClick = clickHandler || this.myClickHandler;
    userClick.bind(this);
    return (
      <div role="alert" className={myClassName} {...otherProps} onClick={userClick}>
      {withClose ? (
          <button onClick={this.onClose.bind(this)} type="button" className="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
      ) : ''}
      {children}
      </div>
    );
  }
  componentWillReceiveProps(newProps) {
    console.log("newProps", newProps);
    //return;
    this.setState(this.handleProps(newProps));
  }
  myClickHandler() {
  }
  onClose() {
    var dom = findDOMNode(this);
    dom.remove();
  }
}

export default Alert;