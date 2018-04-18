import React, {Component} from 'react';
import './Col.css';

class Col extends Component {
    constructor(props) {
        super(props);
        this.state = this.handleProps(props);
    }
    render() {
        const {className, onClick, children, otherProps} = this.state;
        const prefix = 'col';
        const defaultSize = 'md';
        const defaultSizePrefix = 'col-md';
        let myClassName = '';
        let myClassArr1 = [];
        if (otherProps.span && (typeof otherProps.span == 'number')) {
            let it = otherProps.span;
            delete otherProps.span;
            myClassArr1.push([defaultSizePrefix, it].join('-'));
        }

        let props1 = ['offset', 'push', 'pull'];
        props1.map(item => {
            if (otherProps[item] && (typeof otherProps[item] == 'number')) {
                var it = otherProps[item];
                delete otherProps[item];
                myClassArr1.push([defaultSizePrefix, item, it].join('-'));
            }
        });

        let props2 = ['xs', 'sm', 'md', 'lg', 'xl'];
        let myClassArr2 = props2.map(item => {
            if (otherProps[item]) {
                let it = otherProps[item];
                delete otherProps[item];
                let t = typeof it;
                if (t == 'number') {
                    return [prefix, item, it].join('-');
                } else if (t == 'object') {
                    let classNameA = [];
                    for(let k in it) {
                        classNameA.push(k == 'span' ? [prefix, item, it[k]].join('-') : [prefix, item, k, it[k]].join('-'));
                    }
                    return classNameA.join(' ');
                }
            }
        });
        let myClassArr = myClassArr1.concat(myClassArr2);
        myClassArr = myClassArr.filter(v => {return v;});
        myClassName = myClassArr.join(' ');
        return (
            <div className={myClassName} {...otherProps}>
            {children}
            </div>
        );
    }
    componentWillReceiveProps(newProps) {
        this.setState(this.handleProps(newProps));
    }
    handleProps(props) {
        const {className, onClick, ...otherProps} = props;
        return {
            className: className,
            onClick: onClick,
            otherProps: otherProps,
            children: props.children
        };
    }
}

export default Col;