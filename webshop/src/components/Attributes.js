
import SingleAttribute from "./SingleAttribute";

import React, { Component } from "react";

class Attributes extends Component{
    
    render(){

    //console.log(this.props)
    if(this.props.attributes !== undefined){
        
        if(this.props.attributes.length === 1){
            return (
                
                <SingleAttribute attributes={this.props.attributes[0]} selectedAttributes={this.props.selectedAttributes}/>
                
        
            )
        }else if(this.props.attributes.length === 2){
            return (
                <div>
                    <SingleAttribute attributes={this.props.attributes[0]} selectedAttributes={this.props.selectedAttributes}/>
                    <SingleAttribute attributes={this.props.attributes[1]} selectedAttributes={this.props.selectedAttributes}/>
                </div>
        
            )
        }else if(this.props.attributes.length === 3){
            return (
                <div>
                    <SingleAttribute attributes={this.props.attributes[0]} selectedAttributes={this.props.selectedAttributes}/>
                    <SingleAttribute attributes={this.props.attributes[1]} selectedAttributes={this.props.selectedAttributes}/>
                    <SingleAttribute attributes={this.props.attributes[2]} selectedAttributes={this.props.selectedAttributes}/>
                </div>
        
            )
        }else if(this.props.attributes.length === 4){
            return (
                <div>
                    <SingleAttribute attributes={this.props.attributes[0]} selectedAttributes={this.props.selectedAttributes}/>
                    <SingleAttribute attributes={this.props.attributes[1]} selectedAttributes={this.props.selectedAttributes}/>
                    <SingleAttribute attributes={this.props.attributes[2]} selectedAttributes={this.props.selectedAttributes}/>
                    <SingleAttribute attributes={this.props.attributes[4]} selectedAttributes={this.props.selectedAttributes}/>
                </div>
        
            )
        }else if(this.props.attributes.length === 5){
            return (
                <div>
                    <SingleAttribute attributes={this.props.attributes[0]} selectedAttributes={this.props.selectedAttributes}/>
                    <SingleAttribute attributes={this.props.attributes[1]} selectedAttributes={this.props.selectedAttributes}/>
                    <SingleAttribute attributes={this.props.attributes[2]} selectedAttributes={this.props.selectedAttributes}/>
                    <SingleAttribute attributes={this.props.attributes[3]} selectedAttributes={this.props.selectedAttributes}/>
                    <SingleAttribute attributes={this.props.attributes[4]} selectedAttributes={this.props.selectedAttributes}/>
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