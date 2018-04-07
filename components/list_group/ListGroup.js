import React, { Component } from 'react';
import './ListGroup.css';

class ListGroup extends Component {
  constructor(props) {
    super(props);
    this.state = this.handleProps(props);
  }
  handleProps(props) {
    const {className, clickHandler, dataSource, renderItem, ...otherProps} = props;
    return {
      className: className,
      clickHandler: clickHandler,
      dataSource: dataSource,
      renderItem: renderItem,
      otherProps: otherProps,
      children: props.children
    };
  }
  render() {
    const {className, clickHandler, dataSource, renderItem, otherProps} = this.state;
    const defaultClassName ='list-group';
    var myClassName = className ? (defaultClassName + ' ' + className) : defaultClassName;

    const userClick = clickHandler || this.myClickHandler;
    userClick.bind(this);
    const renderer = renderItem || ((item, k) => (
        <Item key={k} data-key={k}>{item.toString()}</Item>
    ));
    //const newDataSource = dataSource.map(item => {item.onClick = userClick;return item;});

    const ListItems = (dataSource || []).map(renderer);
    return (
      <ul className={myClassName} {...otherProps} onClick={userClick}>
      {ListItems}
      </ul>
    );
  }
  componentWillReceiveProps(newProps) {
    console.log("newProps", newProps);
    //return;
    this.setState(this.handleProps(newProps));
  }
  myClickHandler(e) {
    console.log(e);
  }
}

class Item extends Component {
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
    const defaultClassName = 'list-group-item';
    var myClassName = className ? (defaultClassName + ' ' + className) : defaultClassName;
    if (type) {
      myClassName += (' list-group-item-' + type);
    }

    const userClick = clickHandler || this.myClickHandler;
    userClick.bind(this);
    return (
      <li className={myClassName} {...otherProps}>
      {children}
      </li>
    );
  }
  componentWillReceiveProps(newProps) {
    console.log("newProps", newProps);
    //return;
    this.setState(this.handleProps(newProps));
  }
  myClickHandler(e) {
    //console.log(e);
  }
}

ListGroup.Item = Item;
export default ListGroup;