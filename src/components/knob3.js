import React from 'react'
import { Knob, Pointer, Value, Arc } from './rc-knob'

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
            //this.props.handleChangePan(this.props.value);
        }
        
        console.log("did update")
      }

/*       handleOnChange = (e)=>{
        //this.setState({value: value}
        console.log('test')
        this.setState({value: e})
      } */

      handleOnChange = (e) => {
/*         this.setState({
          value: value,
        }); */
        console.log("handleOnChange", e)
        //this.props.handleChangePan(this.state.value);
        this.props.handleChangePan(e);
      };

      render(){
        
        return(
            <Knob 
            size={this.state.size}  
            angleOffset={220} 
            angleRange={280}
            min={0}
            max={100}
            value = {this.state.value}
            //onChange={this.handleOnChange}
            onChange = {(e) => this.handleOnChange(e)}
            // newValue = {this.props.value}
            //onChange={value => this.setState({value: value})}
            

            
            >
        <Value 
            marginBottom={10} 
            className="value"
        />
        <Arc 
            arcWidth={5}
            color="#FC5A96"
            background="#180094"
        />
        </Knob>
        )


      }
}



