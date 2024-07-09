import React,{useState} from 'react'
import Onboardform1 from './Onboardform1'
import Onboardingform3 from './Onboardingform3'

const Onboardingform2 = () => {
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
    <ul className=' flex flex-col pl-[40px] pt-[10px]'>
        <li className='flex'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" 
        class="w-65 h-5 pt-1 text-green-700">
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
</svg><h1 className='pl-3 inline-flex text-white'>Free updates: 6 months</h1>
</li>

    </ul>
    </div> </div>
 
  
  <div className= '  p-10'>
<ol  class="flex items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 
             sm:text-base gap-6">
     <li className='flex items-center'>
      <div className='text-gray-900'> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" 
      fill="blue" class="text-black pl-5 w-10 h-10">
  <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14Zm3.844-8.791a.75.75 0 0 0-1.188-.918l-3.7 4.79-1.649-1.833a.75.75 0 1 0-1.114 1.004l2.25 2.5a.75.75 0 0 0 1.15-.043l4.25-5.5Z" clip-rule="evenodd" />
</svg>

      <h1 className='text-blue-500 mt-[-5px]'>Personal Info</h1></div>
   </li>   <div className='w-20 ml-5 border border-b border-gray-500'></div>
    <li className='flex-items-center'> 
     <div className='text-gray-900'><h1>2</h1>
     <h1>Account Info</h1></div></li>
    <div className='w-20 border border-b border-gray-900'></div>
    <li className='flex items-center'>
      <div className='text-gray-900'> <h1>3</h1>
      <h1 className=''>confirmation</h1></div>
   </li> 
   
   </ol>
   <h1 className='text-black text-2xl  font-bold'>Account Details</h1>
   <div className='grid grid-cols-2 gap-4 '>
    <div className='flex flex-col py-3 text-black' >
        <label>Full Name</label>
     <input type="text" className='rounded-xl pl-3 w-full h-[40px] border-2 border-gray-200 bg-gray-100'
        placeholder='Malleswari'/>
        </div>
        <div className='flex flex-col py-3' >
        <label className='text-black'>Your email</label>
        <input type="text" className='rounded-xl pl-3 w-full h-[40px] border-2 border-gray-200 bg-gray-100'
        placeholder='abc@gmail.com'/>
        </div>
        </div>
        <div className='grid grid-cols-2 gap-4 '>
        <div className='flex flex-col py-3' >
        <label className='text-black'>Password</label>
     <input type="password" className='rounded-xl pl-3 w-full h-[40px] border-2 border-gray-200 bg-gray-100'
        placeholder='123abc'/>
        </div>
        <div className='flex flex-col py-3 text-black' >
        <label className='text-black'>Confirm password</label>
        <input type="password" className='rounded-xl pl-3 w-full h-[40px] border-2 border-gray-200 bg-gray-100'
        placeholder='123abc'/>
        </div>
            </div> 
            <div className='grid grid-cols-2 gap-4 '>
            <div className='flex flex-col py-3 text-black' >
        <label className=''>Country</label>
     <select type="dropdown" className='rounded-xl pl-3 w-full h-[40px] border-2 border-gray-200
      bg-gray-100 hover:border-blue-500'>
        <option>Choose Your Country</option>
        <option>Germany</option>

        <option>Japan</option>

        <option>London</option>

        <option>America</option>  </select>
        
        </div>
        <div className='flex flex-col py-3 text-black' >
        <label className='text-black'>Phone</label>
        <input type="number" className='rounded-xl pl-3 w-full h-[40px] border-2 border-gray-200 bg-gray-100'
        placeholder='+123 456 789'/>
        </div></div> 
        <div className='flex relative'>
            <input type='checkbox' className='mt-1 w-4 h-4 rounded-xl border-gray-400 bg-gray-100' required/>
        <label className='pl-7 absolute text-black text-sm'>By signing up, you are creating 
        a Flowbite account,
          and you agree to Flowbite’s <a className='text-blue-500 hover:underline'>Terms of Use</a> and 
        <a className='text-blue-500 hover:underline'> Privacy Policy</a>.</label>
      </div>
      <div className='mt-5 flex relative'>
            <input type="checkbox" className='mt-1 w-4 h-4 rounded-xl border-gray-400 bg-gray-100'/>
        <p className='pl-7 absolute text-black text-sm'>
Email me about product updates and resources. </p>
      </div>
      <div className='grid grid-cols-2 gap-4'>
      <button  onClick={handclick} className='w-full h-[40px] font-bold bg-gray-200 rounded-l 
      text-center text-white mt-[15px]
      hover:bg-gray-500'>
   Prev:Personal Info</button>
   <button onClick={setclick}  className='w-full h-[40px] font-bold bg-blue-500 rounded-l text-center
    text-white mt-[15px] hover:bg-blue-700'>

   Next:Account Info</button>
      </div></div></div>:<Onboardingform3/>:<Onboardform1/>}</div></div>


    
  )
}

export default Onboardingform2
