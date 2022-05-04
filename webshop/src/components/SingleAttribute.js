import React, {Component} from "react";
import './attributes.css';

class SingleAttribute extends Component{
    render(){
        //console.log(this.props.attributes.type)
        let length = this.props.attributes.items.length; 
        if(this.props.attributes.type === "text"){
            if(length === 1){
                return (

                    <div className="Attributes">
                    <p>Please select {this.props.attributes.name}:</p>
                    <input defaultChecked type="radio" id={this.props.attributes.items[0].value} name={this.props.attributes.name} value={this.props.attributes.items[0].displayValue}/>
                    <label for={this.props.attributes.items[0].value}>{this.props.attributes.items[0].displayValue}</label>
                    </div>
                    
            
                )
            }else if(length === 2){
                return (
                    <form>
                    <div className="Attributes">
                    <p>Please select {this.props.attributes.name}:</p>
                    <input defaultChecked type="radio" id={this.props.attributes.items[0].value} name={this.props.attributes.name} value={this.props.attributes.items[0].displayValue}/>
                    <label for={this.props.attributes.items[0].value}>{this.props.attributes.items[0].displayValue}</label>
                    <br></br>
                    <input type="radio" id={this.props.attributes.items[1].value} name={this.props.attributes.name} value={this.props.attributes.items[1].displayValue}/>
                    <label for={this.props.attributes.items[1].value}>{this.props.attributes.items[1].displayValue}</label>
                                        
                    </div>
                    </form>
            
                )
            }else if(length === 3){
                return (
                    <form>
                    <div className="Attributes">
                    <p>Please select {this.props.attributes.name}:</p>
                    <input defaultChecked type="radio" id={this.props.attributes.items[0].value} name={this.props.attributes.name} value={this.props.attributes.items[0].displayValue}/>
                    <label for={this.props.attributes.items[0].value}>{this.props.attributes.items[0].displayValue}</label>
                    <br></br>
                    <input type="radio" id={this.props.attributes.items[1].value} name={this.props.attributes.name} value={this.props.attributes.items[1].displayValue}/>
                    <label for={this.props.attributes.items[1].value}>{this.props.attributes.items[1].displayValue}</label>
                    <br></br>
                    <input type="radio" id={this.props.attributes.items[2].value} name={this.props.attributes.name} value={this.props.attributes.items[2].displayValue}/>
                    <label for={this.props.attributes.items[2].value}>{this.props.attributes.items[2].displayValue}</label>
                                        
                    </div>
                    </form>
            
                )
            }else if(length === 4){
                return (
                    <form>
                    <div className="Attributes">
                    <p>Please select {this.props.attributes.name}:</p>
                    <input defaultChecked type="radio" id={this.props.attributes.items[0].value} name={this.props.attributes.name} value={this.props.attributes.items[0].displayValue}/>
                    <label for={this.props.attributes.items[0].value}>{this.props.attributes.items[0].displayValue}</label>
                    <br></br>
                    <input type="radio" id={this.props.attributes.items[1].value} name={this.props.attributes.name} value={this.props.attributes.items[1].displayValue}/>
                    <label for={this.props.attributes.items[1].value}>{this.props.attributes.items[1].displayValue}</label>
                    <br></br>
                    <input type="radio" id={this.props.attributes.items[2].value} name={this.props.attributes.name} value={this.props.attributes.items[2].displayValue}/>
                    <label for={this.props.attributes.items[2].value}>{this.props.attributes.items[2].displayValue}</label>
                    <br></br>
                    <input type="radio" id={this.props.attributes.items[3].value} name={this.props.attributes.name} value={this.props.attributes.items[3].displayValue}/>
                    <label for={this.props.attributes.items[3].value}>{this.props.attributes.items[3].displayValue}</label>
                                        
                    </div>
                    </form>
            
                )
            }else if(length === 5){
                
                return (
                    <form>
                    <div className="Attributes">
                    <p>Please select {this.props.attributes.name}:</p>
                    <input defaultChecked type="radio" id={this.props.attributes.items[0].value} name={this.props.attributes.name} value={this.props.attributes.items[0].displayValue}/>
                    <label for={this.props.attributes.items[0].value}>{this.props.attributes.items[0].displayValue}</label>
                    <br></br>
                    <input type="radio" id={this.props.attributes.items[1].value} name={this.props.attributes.name} value={this.props.attributes.items[1].displayValue}/>
                    <label for={this.props.attributes.items[1].value}>{this.props.attributes.items[1].displayValue}</label>
                    <br></br>
                    <input type="radio" id={this.props.attributes.items[2].value} name={this.props.attributes.name} value={this.props.attributes.items[2].displayValue}/>
                    <label for={this.props.attributes.items[2].value}>{this.props.attributes.items[2].displayValue}</label>
                    <br></br>
                    <input type="radio" id={this.props.attributes.items[3].value} name={this.props.attributes.name} value={this.props.attributes.items[3].displayValue}/>
                    <label for={this.props.attributes.items[3].value}>{this.props.attributes.items[3].displayValue}</label>
                    <br></br>
                    <input type="radio" id={this.props.attributes.items[4].value} name={this.props.attributes.name} value={this.props.attributes.items[4].displayValue}/>
                    <label for={this.props.attributes.items[4].value}>{this.props.attributes.items[4].displayValue}</label>
                                        
                    </div>
                    </form>
            
                )
            }else if(length === 6){
                return (
                    <form>
                    <div className="Attributes">
                    <p>Please select {this.props.attributes.name}:</p>
                    <input defaultChecked type="radio" id={this.props.attributes.items[0].value} name={this.props.attributes.name} value={this.props.attributes.items[0].displayValue}/>
                    <label for={this.props.attributes.items[0].value}>{this.props.attributes.items[0].displayValue}</label>
                    <br></br>
                    <input type="radio" id={this.props.attributes.items[1].value} name={this.props.attributes.name} value={this.props.attributes.items[1].displayValue}/>
                    <label for={this.props.attributes.items[1].value}>{this.props.attributes.items[1].displayValue}</label>
                    <br></br>
                    <input type="radio" id={this.props.attributes.items[2].value} name={this.props.attributes.name} value={this.props.attributes.items[2].displayValue}/>
                    <label for={this.props.attributes.items[2].value}>{this.props.attributes.items[2].displayValue}</label>
                    <br></br>
                    <input type="radio" id={this.props.attributes.items[3].value} name={this.props.attributes.name} value={this.props.attributes.items[3].displayValue}/>
                    <label for={this.props.attributes.items[3].value}>{this.props.attributes.items[3].displayValue}</label>
                    <br></br>
                    <input type="radio" id={this.props.attributes.items[4].value} name={this.props.attributes.name} value={this.props.attributes.items[4].displayValue}/>
                    <label for={this.props.attributes.items[4].value}>{this.props.attributes.items[4].displayValue}</label>
                    <br></br>
                    <input type="radio" id={this.props.attributes.items[5].value} name={this.props.attributes.name} value={this.props.attributes.items[5].displayValue}/>
                    <label for={this.props.attributes.items[5].value}>{this.props.attributes.items[5].displayValue}</label>
                                        
                    </div>
                    </form>
            
                )
            }else if(length === 7){
                return (
                    <form>
                    <div className="Attributes">
                    <p>Please select {this.props.attributes.name}:</p>
                    <input defaultChecked type="radio" id={this.props.attributes.items[0].value} name={this.props.attributes.name} value={this.props.attributes.items[0].displayValue}/>
                    <label for={this.props.attributes.items[0].value}>{this.props.attributes.items[0].displayValue}</label>
                    <br></br>
                    <input type="radio" id={this.props.attributes.items[1].value} name={this.props.attributes.name} value={this.props.attributes.items[1].displayValue}/>
                    <label for={this.props.attributes.items[1].value}>{this.props.attributes.items[1].displayValue}</label>
                    <br></br>
                    <input type="radio" id={this.props.attributes.items[2].value} name={this.props.attributes.name} value={this.props.attributes.items[2].displayValue}/>
                    <label for={this.props.attributes.items[2].value}>{this.props.attributes.items[2].displayValue}</label>
                    <br></br>
                    <input type="radio" id={this.props.attributes.items[3].value} name={this.props.attributes.name} value={this.props.attributes.items[3].displayValue}/>
                    <label for={this.props.attributes.items[3].value}>{this.props.attributes.items[3].displayValue}</label>
                    <br></br>
                    <input type="radio" id={this.props.attributes.items[4].value} name={this.props.attributes.name} value={this.props.attributes.items[4].displayValue}/>
                    <label for={this.props.attributes.items[4].value}>{this.props.attributes.items[4].displayValue}</label>
                    <br></br>
                    <input type="radio" id={this.props.attributes.items[5].value} name={this.props.attributes.name} value={this.props.attributes.items[5].displayValue}/>
                    <label for={this.props.attributes.items[5].value}>{this.props.attributes.items[5].displayValue}</label>
                    <br></br>
                    <input type="radio" id={this.props.attributes.items[6].value} name={this.props.attributes.name} value={this.props.attributes.items[6].displayValue}/>
                    <label for={this.props.attributes.items[6].value}>{this.props.attributes.items[6].displayValue}</label>
                                        
                    </div>
                    </form>
            
                )
            }
            
        }else if(this.props.attributes.type === "swatch"){
            if(length === 1){
                return (

                    <div className="Attributes">
                    <p>Please select {this.props.attributes.name}:</p>
                    <input defaultChecked type="radio" id={this.props.attributes.items[0].value} name={this.props.attributes.name} value={this.props.attributes.items[0].displayValue}/>
                    <label for={this.props.attributes.items[0].value}>{this.props.attributes.items[0].displayValue}</label>
                    </div>
                    
            
                )
            }else if(length === 2){
                return (
                    <form>
                    <div className="Attributes">
                    <p>Please select {this.props.attributes.name}:</p>
                    <input defaultChecked type="radio" id={this.props.attributes.items[0].value} name={this.props.attributes.name} value={this.props.attributes.items[0].displayValue}/>
                    <label for={this.props.attributes.items[0].value}>{this.props.attributes.items[0].displayValue}</label>
                    <input type="radio" id={this.props.attributes.items[1].value} name={this.props.attributes.name} value={this.props.attributes.items[1].displayValue}/>
                    <label for={this.props.attributes.items[1].value}>{this.props.attributes.items[1].displayValue}</label>
                                        
                    </div>
                    </form>
            
                )
            }else if(length === 3){
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
                                <input defaultChecked id={this.props.attributes.items[1].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[1].displayValue}></input>
                                <span class="swatch" style={{backgroundColor: this.props.attributes.items[1].displayValue}}></span> {this.props.attributes.items[1].displayValue}
                            </label>
                            </li>
                            <li>
                            <label>
                            <input defaultChecked id={this.props.attributes.items[2].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[2].displayValue}></input>
                                <span class="swatch" style={{backgroundColor: this.props.attributes.items[2].displayValue}}></span> {this.props.attributes.items[2].displayValue}
                            </label>
                            </li>
                        </ul> 
                        </div> 
                )/*
                return (
                    <form>
                    <div className="Attributes">
                    
                    <input defaultChecked type="radio" id={this.props.attributes.items[0].value} name={this.props.attributes.name} value={this.props.attributes.items[0].displayValue}/>
                    <label for={this.props.attributes.items[0].value}>{this.props.attributes.items[0].displayValue}</label>
                    <input type="radio" id={this.props.attributes.items[1].value} name={this.props.attributes.name} value={this.props.attributes.items[1].displayValue}/>
                    <label for={this.props.attributes.items[1].value}>{this.props.attributes.items[1].displayValue}</label>
                    <input type="radio" id={this.props.attributes.items[2].value} name={this.props.attributes.name} value={this.props.attributes.items[2].displayValue}/>
                    <label for={this.props.attributes.items[2].value}>{this.props.attributes.items[2].displayValue}</label>
                                        
                    </div>
                    </form>
            
                )*/
            }else if(length === 4){
                return (
                    <form>
                    <div className="Attributes">
                    <p>Please select {this.props.attributes.name}:</p>
                    <input defaultChecked type="radio" id={this.props.attributes.items[0].value} name={this.props.attributes.name} value={this.props.attributes.items[0].displayValue}/>
                    <label for={this.props.attributes.items[0].value}>{this.props.attributes.items[0].displayValue}</label>
                    <input type="radio" id={this.props.attributes.items[1].value} name={this.props.attributes.name} value={this.props.attributes.items[1].displayValue}/>
                    <label for={this.props.attributes.items[1].value}>{this.props.attributes.items[1].displayValue}</label>
                    <input type="radio" id={this.props.attributes.items[2].value} name={this.props.attributes.name} value={this.props.attributes.items[2].displayValue}/>
                    <label for={this.props.attributes.items[2].value}>{this.props.attributes.items[2].displayValue}</label>
                    <input type="radio" id={this.props.attributes.items[3].value} name={this.props.attributes.name} value={this.props.attributes.items[3].displayValue}/>
                    <label for={this.props.attributes.items[3].value}>{this.props.attributes.items[3].displayValue}</label>
                                        
                    </div>
                    </form>
            
                )
            }else if(length === 5){
                
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
            }else if(length === 6){
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
                            <input  id={this.props.attributes.items[5].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[5].displayValue}></input>
                                <span class="swatch" style={{backgroundColor: this.props.attributes.items[5].displayValue, borderRadius: "2px solid black"}}></span> {this.props.attributes.items[5].displayValue}
                            </label>
                            </li>
                        </ul> 
                        </div> 
                )
            }else if(length === 7){
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
                            <input  id={this.props.attributes.items[5].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[5].displayValue}></input>
                                <span class="swatch" style={{backgroundColor: this.props.attributes.items[5].displayValue, borderRadius: "2px solid black"}}></span> {this.props.attributes.items[5].displayValue}
                            </label>
                            </li>
                            <li>
                            <label>
                            <input  id={this.props.attributes.items[6].value} type="radio" name={this.props.attributes.name} value={this.props.attributes.items[6].displayValue}></input>
                                <span class="swatch" style={{backgroundColor: this.props.attributes.items[6].displayValue, borderRadius: "2px solid black"}}></span> {this.props.attributes.items[6].displayValue}
                            </label>
                            </li>
                        </ul> 
                        </div> 
                )
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