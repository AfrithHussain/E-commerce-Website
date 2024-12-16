/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { MdArrowForwardIos } from "react-icons/md";
import { ShopContext } from "@/ContextApi/ShopContext";
import ProductItem from "@/components/ProductItem";

function Collection() {

  // Search by collection name

  let { products , search, searchFilter} = useContext(ShopContext);

  // State to show/hide filters on small screens
  let [showFilter, setshowFilter] = useState(false);

  // State to store all products
  let [allProducts, setallProducts] = useState([]);

  
    
  
 
  // Categories filter
  let [categories, setCategories] = useState([]);
  // sort by [price]

  let[sortfilter, setSortFilter] = useState('relevent')

  let toogleCategory = (e) => {
    if (categories.includes(e.target.value)) {
      setCategories((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategories((prev) => [...prev, e.target.value]);
    }
  };

  // Sub Categories filter

  let [subCategories, setsubCategories] = useState([]);

  let toogleSubCategory = (e) => {
    if (subCategories.includes(e.target.value)) {
      setsubCategories((prev) =>
        prev.filter((item) => item !== e.target.value)
      );
    } else {
      setsubCategories((prev) => [...prev, e.target.value]);
    }
  };

  // All products here

  let filterProducts = () => {
    let copyProduct = [...products];

    

    if(searchFilter && search){
        copyProduct = copyProduct.filter((data)=> data.name.toLowerCase().includes(search.toLowerCase()))
    }

    if (categories.length > 0) {
      copyProduct = copyProduct.filter((item) =>
        categories.includes(item.category)
      );
    }

    if (subCategories.length > 0) {
      copyProduct = copyProduct.filter((item) =>
        subCategories.includes(item.subCategory)
      );
    }
    setallProducts(copyProduct);
  };

  // sorting product based on their price

  let sortProduct = ()=>{
     let fpCopy = [...allProducts]

     switch(sortfilter){
      case 'low to high':
        setallProducts(fpCopy.sort((a,b)=>(a.price - b.price)))
        break;
      case 'high to low':
         setallProducts(fpCopy.sort((a,b)=>(b.price - a.price))) 
         break;
      default:
        filterProducts()
         break;    
     }
     console.log(fpCopy)
  }

   
  useEffect(() => {
    filterProducts();
  }, [categories, subCategories, search, searchFilter]);


  useEffect(()=>{
    sortProduct();
  },[sortfilter])

  return (
    <div className="w-full px-4 sm:px-8 md:px-16 lg:px-20">
      {/* Main container */}
      <div className="flex flex-col md:flex-row gap-10 w-full ">
        {/* Filter section */}
        <div className="mt-10 md:mt-20 md:ml-5 md:w-1/4">
          {/* Filter header */}
          <div
            onClick={() => setshowFilter(!showFilter)}
            className="flex items-center gap-2 cursor-pointer"
          >
            <h1 className="prata-regular text-xl md:text-2xl">Filters</h1>
            <p
              className={`${
                showFilter ? "rotate-90" : ""
              } transition-transform`}
            >
              <MdArrowForwardIos />
            </p>
          </div>

          {/* Categories Filter */}
          <div
            className={`border w-full p-5 leading-9 mt-6 ${
              showFilter ? "" : "hidden"
            } md:block`}
          >
            <p className="outfit font-semibold">CATEGORIES</p>

            <p className="flex gap-2 text-neutral-600 outfit">
              <input type="checkbox" value={"Men"} onChange={toogleCategory} />
              Men
            </p>
            <p className="flex gap-2 text-neutral-600 outfit">
              <input
                type="checkbox"
                value={"Women"}
                onChange={toogleCategory}
              />
              Women
            </p>
            <p className="flex gap-2 text-neutral-600 outfit">
              <input type="checkbox" value={"Kids"} onChange={toogleCategory} />
              Kids
            </p>
          </div>

          {/* Sub-categories Filter */}
          <div
            className={`border w-full mt-10 p-5 leading-9 ${
              showFilter ? "" : "hidden"
            } md:block`}
          >
            <p className="outfit font-semibold">TYPE</p>
            <p className="flex gap-2 text-neutral-600 outfit">
              <input
                type="checkbox"
                value={"Topwear"}
                onChange={toogleSubCategory}
              />
              Topwear
            </p>
            <p className="flex gap-2 text-neutral-600 outfit">
              <input
                type="checkbox"
                value={"Bottomwear"}
                onChange={toogleSubCategory}
              />
              Bottomwear
            </p>
            <p className="flex gap-2 text-neutral-600 outfit">
              <input
                type="checkbox"
                value={"Winterwear"}
                onChange={toogleSubCategory}
              />
              Winterwear
            </p>
          </div>
        </div>

        {/* Product Display Section */}
        <div className="mt-10 md:mt-20 w-full md:w-3/4">
          {/* Header section */}
          <div className="flex-none text-center  sm:flex  md:flex-row md:items-center md:justify-between  md:gap-10">
            <div className="flex justify-center items-center gap-5">
              <h1 className="prata-regular text-xl md:text-2xl xl:text-3xl py-5 md:py-0">
                All Collections
              </h1>
              <hr className="w-16 h-[3px] bg-neutral-700 " />
            </div>
            <div className="w-full sm:w-auto">
              <select onChange={(e)=>setSortFilter(e.target.value)}
                className="border p-2  w-52  border-neutral-600 cursor-pointer text-lg"
                
              >
                <option  value=" relevent">Sort by: Relevant</option>
                <option value="high to low" >
                  Sort by: High to Low
                </option>
                <option value="low to high">
                  Sort by: Low to High
                </option>
              </select>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">
            {allProducts.map((data, index) => (
              <ProductItem
                key={index}
                name={data.name}
                id={data._id}
                image={data.image}
                price={data.price}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collection;
