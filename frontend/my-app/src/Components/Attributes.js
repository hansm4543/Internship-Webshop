import React, {useEffect, useState} from "react";
import SingleAttribute from "./SingleAttribute";



function Attributes(props){

    console.log(props)
    if(props.attributes != null){
        
        if(props.attributes.length == 1){
            return (
                
                <SingleAttribute attributes={props.attributes[0]}/>
                
        
            )
        }else if(props.attributes.length == 2){
            return (
                <div>
                    <SingleAttribute attributes={props.attributes[0]}/>
                    <SingleAttribute attributes={props.attributes[1]}/>
                </div>
        
            )
        }else if(props.attributes.length == 3){
            return (
                <div>
                    <SingleAttribute attributes={props.attributes[0]}/>
                    <SingleAttribute attributes={props.attributes[1]}/>
                    <SingleAttribute attributes={props.attributes[2]}/>
                </div>
        
            )
        }else if(props.attributes.length == 4){
            return (
                <div>
                    <SingleAttribute attributes={props.attributes[0]}/>
                    <SingleAttribute attributes={props.attributes[1]}/>
                    <SingleAttribute attributes={props.attributes[2]}/>
                    <SingleAttribute attributes={props.attributes[4]}/>
                </div>
        
            )
        }else if(props.attributes.length == 5){
            return (
                <div>
                    <SingleAttribute attributes={props.attributes[0]}/>
                    <SingleAttribute attributes={props.attributes[1]}/>
                    <SingleAttribute attributes={props.attributes[2]}/>
                    <SingleAttribute attributes={props.attributes[3]}/>
                    <SingleAttribute attributes={props.attributes[4]}/>
                </div>
        
            )
        }
    }
    


    return (
        <div>

           

        </div>

    )



    
}

export default Attributes;