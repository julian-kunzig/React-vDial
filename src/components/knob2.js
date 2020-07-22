import React from 'react'
import { Knob, Pointer, Value, Arc } from 'rc-knob'

export default ()=> (
<Knob 
    size={100}  
    angleOffset={220} 
    angleRange={280}
    min={0}
    max={100}
    onChange={value => console.log(value)}
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

