# bootact
Bootstrap components wrapped by React

## Introduction
 `bootact` is a library which wraps `Bootstrap` components using React, less code is needed compared to use pure `Bootstrap`.
 Many of the css code are borrowed from `Bootstrap`, so are the `JSX` part of the React Components.
 The inspiration is from [antd](http://ant.design), you'er find the usages are very like antd.
 
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
 
 
