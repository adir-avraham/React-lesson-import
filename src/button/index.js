import React from 'react';

export default class StoreInput extends React.Component {

    constructor(props) {
        super(props)

    }

    render() {
        return <button> {this.props.text}</button> 
    }
}