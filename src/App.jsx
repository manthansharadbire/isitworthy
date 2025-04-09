import React from 'react';
import {Calculator as calculatorIcon} from 'lucide-react';

function App() {
  return (
    <div>
    <div>
    <p className='text-gray-400 mt-4 text-center text-2xl' >
      Determine if that purchase is really worth your hard-earned money</p></div>
      <div>
        <h1 className='text-white text-center mt-8 text-4xl'>Income Details</h1>
        <p className='text-gray-400 mt-1 text-center text-xl' >
        Enter your income details to calculate how much you save over time.</p>
        <p className='text-white mt-4 text-center text-2xl' >
        Monthly Income</p>
        <div className='justify-center flex'>
          <input type="text" placeholder='Enter your Monthly Income in ₹ ' 
          className='w-1/3 text-center rounded-sm mt-2 py-2 outline-none text-xl hover bg-black border border-gray-200 text-white'/>
        </div>
        </div>
    </div>

   
  )
}

export default App;
