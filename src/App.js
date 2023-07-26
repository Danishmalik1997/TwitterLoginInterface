import { useState } from 'react';
import './App.css';
import TwitterIcon from '@mui/icons-material/Twitter';
import DarkModeIcon from '@mui/icons-material/DarkMode';
function App() {
  const [darkmode, setDarkMode] = useState(false);

  return (<> 
  
  {darkmode ? 
      <div className='bg-slate-700 text-white'>
      <div className='h-screen flex justify-center items-center'>
      <div className='bg-slate-800 h-4/5 w-1/3 flex justify-center items-center'>
        <div className='bg-slate-900 text-center text-white h-5/6 flex flex-col w-4/5 border-solid border-gray border-2 rounded-md' >
          <button className='ml-80 mt-2' onClick={() => setDarkMode(!darkmode)}><DarkModeIcon className='text-white' /></button>
          <TwitterIcon className='m-auto mt-10 mb-3' />
          <div className="text-white font-bold p-2 mx-auto cursor-pointer flex justify-center items-center w-72 border-solid border-2 rounded-3xl border-gray-300">
            <img alt="" className='w-4' src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png' />
            <h1 className='w-72'>  Sign in with Google </h1>
          </div>
          <div className="text-white font-bold p-2 mt-4 mx-auto cursor-pointer flex justify-center items-center w-72 border-solid border-2 rounded-3xl border-gray-300">
            <img alt="" className='w-4 ' src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/391px-Apple_logo_black.svg.png' />
            <h1 className='w-72 mt-0 p-0 '>  Sign in with Apple </h1>
          </div>
          <h1 className='text-xl text-white mt-4'> Or </h1>
          <div className='flex flex-col justify-center items-center'>
            <input className='p-2 mt-3 w-72 bg-slate-900 border-solid border-gray-400 border-2' type='text' placeholder='phone, email or username' />
            <button className= 'text-white border-solid border-gray-400 border-2 w-72 mt-4 rounded-full p-3'> Next </button>
            <button className='border-solid border-gray-400 border-2 text-white font-bold  w-72 mt-4 rounded-full p-3'> Forget password </button>
            <p className='text-slate-400 mt-4'>Dont have an account <span className='text-blue-400 cursor-pointer'>Sign Up </span></p>
          </div>
        </div>
      </div>
    </div>

    </div>
    :
    <div>
      <div className='h-screen flex justify-center items-center'>
      <div className='bg-gray-200 h-4/5 w-1/3 flex justify-center items-center'>
        <div className='bg-white text-center text-blue-600 h-5/6 flex flex-col w-4/5 border-solid border-gray border-2 rounded-md' >
          <button className='ml-80 mt-2' onClick={() => setDarkMode(!darkmode)}><DarkModeIcon className='text-black' /></button>
          <TwitterIcon className='m-auto mt-10 mb-3' />
          <div className="text-black font-bold p-2 mx-auto cursor-pointer flex justify-center items-center w-72 border-solid border-2 rounded-3xl border-gray-300">
            <img alt="" className='w-4' src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2008px-Google_%22G%22_Logo.svg.png' />
            <h1 className='w-72'>  Sign in with Google </h1>
          </div>
          <div className="text-black font-bold p-2 mt-4 mx-auto cursor-pointer flex justify-center items-center w-72 border-solid border-2 rounded-3xl border-gray-300">
            <img alt="" className='w-4 ' src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/391px-Apple_logo_black.svg.png' />
            <h1 className='w-72 mt-0 p-0 '>  Sign in with Apple </h1>
          </div>
          <h1 className='text-xl text-black mt-4'> Or </h1>
          <div className='flex flex-col justify-center items-center'>
            <input className='p-2 mt-3 w-72' type='text' placeholder='phone, email or username' />
            <button className='bg-black text-white w-72 mt-4 rounded-full p-3'> Next </button>
            <button className='border-solid border-gray-400 border-2 text-black font-bold  w-72 mt-4 rounded-full p-3'> Forget password </button>
            <p className='text-slate-400 mt-4'>Dont have an account <span className='text-blue-400 cursor-pointer'>Sign Up </span></p>
          </div>
        </div>
      </div>
    </div>


    </div>}
    
  </>
  );
}

export default App;
