/* eslint-disable react/prop-types */
import { ShopContext } from "@/ContextApi/ShopContext"
import { useContext } from "react"
import { Link } from "react-router-dom";
function ProductItem({image, name, price, id}) {
    
    const {currency} = useContext(ShopContext);

  return (
    <div>
         
        <Link to={`/product/${id}`}>
        <div className="text-neutral-700">
            <img className="w-60 h-64 object-cover object-top" src={image[0]} alt="" />
            <p className="text-sm outfit mt-3 ">{name}</p>
            <p className="mt-1">{currency}{price}</p>
        </div>
        </Link>
        
    </div>
  )
}

export default ProductItem