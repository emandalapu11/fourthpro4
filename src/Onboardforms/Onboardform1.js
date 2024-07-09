import React,{useState} from 'react'
import Onboardingform2 from './Onboardingform2'

const Onboardform1 = () => {
   const [board,setBoard]=useState(false)
   const handclick=()=>{
      setBoard(!board)
   }
  return (
    <div>
      <div className='mt-[20px] max-w-[1100px] h-full screen bg-gray-100 mx-auto border-gray-700'>
         {!board?
        <div className='grid grid-cols-2 space-x-5'>
            
    <div className='  w-[70%] h-screen bg-blue-500 text-black'>
        <div className='flex'>
    <a href="#" class="pt-2 flex items-center mb-6 text-2xl text-white font-bold dark:text-white">
          <img class="pl-5  pt-2 w-17 h-17 mr-2  " 
          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
           alt="logo"/>Flowbite</a>  
           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor"
            class="pt-5 inline-flex w-12 h-12 text-white">
  <path fill-rule="evenodd" d="M9.78 4.22a.75.75 0 0 1 0 1.06L7.06 8l2.72 2.72a.75.75 0 1 1-1.06
   1.06L5.47 8.53a.75.75 0 0 1 0-1.06l3.25-3.25a.75.75 0 0 1 1.06 0Z" clip-rule="evenodd" />
</svg>
  <h1 className=' pt-5 inline-flex  text-white cursor-pointer'>Go back</h1></div>
 <div className='mx-auto  w-80 h-80 bg-blue-400 rounded-l'>
    <h1 className='] text-white text-xl font-bold pt-[40px] pl-[40px] '>Your selected plan</h1>
    <p className='text-white pl-[40px]'>30-day free trial</p>
    <ul className='flex  flex-col pl-[40px] pt-[10px]'>
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
</svg><h1 className='pl-3 inline-flex text-white'>Premium support : 6 months</h1>
</li>
<li className='flex'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" 
        class="w-5 h-5 pt-1 text-green-700">
  <path fill-rule="evenodd" d="M12.416 3.376a.75.75 0 0 1 .208 1.04l-5 7.5a.75.75 0
  0 1-1.154.114l-3-3a.75.75 0 0 1 1.06-1.06l2.353 2.353 4.493-6.74a.75.75 0 0 1 1.04-.207Z"
   clip-rule="evenodd" />
</svg><h1 className='pl-3 inline-flex text-white'>Free updates : 6 months</h1>
</li>

    </ul>
    </div> 
  </div>
  <div className= 'mt-[50px]  p-10'>
<ol  class="flex items-center w-full text-sm font-medium text-center text-gray-500 dark:text-gray-400 
             sm:text-base gap-6">
     <li className='flex items-center'>
      <div className='text-gray-900'> <h1>1</h1>
      <h1 className=''>Personal Info</h1></div>
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
   <h1 className='pt-[30px] text-black font-bold text-2xl'>Tell us about yourself</h1>
   <div className='text-gray-900'>
<label className='pt-[20px] text-black  text-l'>What is your profession?</label>
<div className='relative cursor-pointer text-black'>
<input type="text" className='text-black w-full h-[50px] bg-gray-300 border-gray-400 pl-10 rounded-l
hover:bg-gray-500'
  />
 <label className='absolute top-3 left-10 cursor-pointer'>I'm a Designer</label>
 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class=" absolute text-black  top-4 left-4 w-4 h-4">
  <path fill-rule="evenodd" d="M2 3a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v8.5a2.5 2.5 0 0 1-5 0V3Zm3.25 8.5a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" clip-rule="evenodd" />
  <path d="m8.5 11.035 3.778-3.778a1 1 0 0 0 0-1.414l-2.122-2.121a1 1 0 0 0-1.414 0l-.242.242v7.07ZM7.656 14H13a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-.344l-5 5Z" />
</svg>

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class=" text-black top-4 right-7 absolute w-4 h-4">
  <path fill-rule="evenodd" d="M2 8a.75.75 0 0 1 .75-.75h8.69L8.22 4.03a.75.75 0 0 1 1.06-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06-1.06l3.22-3.22H2.75A.75.75 0 0 1 2 8Z" clip-rule="evenodd" />
</svg>

</div>
<div className=' cursor-pointer relative mt-[20px] text-black  '>
<input type="text" className=' w-full h-[50px] bg-gray-300 border-gray-400 pl-10 rounded-l
 hover:bg-gray-500'
/><label className='absolute top-3 left-10 cursor-pointer'>I'm a Developer</label>
 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="absolute top-4 left-4
 text-black  w-4 h-4">
  <path fill-rule="evenodd" d="M4.78 4.97a.75.75 0 0 1 0 1.06L2.81 8l1.97 1.97a.75.75 0 1 1-1.06 1.06l-2.5-2.5a.75.75 0 0 1 0-1.06l2.5-2.5a.75.75 0 0 1 1.06 0ZM11.22 4.97a.75.75 0 0 0 0 1.06L13.19 8l-1.97 1.97a.75.75 0 1 0 1.06 1.06l2.5-2.5a.75.75 0 0 0 0-1.06l-2.5-2.5a.75.75 0 0 0-1.06 0ZM8.856 2.008a.75.75 0 0 1 .636.848l-1.5 10.5a.75.75 0 0 1-1.484-.212l1.5-10.5a.75.75 0 0 1 .848-.636Z" clip-rule="evenodd" />
</svg>


<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class=" text-black top-4 right-7 absolute w-4 h-4">
  <path fill-rule="evenodd" d="M2 8a.75.75 0 0 1 .75-.75h8.69L8.22 4.03a.75.75 0 0 1 1.06-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.06-1.06l3.22-3.22H2.75A.75.75 0 0 1 2 8Z" clip-rule="evenodd" />
</svg>

</div></div>
<button className='w-full h-[40px] font-bold bg-blue-500 rounded-l text-center text-white 
mt-[15px] hover:bg-blue-600'
onClick={handclick } >
   Next: Account Info</button>
<p className='text-black mt-[10px]'>Already have an account?<a href="#" className='text-blue-500 hover:underline'> Login here</a>.</p>
 
    </div></div>:<Onboardingform2/>}</div>
    </div>
  )
}

export default Onboardform1
