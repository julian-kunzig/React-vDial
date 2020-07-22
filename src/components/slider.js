import React from 'react';
import Slider from 'react-rangeslider';
import styled from 'styled-components';

const verticalLabels = {
    0:'0',
    10: '10',
    50: 'Half way',
    90: 'Almost done',
    100: 'Complete!'
  }

class Vertical extends React.Component {
    constructor (props, context) {
      super(props, context)
      this.state = {
        value: 25,
        reverseValue: 8
      }
    }
  
    handleChange = (value) => {
      this.setState({
        value: value
      })
    }
  
    handleChangeReverse = (value) => {
      this.setState({
        reverseValue: value
      })
    }
  


    render () {
      const { value, reverseValue } = this.state
      return (
        <div className='slider orientation-reversed'>
          <div className='slider-group'>
            <div className='slider-vertical'>
              <Slider
                min={0}
                max={100}
                value={value}
                orientation='vertical'
                onChange={this.handleChange}
                labels={verticalLabels}
              >
                  
              </Slider>
              
              <div className='value'>{value}</div>
            </div>
          </div>
        </div>
      )
    }
  }
  
  export default Vertical