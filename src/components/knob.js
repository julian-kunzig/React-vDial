import React, { useState, useEffect } from 'react'
import { Knob, Pointer, Value, Scale, Arc } from './rc-knob'
import styled from 'styled-components';



        
//define styles to apply to the Value component
const Styles = styled.div`
.vpotText {
    fill: green;   
    font-size: ${props => props['font-size']}px;
}
`   

export default class MyKnob extends React.Component {
    constructor(props, context) {
        super(props, context)
        
        this.state = {
            size: props.size || 100,
            radius: (props.value/2).toString(),
            fontSize: (props.size * .2)
        }
        if (props.value){
            console.log("setting value prop", props.value)
            this.state.value = props.value
        } else {
            this.state.value = 25
        }
    
      }
      
      componentDidUpdate(prevProps) {
        if (prevProps.value !== this.props.value) {
            this.setState({value: this.props.value})
        }
        console.log("did update")
      }
        // This is simply an example that demonstrates
  // how you can dispatch an event on the element.
  triggerKeyPress() {
    this.ref.dispatchEvent(new KeyboardEvent('keypress', {
      key: 'Enter',
    }));
  }



    // no idea why I need this block....but without it I get a whole bunch of 
    // error TS2339: Property 'value' does not exist on type 'Readonly<{}>'.
    state = {
        value: 50,
        size: 100,
        radius: '50',
        fontSize: 12
    
    }
        

    static defaultProps = { value: 50, size: 100};
    
    //componentDidMount(prevProps){
/*         setTimeout(() => {
            console.log('priorValue', this.state.value);
            this.setState({ value: 23 }, () => {
                
                console.log("state updated:", this.state.value)
                // State is updated in this function
              })
          }, 1000)
          console.log('postValue', this.state.value); */
    //      if (this.props.value != 23){this.props.value(23)}
    //} 
    handleOnChange = (e)=>{
        //this.setState({value: value}
        console.log('onChange')
        this.setState({value: e})
      }

    render(){

        

        const customScaleTick = ({
            tickWidth,
            tickHeight,
            translateX,
            translateY,
            angleOffset,
            stepSize,
            center,
            active,
            i,
        }) => (
            <rect
                fill = "grey"
                stroke="none"
                width={tickWidth}
                height={i === active ? 9 : tickHeight}
                key={i}
                transform={`
                rotate(${angleOffset + stepSize * i} ${center} ${center}) 
                translate( ${translateX} ${translateY})
                `}
            />
        )


        return (
            <Styles font-size={this.state.fontSize}>
            <Knob size={this.state.size}  
                angleOffset={220} 
                angleRange={280}
                steps={10}
                min={0}
                max={100}
                value={this.state.value}
                ref={this.ref}
                onChange={value => this.handleOnChange(value)}
            >
            <Scale steps={10} tickWidth={1} tickHeight={2} radius={(this.state.size/2)*0.84} color='grey' />
            <Arc arcWidth={2} color="#4eccff" background="#141a1e" radius = {(this.state.size/2)*0.76} />
          
            <defs>
                <radialGradient id="grad-dial-soft-shadow" cx='0.5' cy='0.5' r='0.5'>
                    <stop offset='85%' stopColor='#141a1e' stopOpacity='0.4'></stop>
                    <stop offset='100%' stopColor='#242a2e' stopOpacity='0'></stop>
                </radialGradient>
                <linearGradient id="grad-dial-base" x1='0' y1='0' x2='0' y2='1'>
                    <stop offset='0%' stopColor='#52595f'></stop>
                    <stop offset='100%' stopColor='#2b3238'></stop>
                </linearGradient>
                <linearGradient id="grad-dial-highlight" x1='0' y1='0' x2='0' y2='1'>
                    <stop offset='0%' stopColor='#70777d' stopOpacity='1'></stop>
                    <stop offset='40%' stopColor='#70777d' stopOpacity='0'></stop>
                    <stop offset='55%' stopColor='#70777d' stopOpacity='0'></stop>
                    <stop offset='100%' stopColor='#70777d' stopOpacity='0.3'></stop>
                </linearGradient>
                <filter id="glow">
                    <feGaussianBlur in='SourceGraphic' result='blur' stdDeviation='2' ></feGaussianBlur>
                    <feComposite in='blur' in2='SourceGraphic' operator='over'></feComposite>
                </filter>
            </defs>
                <circle cx={this.state.size/2} cy={this.state.size/2} rx={(this.state.size/2)*0.8} fill = "url(#grad-dial-soft-shadow)" />
                <ellipse cx={this.state.size/2} cy={(this.state.size/2)+2} rx={(this.state.size/2)*0.7} ry={(this.state.size/2)*0.7} fill='#141a1e' opacity='0.15' ></ellipse>
                <circle cx={this.state.size/2} cy={this.state.size/2} r={(this.state.size/2)*0.7} fill = "url(#grad-dial-base)" stroke='#242a2e' strokeWidth='1.5'/>
                <circle cx={this.state.size/2} cy={this.state.size/2} r={(this.state.size/2)*0.64} fill = 'transparent' stroke='url(#grad-dial-highlight)' strokeWidth='1.5'/>
                <Pointer width={(this.state.size/2)*0.05} radius={(this.state.size/2)*0.47} type="circle" color='#4eccff' />
                
                <Value 
                    marginBottom={(this.state.size-(this.state.fontSize)/2)/2}
                    className="vpotText" 
                />
                
            </Knob>
        </Styles>
    )}
}

