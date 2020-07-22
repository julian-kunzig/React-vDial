import React from 'react';
//import styled from 'styled-components';

export default class Square extends React.Component {
    render() {
      return (
        <button className="square">
          {this.props.value}
        </button>
      );
    }
  }