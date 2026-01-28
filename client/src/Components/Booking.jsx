import React from 'react'

const Booking = () => {
  return (
    <>
    <div className='border-red-700 border-4 bg-amber-400 w-100% h-40 m-1 '>
      <div id='checkbox'>


      </div>
      <div className='flex'>
         <span className='mr-7 border'>
               <p>From</p>
               <p><b>Delhi</b></p>
               <p>Del, delhi Airport India</p>

         </span>
         <span className='mr-7 border'>
               <p>To</p>
               <p><b>Mumbai</b></p>
               <p>BOM, Chhatrapati Shivaji International Airport</p>
            
         </span>
         <span className='mr-7 border'>
           <select>
               
               <option>Departure</option>
               <option>Delhi</option>
               <option>Mumbai</option>
               <option>Bangalore</option>
               <option>Chennai</option>
           </select>


            
         </span>
         <span className='mr-7 border'>
            <select>
               
               <option>Return</option>
               <option>Delhi</option>
               <option>Mumbai</option>
               <option>Bangalore</option>
               <option>Chennai</option>
           </select>
           <p className='flex'><b>24 </b><h4> Feb.2026</h4></p>
           <p>Friday</p>
            
         </span>
         <span className=''>
            <select>
               
               <option>Traveller & Class</option>
               <option>Adults</option>
               <option>Children</option>
               <option>Infants</option>
               <option>Choose Travel Class</option>
           </select>
           <p className='flex'><b>26 </b><h4> Feb.2026</h4></p>
           <p>Sunday</p>
            
         </span>
         



      </div>






    </div>
    
    </>
  )
}

export default Booking