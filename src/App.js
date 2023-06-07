import React from 'react'
import Loginpage from './components/Loginpage'
import Signuppage from './components/Signuppage'
import Homepage from './components/Homepage'
import Portfoliopage from './components/Portfoliopage'
import Leelathomasportfolio from './components/Leelathomasportfolio'
import Arunneelakandhanportfolio from './components/Arunneelakandhanportfolio'
// import Kramachandraportfolio from './components/Kramachandraportfolio'
import { BrowserRouter, Routes, Route } from 'react-router-dom';



const App = () => {
  return (
    <div>
      
      
      {/* <Portfoliopage/> */}
      {/* <Leelathomasportfolio/> */}
      {/* <Arunneelakandhanportfolio/> */}
      {/* <Kramachandraportfolio/> */}
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Loginpage/>} />
        <Route path="/signuppage" element={<Signuppage/>} />
        <Route path="/homepage" element={<Homepage/>} />
        <Route path="/portfoliopage" element={<Portfoliopage/>} />
        <Route path="/leelaportfolio" element={<Leelathomasportfolio/>} />
        <Route path="/arunportfolio" element={<Arunneelakandhanportfolio/>} />
        
      </Routes>
    </BrowserRouter>
      {/* <Loginpage/>
      <Signuppage/> */}
    
    </div>
  )
}

export default App
