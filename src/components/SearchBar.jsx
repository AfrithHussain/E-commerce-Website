import { ShopContext } from "@/ContextApi/ShopContext";
import { useContext, useEffect, useState } from "react";
import { GoSearch } from "react-icons/go";
import { useLocation } from "react-router-dom";


function SerachBar() {
    let {search, searchFilter, setSearch} = useContext(ShopContext);


     

    // location handler
  let [locationHandler, setLocationHandler] = useState(null);

    let location = useLocation(null);

  useEffect(()=>{
    if(location.pathname.includes('collection')){
      setLocationHandler(true)
    }
    else{
      setLocationHandler(false)
    }
  },[location, locationHandler])

  return searchFilter && locationHandler ? (
    <div>
        <div className="flex justify-center items-center mt-10  ">
          <input value={search} onChange={(e)=>setSearch(e.target.value)}  type="text" placeholder="search" className="border w-2/6 p-2 text-neutral-700 rounded-md focus:outline-none" />
          <GoSearch className="text-3xl text-neutral-500 -translate-x-9"/>

        </div>
    </div>
  ) : ''
}

export default SerachBar