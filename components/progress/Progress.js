import React, { Component } from 'react';
import './Progress.css';

class Progress extends Component {
  constructor(props) {
    super(props);
    this.state = this.handleProps(props);
  }
  handleProps(props) {
    const {type, striped, active, size, percent, template, className, clickHandler, ...otherProps} = props;
    return {
      type: type || 'success',
      striped: striped,
      active: active,
      size: size,
      percent: percent || 0,
      template: template || "%d%",
      className: className,
      clickHandler: clickHandler,
      otherProps: otherProps
    };
  }
  render() {
    const {type, striped, active, size, percent, template, className, clickHandler, otherProps} = this.state;
    const defaultClassName = 'progress';
    const myClassName = className ? defaultClassName + ' ' + className : defaultClassName;
    const progressBarClass = 'progress-bar progress-bar-' + type + (striped ? ' progress-bar-striped' : '') + (active ? ' active' : '');
    const userClick = clickHandler || this.myClickHandler;
    userClick.bind(this);
    return (
      <div className={myClassName} {...otherProps} onClick={userClick}>
        <div 
            className={progressBarClass} 
            style={{minWidth: '2em', width: percent + '%'}}
        >
        {template.replace("%d", percent)}
        </div>
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
}

export default Progress;