import React, { Component } from 'react';
import {findDOMNode} from 'react-dom';

import './Input.css';

class Input extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = this.handleProps(props);
  }
  handleProps(props) {
    const {size, className, addonBefore, addonAfter, suffixIcon, ...otherProps} = props;
    return {
      size: size,
      className: className,
      addonBefore: addonBefore,
      addonAfter: addonAfter,
      suffixIcon: suffixIcon,
      otherProps: otherProps
    };
  }
  render() {
    const {size, className, addonBefore, addonAfter, suffixIcon, otherProps} = this.state;
    console.log(otherProps);
    const defaultClassName = 'form-control';
    var myClassName = defaultClassName;
    if (size == 'large') {
        myClassName += ' input-lg';
    } else if (size == 'small') {
        myClassName += ' input-sm';
    }
    if (className) {
        myClassName += (' ' + className);
    }
    var suffix = '';
    if (suffixIcon) {
        var suffixClass = "glyphicon glyphicon-" + suffixIcon + " form-control-feedback";
        if (otherProps.hassearch && otherProps.onSearch) {
            console.log("has search");
            suffix = (<span className={suffixClass} onClick={(e)=>otherProps.onSearch(findDOMNode(this).getElementsByTagName("input")[0].value)}></span>);
        } else {
            console.log("do not has search");
            suffix = (<span className={suffixClass}></span>);
        }
    }
    if (!addonAfter && !addonBefore && !suffix) {
        return (
            <input className={myClassName} {...otherProps}/>
          );
    } else {
        if (addonAfter) {
            myClassName += ' has-addon-after';
        }
        const {addonbtn, ...otherProps2} = otherProps;
        const addonClass = addonbtn ? "input-group-btn" : "input-group-addon";
        return (
            <div className="input-group">
                {addonBefore ? (<span className={addonClass}>{addonBefore}</span>) : ''}
                <input className={myClassName} {...otherProps2}/>
                {addonAfter ? (<span className={addonClass}>{addonAfter}</span>) : ''}
                {suffix}
            </div>
        );
    }
    
  }
  componentWillReceiveProps(newProps) {
    console.log("newProps", newProps);
    //return;
    this.setState(this.handleProps(newProps));
  }
}

class Search extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {enterButton, onSearch, ...otherProps} = this.props;
        this.onSearch = onSearch;
        //this.myOnSearch.bind(this);

        if (!enterButton && onSearch) {
            return (
                <Input className="input-search" suffixIcon="search" onSearch={onSearch} hassearch {...otherProps}/>
            );
        } else if (enterButton == true) {
            return (
                <Input className="input-search" addonAfter={
                    <button className="btn btn-primary" onClick={this.myOnSearch.bind(this)}><span className="glyphicon glyphicon-search"></span></button>
                } addonbtn  {...otherProps}/>
            );
        } else {
            return (
                <Input className="input-search" addonAfter={
                    <button className="btn btn-primary" onClick={this.myOnSearch.bind(this)}>{enterButton}</button>
                } addonbtn  {...otherProps}/>
            );
        }
    }
    myOnSearch(e) {
        if (this.onSearch) {
            const self = findDOMNode(this);
            const input = self.getElementsByTagName("input")[0];
            this.onSearch(input.value);
        }
    }
}

Input.Search = Search;

export default Input;