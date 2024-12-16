import Exchange from '../assets/exchange_icon.png'
import Quality from '../assets/quality_icon.png'
import  Support from '../assets/support_img.png'


function CompanyPolicy() {
  return (
    <div>
      <div className="mt-32">
      <div className="flex justify-center  items-center gap-5 ">
            <h1 className='prata-regular text-xl md:text-2xl  xl:text-[32px]  '>Our Policy</h1>
            <hr className='w-12 h-[3px] bg-neutral-700'/>
       </div>
       {/* main div */}
       <div className="mt-20 flex justify-evenly  gap-20 flex-wrap">
        {/* div 1 */}
           <div className="flex flex-col justify-center items-center gap-2">
            <img src={Exchange} className='w-12' alt="" />
            <p className=' outfit   text-xl'>Best Exchange Policy</p>
            <p className='outfit text-[16px] text-neutral-500 font-semibold'>We offer hassle free exchange policy</p>
           </div>
           {/* div 2  */}
           <div className="flex flex-col justify-center items-center gap-2">
            <img src={Quality} className='w-12' alt="" />
            <p className=' outfit  text-xl '>7 Days Return Policy</p>
            <p className='outfit text-[16px] text-neutral-500 font-semibold'>We provide 7 days free return policy</p>
           </div>
           {/* div 3 */}
           <div className="flex flex-col justify-center items-center gap-2">
            <img src={Support} className='w-12' alt="" />
            <p className=' outfit text-xl '>Best customer support</p>
            <p className='outfit text-[16px] text-neutral-500 font-semibold'>we provide 24/7 customer support</p>
           </div>
       </div>
      </div>
    </div>
  )
}

export default CompanyPolicy