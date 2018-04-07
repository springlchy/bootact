import React, { Component } from 'react';
import './App.css';

import {Button, ListGroup as List, Badge, Label, Alert} from './bootact';
import {Progress, Icon, Row, Col} from './bootact';
import {Breadcrumb} from './bootact';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 3
    };
  }
  render() {
    const dataList = [
      {
        lang: "Python",
        count: 3
      },
      {
        lang: "C",
        count: "105"
      },
      {
        lang: "Java",
        count: "116"
      }
    ];
    return (
      <div className="App">
        <Breadcrumb>
          <Breadcrumb.Item><a href={"#"}>Home</a></Breadcrumb.Item>
          <Breadcrumb.Item><a href={"#"}>Library</a></Breadcrumb.Item>
          <Breadcrumb.Item>Data</Breadcrumb.Item>
        </Breadcrumb>
        <Button type="success" data-id={this.state.id} onClick={this.handleClick.bind(this)}>
        确认<Icon type="ok"/>
        </Button>
        <List
          dataSource={dataList}
          renderItem={(item,k) => (<List.Item key={k} data-key={k} type={item.count>100 ? 'success' : ''}>{item.lang}<Badge text={item.count}/></List.Item>)}
        />
        <Label type="info">Hello</Label>
        <Alert type="info" withClose>Well done!</Alert>
        <Progress
          type="info" 
          striped
          active
          percent={35}
          template={"%d completed"}
        />
        <Row>
          <Col span={4}>col-4</Col>
          <Col span={4}>col-4</Col>
          <Col span={4}>col-4</Col>
        </Row>
        <Row>
          <Col span={4}>col-4</Col>
          <Col span={4} offset={2}>col-4</Col>
        </Row>
        <Row>
          <Col span={4}>col-4</Col>
          <Col span={4} push={2}>col-4</Col>
        </Row>
        <Row>
          <Col span={4}>col-4</Col>
          <Col span={4} pull={2}>col-4</Col>
        </Row>
        <Row>
          <Col sm={4}>col-4</Col>
          <Col sm={{span:4, offset: 2}}>col-4</Col>
        </Row>
      </div>
    );
  }
  handleClick() {
    const state = this.state;
    this.setState({
      id: state.id+1
    });
  }
}

export default App;
