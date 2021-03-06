# bootact
Bootstrap components wrapped by React

## Introduction
 `bootact` is a library which wraps `Bootstrap` components using React, less code is needed compared to use pure `Bootstrap`.
 Many of the css code are borrowed from `Bootstrap`, so are the `JSX` part of the React Components.
 The inspiration is from [antd](http://ant.design), you'll find the usages are very similar to antd.
 
 Currently the following components have been completed:
 * Row -for grid layout, corresponds to `<div class="row"></div>` in Bootstrap
 * Col -for grid layout, corresponds to `<div class="col-..."></div>` in Bootstrap
 * Button -corresponds to `<button type="button" class="btn ..."></button>` in Bootstrap
 * Badge  -corresponds to `<span class="badge">10</span>` in Bootstrap
 * Label  -corresponds to `<span class="label">Hello</span>` in Bootstrap
 * Alert  -corresponds to `<div class="alert">...</div>` in Bootstrap, supports dismissable.(see example.js)
 * Progress -corresponds to `<div class="progress"><div class="progress-bar">...</div></div>` in Bootstrap
 * Icon -corresponds to `<span class="glyphicon glyphicon-..."></span>` in Bootstrap
 * ListGroup -corresponds to `<ul class="list-group">...</ul>` in Bootstrap
 * ListGroup.Item -corresponds to `<li class="list-group-item">...</li>` in Bootstrap
 * Breadcrumb -corresponds to `<ol class="breadcrumb">..</ol>` in Bootstrap, items in breadcrumb can be represented by Breadcrumb.Item
 * Menu,Menu.Item,Menu.Submenu -create menus, derived from dropdown-menu in Bootstrap
    ``` html
    <Menu>
        <Menu.Item>Action 1</Menu.Item>
        <Menu.Submenu title={<span>Open</span>}>
          <Menu.Item key="2-1">Action 11</Menu.Item>
          <Menu.Item key="2-2">Action 12</Menu.Item>
        </Menu.Submenu>
        <Menu.Item>Action 2</Menu.Item>
        <Menu.Divider/>
        <Menu.Item>Action 3</Menu.Item>
      </Menu>
     ```
 * Input -corresponds to `<input class="form-control" ...>` in Bootstrap, but supports addons.
  ``` html
    <Input addonBefore="http://" addonAfter=".com"/>
  ```

 * Input.Search -specially for search input, an icon is automatically appended after the input component.
  ``` html
    <Input.Search/>
    <Input.Search enterButton/>
    <Input.Search enterButton="Search" onSearch={text => console.log(text)}/>
  ```

 You can expolore their usages in `example.js`.
 
## Purpose
Sometimes I find it tedious to write HTML page in Bootstrap, for example,
if I want to make an icon, I have to write like this:

``` html
  <span class="glyphicon glyphicon-asterisk"></span>
```

Since I know that I'm using Glyphicons, only the "asterisk" parameter is required, the "glyphicon" is implicit.
I could use something like below to make an icon.

```
 <Icon type="asterisk"/>
```

Having learned `React` these days, and the [antd](http://ant.design), comes the idea that writing some `React` components, just for learning.

## Usage
Currently `bootact` is not a npm package, so if you want to use `bootact` in your `React` project. You can do the following:

 * clone this repository to somewhere
 
  ``` shell
    git clone https://github.com/springlchy/bootact
  ```
 * import bootact in your js file, and use the component happily
 ``` javascript
   import {Component} from 'react';
   import {Button, Icon, Label, ListGroup} from '/path/to/bootact';
   
   class App extends Component {
      render() {
        return (
          <Button type="success">Success<Icon type="ok"/></Button>
        );
      }
   }
 ```
 
 A full example can be seen at `example.js`.
 
 
