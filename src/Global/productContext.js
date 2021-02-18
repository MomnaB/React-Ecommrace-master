import React, {createContext, useReducer} from "react"
import {ProductReducer} from "./productReducer"
import AppleIphone from "../assets/Apple Iphone.jpg";
import microsoftheadphones from "../assets/microsoft headphones.jpg"
import wirelessmicrophone from "../assets/wireless microphone.jpg"
import goldenring from "../assets/golden ring.jpg"
import sneakers from "../assets/sneakers.jpg"
import BrandedWatches from "../assets/Branded Watches.jpg"
import brandedperfumes from "../assets/branded perfumes.jpg"

import bestDSLR from "../assets/best DSLR.jpg"
export const productContext = createContext();


const ProductContextProvider = (props) => {

    const [products] = useReducer(ProductReducer, [
   
        {id:1, name: 'best DSLR' , price: 40, image:bestDSLR, productStatus: 'hot'},
        {id:1, name: 'Wireless Microphones' , price: 40, image:wirelessmicrophone, productStatus: 'hot'},
        
    
        {id: 3, name: 'Branded Watches', price: 300, image: BrandedWatches,productStatus: 'new'},
        {id: 4, name: 'Sneakers', price: 150, image: sneakers,productStatus: 'new'},
        {id:1, name: 'Branded Perfumes' , price: 40, image:brandedperfumes, productStatus: 'hot'},
        {id: 6, name: 'Microsoft Headphones', price: 500, image: microsoftheadphones,productStatus: 'new'},
        {id: 7, name: 'Apple Iphone', price: 240, image: AppleIphone,productStatus: 'hot'},
        {id: 8, name: 'Rings', price: 120, image: goldenring,productStatus: 'new'},
      ])
      
    return(
        <productContext.Provider value={{products}}>
           {props.children}
        </productContext.Provider>
    )

}

export default ProductContextProvider;