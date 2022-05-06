
import SingleAttributeMiniCart from "./SingleAttributeMiniCart";

import React, { Component } from "react";

class Attributes2 extends Component{
    
    render(){
        console.log(this.props.selectedAttributes)
    //console.log(this.props)
    if(this.props.attributes !== undefined){
        
        if(this.props.attributes.length === 1){
            return (
                
                <SingleAttributeMiniCart attributes={this.props.attributes[0]} selectedAttributes={this.props.selectedAttributes} itemid={this.props.itemid}/>
                
        
            )
        }else if(this.props.attributes.length === 2){
            return (
                <div>
                    <SingleAttributeMiniCart attributes={this.props.attributes[0]} selectedAttributes={this.props.selectedAttributes} itemid={this.props.itemid}/>
                    <SingleAttributeMiniCart attributes={this.props.attributes[1]} selectedAttributes={this.props.selectedAttributes} itemid={this.props.itemid}/>
                </div>
        
            )
        }else if(this.props.attributes.length === 3){
            return (
                <div>
                    <SingleAttributeMiniCart attributes={this.props.attributes[0]} selectedAttributes={this.props.selectedAttributes} itemid={this.props.itemid}/>
                    <SingleAttributeMiniCart attributes={this.props.attributes[1]} selectedAttributes={this.props.selectedAttributes} itemid={this.props.itemid}/>
                    <SingleAttributeMiniCart attributes={this.props.attributes[2]} selectedAttributes={this.props.selectedAttributes} itemid={this.props.itemid}/>
                </div>
        
            )
        }else if(this.props.attributes.length === 4){
            return (
                <div>
                    <SingleAttributeMiniCart attributes={this.props.attributes[0]} selectedAttributes={this.props.selectedAttributes} itemid={this.props.itemid}/>
                    <SingleAttributeMiniCart attributes={this.props.attributes[1]} selectedAttributes={this.props.selectedAttributes} itemid={this.props.itemid}/>
                    <SingleAttributeMiniCart attributes={this.props.attributes[2]} selectedAttributes={this.props.selectedAttributes} itemid={this.props.itemid}/>
                    <SingleAttributeMiniCart attributes={this.props.attributes[4]} selectedAttributes={this.props.selectedAttributes} itemid={this.props.itemid}/>
                </div>
        
            )
        }else if(this.props.attributes.length === 5){
            return (
                <div>
                    <SingleAttributeMiniCart attributes={this.props.attributes[0]} selectedAttributes={this.props.selectedAttributes} itemid={this.props.itemid}/>
                    <SingleAttributeMiniCart attributes={this.props.attributes[1]} selectedAttributes={this.props.selectedAttributes} itemid={this.props.itemid}/>
                    <SingleAttributeMiniCart attributes={this.props.attributes[2]} selectedAttributes={this.props.selectedAttributes} itemid={this.props.itemid}/>
                    <SingleAttributeMiniCart attributes={this.props.attributes[3]} selectedAttributes={this.props.selectedAttributes} itemid={this.props.itemid}/>
                    <SingleAttributeMiniCart attributes={this.props.attributes[4]} selectedAttributes={this.props.selectedAttributes} itemid={this.props.itemid}/>
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

export default Attributes2;