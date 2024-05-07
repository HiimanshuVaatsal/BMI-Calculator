import { useMemo, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [weight, setWeight] = useState(80)
  const [height,setHeight]=useState(180)

  const onWeightChange = (event) =>{
     setWeight(event.target.value)
  }

  const onHeightChange = (event) =>{
    setHeight(event.target.value)
  }

 const result= useMemo(()=>{
  const heightm=height/100;
  return(weight/(heightm*heightm)).toFixed(1)
 },[weight,height])

  return (
    <>
      <section className='flex justify-center items-center my-20'>
      <main className='w-96 ring-2 ring-blue-800 rounded-xl'>
         <h1 className='bg-blue-800 p-2 rounded-t-xl text-white'>Project 1:BMI CALCULATOR</h1>
         <div className='p-3 flex flex-col'>
             <div className='input-section'>
              <p>Weight:{weight} kg</p>
              <input type="range" onChange={onWeightChange} step={"1"} min={"40"} max={"200"} />
             </div>

             <div>
                <p>Height:{height} cm</p>
                <input type="range" onChange={onHeightChange} min={"140"} max={"220"} />
             </div>

             <div>
              <p>Your BMI is:</p>
              <p>{result}</p>
             </div>
        </div>
       </main>
      </section>
    </>
  )
}

export default App
