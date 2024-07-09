import React,{useState} from 'react'
import Onboardingform2 from './Onboardingform2'
import Onboardform4 from './Onboardform4'

const Onboardingform3 = () => {
    const [board,setBoard]=useState(false)
    const [onboard,setOnboard]=useState(false)
    const handclick=()=>{
       setBoard(!board)
    }
    const setclick=()=>{
      setOnboard(!onboard)
   }
  return (
    <div>
           <div className='mt-[20px] max-w-[1100px] h-screen bg-gray-100 border-gray-700'>
         {!board? !onboard?
        <div className='grid grid-cols-2 space-x-5'>
            
    <div className=' w-[70%] h-screen bg-blue-500 text-black'>
        <div className='flex'>
    <a href="#" class="pt-2 flex items-center mb-6 text-2xl text-white font-bold dark:text-white">
          <img class="pl-5  pt-2 w-17 h-17 mr-2  " 
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
           alt="logo"/>Flowbite</a>  
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="pt-5
           inline-flex w-12 h-12 text-white">
  <path fill-rule="evenodd" d="M9.78 4.22a.75.75 0 0 1 0 1.06L7.06 8l2.72 2.72a.75.75 0 1 1-1.06
   1.06L5.47 8.53a.75.75 0 0 1 0-1.06l3.25-3.25a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd" />
  </svg>
  <h1 className=' pt-5 inline-flex  text-white'>Go back</h1></div>
 <div className='mx-auto  w-80 h-80 bg-blue-400 rounded-l'>
    <h1 className='text-white text-xl font-bold pt-[40px] pl-[40px] '>Your selected plan</h1>
    <p className='text-white pl-[40px]'>30-day free trial</p>
    <ul className='flex flex-col pl-[40px] pt-[10px]'>
        <li className='flex'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" 
        class="w-5 h-5 pt-1 text-green-700">
  <path fill-rule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0
  0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
   clip-rule="evenodd" />
</svg><h1 className='pl-3 inline-flex text-white'>Individual configuration</h1>
</li>
<li className='flex'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" 
        class="w-5 h-5 pt-1 text-green-700">
  <path fill-rule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0
  0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
   clip-rule="evenodd" />
</svg><h1 className='pl-3 inline-flex text-white'>No setup, or hidden fees</h1>
</li>
<li className='flex'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" 
        class="w-5 h-5 pt-1 text-green-700">
  <path fill-rule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0
  0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
   clip-rule="evenodd" />
</svg><h1 className='pl-3 inline-flex text-white'>Team size: 1 developer

</h1>
</li>
<li className='flex'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" 
        class="w-5 h-5 pt-1 text-green-700">
  <path fill-rule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0
  0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
   clip-rule="evenodd" />
</svg><h1 className='pl-3 inline-flex text-white'>Premium support: 6 months</h1>
</li>
<li className='flex'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" 
        class="w-5 h-5 pt-1 text-green-700">
  <path fill-rule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0
  0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
   clip-rule="evenodd" />
</svg><h1 className='pl-3 inline-flex text-white'>Premium support: 6 months</h1>
</li></ul>
    </div></div>
    <div className= 'mt-[50px]  p-10'>
<ol  class="flex items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 
             sm:text-base gap-6">
     <li className='flex items-center'>
      <div className='text-gray-900'> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" 
      fill="blue" class="text-black pl-7  w-12 h-12">
  <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm3.844-8.791a.75.75 
  0 0 0-1.188-.918l-3.7 4.79-1.649-1.833a.75.75 0 1 0-1.114 1.004l2.25 2.5a.75.75 0
   0 0 1.15-.043l4.25-5.5Z" clip-rule="evenodd" />
</svg>

      <h1 className='text-blue-500 mt-[-6px]'>Personal Info</h1></div>
   </li>   <div className='w-20 ml-5 border border-b border-gray-500'></div>
    <li className='flex-items-center'> 
     <div className='text-gray-900'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" 
     fill="blue" class="pl-7 w-12 h-12">
  <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm3.844-8.791a.75.75 0 
  0 0-1.188-.918l-3.7 4.79-1.649-1.833a.75.75 0 1 0-1.114 1.004l2.25 2.5a.75.75 0 0
   0 1.15-.043l4.25-5.5Z" clip-rule="evenodd" />
</svg>

     <h1 className='text-blue-500 mt-[-7px]'>Account Info</h1></div></li>
    <div className='w-20 border border-b border-gray-900'></div>
    <li className='flex items-center'>
      <div className='text-gray-900'> <h1>3</h1>
      <h1 className='mt-4'>confirmation</h1></div>
   </li>  </ol>
   <h1 className='text-2xl text-black mt-[50px] font-bold'>Verify your email address</h1>
    <p className='text-black mt-[10px]'>We emailed you a six-digit code to abc@gmail.com.
     Enter the code below to confirm your email 
        address.</p>
        
<form class="max-w-sm mx-auto">
    <div class="flex mb-2 space-x-2 rtl:space-x-reverse ">
        <div className=''>
            <label for="code-1" class="sr-only">First code</label>
            <input type="text" maxlength="1" data-focus-input-init data-focus-input-next="code-2"
             id="code-1" class="block w-12 h-12 py-3 text-sm font-extrabold text-center
              text-gray-900 bg-gray-100 border border-gray-300 rounded-lg focus:ring-primary-500 
              focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600
               dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 
               dark:focus:border-primary-500" required />
        </div>
        <div>
            <label for="code-2" class="sr-only">Second code</label>
            <input type="text" maxlength="3" data-focus-input-init data-focus-input-prev="code-1"
             data-focus-input-next="code-3" id="code-2" class="block w-12 h-12 py-3 text-sm 
             font-extrabold text-center text-gray-900 bg-gray-100 border border-gray-300
              rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700
               dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                dark:focus:ring-primary-500 dark:focus:border-primary-500" required />
        </div>
        <div>
            <label for="code-3" class="sr-only">Third code</label>
            <input type="text" maxlength="1" data-focus-input-init data-focus-input-prev="code-2"
             data-focus-input-next="code-4" id="code-3" class="block w-12 h-12 py-3 text-sm
              font-extrabold text-center
              text-gray-900 bg-gray-100 border border-gray-300 rounded-lg 
              focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700
               dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
               dark:focus:ring-primary-500 dark:focus:border-primary-500" required />
        </div>
        <div>
            <label for="code-4" class="sr-only">Fourth code</label>
            <input type="text" maxlength="1" data-focus-input-init data-focus-input-prev="code-3" 
            data-focus-input-next="code-5" id="code-4" class="block w-12 h-12 py-3 text-sm font-extrabold 
            text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-lg 
            focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700
             dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
             dark:focus:ring-primary-500 dark:focus:border-primary-500" required />
        </div>
        <div>
            <label for="code-5" class="sr-only">Fifth code</label>
            <input type="text" maxlength="1" data-focus-input-init data-focus-input-prev="code-4" 
            data-focus-input-next="code-6" id="code-5" class="block w-12 h-12 py-3 text-sm font-extrabold 
            text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-lg 
            focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700
             dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
             dark:focus:ring-primary-500 dark:focus:border-primary-500" required />
        </div>
        <div>
            <label for="code-6" class="sr-only">Sixth code</label>
            <input type="text" maxlength="1" data-focus-input-init data-focus-input-prev="code-5" 
            id="code-6" class="block w-12 h-12 py-3 text-sm font-extrabold text-center text-gray-900
             bg-gray-100 border border-gray-300 rounded-lg focus:ring-primary-500
              focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600
               dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 
               dark:focus:border-primary-500" required />
        </div>
    </div></form>
    <input type="text" className='w-full h-[50px] border-gray-500 bg-gray-300 
    rounded-xl pl-5 text-black'
    value="Make sure to keep this window open while check your inbox."/>
    <div className='flex gap-4 mt-[20px]'>
        <button onClick={handclick} className='w-full h-[40px] border-gray-400 bg-gray-300 
        hover:bg-gray-700 text-white rounded-xl'>Prev:Account Info</button>
           <button onClick={setclick}  className='w-full h-[40px] border-gray-400 bg-blue-500 
        hover:bg-blue-700 text-white rounded-xl'>Verify Account</button>
    </div></div></div>:<Onboardform4/>:<Onboardingform2/>}
    </div></div>
  )
}

export default Onboardingform3
