
import SingleAttribute from "./SingleAttribute";

import React, { Component } from "react";

class Attributes extends Component{
    
    render(){

    //console.log(this.props)
    if(this.props.attributes !== null){
        
        if(this.props.attributes.length === 1){
            return (
                
                <SingleAttribute attributes={this.props.attributes[0]}/>
                
        
            )
        }else if(this.props.attributes.length === 2){
            return (
                <div>
                    <SingleAttribute attributes={this.props.attributes[0]}/>
                    <SingleAttribute attributes={this.props.attributes[1]}/>
                </div>
        
            )
        }else if(this.props.attributes.length === 3){
            return (
                <div>
                    <SingleAttribute attributes={this.props.attributes[0]}/>
                    <SingleAttribute attributes={this.props.attributes[1]}/>
                    <SingleAttribute attributes={this.props.attributes[2]}/>
                </div>
        
            )
        }else if(this.props.attributes.length === 4){
            return (
                <div>
                    <SingleAttribute attributes={this.props.attributes[0]}/>
                    <SingleAttribute attributes={this.props.attributes[1]}/>
                    <SingleAttribute attributes={this.props.attributes[2]}/>
                    <SingleAttribute attributes={this.props.attributes[4]}/>
                </div>
        
            )
        }else if(this.props.attributes.length === 5){
            return (
                <div>
                    <SingleAttribute attributes={this.props.attributes[0]}/>
                    <SingleAttribute attributes={this.props.attributes[1]}/>
                    <SingleAttribute attributes={this.props.attributes[2]}/>
                    <SingleAttribute attributes={this.props.attributes[3]}/>
                    <SingleAttribute attributes={this.props.attributes[4]}/>
                </div>
        
            )
        }
    }


        return (
            <div>
            

            </div>

        )


    }
    
}

export default Attributes;