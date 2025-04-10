import './App.css'
import DaisyNav from './components/DaisyNav'
import NavBar from './components/NavBar/NavBar'
import PriceOptions from './components/priceOptions/priceOptions'
import PriceOption from './components/priceOptions/priceOptions'
import Stat from './stat'
function App() {
  
  return (
    <>
    {/* <Stat></Stat>
     */}
     
     <NavBar></NavBar>
     {/* <DaisyNav></DaisyNav> */}
     <h3 className='bold'>Hi This is .....</h3>
     <h6 className=''>NUR</h6>
     <h1 >Cart..</h1>
    <div className='p-7'>
     <button className='bold text-2xl btn btn-primary p-4'>HI</button>
     <button className='italic btn btn-active btn-red-300 p-2'>Click here...</button>
     </div>
     {/* <PriceOption></PriceOption> */}
     <PriceOptions></PriceOptions>
    </>
  )
}

export default App
