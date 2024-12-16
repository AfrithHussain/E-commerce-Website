/* eslint-disable no-empty */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from 'react'
import { products } from '@/assets/assets';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

 // eslint-disable-next-line react-refresh/only-export-components
 export const ShopContext = createContext();



 const ShopContextProvider = (props)=>{

    

    const [cartItem, setCartItem] = useState({});

    const navigation = useNavigate()
    




    const addToCart =  async(productid, size)=>{

        if(!size){
            toast.error('Select Aleast One Product');
            return
        }
             
        let cartData = structuredClone(cartItem);

        if(cartData[productid]){
            if(cartData[productid][size]){
                cartData[productid][size] +=1
            }
            else{
                cartData[productid][size] = 1    
            }
        }
        else{
            cartData[productid] = {}
            cartData[productid][size] = 1    

        }
         setCartItem(cartData)
 }


   const addCount = ()=>{

         let  totalCount = 0;

         for(const items in cartItem)
         {
            for(const item in cartItem[items]){
                try {
                    if(cartItem[items][item] > 0 ){
                        totalCount += cartItem[items][item];
                    }
                } catch (error) {
                    
                }
            }
         }
         return totalCount;

   }

    const updateQuanity = async(item,size,quantity)=>{
          let copyCart = structuredClone(cartItem);

          copyCart[item][size] = quantity;

          setCartItem(copyCart)
    }


    // total price of cart section products

    const getCartTotal = () => {
      let  totalAmount = 0;

        for(const items in cartItem){
            let cartFind = products.find((product)=> product._id === items);

            for(const item in cartItem[items]){
                try {
                    if(cartItem[items][item] > 0 ){
                        totalAmount += cartFind.price * cartItem[items][item];
                    }
                } catch (error) {
                    
                }
            }
        }
        return totalAmount;
    }
 

     const currency = '$';
     const delivery_fee = 10;
     let [search, setSearch] = useState('');
     let [searchFilter, setSearchFilter] = useState(true);

    const value = {
             products, currency, delivery_fee, search,setSearch, searchFilter, setSearchFilter, addToCart,cartItem, addCount, updateQuanity, getCartTotal, navigation
    }

    return(
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
 }

 export default ShopContextProvider;