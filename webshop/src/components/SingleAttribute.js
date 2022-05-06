import React, {Component} from "react";
import './attributes.css';
import SelectedAttributes from './SelectedAttributes';

class SingleAttribute extends Component{
    render(){
        //console.log(this.props.attributes.type)
        let length = this.props.attributes.items.length; 
        if(this.props.attributes !== undefined){
            if(this.props.attributes.type === "text"){
                if(length === 1){
                    return (

                        <div className="Attributes">
                        <p>Please select {this.props.attributes.name}:</p>
                        <input defaultChecked  type="radio" id={this.props.attributes.items[0].value} name={this.props.attributes.name} value={this.props.attributes.items[0].displayValue}/>
                        <label for={this.props.attributes.items[0].value}>{this.props.attributes.items[0].displayValue}</label>
                        </div>
                        
                
                    )
                
                }else if(length === 2){
                    //tehtud
                    if(this.props.selectedAttributes !== undefined){
                        let howmanyAttributes = this.props.selectedAttributes.length
                        let selectedvalue
                        for(let integer = 0; integer < howmanyAttributes; integer++){
                            if(this.props.selectedAttributes[integer].name === this.props.attributes.name){
                                console.log("juhuu")
                                console.log(this.props.selectedAttributes[integer].value)
                                selectedvalue = this.props.selectedAttributes[integer].value;
                            }
                            
                        }
                        if(selectedvalue === this.props.attributes.items[1].displayValue){
                            return (
                                <div class="Attributes">
                                <br/>
                                <p>Please select {this.props.attributes.name}:</p>

                                    <label>
                                        <input id={this.props.attributes.items[0].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[0].displayValue}></input>
                                        {this.props.attributes.items[0].displayValue}
                                    </label>
                                    <br></br>
                                    <label>
                                        <input defaultChecked  id={this.props.attributes.items[1].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[1].displayValue}></input>
                                        {this.props.attributes.items[1].displayValue}
                                    </label>

                                </div> 
                            )
                        }else{
                            return(
                                <div class="Attributes">
                                <br/>
                                <p>Please select {this.props.attributes.name}:</p>

                                    <label>
                                        <input defaultChecked id={this.props.attributes.items[0].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[0].displayValue}></input>
                                        {this.props.attributes.items[0].displayValue}
                                    </label>
                                    <br></br>
                                    <label>
                                        <input  id={this.props.attributes.items[1].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[1].displayValue}></input>
                                        {this.props.attributes.items[1].displayValue}
                                    </label>

                                </div> 
                            )
                        }
                        
                    }else{
                        return (

                            
                            <div class="Attributes">
                                <br/>
                                <p>Please select {this.props.attributes.name}:</p>

                                    <label>
                                        <input className="textInput" defaultChecked id={this.props.attributes.name} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[0].displayValue}></input>
                                        {this.props.attributes.items[0].displayValue}
                                    </label>
                                    <br></br>
                                    <label>
                                        <input className="textInput"  id={this.props.attributes.name} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[1].displayValue}></input>
                                        {this.props.attributes.items[1].displayValue}
                                    </label>

                                </div> 
                    
                        )
                    }
                }else if(length === 3){
                    //tehtud
                    if(this.props.selectedAttributes !== undefined){
                        let howmanyAttributes = this.props.selectedAttributes.length
                        let selectedvalue
                        for(let integer = 0; integer < howmanyAttributes; integer++){
                            if(this.props.selectedAttributes[integer].name === this.props.attributes.name){
                                console.log("juhuu")
                                console.log(this.props.selectedAttributes[integer].value)
                                selectedvalue = this.props.selectedAttributes[integer].value;
                            }
                            
                        }
                        if(selectedvalue === this.props.attributes.items[2].displayValue){
                            return (
                                <div class="Attributes">
                                <br/>
                                <p>Please select {this.props.attributes.name}:</p>

                                    <label>
                                        <input id={this.props.attributes.items[0].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[0].displayValue}></input>
                                        {this.props.attributes.items[0].displayValue}
                                    </label>
                                    <br></br>
                                    <label>
                                        <input   id={this.props.attributes.items[1].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[1].displayValue}></input>
                                        {this.props.attributes.items[1].displayValue}
                                    </label>
                                    <br></br>
                                    <label>
                                        <input defaultChecked  id={this.props.attributes.items[2].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[2].displayValue}></input>
                                        {this.props.attributes.items[2].displayValue}
                                    </label>

                                </div> 
                            )
                        }else if(selectedvalue === this.props.attributes.items[1].displayValue){
                            return (
                                <div class="Attributes">
                                <br/>
                                <p>Please select {this.props.attributes.name}:</p>

                                    <label>
                                        <input id={this.props.attributes.items[0].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[0].displayValue}></input>
                                        {this.props.attributes.items[0].displayValue}
                                    </label>
                                    <br></br>
                                    <label>
                                        <input defaultChecked  id={this.props.attributes.items[1].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[1].displayValue}></input>
                                        {this.props.attributes.items[1].displayValue}
                                    </label>
                                    <br></br>
                                    <label>
                                        <input   id={this.props.attributes.items[2].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[2].displayValue}></input>
                                        {this.props.attributes.items[2].displayValue}
                                    </label>

                                </div> 
                            )
                        }else{
                            return(
                                <div class="Attributes">
                                <br/>
                                <p>Please select {this.props.attributes.name}:</p>

                                    <label>
                                        <input defaultChecked id={this.props.attributes.items[0].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[0].displayValue}></input>
                                        {this.props.attributes.items[0].displayValue}
                                    </label>
                                    <br></br>
                                    <label>
                                        <input  id={this.props.attributes.items[1].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[1].displayValue}></input>
                                        {this.props.attributes.items[1].displayValue}
                                    </label>
                                    <br></br>
                                    <label>
                                        <input  id={this.props.attributes.items[2].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[2].displayValue}></input>
                                        {this.props.attributes.items[2].displayValue}
                                    </label>

                                </div> 
                            )
                        }
                        
                    }
                    return (

                        
                        <div class="Attributes">
                            <br/>
                            <p>Please select {this.props.attributes.name}:</p>

                                <label>
                                    <input defaultChecked id={this.props.attributes.items[0].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[0].displayValue}></input>
                                    {this.props.attributes.items[0].displayValue}
                                </label>
                                <br></br>
                                <label>
                                    <input  id={this.props.attributes.items[1].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[1].displayValue}></input>
                                     {this.props.attributes.items[1].displayValue}
                                </label>
                                <br></br>
                                    <label>
                                        <input   id={this.props.attributes.items[2].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[2].displayValue}></input>
                                        {this.props.attributes.items[2].displayValue}
                                    </label>

                            </div> 
                
                    )
                }else if(length === 4){
                    //tehtud
                    if(this.props.selectedAttributes !== undefined){
                        let howmanyAttributes = this.props.selectedAttributes.length
                        let selectedvalue
                        for(let integer = 0; integer < howmanyAttributes; integer++){
                            if(this.props.selectedAttributes[integer].name === this.props.attributes.name){
                                console.log("juhuu")
                                console.log(this.props.selectedAttributes[integer].value)
                                selectedvalue = this.props.selectedAttributes[integer].value;
                            }
                            
                        }
                        if(selectedvalue === this.props.attributes.items[3].displayValue){
                            return (
                                <div class="Attributes">
                                <br/>
                                <p>Please select {this.props.attributes.name}:</p>

                                    <label>
                                        <input id={this.props.attributes.items[0].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[0].displayValue}></input>
                                        {this.props.attributes.items[0].displayValue}
                                    </label>
                                    <br></br>
                                    <label>
                                        <input   id={this.props.attributes.items[1].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[1].displayValue}></input>
                                        {this.props.attributes.items[1].displayValue}
                                    </label>
                                    <br></br>
                                    <label>
                                        <input   id={this.props.attributes.items[2].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[2].displayValue}></input>
                                        {this.props.attributes.items[2].displayValue}
                                    </label>
                                    <br></br>
                                    <label>
                                        <input defaultChecked  id={this.props.attributes.items[3].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[3].displayValue}></input>
                                        {this.props.attributes.items[3].displayValue}
                                    </label>

                                </div> 
                            )
                        }else if(selectedvalue === this.props.attributes.items[2].displayValue){
                            return (
                                <div class="Attributes">
                                <br/>
                                <p>Please select {this.props.attributes.name}:</p>

                                    <label>
                                        <input id={this.props.attributes.items[0].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[0].displayValue}></input>
                                        {this.props.attributes.items[0].displayValue}
                                    </label>
                                    <br></br>
                                    <label>
                                        <input   id={this.props.attributes.items[1].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[1].displayValue}></input>
                                        {this.props.attributes.items[1].displayValue}
                                    </label>
                                    <br></br>
                                    <label>
                                        <input  defaultChecked  id={this.props.attributes.items[2].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[2].displayValue}></input>
                                        {this.props.attributes.items[2].displayValue}
                                    </label>
                                    <br></br>
                                    <label>
                                        <input   id={this.props.attributes.items[3].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[3].displayValue}></input>
                                        {this.props.attributes.items[3].displayValue}
                                    </label>

                                </div> 
                            )
                        }else if(selectedvalue === this.props.attributes.items[1].displayValue){
                            return (
                                <div class="Attributes">
                                <br/>
                                <p>Please select {this.props.attributes.name}:</p>

                                    <label>
                                        <input id={this.props.attributes.items[0].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[0].displayValue}></input>
                                        {this.props.attributes.items[0].displayValue}
                                    </label>
                                    <br></br>
                                    <label>
                                        <input defaultChecked  id={this.props.attributes.items[1].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[1].displayValue}></input>
                                        {this.props.attributes.items[1].displayValue}
                                    </label>
                                    <br></br>
                                    <label>
                                        <input   id={this.props.attributes.items[2].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[2].displayValue}></input>
                                        {this.props.attributes.items[2].displayValue}
                                    </label>
                                    <br></br>
                                    <label>
                                        <input   id={this.props.attributes.items[3].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[3].displayValue}></input>
                                        {this.props.attributes.items[3].displayValue}
                                    </label>

                                </div> 
                            )
                        }else{
                            return(
                                <div class="Attributes">
                                <br/>
                                <p>Please select {this.props.attributes.name}:</p>

                                    <label>
                                        <input defaultChecked id={this.props.attributes.items[0].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[0].displayValue}></input>
                                        {this.props.attributes.items[0].displayValue}
                                    </label>
                                    <br></br>
                                    <label>
                                        <input  id={this.props.attributes.items[1].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[1].displayValue}></input>
                                        {this.props.attributes.items[1].displayValue}
                                    </label>
                                    <br></br>
                                    <label>
                                        <input   id={this.props.attributes.items[2].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[2].displayValue}></input>
                                        {this.props.attributes.items[2].displayValue}
                                    </label>
                                    <br></br>
                                    <label>
                                        <input   id={this.props.attributes.items[3].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[3].displayValue}></input>
                                        {this.props.attributes.items[3].displayValue}
                                    </label>

                                </div> 
                            )
                        }
                        
                    }
                    return (

                        
                        <div class="Attributes">
                            <br/>
                            <p>Please select {this.props.attributes.name}:</p>

                                <label>
                                    <input defaultChecked id={this.props.attributes.items[0].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[0].displayValue}></input>
                                    {this.props.attributes.items[0].displayValue}
                                </label>
                                <br></br>
                                <label>
                                    <input  id={this.props.attributes.items[1].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[1].displayValue}></input>
                                     {this.props.attributes.items[1].displayValue}
                                </label>
                                <br></br>
                                    <label>
                                        <input   id={this.props.attributes.items[2].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[2].displayValue}></input>
                                        {this.props.attributes.items[2].displayValue}
                                    </label>
                                    <br></br>
                                    <label>
                                        <input   id={this.props.attributes.items[3].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[3].displayValue}></input>
                                        {this.props.attributes.items[3].displayValue}
                                    </label>

                            </div> 
                
                    )
                }else if(length === 5){
                    //tehtud
                    if(this.props.selectedAttributes !== undefined){
                        let howmanyAttributes = this.props.selectedAttributes.length
                        let selectedvalue
                        for(let integer = 0; integer < howmanyAttributes; integer++){
                            if(this.props.selectedAttributes[integer].name === this.props.attributes.name){
                                console.log("juhuu")
                                console.log(this.props.selectedAttributes[integer].value)
                                selectedvalue = this.props.selectedAttributes[integer].value;
                            }
                            
                        }
                        if(selectedvalue === this.props.attributes.items[4].displayValue){
                            return (
                                <div class="Attributes">
                                <br/>
                                <p>Please select {this.props.attributes.name}:</p>

                                    <label>
                                        <input id={this.props.attributes.items[0].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[0].displayValue}></input>
                                        {this.props.attributes.items[0].displayValue}
                                    </label>
                                    <br></br>
                                    <label>
                                        <input   id={this.props.attributes.items[1].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[1].displayValue}></input>
                                        {this.props.attributes.items[1].displayValue}
                                    </label>
                                    <br></br>
                                    <label>
                                        <input   id={this.props.attributes.items[2].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[2].displayValue}></input>
                                        {this.props.attributes.items[2].displayValue}
                                    </label>
                                    <br></br>
                                    <label>
                                        <input  id={this.props.attributes.items[3].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[3].displayValue}></input>
                                        {this.props.attributes.items[3].displayValue}
                                    </label>
                                    <br></br>
                                    <label>
                                        <input defaultChecked  id={this.props.attributes.items[4].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[4].displayValue}></input>
                                        {this.props.attributes.items[4].displayValue}
                                    </label>

                                </div> 
                            )
                        }else if(selectedvalue === this.props.attributes.items[3].displayValue){
                            return (
                                <div class="Attributes">
                                <br/>
                                <p>Please select {this.props.attributes.name}:</p>

                                    <label>
                                        <input id={this.props.attributes.items[0].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[0].displayValue}></input>
                                        {this.props.attributes.items[0].displayValue}
                                    </label>
                                    <br></br>
                                    <label>
                                        <input   id={this.props.attributes.items[1].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[1].displayValue}></input>
                                        {this.props.attributes.items[1].displayValue}
                                    </label>
                                    <br></br>
                                    <label>
                                        <input   id={this.props.attributes.items[2].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[2].displayValue}></input>
                                        {this.props.attributes.items[2].displayValue}
                                    </label>
                                    <br></br>
                                    <label>
                                        <input defaultChecked  id={this.props.attributes.items[3].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[3].displayValue}></input>
                                        {this.props.attributes.items[3].displayValue}
                                    </label>
                                    <br></br>
                                    <label>
                                        <input   id={this.props.attributes.items[4].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[4].displayValue}></input>
                                        {this.props.attributes.items[4].displayValue}
                                    </label>

                                </div> 
                            )
                        }else if(selectedvalue === this.props.attributes.items[2].displayValue){
                            return (
                                <div class="Attributes">
                                <br/>
                                <p>Please select {this.props.attributes.name}:</p>

                                    <label>
                                        <input id={this.props.attributes.items[0].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[0].displayValue}></input>
                                        {this.props.attributes.items[0].displayValue}
                                    </label>
                                    <br></br>
                                    <label>
                                        <input   id={this.props.attributes.items[1].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[1].displayValue}></input>
                                        {this.props.attributes.items[1].displayValue}
                                    </label>
                                    <br></br>
                                    <label>
                                        <input  defaultChecked  id={this.props.attributes.items[2].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[2].displayValue}></input>
                                        {this.props.attributes.items[2].displayValue}
                                    </label>
                                    <br></br>
                                    <label>
                                        <input   id={this.props.attributes.items[3].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[3].displayValue}></input>
                                        {this.props.attributes.items[3].displayValue}
                                    </label>
                                    <br></br>
                                    <label>
                                        <input   id={this.props.attributes.items[4].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[4].displayValue}></input>
                                        {this.props.attributes.items[4].displayValue}
                                    </label>

                                </div> 
                            )
                        }else if(selectedvalue === this.props.attributes.items[1].displayValue){
                            return (
                                <div class="Attributes">
                                <br/>
                                <p>Please select {this.props.attributes.name}:</p>

                                    <label>
                                        <input id={this.props.attributes.items[0].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[0].displayValue}></input>
                                        {this.props.attributes.items[0].displayValue}
                                    </label>
                                    <br></br>
                                    <label>
                                        <input defaultChecked  id={this.props.attributes.items[1].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[1].displayValue}></input>
                                        {this.props.attributes.items[1].displayValue}
                                    </label>
                                    <br></br>
                                    <label>
                                        <input   id={this.props.attributes.items[2].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[2].displayValue}></input>
                                        {this.props.attributes.items[2].displayValue}
                                    </label>
                                    <br></br>
                                    <label>
                                        <input   id={this.props.attributes.items[3].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[3].displayValue}></input>
                                        {this.props.attributes.items[3].displayValue}
                                    </label>
                                    <br></br>
                                    <label>
                                        <input   id={this.props.attributes.items[4].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[4].displayValue}></input>
                                        {this.props.attributes.items[4].displayValue}
                                    </label>

                                </div> 
                            )
                        }else{
                            return(
                                <div class="Attributes">
                                <br/>
                                <p>Please select {this.props.attributes.name}:</p>

                                    <label>
                                        <input defaultChecked id={this.props.attributes.items[0].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[0].displayValue}></input>
                                        {this.props.attributes.items[0].displayValue}
                                    </label>
                                    <br></br>
                                    <label>
                                        <input  id={this.props.attributes.items[1].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[1].displayValue}></input>
                                        {this.props.attributes.items[1].displayValue}
                                    </label>
                                    <br></br>
                                    <label>
                                        <input   id={this.props.attributes.items[2].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[2].displayValue}></input>
                                        {this.props.attributes.items[2].displayValue}
                                    </label>
                                    <br></br>
                                    <label>
                                        <input   id={this.props.attributes.items[3].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[3].displayValue}></input>
                                        {this.props.attributes.items[3].displayValue}
                                    </label>
                                    <br></br>
                                    <label>
                                        <input   id={this.props.attributes.items[4].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[4].displayValue}></input>
                                        {this.props.attributes.items[4].displayValue}
                                    </label>

                                </div> 
                            )
                        }
                        
                    }
                    return (

                        
                        <div class="Attributes">
                            <br/>
                            <p>Please select {this.props.attributes.name}:</p>

                                <label>
                                    <input defaultChecked id={this.props.attributes.items[0].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[0].displayValue}></input>
                                    {this.props.attributes.items[0].displayValue}
                                </label>
                                <br></br>
                                <label>
                                    <input  id={this.props.attributes.items[1].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[1].displayValue}></input>
                                     {this.props.attributes.items[1].displayValue}
                                </label>
                                <br></br>
                                    <label>
                                        <input   id={this.props.attributes.items[2].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[2].displayValue}></input>
                                        {this.props.attributes.items[2].displayValue}
                                    </label>
                                    <br></br>
                                    <label>
                                        <input   id={this.props.attributes.items[3].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[3].displayValue}></input>
                                        {this.props.attributes.items[3].displayValue}
                                    </label>
                                    <br></br>
                                    <label>
                                        <input   id={this.props.attributes.items[4].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[4].displayValue}></input>
                                        {this.props.attributes.items[4].displayValue}
                                    </label>

                            </div> 
                
                    )
                }else if(length === 6){
                    //tehtud
                    if(this.props.selectedAttributes !== undefined){
                        let howmanyAttributes = this.props.selectedAttributes.length
                        let selectedvalue
                        for(let integer = 0; integer < howmanyAttributes; integer++){
                            if(this.props.selectedAttributes[integer].name === this.props.attributes.name){
                                console.log("juhuu")
                                console.log(this.props.selectedAttributes[integer].value)
                                selectedvalue = this.props.selectedAttributes[integer].value;
                            }
                            
                        }
                        if(selectedvalue === this.props.attributes.items[5].displayValue){
                            return (
                                <div class="Attributes">
                                <br/>
                                <p>Please select {this.props.attributes.name}:</p>

                                    <label>
                                        <input id={this.props.attributes.items[0].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[0].displayValue}></input>
                                        {this.props.attributes.items[0].displayValue}
                                    </label>
                                    <br></br>
                                    <label>
                                        <input   id={this.props.attributes.items[1].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[1].displayValue}></input>
                                        {this.props.attributes.items[1].displayValue}
                                    </label>
                                    <br></br>
                                    <label>
                                        <input   id={this.props.attributes.items[2].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[2].displayValue}></input>
                                        {this.props.attributes.items[2].displayValue}
                                    </label>
                                    <br></br>
                                    <label>
                                        <input  id={this.props.attributes.items[3].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[3].displayValue}></input>
                                        {this.props.attributes.items[3].displayValue}
                                    </label>
                                    <br></br>
                                    <label>
                                        <input   id={this.props.attributes.items[4].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[4].displayValue}></input>
                                        {this.props.attributes.items[4].displayValue}
                                    </label>
                                    <br></br>
                                    <label>
                                        <input defaultChecked  id={this.props.attributes.items[5].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[5].displayValue}></input>
                                        {this.props.attributes.items[5].displayValue}
                                    </label>

                                </div> 
                            )
                        }else if(selectedvalue === this.props.attributes.items[4].displayValue){
                            return (
                                <div class="Attributes">
                                <br/>
                                <p>Please select {this.props.attributes.name}:</p>

                                    <label>
                                        <input id={this.props.attributes.items[0].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[0].displayValue}></input>
                                        {this.props.attributes.items[0].displayValue}
                                    </label>
                                    <br></br>
                                    <label>
                                        <input   id={this.props.attributes.items[1].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[1].displayValue}></input>
                                        {this.props.attributes.items[1].displayValue}
                                    </label>
                                    <br></br>
                                    <label>
                                        <input   id={this.props.attributes.items[2].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[2].displayValue}></input>
                                        {this.props.attributes.items[2].displayValue}
                                    </label>
                                    <br></br>
                                    <label>
                                        <input  id={this.props.attributes.items[3].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[3].displayValue}></input>
                                        {this.props.attributes.items[3].displayValue}
                                    </label>
                                    <br></br>
                                    <label>
                                        <input defaultChecked  id={this.props.attributes.items[4].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[4].displayValue}></input>
                                        {this.props.attributes.items[4].displayValue}
                                    </label>
                                    <br></br>
                                    <label>
                                        <input   id={this.props.attributes.items[5].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[5].displayValue}></input>
                                        {this.props.attributes.items[5].displayValue}
                                    </label>

                                </div> 
                            )
                        }else if(selectedvalue === this.props.attributes.items[3].displayValue){
                            return (
                                <div class="Attributes">
                                <br/>
                                <p>Please select {this.props.attributes.name}:</p>

                                    <label>
                                        <input id={this.props.attributes.items[0].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[0].displayValue}></input>
                                        {this.props.attributes.items[0].displayValue}
                                    </label>
                                    <br></br>
                                    <label>
                                        <input   id={this.props.attributes.items[1].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[1].displayValue}></input>
                                        {this.props.attributes.items[1].displayValue}
                                    </label>
                                    <br></br>
                                    <label>
                                        <input   id={this.props.attributes.items[2].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[2].displayValue}></input>
                                        {this.props.attributes.items[2].displayValue}
                                    </label>
                                    <br></br>
                                    <label>
                                        <input defaultChecked  id={this.props.attributes.items[3].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[3].displayValue}></input>
                                        {this.props.attributes.items[3].displayValue}
                                    </label>
                                    <br></br>
                                    <label>
                                        <input   id={this.props.attributes.items[4].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[4].displayValue}></input>
                                        {this.props.attributes.items[4].displayValue}
                                    </label>
                                    <br></br>
                                    <label>
                                        <input   id={this.props.attributes.items[5].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[5].displayValue}></input>
                                        {this.props.attributes.items[5].displayValue}
                                    </label>

                                </div> 
                            )
                        }else if(selectedvalue === this.props.attributes.items[2].displayValue){
                            return (
                                <div class="Attributes">
                                <br/>
                                <p>Please select {this.props.attributes.name}:</p>

                                    <label>
                                        <input id={this.props.attributes.items[0].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[0].displayValue}></input>
                                        {this.props.attributes.items[0].displayValue}
                                    </label>
                                    <br></br>
                                    <label>
                                        <input   id={this.props.attributes.items[1].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[1].displayValue}></input>
                                        {this.props.attributes.items[1].displayValue}
                                    </label>
                                    <br></br>
                                    <label>
                                        <input  defaultChecked  id={this.props.attributes.items[2].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[2].displayValue}></input>
                                        {this.props.attributes.items[2].displayValue}
                                    </label>
                                    <br></br>
                                    <label>
                                        <input   id={this.props.attributes.items[3].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[3].displayValue}></input>
                                        {this.props.attributes.items[3].displayValue}
                                    </label>
                                    <br></br>
                                    <label>
                                        <input   id={this.props.attributes.items[4].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[4].displayValue}></input>
                                        {this.props.attributes.items[4].displayValue}
                                    </label>
                                    <br></br>
                                    <label>
                                        <input   id={this.props.attributes.items[5].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[5].displayValue}></input>
                                        {this.props.attributes.items[5].displayValue}
                                    </label>

                                </div> 
                            )
                        }else if(selectedvalue === this.props.attributes.items[1].displayValue){
                            return (
                                <div class="Attributes">
                                <br/>
                                <p>Please select {this.props.attributes.name}:</p>

                                    <label>
                                        <input id={this.props.attributes.items[0].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[0].displayValue}></input>
                                        {this.props.attributes.items[0].displayValue}
                                    </label>
                                    <br></br>
                                    <label>
                                        <input defaultChecked  id={this.props.attributes.items[1].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[1].displayValue}></input>
                                        {this.props.attributes.items[1].displayValue}
                                    </label>
                                    <br></br>
                                    <label>
                                        <input   id={this.props.attributes.items[2].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[2].displayValue}></input>
                                        {this.props.attributes.items[2].displayValue}
                                    </label>
                                    <br></br>
                                    <label>
                                        <input   id={this.props.attributes.items[3].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[3].displayValue}></input>
                                        {this.props.attributes.items[3].displayValue}
                                    </label>
                                    <br></br>
                                    <label>
                                        <input   id={this.props.attributes.items[4].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[4].displayValue}></input>
                                        {this.props.attributes.items[4].displayValue}
                                    </label>
                                    <br></br>
                                    <label>
                                        <input   id={this.props.attributes.items[5].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[5].displayValue}></input>
                                        {this.props.attributes.items[5].displayValue}
                                    </label>

                                </div> 
                            )
                        }else{
                            return(
                                <div class="Attributes">
                                <br/>
                                <p>Please select {this.props.attributes.name}:</p>

                                    <label>
                                        <input defaultChecked id={this.props.attributes.items[0].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[0].displayValue}></input>
                                        {this.props.attributes.items[0].displayValue}
                                    </label>
                                    <br></br>
                                    <label>
                                        <input  id={this.props.attributes.items[1].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[1].displayValue}></input>
                                        {this.props.attributes.items[1].displayValue}
                                    </label>
                                    <br></br>
                                    <label>
                                        <input   id={this.props.attributes.items[2].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[2].displayValue}></input>
                                        {this.props.attributes.items[2].displayValue}
                                    </label>
                                    <br></br>
                                    <label>
                                        <input   id={this.props.attributes.items[3].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[3].displayValue}></input>
                                        {this.props.attributes.items[3].displayValue}
                                    </label>
                                    <br></br>
                                    <label>
                                        <input   id={this.props.attributes.items[4].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[4].displayValue}></input>
                                        {this.props.attributes.items[4].displayValue}
                                    </label>
                                    <br></br>
                                    <label>
                                        <input   id={this.props.attributes.items[5].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[5].displayValue}></input>
                                        {this.props.attributes.items[5].displayValue}
                                    </label>

                                </div> 
                            )
                        }
                        
                    }
                    return (

                        
                        <div class="Attributes">
                            <br/>
                            <p>Please select {this.props.attributes.name}:</p>

                                <label>
                                    <input defaultChecked id={this.props.attributes.items[0].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[0].displayValue}></input>
                                    {this.props.attributes.items[0].displayValue}
                                </label>
                                <br></br>
                                <label>
                                    <input  id={this.props.attributes.items[1].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[1].displayValue}></input>
                                     {this.props.attributes.items[1].displayValue}
                                </label>
                                <br></br>
                                    <label>
                                        <input   id={this.props.attributes.items[2].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[2].displayValue}></input>
                                        {this.props.attributes.items[2].displayValue}
                                    </label>
                                    <br></br>
                                    <label>
                                        <input   id={this.props.attributes.items[3].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[3].displayValue}></input>
                                        {this.props.attributes.items[3].displayValue}
                                    </label>
                                    <br></br>
                                    <label>
                                        <input   id={this.props.attributes.items[4].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[4].displayValue}></input>
                                        {this.props.attributes.items[4].displayValue}
                                    </label>
                                    <br></br>
                                    <label>
                                        <input   id={this.props.attributes.items[5].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[5].displayValue}></input>
                                        {this.props.attributes.items[5].displayValue}
                                    </label>

                            </div> 
                
                    )
                }else if(length === 7){
                    //tehtud
                    if(this.props.selectedAttributes !== undefined){
                        let howmanyAttributes = this.props.selectedAttributes.length
                        let selectedvalue
                        for(let integer = 0; integer < howmanyAttributes; integer++){
                            if(this.props.selectedAttributes[integer].name === this.props.attributes.name){
                                console.log("juhuu")
                                console.log(this.props.selectedAttributes[integer].value)
                                selectedvalue = this.props.selectedAttributes[integer].value;
                            }
                            
                        }
                        if(selectedvalue === this.props.attributes.items[6].displayValue){
                            return (
                                <div class="Attributes">
                                <br/>
                                <p>Please select {this.props.attributes.name}:</p>

                                    <label>
                                        <input id={this.props.attributes.items[0].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[0].displayValue}></input>
                                        {this.props.attributes.items[0].displayValue}
                                    </label>
                                    <br></br>
                                    <label>
                                        <input   id={this.props.attributes.items[1].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[1].displayValue}></input>
                                        {this.props.attributes.items[1].displayValue}
                                    </label>
                                    <br></br>
                                    <label>
                                        <input   id={this.props.attributes.items[2].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[2].displayValue}></input>
                                        {this.props.attributes.items[2].displayValue}
                                    </label>
                                    <br></br>
                                    <label>
                                        <input  id={this.props.attributes.items[3].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[3].displayValue}></input>
                                        {this.props.attributes.items[3].displayValue}
                                    </label>
                                    <br></br>
                                    <label>
                                        <input   id={this.props.attributes.items[4].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[4].displayValue}></input>
                                        {this.props.attributes.items[4].displayValue}
                                    </label>
                                    <br></br>
                                    <label>
                                        <input   id={this.props.attributes.items[5].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[5].displayValue}></input>
                                        {this.props.attributes.items[5].displayValue}
                                    </label>
                                    <br></br>
                                    <label>
                                        <input defaultChecked  id={this.props.attributes.items[6].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[6].displayValue}></input>
                                        {this.props.attributes.items[6].displayValue}
                                    </label>

                                </div> 
                            )
                        }else if(selectedvalue === this.props.attributes.items[5].displayValue){
                            return (
                                <div class="Attributes">
                                <br/>
                                <p>Please select {this.props.attributes.name}:</p>

                                    <label>
                                        <input id={this.props.attributes.items[0].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[0].displayValue}></input>
                                        {this.props.attributes.items[0].displayValue}
                                    </label>
                                    <br></br>
                                    <label>
                                        <input   id={this.props.attributes.items[1].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[1].displayValue}></input>
                                        {this.props.attributes.items[1].displayValue}
                                    </label>
                                    <br></br>
                                    <label>
                                        <input   id={this.props.attributes.items[2].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[2].displayValue}></input>
                                        {this.props.attributes.items[2].displayValue}
                                    </label>
                                    <br></br>
                                    <label>
                                        <input  id={this.props.attributes.items[3].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[3].displayValue}></input>
                                        {this.props.attributes.items[3].displayValue}
                                    </label>
                                    <br></br>
                                    <label>
                                        <input   id={this.props.attributes.items[4].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[4].displayValue}></input>
                                        {this.props.attributes.items[4].displayValue}
                                    </label>
                                    <br></br>
                                    <label>
                                        <input defaultChecked  id={this.props.attributes.items[5].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[5].displayValue}></input>
                                        {this.props.attributes.items[5].displayValue}
                                    </label>
                                    <br></br>
                                    <label>
                                        <input   id={this.props.attributes.items[6].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[6].displayValue}></input>
                                        {this.props.attributes.items[6].displayValue}
                                    </label>

                                </div> 
                            )
                        }else if(selectedvalue === this.props.attributes.items[4].displayValue){
                            return (
                                <div class="Attributes">
                                <br/>
                                <p>Please select {this.props.attributes.name}:</p>

                                    <label>
                                        <input id={this.props.attributes.items[0].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[0].displayValue}></input>
                                        {this.props.attributes.items[0].displayValue}
                                    </label>
                                    <br></br>
                                    <label>
                                        <input   id={this.props.attributes.items[1].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[1].displayValue}></input>
                                        {this.props.attributes.items[1].displayValue}
                                    </label>
                                    <br></br>
                                    <label>
                                        <input   id={this.props.attributes.items[2].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[2].displayValue}></input>
                                        {this.props.attributes.items[2].displayValue}
                                    </label>
                                    <br></br>
                                    <label>
                                        <input  id={this.props.attributes.items[3].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[3].displayValue}></input>
                                        {this.props.attributes.items[3].displayValue}
                                    </label>
                                    <br></br>
                                    <label>
                                        <input defaultChecked  id={this.props.attributes.items[4].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[4].displayValue}></input>
                                        {this.props.attributes.items[4].displayValue}
                                    </label>
                                    <br></br>
                                    <label>
                                        <input   id={this.props.attributes.items[5].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[5].displayValue}></input>
                                        {this.props.attributes.items[5].displayValue}
                                    </label>
                                    <br></br>
                                    <label>
                                        <input   id={this.props.attributes.items[6].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[6].displayValue}></input>
                                        {this.props.attributes.items[6].displayValue}
                                    </label>

                                </div> 
                            )
                        }else if(selectedvalue === this.props.attributes.items[3].displayValue){
                            return (
                                <div class="Attributes">
                                <br/>
                                <p>Please select {this.props.attributes.name}:</p>

                                    <label>
                                        <input id={this.props.attributes.items[0].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[0].displayValue}></input>
                                        {this.props.attributes.items[0].displayValue}
                                    </label>
                                    <br></br>
                                    <label>
                                        <input   id={this.props.attributes.items[1].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[1].displayValue}></input>
                                        {this.props.attributes.items[1].displayValue}
                                    </label>
                                    <br></br>
                                    <label>
                                        <input   id={this.props.attributes.items[2].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[2].displayValue}></input>
                                        {this.props.attributes.items[2].displayValue}
                                    </label>
                                    <br></br>
                                    <label>
                                        <input defaultChecked  id={this.props.attributes.items[3].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[3].displayValue}></input>
                                        {this.props.attributes.items[3].displayValue}
                                    </label>
                                    <br></br>
                                    <label>
                                        <input   id={this.props.attributes.items[4].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[4].displayValue}></input>
                                        {this.props.attributes.items[4].displayValue}
                                    </label>
                                    <br></br>
                                    <label>
                                        <input   id={this.props.attributes.items[5].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[5].displayValue}></input>
                                        {this.props.attributes.items[5].displayValue}
                                    </label>
                                    <br></br>
                                    <label>
                                        <input   id={this.props.attributes.items[6].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[6].displayValue}></input>
                                        {this.props.attributes.items[6].displayValue}
                                    </label>

                                </div> 
                            )
                        }else if(selectedvalue === this.props.attributes.items[2].displayValue){
                            return (
                                <div class="Attributes">
                                <br/>
                                <p>Please select {this.props.attributes.name}:</p>

                                    <label>
                                        <input id={this.props.attributes.items[0].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[0].displayValue}></input>
                                        {this.props.attributes.items[0].displayValue}
                                    </label>
                                    <br></br>
                                    <label>
                                        <input   id={this.props.attributes.items[1].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[1].displayValue}></input>
                                        {this.props.attributes.items[1].displayValue}
                                    </label>
                                    <br></br>
                                    <label>
                                        <input  defaultChecked  id={this.props.attributes.items[2].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[2].displayValue}></input>
                                        {this.props.attributes.items[2].displayValue}
                                    </label>
                                    <br></br>
                                    <label>
                                        <input   id={this.props.attributes.items[3].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[3].displayValue}></input>
                                        {this.props.attributes.items[3].displayValue}
                                    </label>
                                    <br></br>
                                    <label>
                                        <input   id={this.props.attributes.items[4].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[4].displayValue}></input>
                                        {this.props.attributes.items[4].displayValue}
                                    </label>
                                    <br></br>
                                    <label>
                                        <input   id={this.props.attributes.items[5].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[5].displayValue}></input>
                                        {this.props.attributes.items[5].displayValue}
                                    </label>
                                    <br></br>
                                    <label>
                                        <input   id={this.props.attributes.items[6].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[6].displayValue}></input>
                                        {this.props.attributes.items[6].displayValue}
                                    </label>

                                </div> 
                            )
                        }else if(selectedvalue === this.props.attributes.items[1].displayValue){
                            return (
                                <div class="Attributes">
                                <br/>
                                <p>Please select {this.props.attributes.name}:</p>

                                    <label>
                                        <input id={this.props.attributes.items[0].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[0].displayValue}></input>
                                        {this.props.attributes.items[0].displayValue}
                                    </label>
                                    <br></br>
                                    <label>
                                        <input defaultChecked  id={this.props.attributes.items[1].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[1].displayValue}></input>
                                        {this.props.attributes.items[1].displayValue}
                                    </label>
                                    <br></br>
                                    <label>
                                        <input   id={this.props.attributes.items[2].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[2].displayValue}></input>
                                        {this.props.attributes.items[2].displayValue}
                                    </label>
                                    <br></br>
                                    <label>
                                        <input   id={this.props.attributes.items[3].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[3].displayValue}></input>
                                        {this.props.attributes.items[3].displayValue}
                                    </label>
                                    <br></br>
                                    <label>
                                        <input   id={this.props.attributes.items[4].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[4].displayValue}></input>
                                        {this.props.attributes.items[4].displayValue}
                                    </label>
                                    <br></br>
                                    <label>
                                        <input   id={this.props.attributes.items[5].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[5].displayValue}></input>
                                        {this.props.attributes.items[5].displayValue}
                                    </label>
                                    <br></br>
                                    <label>
                                        <input   id={this.props.attributes.items[6].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[6].displayValue}></input>
                                        {this.props.attributes.items[6].displayValue}
                                    </label>

                                </div> 
                            )
                        }else{
                            return(
                                <div class="Attributes">
                                <br/>
                                <p>Please select {this.props.attributes.name}:</p>

                                    <label>
                                        <input defaultChecked id={this.props.attributes.items[0].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[0].displayValue}></input>
                                        {this.props.attributes.items[0].displayValue}
                                    </label>
                                    <br></br>
                                    <label>
                                        <input  id={this.props.attributes.items[1].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[1].displayValue}></input>
                                        {this.props.attributes.items[1].displayValue}
                                    </label>
                                    <br></br>
                                    <label>
                                        <input   id={this.props.attributes.items[2].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[2].displayValue}></input>
                                        {this.props.attributes.items[2].displayValue}
                                    </label>
                                    <br></br>
                                    <label>
                                        <input   id={this.props.attributes.items[3].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[3].displayValue}></input>
                                        {this.props.attributes.items[3].displayValue}
                                    </label>
                                    <br></br>
                                    <label>
                                        <input   id={this.props.attributes.items[4].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[4].displayValue}></input>
                                        {this.props.attributes.items[4].displayValue}
                                    </label>
                                    <br></br>
                                    <label>
                                        <input   id={this.props.attributes.items[5].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[5].displayValue}></input>
                                        {this.props.attributes.items[5].displayValue}
                                    </label>
                                    <br></br>
                                    <label>
                                        <input   id={this.props.attributes.items[6].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[6].displayValue}></input>
                                        {this.props.attributes.items[6].displayValue}
                                    </label>

                                </div> 
                            )
                        }
                        
                    }
                    return (

                        
                        <div class="Attributes">
                            <br/>
                            <p>Please select {this.props.attributes.name}:</p>

                                <label>
                                    <input defaultChecked id={this.props.attributes.items[0].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[0].displayValue}></input>
                                    {this.props.attributes.items[0].displayValue}
                                </label>
                                <br></br>
                                <label>
                                    <input  id={this.props.attributes.items[1].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[1].displayValue}></input>
                                     {this.props.attributes.items[1].displayValue}
                                </label>
                                <br></br>
                                    <label>
                                        <input   id={this.props.attributes.items[2].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[2].displayValue}></input>
                                        {this.props.attributes.items[2].displayValue}
                                    </label>
                                    <br></br>
                                    <label>
                                        <input   id={this.props.attributes.items[3].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[3].displayValue}></input>
                                        {this.props.attributes.items[3].displayValue}
                                    </label>
                                    <br></br>
                                    <label>
                                        <input   id={this.props.attributes.items[4].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[4].displayValue}></input>
                                        {this.props.attributes.items[4].displayValue}
                                    </label>
                                    <br></br>
                                    <label>
                                        <input   id={this.props.attributes.items[5].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[5].displayValue}></input>
                                        {this.props.attributes.items[5].displayValue}
                                    </label>
                                    <br></br>
                                    <label>
                                        <input   id={this.props.attributes.items[6].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[6].displayValue}></input>
                                        {this.props.attributes.items[6].displayValue}
                                    </label>

                            </div> 
                
                    )
                }
                
            }else if(this.props.attributes.type === "swatch"){
                if(length === 1){
                    return (

                        <div class="colors Attributes">
                            <br/>
                            <p>Please select {this.props.attributes.name}:</p>
                            <ul>
                                <li>
                                <label>
                                    <input defaultChecked id={this.props.attributes.items[0].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[0].displayValue}></input>
                                    <span class="swatch" style={{backgroundColor: this.props.attributes.items[0].displayValue}}></span> {this.props.attributes.items[0].displayValue}
                                </label>
                                </li>
                            </ul> 
                            </div> 
                        
                
                    )
                }else if(length === 2){
                    //done
                    if(this.props.selectedAttributes !== undefined){
                        let howmanyAttributes = this.props.selectedAttributes.length
                        let selectedvalue
                        for(let integer = 0; integer < howmanyAttributes; integer++){
                            if(this.props.selectedAttributes[integer].name === this.props.attributes.name){
                                console.log("juhuu")
                                console.log(this.props.selectedAttributes[integer].value)
                                selectedvalue = this.props.selectedAttributes[integer].value;
                            }
                            
                        }
                        if(selectedvalue === this.props.attributes.items[1].displayValue){
                            return(
                            <div class="colors Attributes">
                                <br/>
                                <p>Please select {this.props.attributes.name}:</p>
                                <ul>
                                    <li>
                                    <label>
                                        <input id={this.props.attributes.items[0].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[0].displayValue}></input>
                                        <span class="swatch" style={{backgroundColor: this.props.attributes.items[0].displayValue}}></span> {this.props.attributes.items[0].displayValue}
                                    </label>
                                    </li>
                                    <li>
                                    <label>
                                        <input defaultChecked  id={this.props.attributes.items[1].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[1].displayValue}></input>
                                        <span class="swatch" style={{backgroundColor: this.props.attributes.items[1].displayValue}}></span> {this.props.attributes.items[1].displayValue}
                                    </label>
                                    </li>
                                </ul> 
                                </div> 
                            )
                        }else{
                            return(
                                <div class="colors Attributes">
                                    <br/>
                                    <p>Please select {this.props.attributes.name}:</p>
                                    <ul>
                                        <li>
                                        <label>
                                            <input defaultChecked id={this.props.attributes.items[0].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[0].displayValue}></input>
                                            <span class="swatch" style={{backgroundColor: this.props.attributes.items[0].displayValue}}></span> {this.props.attributes.items[0].displayValue}
                                        </label>
                                        </li>
                                        <li>
                                        <label>
                                            <input  id={this.props.attributes.items[1].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[1].displayValue}></input>
                                            <span class="swatch" style={{backgroundColor: this.props.attributes.items[1].displayValue}}></span> {this.props.attributes.items[1].displayValue}
                                        </label>
                                        </li>
                                    </ul> 
                                    </div> 
                            )
                            
                        }
                        
                    }else{
                        return(
                            <div class="colors Attributes">
                                <br/>
                                <p>Please select {this.props.attributes.name}:</p>
                                <ul>
                                    <li>
                                    <label>
                                        <input defaultChecked id={this.props.attributes.items[0].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[0].displayValue}></input>
                                        <span class="swatch" style={{backgroundColor: this.props.attributes.items[0].displayValue}}></span> {this.props.attributes.items[0].displayValue}
                                    </label>
                                    </li>
                                    <li>
                                    <label>
                                        <input  id={this.props.attributes.items[1].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[1].displayValue}></input>
                                        <span class="swatch" style={{backgroundColor: this.props.attributes.items[1].displayValue}}></span> {this.props.attributes.items[1].displayValue}
                                    </label>
                                    </li>
                                </ul> 
                                </div> 
                        )
                    }
                }else if(length === 3){
                    //done
                    if(this.props.selectedAttributes !== undefined){
                        let howmanyAttributes = this.props.selectedAttributes.length
                        let selectedvalue
                        for(let integer = 0; integer < howmanyAttributes; integer++){
                            if(this.props.selectedAttributes[integer].name === this.props.attributes.name){
                                console.log("juhuu")
                                console.log(this.props.selectedAttributes[integer].value)
                                selectedvalue = this.props.selectedAttributes[integer].value;
                            }
                            
                        }
                        if(selectedvalue === this.props.attributes.items[2].displayValue){
                            return(
                            <div class="colors Attributes">
                                <br/>
                                <p>Please select {this.props.attributes.name}:</p>
                                <ul>
                                    <li>
                                    <label>
                                        <input id={this.props.attributes.items[0].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[0].displayValue}></input>
                                        <span class="swatch" style={{backgroundColor: this.props.attributes.items[0].displayValue}}></span> {this.props.attributes.items[0].displayValue}
                                    </label>
                                    </li>
                                    <li>
                                    <label>
                                        <input  id={this.props.attributes.items[1].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[1].displayValue}></input>
                                        <span class="swatch" style={{backgroundColor: this.props.attributes.items[1].displayValue}}></span> {this.props.attributes.items[1].displayValue}
                                    </label>
                                    </li>
                                    <li>
                                    <label>
                                    <input defaultChecked  id={this.props.attributes.items[2].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[2].displayValue}></input>
                                        <span class="swatch" style={{backgroundColor: this.props.attributes.items[2].displayValue}}></span> {this.props.attributes.items[2].displayValue}
                                    </label>
                                    </li>
                                </ul> 
                                </div> 
                            )
                        }else if(selectedvalue === this.props.attributes.items[1].displayValue){
                            return(
                            <div class="colors Attributes">
                                <br/>
                                <p>Please select {this.props.attributes.name}:</p>
                                <ul>
                                    <li>
                                    <label>
                                        <input id={this.props.attributes.items[0].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[0].displayValue}></input>
                                        <span class="swatch" style={{backgroundColor: this.props.attributes.items[0].displayValue}}></span> {this.props.attributes.items[0].displayValue}
                                    </label>
                                    </li>
                                    <li>
                                    <label>
                                        <input defaultChecked  id={this.props.attributes.items[1].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[1].displayValue}></input>
                                        <span class="swatch" style={{backgroundColor: this.props.attributes.items[1].displayValue}}></span> {this.props.attributes.items[1].displayValue}
                                    </label>
                                    </li>
                                    <li>
                                    <label>
                                    <input   id={this.props.attributes.items[2].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[2].displayValue}></input>
                                        <span class="swatch" style={{backgroundColor: this.props.attributes.items[2].displayValue}}></span> {this.props.attributes.items[2].displayValue}
                                    </label>
                                    </li>
                                </ul> 
                                </div> 
                            )
                        }else{
                            return(
                                <div class="colors Attributes">
                                    <br/>
                                    <p>Please select {this.props.attributes.name}:</p>
                                    <ul>
                                        <li>
                                        <label>
                                            <input defaultChecked id={this.props.attributes.items[0].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[0].displayValue}></input>
                                            <span class="swatch" style={{backgroundColor: this.props.attributes.items[0].displayValue}}></span> {this.props.attributes.items[0].displayValue}
                                        </label>
                                        </li>
                                        <li>
                                        <label>
                                            <input  id={this.props.attributes.items[1].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[1].displayValue}></input>
                                            <span class="swatch" style={{backgroundColor: this.props.attributes.items[1].displayValue}}></span> {this.props.attributes.items[1].displayValue}
                                        </label>
                                        </li>
                                        <li>
                                        <label>
                                        <input  id={this.props.attributes.items[2].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[2].displayValue}></input>
                                            <span class="swatch" style={{backgroundColor: this.props.attributes.items[2].displayValue}}></span> {this.props.attributes.items[2].displayValue}
                                        </label>
                                        </li>
                                    </ul> 
                                    </div> 
                            )
                            
                        }
                        
                    }else{
                        return(
                            <div class="colors Attributes">
                                <br/>
                                <p>Please select {this.props.attributes.name}:</p>
                                <ul>
                                    <li>
                                    <label>
                                        <input defaultChecked id={this.props.attributes.items[0].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[0].displayValue}></input>
                                        <span class="swatch" style={{backgroundColor: this.props.attributes.items[0].displayValue}}></span> {this.props.attributes.items[0].displayValue}
                                    </label>
                                    </li>
                                    <li>
                                    <label>
                                        <input  id={this.props.attributes.items[1].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[1].displayValue}></input>
                                        <span class="swatch" style={{backgroundColor: this.props.attributes.items[1].displayValue}}></span> {this.props.attributes.items[1].displayValue}
                                    </label>
                                    </li>
                                    <li>
                                    <label>
                                    <input  id={this.props.attributes.items[2].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[2].displayValue}></input>
                                        <span class="swatch" style={{backgroundColor: this.props.attributes.items[2].displayValue}}></span> {this.props.attributes.items[2].displayValue}
                                    </label>
                                    </li>
                                </ul> 
                                </div> 
                        )
                    }

                }else if(length === 4){
                    //done
                    if(this.props.selectedAttributes !== undefined){
                        let howmanyAttributes = this.props.selectedAttributes.length
                        let selectedvalue
                        for(let integer = 0; integer < howmanyAttributes; integer++){
                            if(this.props.selectedAttributes[integer].name === this.props.attributes.name){
                                console.log("juhuu")
                                console.log(this.props.selectedAttributes[integer].value)
                                selectedvalue = this.props.selectedAttributes[integer].value;
                            }
                            
                        }
                        if(selectedvalue === this.props.attributes.items[3].displayValue){
                            return(
                            <div class="colors Attributes">
                                <br/>
                                <p>Please select {this.props.attributes.name}:</p>
                                <ul>
                                    <li>
                                    <label>
                                        <input id={this.props.attributes.items[0].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[0].displayValue}></input>
                                        <span class="swatch" style={{backgroundColor: this.props.attributes.items[0].displayValue}}></span> {this.props.attributes.items[0].displayValue}
                                    </label>
                                    </li>
                                    <li>
                                    <label>
                                        <input  id={this.props.attributes.items[1].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[1].displayValue}></input>
                                        <span class="swatch" style={{backgroundColor: this.props.attributes.items[1].displayValue}}></span> {this.props.attributes.items[1].displayValue}
                                    </label>
                                    </li>
                                    <li>
                                    <label>
                                    <input  id={this.props.attributes.items[2].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[2].displayValue}></input>
                                        <span class="swatch" style={{backgroundColor: this.props.attributes.items[2].displayValue}}></span> {this.props.attributes.items[2].displayValue}
                                    </label>
                                    </li>
                                    <li>
                                    <label>
                                    <input defaultChecked  id={this.props.attributes.items[3].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[3].displayValue}></input>
                                        <span class="swatch" style={{backgroundColor: this.props.attributes.items[3].displayValue}}></span> {this.props.attributes.items[3].displayValue}
                                    </label>
                                    </li>
                                </ul> 
                                </div> 
                            )
                        }else if(selectedvalue === this.props.attributes.items[2].displayValue){
                            return(
                            <div class="colors Attributes">
                                <br/>
                                <p>Please select {this.props.attributes.name}:</p>
                                <ul>
                                    <li>
                                    <label>
                                        <input id={this.props.attributes.items[0].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[0].displayValue}></input>
                                        <span class="swatch" style={{backgroundColor: this.props.attributes.items[0].displayValue}}></span> {this.props.attributes.items[0].displayValue}
                                    </label>
                                    </li>
                                    <li>
                                    <label>
                                        <input  id={this.props.attributes.items[1].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[1].displayValue}></input>
                                        <span class="swatch" style={{backgroundColor: this.props.attributes.items[1].displayValue}}></span> {this.props.attributes.items[1].displayValue}
                                    </label>
                                    </li>
                                    <li>
                                    <label>
                                    <input defaultChecked  id={this.props.attributes.items[2].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[2].displayValue}></input>
                                        <span class="swatch" style={{backgroundColor: this.props.attributes.items[2].displayValue}}></span> {this.props.attributes.items[2].displayValue}
                                    </label>
                                    </li>
                                    <li>
                                    <label>
                                    <input   id={this.props.attributes.items[3].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[3].displayValue}></input>
                                        <span class="swatch" style={{backgroundColor: this.props.attributes.items[3].displayValue}}></span> {this.props.attributes.items[3].displayValue}
                                    </label>
                                    </li>
                                </ul> 
                                </div> 
                            )
                        }else if(selectedvalue === this.props.attributes.items[1].displayValue){
                            return(
                            <div class="colors Attributes">
                                <br/>
                                <p>Please select {this.props.attributes.name}:</p>
                                <ul>
                                    <li>
                                    <label>
                                        <input id={this.props.attributes.items[0].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[0].displayValue}></input>
                                        <span class="swatch" style={{backgroundColor: this.props.attributes.items[0].displayValue}}></span> {this.props.attributes.items[0].displayValue}
                                    </label>
                                    </li>
                                    <li>
                                    <label>
                                        <input defaultChecked  id={this.props.attributes.items[1].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[1].displayValue}></input>
                                        <span class="swatch" style={{backgroundColor: this.props.attributes.items[1].displayValue}}></span> {this.props.attributes.items[1].displayValue}
                                    </label>
                                    </li>
                                    <li>
                                    <label>
                                    <input   id={this.props.attributes.items[2].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[2].displayValue}></input>
                                        <span class="swatch" style={{backgroundColor: this.props.attributes.items[2].displayValue}}></span> {this.props.attributes.items[2].displayValue}
                                    </label>
                                    </li>
                                    <li>
                                    <label>
                                    <input   id={this.props.attributes.items[3].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[3].displayValue}></input>
                                        <span class="swatch" style={{backgroundColor: this.props.attributes.items[3].displayValue}}></span> {this.props.attributes.items[3].displayValue}
                                    </label>
                                    </li>
                                </ul> 
                                </div> 
                            )
                        }else{
                            return(
                                <div class="colors Attributes">
                                    <br/>
                                    <p>Please select {this.props.attributes.name}:</p>
                                    <ul>
                                        <li>
                                        <label>
                                            <input defaultChecked id={this.props.attributes.items[0].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[0].displayValue}></input>
                                            <span class="swatch" style={{backgroundColor: this.props.attributes.items[0].displayValue}}></span> {this.props.attributes.items[0].displayValue}
                                        </label>
                                        </li>
                                        <li>
                                        <label>
                                            <input  id={this.props.attributes.items[1].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[1].displayValue}></input>
                                            <span class="swatch" style={{backgroundColor: this.props.attributes.items[1].displayValue}}></span> {this.props.attributes.items[1].displayValue}
                                        </label>
                                        </li>
                                        <li>
                                        <label>
                                        <input  id={this.props.attributes.items[2].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[2].displayValue}></input>
                                            <span class="swatch" style={{backgroundColor: this.props.attributes.items[2].displayValue}}></span> {this.props.attributes.items[2].displayValue}
                                        </label>
                                        </li>
                                        <li>
                                        <label>
                                        <input   id={this.props.attributes.items[3].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[3].displayValue}></input>
                                            <span class="swatch" style={{backgroundColor: this.props.attributes.items[3].displayValue}}></span> {this.props.attributes.items[3].displayValue}
                                        </label>
                                        </li>
                                    </ul> 
                                    </div> 
                            )
                            
                        }
                        
                    }else{
                        return(
                            <div class="colors Attributes">
                                <br/>
                                <p>Please select {this.props.attributes.name}:</p>
                                <ul>
                                    <li>
                                    <label>
                                        <input defaultChecked id={this.props.attributes.items[0].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[0].displayValue}></input>
                                        <span class="swatch" style={{backgroundColor: this.props.attributes.items[0].displayValue}}></span> {this.props.attributes.items[0].displayValue}
                                    </label>
                                    </li>
                                    <li>
                                    <label>
                                        <input  id={this.props.attributes.items[1].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[1].displayValue}></input>
                                        <span class="swatch" style={{backgroundColor: this.props.attributes.items[1].displayValue}}></span> {this.props.attributes.items[1].displayValue}
                                    </label>
                                    </li>
                                    <li>
                                    <label>
                                    <input  id={this.props.attributes.items[2].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[2].displayValue}></input>
                                        <span class="swatch" style={{backgroundColor: this.props.attributes.items[2].displayValue}}></span> {this.props.attributes.items[2].displayValue}
                                    </label>
                                    </li>
                                    <li>
                                    <label>
                                    <input  id={this.props.attributes.items[3].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[3].displayValue}></input>
                                        <span class="swatch" style={{backgroundColor: this.props.attributes.items[3].displayValue}}></span> {this.props.attributes.items[3].displayValue}
                                    </label>
                                    </li>
                                </ul> 
                                </div> 
                        )
                    }
                }else if(length === 5){
                    //done
                    if(this.props.selectedAttributes !== undefined){
                        let howmanyAttributes = this.props.selectedAttributes.length
                        let selectedvalue
                        for(let integer = 0; integer < howmanyAttributes; integer++){
                            if(this.props.selectedAttributes[integer].name === this.props.attributes.name){
                                console.log("juhuu")
                                console.log(this.props.selectedAttributes[integer].value)
                                selectedvalue = this.props.selectedAttributes[integer].value;
                            }
                            
                        }
                        if(selectedvalue === this.props.attributes.items[4].displayValue){
                            return(
                            <div class="colors Attributes">
                                <br/>
                                <p>Please select {this.props.attributes.name}:</p>
                                <ul>
                                    <li>
                                    <label>
                                        <input id={this.props.attributes.items[0].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[0].displayValue}></input>
                                        <span class="swatch" style={{backgroundColor: this.props.attributes.items[0].displayValue}}></span> {this.props.attributes.items[0].displayValue}
                                    </label>
                                    </li>
                                    <li>
                                    <label>
                                        <input  id={this.props.attributes.items[1].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[1].displayValue}></input>
                                        <span class="swatch" style={{backgroundColor: this.props.attributes.items[1].displayValue}}></span> {this.props.attributes.items[1].displayValue}
                                    </label>
                                    </li>
                                    <li>
                                    <label>
                                    <input  id={this.props.attributes.items[2].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[2].displayValue}></input>
                                        <span class="swatch" style={{backgroundColor: this.props.attributes.items[2].displayValue}}></span> {this.props.attributes.items[2].displayValue}
                                    </label>
                                    </li>
                                    <li>
                                    <label>
                                    <input  id={this.props.attributes.items[3].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[3].displayValue}></input>
                                        <span class="swatch" style={{backgroundColor: this.props.attributes.items[3].displayValue}}></span> {this.props.attributes.items[3].displayValue}
                                    </label>
                                    </li>
                                    <li>
                                    <label>
                                    <input defaultChecked  id={this.props.attributes.items[4].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[4].displayValue}></input>
                                        <span class="swatch" style={{backgroundColor: this.props.attributes.items[4].displayValue, borderRadius: "2px solid black"}}></span> {this.props.attributes.items[4].displayValue}
                                    </label>
                                    </li>
                                </ul> 
                                </div> 
                            )
                        }else if(selectedvalue === this.props.attributes.items[3].displayValue){
                            return(
                            <div class="colors Attributes">
                                <br/>
                                <p>Please select {this.props.attributes.name}:</p>
                                <ul>
                                    <li>
                                    <label>
                                        <input id={this.props.attributes.items[0].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[0].displayValue}></input>
                                        <span class="swatch" style={{backgroundColor: this.props.attributes.items[0].displayValue}}></span> {this.props.attributes.items[0].displayValue}
                                    </label>
                                    </li>
                                    <li>
                                    <label>
                                        <input  id={this.props.attributes.items[1].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[1].displayValue}></input>
                                        <span class="swatch" style={{backgroundColor: this.props.attributes.items[1].displayValue}}></span> {this.props.attributes.items[1].displayValue}
                                    </label>
                                    </li>
                                    <li>
                                    <label>
                                    <input  id={this.props.attributes.items[2].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[2].displayValue}></input>
                                        <span class="swatch" style={{backgroundColor: this.props.attributes.items[2].displayValue}}></span> {this.props.attributes.items[2].displayValue}
                                    </label>
                                    </li>
                                    <li>
                                    <label>
                                    <input defaultChecked  id={this.props.attributes.items[3].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[3].displayValue}></input>
                                        <span class="swatch" style={{backgroundColor: this.props.attributes.items[3].displayValue}}></span> {this.props.attributes.items[3].displayValue}
                                    </label>
                                    </li>
                                    <li>
                                    <label>
                                    <input   id={this.props.attributes.items[4].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[4].displayValue}></input>
                                        <span class="swatch" style={{backgroundColor: this.props.attributes.items[4].displayValue, borderRadius: "2px solid black"}}></span> {this.props.attributes.items[4].displayValue}
                                    </label>
                                    </li>
                                </ul> 
                                </div> 
                            )
                        }else if(selectedvalue === this.props.attributes.items[2].displayValue){
                            return(
                            <div class="colors Attributes">
                                <br/>
                                <p>Please select {this.props.attributes.name}:</p>
                                <ul>
                                    <li>
                                    <label>
                                        <input id={this.props.attributes.items[0].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[0].displayValue}></input>
                                        <span class="swatch" style={{backgroundColor: this.props.attributes.items[0].displayValue}}></span> {this.props.attributes.items[0].displayValue}
                                    </label>
                                    </li>
                                    <li>
                                    <label>
                                        <input  id={this.props.attributes.items[1].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[1].displayValue}></input>
                                        <span class="swatch" style={{backgroundColor: this.props.attributes.items[1].displayValue}}></span> {this.props.attributes.items[1].displayValue}
                                    </label>
                                    </li>
                                    <li>
                                    <label>
                                    <input defaultChecked  id={this.props.attributes.items[2].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[2].displayValue}></input>
                                        <span class="swatch" style={{backgroundColor: this.props.attributes.items[2].displayValue}}></span> {this.props.attributes.items[2].displayValue}
                                    </label>
                                    </li>
                                    <li>
                                    <label>
                                    <input   id={this.props.attributes.items[3].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[3].displayValue}></input>
                                        <span class="swatch" style={{backgroundColor: this.props.attributes.items[3].displayValue}}></span> {this.props.attributes.items[3].displayValue}
                                    </label>
                                    </li>
                                    <li>
                                    <label>
                                    <input   id={this.props.attributes.items[4].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[4].displayValue}></input>
                                        <span class="swatch" style={{backgroundColor: this.props.attributes.items[4].displayValue, borderRadius: "2px solid black"}}></span> {this.props.attributes.items[4].displayValue}
                                    </label>
                                    </li>
                                </ul> 
                                </div> 
                            )
                        }else if(selectedvalue === this.props.attributes.items[1].displayValue){
                            return(
                            <div class="colors Attributes">
                                <br/>
                                <p>Please select {this.props.attributes.name}:</p>
                                <ul>
                                    <li>
                                    <label>
                                        <input id={this.props.attributes.items[0].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[0].displayValue}></input>
                                        <span class="swatch" style={{backgroundColor: this.props.attributes.items[0].displayValue}}></span> {this.props.attributes.items[0].displayValue}
                                    </label>
                                    </li>
                                    <li>
                                    <label>
                                        <input defaultChecked  id={this.props.attributes.items[1].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[1].displayValue}></input>
                                        <span class="swatch" style={{backgroundColor: this.props.attributes.items[1].displayValue}}></span> {this.props.attributes.items[1].displayValue}
                                    </label>
                                    </li>
                                    <li>
                                    <label>
                                    <input   id={this.props.attributes.items[2].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[2].displayValue}></input>
                                        <span class="swatch" style={{backgroundColor: this.props.attributes.items[2].displayValue}}></span> {this.props.attributes.items[2].displayValue}
                                    </label>
                                    </li>
                                    <li>
                                    <label>
                                    <input   id={this.props.attributes.items[3].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[3].displayValue}></input>
                                        <span class="swatch" style={{backgroundColor: this.props.attributes.items[3].displayValue}}></span> {this.props.attributes.items[3].displayValue}
                                    </label>
                                    </li>
                                    <li>
                                    <label>
                                    <input   id={this.props.attributes.items[4].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[4].displayValue}></input>
                                        <span class="swatch" style={{backgroundColor: this.props.attributes.items[4].displayValue, borderRadius: "2px solid black"}}></span> {this.props.attributes.items[4].displayValue}
                                    </label>
                                    </li>
                                </ul> 
                                </div> 
                            )
                        }else{
                            return(
                                <div class="colors Attributes">
                                    <br/>
                                    <p>Please select {this.props.attributes.name}:</p>
                                    <ul>
                                        <li>
                                        <label>
                                            <input defaultChecked id={this.props.attributes.items[0].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[0].displayValue}></input>
                                            <span class="swatch" style={{backgroundColor: this.props.attributes.items[0].displayValue}}></span> {this.props.attributes.items[0].displayValue}
                                        </label>
                                        </li>
                                        <li>
                                        <label>
                                            <input  id={this.props.attributes.items[1].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[1].displayValue}></input>
                                            <span class="swatch" style={{backgroundColor: this.props.attributes.items[1].displayValue}}></span> {this.props.attributes.items[1].displayValue}
                                        </label>
                                        </li>
                                        <li>
                                        <label>
                                        <input  id={this.props.attributes.items[2].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[2].displayValue}></input>
                                            <span class="swatch" style={{backgroundColor: this.props.attributes.items[2].displayValue}}></span> {this.props.attributes.items[2].displayValue}
                                        </label>
                                        </li>
                                        <li>
                                        <label>
                                        <input   id={this.props.attributes.items[3].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[3].displayValue}></input>
                                            <span class="swatch" style={{backgroundColor: this.props.attributes.items[3].displayValue}}></span> {this.props.attributes.items[3].displayValue}
                                        </label>
                                        </li>
                                        <li>
                                        <label>
                                        <input   id={this.props.attributes.items[4].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[4].displayValue}></input>
                                            <span class="swatch" style={{backgroundColor: this.props.attributes.items[4].displayValue, borderRadius: "2px solid black"}}></span> {this.props.attributes.items[4].displayValue}
                                        </label>
                                        </li>
                                    </ul> 
                                    </div> 
                            )
                            
                        }
                        
                    }else{
                        return(
                            <div class="colors Attributes">
                                <br/>
                                <p>Please select {this.props.attributes.name}:</p>
                                <ul>
                                    <li>
                                    <label>
                                        <input defaultChecked id={this.props.attributes.items[0].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[0].displayValue}></input>
                                        <span class="swatch" style={{backgroundColor: this.props.attributes.items[0].displayValue}}></span> {this.props.attributes.items[0].displayValue}
                                    </label>
                                    </li>
                                    <li>
                                    <label>
                                        <input  id={this.props.attributes.items[1].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[1].displayValue}></input>
                                        <span class="swatch" style={{backgroundColor: this.props.attributes.items[1].displayValue}}></span> {this.props.attributes.items[1].displayValue}
                                    </label>
                                    </li>
                                    <li>
                                    <label>
                                    <input  id={this.props.attributes.items[2].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[2].displayValue}></input>
                                        <span class="swatch" style={{backgroundColor: this.props.attributes.items[2].displayValue}}></span> {this.props.attributes.items[2].displayValue}
                                    </label>
                                    </li>
                                    <li>
                                    <label>
                                    <input  id={this.props.attributes.items[3].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[3].displayValue}></input>
                                        <span class="swatch" style={{backgroundColor: this.props.attributes.items[3].displayValue}}></span> {this.props.attributes.items[3].displayValue}
                                    </label>
                                    </li>
                                    <li>
                                    <label>
                                    <input  id={this.props.attributes.items[4].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[4].displayValue}></input>
                                        <span class="swatch" style={{backgroundColor: this.props.attributes.items[4].displayValue, borderRadius: "2px solid black"}}></span> {this.props.attributes.items[4].displayValue}
                                    </label>
                                    </li>
                                </ul> 
                                </div> 
                        )
                    }
                }else if(length === 6){
                    //done
                    if(this.props.selectedAttributes !== undefined){
                        let howmanyAttributes = this.props.selectedAttributes.length
                        let selectedvalue
                        for(let integer = 0; integer < howmanyAttributes; integer++){
                            if(this.props.selectedAttributes[integer].name === this.props.attributes.name){
                                console.log("juhuu")
                                console.log(this.props.selectedAttributes[integer].value)
                                selectedvalue = this.props.selectedAttributes[integer].value;
                            }
                            
                        }
                        if(selectedvalue === this.props.attributes.items[5].displayValue){
                            return(
                            <div class="colors Attributes">
                                <br/>
                                <p>Please select {this.props.attributes.name}:</p>
                                <ul>
                                    <li>
                                    <label>
                                        <input id={this.props.attributes.items[0].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[0].displayValue}></input>
                                        <span class="swatch" style={{backgroundColor: this.props.attributes.items[0].displayValue}}></span> {this.props.attributes.items[0].displayValue}
                                    </label>
                                    </li>
                                    <li>
                                    <label>
                                        <input  id={this.props.attributes.items[1].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[1].displayValue}></input>
                                        <span class="swatch" style={{backgroundColor: this.props.attributes.items[1].displayValue}}></span> {this.props.attributes.items[1].displayValue}
                                    </label>
                                    </li>
                                    <li>
                                    <label>
                                    <input  id={this.props.attributes.items[2].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[2].displayValue}></input>
                                        <span class="swatch" style={{backgroundColor: this.props.attributes.items[2].displayValue}}></span> {this.props.attributes.items[2].displayValue}
                                    </label>
                                    </li>
                                    <li>
                                    <label>
                                    <input  id={this.props.attributes.items[3].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[3].displayValue}></input>
                                        <span class="swatch" style={{backgroundColor: this.props.attributes.items[3].displayValue}}></span> {this.props.attributes.items[3].displayValue}
                                    </label>
                                    </li>
                                    <li>
                                    <label>
                                    <input   id={this.props.attributes.items[4].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[4].displayValue}></input>
                                        <span class="swatch" style={{backgroundColor: this.props.attributes.items[4].displayValue, borderRadius: "2px solid black"}}></span> {this.props.attributes.items[4].displayValue}
                                    </label>
                                    </li>
                                    <li>
                                    <label>
                                    <input defaultChecked  id={this.props.attributes.items[5].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[5].displayValue}></input>
                                        <span class="swatch" style={{backgroundColor: this.props.attributes.items[5].displayValue, borderRadius: "2px solid black"}}></span> {this.props.attributes.items[5].displayValue}
                                    </label>
                                    </li>
                                </ul> 
                                </div> 
                            )
                        }else if(selectedvalue === this.props.attributes.items[4].displayValue){
                            return(
                            <div class="colors Attributes">
                                <br/>
                                <p>Please select {this.props.attributes.name}:</p>
                                <ul>
                                    <li>
                                    <label>
                                        <input id={this.props.attributes.items[0].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[0].displayValue}></input>
                                        <span class="swatch" style={{backgroundColor: this.props.attributes.items[0].displayValue}}></span> {this.props.attributes.items[0].displayValue}
                                    </label>
                                    </li>
                                    <li>
                                    <label>
                                        <input  id={this.props.attributes.items[1].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[1].displayValue}></input>
                                        <span class="swatch" style={{backgroundColor: this.props.attributes.items[1].displayValue}}></span> {this.props.attributes.items[1].displayValue}
                                    </label>
                                    </li>
                                    <li>
                                    <label>
                                    <input  id={this.props.attributes.items[2].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[2].displayValue}></input>
                                        <span class="swatch" style={{backgroundColor: this.props.attributes.items[2].displayValue}}></span> {this.props.attributes.items[2].displayValue}
                                    </label>
                                    </li>
                                    <li>
                                    <label>
                                    <input  id={this.props.attributes.items[3].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[3].displayValue}></input>
                                        <span class="swatch" style={{backgroundColor: this.props.attributes.items[3].displayValue}}></span> {this.props.attributes.items[3].displayValue}
                                    </label>
                                    </li>
                                    <li>
                                    <label>
                                    <input defaultChecked  id={this.props.attributes.items[4].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[4].displayValue}></input>
                                        <span class="swatch" style={{backgroundColor: this.props.attributes.items[4].displayValue, borderRadius: "2px solid black"}}></span> {this.props.attributes.items[4].displayValue}
                                    </label>
                                    </li>
                                    <li>
                                    <label>
                                    <input   id={this.props.attributes.items[5].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[5].displayValue}></input>
                                        <span class="swatch" style={{backgroundColor: this.props.attributes.items[5].displayValue, borderRadius: "2px solid black"}}></span> {this.props.attributes.items[5].displayValue}
                                    </label>
                                    </li>
                                </ul> 
                                </div> 
                            )
                        }else if(selectedvalue === this.props.attributes.items[3].displayValue){
                            return(
                            <div class="colors Attributes">
                                <br/>
                                <p>Please select {this.props.attributes.name}:</p>
                                <ul>
                                    <li>
                                    <label>
                                        <input id={this.props.attributes.items[0].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[0].displayValue}></input>
                                        <span class="swatch" style={{backgroundColor: this.props.attributes.items[0].displayValue}}></span> {this.props.attributes.items[0].displayValue}
                                    </label>
                                    </li>
                                    <li>
                                    <label>
                                        <input  id={this.props.attributes.items[1].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[1].displayValue}></input>
                                        <span class="swatch" style={{backgroundColor: this.props.attributes.items[1].displayValue}}></span> {this.props.attributes.items[1].displayValue}
                                    </label>
                                    </li>
                                    <li>
                                    <label>
                                    <input  id={this.props.attributes.items[2].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[2].displayValue}></input>
                                        <span class="swatch" style={{backgroundColor: this.props.attributes.items[2].displayValue}}></span> {this.props.attributes.items[2].displayValue}
                                    </label>
                                    </li>
                                    <li>
                                    <label>
                                    <input defaultChecked  id={this.props.attributes.items[3].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[3].displayValue}></input>
                                        <span class="swatch" style={{backgroundColor: this.props.attributes.items[3].displayValue}}></span> {this.props.attributes.items[3].displayValue}
                                    </label>
                                    </li>
                                    <li>
                                    <label>
                                    <input   id={this.props.attributes.items[4].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[4].displayValue}></input>
                                        <span class="swatch" style={{backgroundColor: this.props.attributes.items[4].displayValue, borderRadius: "2px solid black"}}></span> {this.props.attributes.items[4].displayValue}
                                    </label>
                                    </li>
                                    <li>
                                    <label>
                                    <input   id={this.props.attributes.items[5].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[5].displayValue}></input>
                                        <span class="swatch" style={{backgroundColor: this.props.attributes.items[5].displayValue, borderRadius: "2px solid black"}}></span> {this.props.attributes.items[5].displayValue}
                                    </label>
                                    </li>
                                </ul> 
                                </div> 
                            )
                        }else if(selectedvalue === this.props.attributes.items[2].displayValue){
                            return(
                            <div class="colors Attributes">
                                <br/>
                                <p>Please select {this.props.attributes.name}:</p>
                                <ul>
                                    <li>
                                    <label>
                                        <input id={this.props.attributes.items[0].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[0].displayValue}></input>
                                        <span class="swatch" style={{backgroundColor: this.props.attributes.items[0].displayValue}}></span> {this.props.attributes.items[0].displayValue}
                                    </label>
                                    </li>
                                    <li>
                                    <label>
                                        <input  id={this.props.attributes.items[1].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[1].displayValue}></input>
                                        <span class="swatch" style={{backgroundColor: this.props.attributes.items[1].displayValue}}></span> {this.props.attributes.items[1].displayValue}
                                    </label>
                                    </li>
                                    <li>
                                    <label>
                                    <input defaultChecked  id={this.props.attributes.items[2].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[2].displayValue}></input>
                                        <span class="swatch" style={{backgroundColor: this.props.attributes.items[2].displayValue}}></span> {this.props.attributes.items[2].displayValue}
                                    </label>
                                    </li>
                                    <li>
                                    <label>
                                    <input   id={this.props.attributes.items[3].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[3].displayValue}></input>
                                        <span class="swatch" style={{backgroundColor: this.props.attributes.items[3].displayValue}}></span> {this.props.attributes.items[3].displayValue}
                                    </label>
                                    </li>
                                    <li>
                                    <label>
                                    <input   id={this.props.attributes.items[4].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[4].displayValue}></input>
                                        <span class="swatch" style={{backgroundColor: this.props.attributes.items[4].displayValue, borderRadius: "2px solid black"}}></span> {this.props.attributes.items[4].displayValue}
                                    </label>
                                    </li>
                                    <li>
                                    <label>
                                    <input   id={this.props.attributes.items[5].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[5].displayValue}></input>
                                        <span class="swatch" style={{backgroundColor: this.props.attributes.items[5].displayValue, borderRadius: "2px solid black"}}></span> {this.props.attributes.items[5].displayValue}
                                    </label>
                                    </li>
                                </ul> 
                                </div> 
                            )
                        }else if(selectedvalue === this.props.attributes.items[1].displayValue){
                            return(
                            <div class="colors Attributes">
                                <br/>
                                <p>Please select {this.props.attributes.name}:</p>
                                <ul>
                                    <li>
                                    <label>
                                        <input id={this.props.attributes.items[0].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[0].displayValue}></input>
                                        <span class="swatch" style={{backgroundColor: this.props.attributes.items[0].displayValue}}></span> {this.props.attributes.items[0].displayValue}
                                    </label>
                                    </li>
                                    <li>
                                    <label>
                                        <input defaultChecked  id={this.props.attributes.items[1].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[1].displayValue}></input>
                                        <span class="swatch" style={{backgroundColor: this.props.attributes.items[1].displayValue}}></span> {this.props.attributes.items[1].displayValue}
                                    </label>
                                    </li>
                                    <li>
                                    <label>
                                    <input   id={this.props.attributes.items[2].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[2].displayValue}></input>
                                        <span class="swatch" style={{backgroundColor: this.props.attributes.items[2].displayValue}}></span> {this.props.attributes.items[2].displayValue}
                                    </label>
                                    </li>
                                    <li>
                                    <label>
                                    <input   id={this.props.attributes.items[3].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[3].displayValue}></input>
                                        <span class="swatch" style={{backgroundColor: this.props.attributes.items[3].displayValue}}></span> {this.props.attributes.items[3].displayValue}
                                    </label>
                                    </li>
                                    <li>
                                    <label>
                                    <input   id={this.props.attributes.items[4].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[4].displayValue}></input>
                                        <span class="swatch" style={{backgroundColor: this.props.attributes.items[4].displayValue, borderRadius: "2px solid black"}}></span> {this.props.attributes.items[4].displayValue}
                                    </label>
                                    </li>
                                    <li>
                                    <label>
                                    <input   id={this.props.attributes.items[5].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[5].displayValue}></input>
                                        <span class="swatch" style={{backgroundColor: this.props.attributes.items[5].displayValue, borderRadius: "2px solid black"}}></span> {this.props.attributes.items[5].displayValue}
                                    </label>
                                    </li>
                                </ul> 
                                </div> 
                            )
                        }else{
                            return(
                                <div class="colors Attributes">
                                    <br/>
                                    <p>Please select {this.props.attributes.name}:</p>
                                    <ul>
                                        <li>
                                        <label>
                                            <input defaultChecked id={this.props.attributes.items[0].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[0].displayValue}></input>
                                            <span class="swatch" style={{backgroundColor: this.props.attributes.items[0].displayValue}}></span> {this.props.attributes.items[0].displayValue}
                                        </label>
                                        </li>
                                        <li>
                                        <label>
                                            <input  id={this.props.attributes.items[1].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[1].displayValue}></input>
                                            <span class="swatch" style={{backgroundColor: this.props.attributes.items[1].displayValue}}></span> {this.props.attributes.items[1].displayValue}
                                        </label>
                                        </li>
                                        <li>
                                        <label>
                                        <input  id={this.props.attributes.items[2].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[2].displayValue}></input>
                                            <span class="swatch" style={{backgroundColor: this.props.attributes.items[2].displayValue}}></span> {this.props.attributes.items[2].displayValue}
                                        </label>
                                        </li>
                                        <li>
                                        <label>
                                        <input   id={this.props.attributes.items[3].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[3].displayValue}></input>
                                            <span class="swatch" style={{backgroundColor: this.props.attributes.items[3].displayValue}}></span> {this.props.attributes.items[3].displayValue}
                                        </label>
                                        </li>
                                        <li>
                                        <label>
                                        <input   id={this.props.attributes.items[4].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[4].displayValue}></input>
                                            <span class="swatch" style={{backgroundColor: this.props.attributes.items[4].displayValue, borderRadius: "2px solid black"}}></span> {this.props.attributes.items[4].displayValue}
                                        </label>
                                        </li>
                                        <li>
                                    <label>
                                    <input   id={this.props.attributes.items[5].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[5].displayValue}></input>
                                        <span class="swatch" style={{backgroundColor: this.props.attributes.items[5].displayValue, borderRadius: "2px solid black"}}></span> {this.props.attributes.items[5].displayValue}
                                    </label>
                                    </li>
                                    </ul> 
                                    </div> 
                            )
                            
                        }
                        
                    }else{
                        return(
                            <div class="colors Attributes">
                                <br/>
                                <p>Please select {this.props.attributes.name}:</p>
                                <ul>
                                    <li>
                                    <label>
                                        <input defaultChecked id={this.props.attributes.items[0].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[0].displayValue}></input>
                                        <span class="swatch" style={{backgroundColor: this.props.attributes.items[0].displayValue}}></span> {this.props.attributes.items[0].displayValue}
                                    </label>
                                    </li>
                                    <li>
                                    <label>
                                        <input  id={this.props.attributes.items[1].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[1].displayValue}></input>
                                        <span class="swatch" style={{backgroundColor: this.props.attributes.items[1].displayValue}}></span> {this.props.attributes.items[1].displayValue}
                                    </label>
                                    </li>
                                    <li>
                                    <label>
                                    <input  id={this.props.attributes.items[2].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[2].displayValue}></input>
                                        <span class="swatch" style={{backgroundColor: this.props.attributes.items[2].displayValue}}></span> {this.props.attributes.items[2].displayValue}
                                    </label>
                                    </li>
                                    <li>
                                    <label>
                                    <input  id={this.props.attributes.items[3].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[3].displayValue}></input>
                                        <span class="swatch" style={{backgroundColor: this.props.attributes.items[3].displayValue}}></span> {this.props.attributes.items[3].displayValue}
                                    </label>
                                    </li>
                                    <li>
                                    <label>
                                    <input  id={this.props.attributes.items[4].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[4].displayValue}></input>
                                        <span class="swatch" style={{backgroundColor: this.props.attributes.items[4].displayValue, borderRadius: "2px solid black"}}></span> {this.props.attributes.items[4].displayValue}
                                    </label>
                                    </li>
                                    <li>
                                    <label>
                                    <input   id={this.props.attributes.items[5].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[5].displayValue}></input>
                                        <span class="swatch" style={{backgroundColor: this.props.attributes.items[5].displayValue, borderRadius: "2px solid black"}}></span> {this.props.attributes.items[5].displayValue}
                                    </label>
                                    </li>
                                </ul> 
                                </div> 
                        )
                    }
                }else if(length === 7){
                    //done
                    if(this.props.selectedAttributes !== undefined){
                        let howmanyAttributes = this.props.selectedAttributes.length
                        let selectedvalue
                        for(let integer = 0; integer < howmanyAttributes; integer++){
                            if(this.props.selectedAttributes[integer].name === this.props.attributes.name){
                                console.log("juhuu")
                                console.log(this.props.selectedAttributes[integer].value)
                                selectedvalue = this.props.selectedAttributes[integer].value;
                            }
                            
                        }
                        if(selectedvalue === this.props.attributes.items[6].displayValue){
                            return(
                            <div class="colors Attributes">
                                <br/>
                                <p>Please select {this.props.attributes.name}:</p>
                                <ul>
                                    <li>
                                    <label>
                                        <input id={this.props.attributes.items[0].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[0].displayValue}></input>
                                        <span class="swatch" style={{backgroundColor: this.props.attributes.items[0].displayValue}}></span> {this.props.attributes.items[0].displayValue}
                                    </label>
                                    </li>
                                    <li>
                                    <label>
                                        <input  id={this.props.attributes.items[1].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[1].displayValue}></input>
                                        <span class="swatch" style={{backgroundColor: this.props.attributes.items[1].displayValue}}></span> {this.props.attributes.items[1].displayValue}
                                    </label>
                                    </li>
                                    <li>
                                    <label>
                                    <input  id={this.props.attributes.items[2].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[2].displayValue}></input>
                                        <span class="swatch" style={{backgroundColor: this.props.attributes.items[2].displayValue}}></span> {this.props.attributes.items[2].displayValue}
                                    </label>
                                    </li>
                                    <li>
                                    <label>
                                    <input  id={this.props.attributes.items[3].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[3].displayValue}></input>
                                        <span class="swatch" style={{backgroundColor: this.props.attributes.items[3].displayValue}}></span> {this.props.attributes.items[3].displayValue}
                                    </label>
                                    </li>
                                    <li>
                                    <label>
                                    <input   id={this.props.attributes.items[4].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[4].displayValue}></input>
                                        <span class="swatch" style={{backgroundColor: this.props.attributes.items[4].displayValue, borderRadius: "2px solid black"}}></span> {this.props.attributes.items[4].displayValue}
                                    </label>
                                    </li>
                                    <li>
                                    <label>
                                    <input   id={this.props.attributes.items[5].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[5].displayValue}></input>
                                        <span class="swatch" style={{backgroundColor: this.props.attributes.items[5].displayValue, borderRadius: "2px solid black"}}></span> {this.props.attributes.items[5].displayValue}
                                    </label>
                                    </li>
                                    <li>
                                    <label>
                                    <input defaultChecked  id={this.props.attributes.items[6].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[6].displayValue}></input>
                                        <span class="swatch" style={{backgroundColor: this.props.attributes.items[6].displayValue, borderRadius: "2px solid black"}}></span> {this.props.attributes.items[6].displayValue}
                                    </label>
                                    </li>
                                </ul> 
                                </div> 
                            )
                        }else if(selectedvalue === this.props.attributes.items[5].displayValue){
                            return(
                            <div class="colors Attributes">
                                <br/>
                                <p>Please select {this.props.attributes.name}:</p>
                                <ul>
                                    <li>
                                    <label>
                                        <input id={this.props.attributes.items[0].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[0].displayValue}></input>
                                        <span class="swatch" style={{backgroundColor: this.props.attributes.items[0].displayValue}}></span> {this.props.attributes.items[0].displayValue}
                                    </label>
                                    </li>
                                    <li>
                                    <label>
                                        <input  id={this.props.attributes.items[1].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[1].displayValue}></input>
                                        <span class="swatch" style={{backgroundColor: this.props.attributes.items[1].displayValue}}></span> {this.props.attributes.items[1].displayValue}
                                    </label>
                                    </li>
                                    <li>
                                    <label>
                                    <input  id={this.props.attributes.items[2].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[2].displayValue}></input>
                                        <span class="swatch" style={{backgroundColor: this.props.attributes.items[2].displayValue}}></span> {this.props.attributes.items[2].displayValue}
                                    </label>
                                    </li>
                                    <li>
                                    <label>
                                    <input  id={this.props.attributes.items[3].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[3].displayValue}></input>
                                        <span class="swatch" style={{backgroundColor: this.props.attributes.items[3].displayValue}}></span> {this.props.attributes.items[3].displayValue}
                                    </label>
                                    </li>
                                    <li>
                                    <label>
                                    <input   id={this.props.attributes.items[4].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[4].displayValue}></input>
                                        <span class="swatch" style={{backgroundColor: this.props.attributes.items[4].displayValue, borderRadius: "2px solid black"}}></span> {this.props.attributes.items[4].displayValue}
                                    </label>
                                    </li>
                                    <li>
                                    <label>
                                    <input defaultChecked  id={this.props.attributes.items[5].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[5].displayValue}></input>
                                        <span class="swatch" style={{backgroundColor: this.props.attributes.items[5].displayValue, borderRadius: "2px solid black"}}></span> {this.props.attributes.items[5].displayValue}
                                    </label>
                                    </li>
                                    <li>
                                    <label>
                                    <input   id={this.props.attributes.items[6].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[6].displayValue}></input>
                                        <span class="swatch" style={{backgroundColor: this.props.attributes.items[6].displayValue, borderRadius: "2px solid black"}}></span> {this.props.attributes.items[6].displayValue}
                                    </label>
                                    </li>
                                </ul> 
                                </div> 
                            )
                        }else if(selectedvalue === this.props.attributes.items[4].displayValue){
                            return(
                            <div class="colors Attributes">
                                <br/>
                                <p>Please select {this.props.attributes.name}:</p>
                                <ul>
                                    <li>
                                    <label>
                                        <input id={this.props.attributes.items[0].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[0].displayValue}></input>
                                        <span class="swatch" style={{backgroundColor: this.props.attributes.items[0].displayValue}}></span> {this.props.attributes.items[0].displayValue}
                                    </label>
                                    </li>
                                    <li>
                                    <label>
                                        <input  id={this.props.attributes.items[1].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[1].displayValue}></input>
                                        <span class="swatch" style={{backgroundColor: this.props.attributes.items[1].displayValue}}></span> {this.props.attributes.items[1].displayValue}
                                    </label>
                                    </li>
                                    <li>
                                    <label>
                                    <input  id={this.props.attributes.items[2].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[2].displayValue}></input>
                                        <span class="swatch" style={{backgroundColor: this.props.attributes.items[2].displayValue}}></span> {this.props.attributes.items[2].displayValue}
                                    </label>
                                    </li>
                                    <li>
                                    <label>
                                    <input  id={this.props.attributes.items[3].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[3].displayValue}></input>
                                        <span class="swatch" style={{backgroundColor: this.props.attributes.items[3].displayValue}}></span> {this.props.attributes.items[3].displayValue}
                                    </label>
                                    </li>
                                    <li>
                                    <label>
                                    <input defaultChecked  id={this.props.attributes.items[4].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[4].displayValue}></input>
                                        <span class="swatch" style={{backgroundColor: this.props.attributes.items[4].displayValue, borderRadius: "2px solid black"}}></span> {this.props.attributes.items[4].displayValue}
                                    </label>
                                    </li>
                                    <li>
                                    <label>
                                    <input   id={this.props.attributes.items[5].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[5].displayValue}></input>
                                        <span class="swatch" style={{backgroundColor: this.props.attributes.items[5].displayValue, borderRadius: "2px solid black"}}></span> {this.props.attributes.items[5].displayValue}
                                    </label>
                                    </li>
                                    <li>
                                    <label>
                                    <input   id={this.props.attributes.items[6].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[6].displayValue}></input>
                                        <span class="swatch" style={{backgroundColor: this.props.attributes.items[6].displayValue, borderRadius: "2px solid black"}}></span> {this.props.attributes.items[6].displayValue}
                                    </label>
                                    </li>
                                </ul> 
                                </div> 
                            )
                        }else if(selectedvalue === this.props.attributes.items[3].displayValue){
                            return(
                            <div class="colors Attributes">
                                <br/>
                                <p>Please select {this.props.attributes.name}:</p>
                                <ul>
                                    <li>
                                    <label>
                                        <input id={this.props.attributes.items[0].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[0].displayValue}></input>
                                        <span class="swatch" style={{backgroundColor: this.props.attributes.items[0].displayValue}}></span> {this.props.attributes.items[0].displayValue}
                                    </label>
                                    </li>
                                    <li>
                                    <label>
                                        <input  id={this.props.attributes.items[1].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[1].displayValue}></input>
                                        <span class="swatch" style={{backgroundColor: this.props.attributes.items[1].displayValue}}></span> {this.props.attributes.items[1].displayValue}
                                    </label>
                                    </li>
                                    <li>
                                    <label>
                                    <input  id={this.props.attributes.items[2].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[2].displayValue}></input>
                                        <span class="swatch" style={{backgroundColor: this.props.attributes.items[2].displayValue}}></span> {this.props.attributes.items[2].displayValue}
                                    </label>
                                    </li>
                                    <li>
                                    <label>
                                    <input defaultChecked  id={this.props.attributes.items[3].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[3].displayValue}></input>
                                        <span class="swatch" style={{backgroundColor: this.props.attributes.items[3].displayValue}}></span> {this.props.attributes.items[3].displayValue}
                                    </label>
                                    </li>
                                    <li>
                                    <label>
                                    <input   id={this.props.attributes.items[4].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[4].displayValue}></input>
                                        <span class="swatch" style={{backgroundColor: this.props.attributes.items[4].displayValue, borderRadius: "2px solid black"}}></span> {this.props.attributes.items[4].displayValue}
                                    </label>
                                    </li>
                                    <li>
                                    <label>
                                    <input   id={this.props.attributes.items[5].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[5].displayValue}></input>
                                        <span class="swatch" style={{backgroundColor: this.props.attributes.items[5].displayValue, borderRadius: "2px solid black"}}></span> {this.props.attributes.items[5].displayValue}
                                    </label>
                                    </li>
                                    <li>
                                    <label>
                                    <input   id={this.props.attributes.items[6].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[6].displayValue}></input>
                                        <span class="swatch" style={{backgroundColor: this.props.attributes.items[6].displayValue, borderRadius: "2px solid black"}}></span> {this.props.attributes.items[6].displayValue}
                                    </label>
                                    </li>
                                </ul> 
                                </div> 
                            )
                        }else if(selectedvalue === this.props.attributes.items[2].displayValue){
                            return(
                            <div class="colors Attributes">
                                <br/>
                                <p>Please select {this.props.attributes.name}:</p>
                                <ul>
                                    <li>
                                    <label>
                                        <input id={this.props.attributes.items[0].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[0].displayValue}></input>
                                        <span class="swatch" style={{backgroundColor: this.props.attributes.items[0].displayValue}}></span> {this.props.attributes.items[0].displayValue}
                                    </label>
                                    </li>
                                    <li>
                                    <label>
                                        <input  id={this.props.attributes.items[1].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[1].displayValue}></input>
                                        <span class="swatch" style={{backgroundColor: this.props.attributes.items[1].displayValue}}></span> {this.props.attributes.items[1].displayValue}
                                    </label>
                                    </li>
                                    <li>
                                    <label>
                                    <input defaultChecked  id={this.props.attributes.items[2].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[2].displayValue}></input>
                                        <span class="swatch" style={{backgroundColor: this.props.attributes.items[2].displayValue}}></span> {this.props.attributes.items[2].displayValue}
                                    </label>
                                    </li>
                                    <li>
                                    <label>
                                    <input   id={this.props.attributes.items[3].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[3].displayValue}></input>
                                        <span class="swatch" style={{backgroundColor: this.props.attributes.items[3].displayValue}}></span> {this.props.attributes.items[3].displayValue}
                                    </label>
                                    </li>
                                    <li>
                                    <label>
                                    <input   id={this.props.attributes.items[4].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[4].displayValue}></input>
                                        <span class="swatch" style={{backgroundColor: this.props.attributes.items[4].displayValue, borderRadius: "2px solid black"}}></span> {this.props.attributes.items[4].displayValue}
                                    </label>
                                    </li>
                                    <li>
                                    <label>
                                    <input   id={this.props.attributes.items[5].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[5].displayValue}></input>
                                        <span class="swatch" style={{backgroundColor: this.props.attributes.items[5].displayValue, borderRadius: "2px solid black"}}></span> {this.props.attributes.items[5].displayValue}
                                    </label>
                                    </li>
                                    <li>
                                    <label>
                                    <input   id={this.props.attributes.items[6].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[6].displayValue}></input>
                                        <span class="swatch" style={{backgroundColor: this.props.attributes.items[6].displayValue, borderRadius: "2px solid black"}}></span> {this.props.attributes.items[6].displayValue}
                                    </label>
                                    </li>
                                </ul> 
                                </div> 
                            )
                        }else if(selectedvalue === this.props.attributes.items[1].displayValue){
                            return(
                            <div class="colors Attributes">
                                <br/>
                                <p>Please select {this.props.attributes.name}:</p>
                                <ul>
                                    <li>
                                    <label>
                                        <input id={this.props.attributes.items[0].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[0].displayValue}></input>
                                        <span class="swatch" style={{backgroundColor: this.props.attributes.items[0].displayValue}}></span> {this.props.attributes.items[0].displayValue}
                                    </label>
                                    </li>
                                    <li>
                                    <label>
                                        <input defaultChecked  id={this.props.attributes.items[1].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[1].displayValue}></input>
                                        <span class="swatch" style={{backgroundColor: this.props.attributes.items[1].displayValue}}></span> {this.props.attributes.items[1].displayValue}
                                    </label>
                                    </li>
                                    <li>
                                    <label>
                                    <input   id={this.props.attributes.items[2].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[2].displayValue}></input>
                                        <span class="swatch" style={{backgroundColor: this.props.attributes.items[2].displayValue}}></span> {this.props.attributes.items[2].displayValue}
                                    </label>
                                    </li>
                                    <li>
                                    <label>
                                    <input   id={this.props.attributes.items[3].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[3].displayValue}></input>
                                        <span class="swatch" style={{backgroundColor: this.props.attributes.items[3].displayValue}}></span> {this.props.attributes.items[3].displayValue}
                                    </label>
                                    </li>
                                    <li>
                                    <label>
                                    <input   id={this.props.attributes.items[4].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[4].displayValue}></input>
                                        <span class="swatch" style={{backgroundColor: this.props.attributes.items[4].displayValue, borderRadius: "2px solid black"}}></span> {this.props.attributes.items[4].displayValue}
                                    </label>
                                    </li>
                                    <li>
                                    <label>
                                    <input   id={this.props.attributes.items[5].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[5].displayValue}></input>
                                        <span class="swatch" style={{backgroundColor: this.props.attributes.items[5].displayValue, borderRadius: "2px solid black"}}></span> {this.props.attributes.items[5].displayValue}
                                    </label>
                                    </li>
                                    <li>
                                    <label>
                                    <input   id={this.props.attributes.items[6].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[6].displayValue}></input>
                                        <span class="swatch" style={{backgroundColor: this.props.attributes.items[6].displayValue, borderRadius: "2px solid black"}}></span> {this.props.attributes.items[6].displayValue}
                                    </label>
                                    </li>
                                </ul> 
                                </div> 
                            )
                        }else{
                            return(
                                <div class="colors Attributes">
                                    <br/>
                                    <p>Please select {this.props.attributes.name}:</p>
                                    <ul>
                                        <li>
                                        <label>
                                            <input defaultChecked id={this.props.attributes.items[0].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[0].displayValue}></input>
                                            <span class="swatch" style={{backgroundColor: this.props.attributes.items[0].displayValue}}></span> {this.props.attributes.items[0].displayValue}
                                        </label>
                                        </li>
                                        <li>
                                        <label>
                                            <input  id={this.props.attributes.items[1].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[1].displayValue}></input>
                                            <span class="swatch" style={{backgroundColor: this.props.attributes.items[1].displayValue}}></span> {this.props.attributes.items[1].displayValue}
                                        </label>
                                        </li>
                                        <li>
                                        <label>
                                        <input  id={this.props.attributes.items[2].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[2].displayValue}></input>
                                            <span class="swatch" style={{backgroundColor: this.props.attributes.items[2].displayValue}}></span> {this.props.attributes.items[2].displayValue}
                                        </label>
                                        </li>
                                        <li>
                                        <label>
                                        <input   id={this.props.attributes.items[3].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[3].displayValue}></input>
                                            <span class="swatch" style={{backgroundColor: this.props.attributes.items[3].displayValue}}></span> {this.props.attributes.items[3].displayValue}
                                        </label>
                                        </li>
                                        <li>
                                        <label>
                                        <input   id={this.props.attributes.items[4].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[4].displayValue}></input>
                                            <span class="swatch" style={{backgroundColor: this.props.attributes.items[4].displayValue, borderRadius: "2px solid black"}}></span> {this.props.attributes.items[4].displayValue}
                                        </label>
                                        </li>
                                        <li>
                                    <label>
                                    <input   id={this.props.attributes.items[5].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[5].displayValue}></input>
                                        <span class="swatch" style={{backgroundColor: this.props.attributes.items[5].displayValue, borderRadius: "2px solid black"}}></span> {this.props.attributes.items[5].displayValue}
                                    </label>
                                    </li>
                                    <li>
                                    <label>
                                    <input   id={this.props.attributes.items[6].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[6].displayValue}></input>
                                        <span class="swatch" style={{backgroundColor: this.props.attributes.items[6].displayValue, borderRadius: "2px solid black"}}></span> {this.props.attributes.items[6].displayValue}
                                    </label>
                                    </li>
                                    </ul> 
                                    </div> 
                            )
                            
                        }
                        
                    }else{
                        return(
                            <div class="colors Attributes">
                                <br/>
                                <p>Please select {this.props.attributes.name}:</p>
                                <ul>
                                    <li>
                                    <label>
                                        <input defaultChecked id={this.props.attributes.items[0].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[0].displayValue}></input>
                                        <span class="swatch" style={{backgroundColor: this.props.attributes.items[0].displayValue}}></span> {this.props.attributes.items[0].displayValue}
                                    </label>
                                    </li>
                                    <li>
                                    <label>
                                        <input  id={this.props.attributes.items[1].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[1].displayValue}></input>
                                        <span class="swatch" style={{backgroundColor: this.props.attributes.items[1].displayValue}}></span> {this.props.attributes.items[1].displayValue}
                                    </label>
                                    </li>
                                    <li>
                                    <label>
                                    <input  id={this.props.attributes.items[2].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[2].displayValue}></input>
                                        <span class="swatch" style={{backgroundColor: this.props.attributes.items[2].displayValue}}></span> {this.props.attributes.items[2].displayValue}
                                    </label>
                                    </li>
                                    <li>
                                    <label>
                                    <input  id={this.props.attributes.items[3].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[3].displayValue}></input>
                                        <span class="swatch" style={{backgroundColor: this.props.attributes.items[3].displayValue}}></span> {this.props.attributes.items[3].displayValue}
                                    </label>
                                    </li>
                                    <li>
                                    <label>
                                    <input  id={this.props.attributes.items[4].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[4].displayValue}></input>
                                        <span class="swatch" style={{backgroundColor: this.props.attributes.items[4].displayValue, borderRadius: "2px solid black"}}></span> {this.props.attributes.items[4].displayValue}
                                    </label>
                                    </li>
                                    <li>
                                    <label>
                                    <input   id={this.props.attributes.items[5].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[5].displayValue}></input>
                                        <span class="swatch" style={{backgroundColor: this.props.attributes.items[5].displayValue, borderRadius: "2px solid black"}}></span> {this.props.attributes.items[5].displayValue}
                                    </label>
                                    </li>
                                    <li>
                                    <label>
                                    <input   id={this.props.attributes.items[6].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[6].displayValue}></input>
                                        <span class="swatch" style={{backgroundColor: this.props.attributes.items[6].displayValue, borderRadius: "2px solid black"}}></span> {this.props.attributes.items[6].displayValue}
                                    </label>
                                    </li>
                                </ul> 
                                </div> 
                        )
                    }
                }
            } 
        }




        return (
            <div>
                
                <label for="options">Something went wrong with options:</label>

            

            </div>

        )
    }


    
}

export default SingleAttribute;