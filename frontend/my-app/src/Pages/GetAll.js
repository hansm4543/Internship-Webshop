import React, {useEffect, useState} from "react";
import {useQuery, gql} from '@apollo/client';
import {LOAD_ALL} from '../GraphQL/Queries';
import { Link } from "react-router-dom";
import ItemList from '../Components/ItemList';
import NavBar from '../Components/NavBar';
import './CategorieView.css';
import {useContext} from 'react'
import {Context} from "../Store"
import { currencyChange } from "../Store/actions";

function GetAll(){
    const {error, loading, data} = useQuery(LOAD_ALL);


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
                <div>
                <NavBar all={true} onCurrencyChange={itemSubmitHandler}/>
                    <h1 >All products</h1>
                    <div>
                        <ItemList items={loadedItems} currency={state.currency}/>
                        
                    </div>
                </div>
            )
        
    }
}

export default GetAll;