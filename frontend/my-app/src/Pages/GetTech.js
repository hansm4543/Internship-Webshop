import React, {useEffect, useState} from "react";
import {useQuery, gql} from '@apollo/client';
import {LOAD_TECH} from '../GraphQL/Queries';
import ItemList from '../Components/ItemList';
import NavBar from '../Components/NavBar';
import './CategorieView.css';
import {useContext} from 'react'
import {Context} from "../Store"
import { currencyChange } from "../Store/actions";

function GetTech(props){
    const {error, loading, data} = useQuery(LOAD_TECH);


    const [isLoading, setIsLoading] = useState(false);
    const [loadedItems, setIsLoadedItems]=useState([]);
    const [state, dispatch] = useContext(Context)
    console.log(state)

    useEffect(()=>{
        
        if(data){
            console.log(data);
            setIsLoadedItems(data.category.products);
            setIsLoading(false);
            
        }

        
    },[data, state]);

    function itemSubmitHandler(number, data){
        if(number === 1){
            //console.log("Õnnestus");
            dispatch(currencyChange(data));
        }else{
            //console.log("Failed");
        }

    }

    if(isLoading == true){
        return(
        <div>
            Loading...
        </div>);
    }else{

            return(
                <div >
                <NavBar tech={true} onCurrencyChange={itemSubmitHandler}/>
                <h1 >Tech products</h1>
                <div >

                    <ItemList items={loadedItems} currency={state.currency}/>
                    
                </div>
                </div>
        
            )

    }
}

export default GetTech;