
import { lazy, Suspense } from "react";

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

const HeroSection = lazy(() =>
  import("./My components/Home page/HeroSection").then(module => {
    return {default : module.HeroSection}
  })
)

const Footer = lazy(() =>
  import("./My components/Common components/Footer").then(module => {
    return {default : module.Footer}
  })
)

// import { AboutUs } from './My components/Other pages/About/About_us'
// import {Contact} from "./My components/Other pages/Contact/Contact"
// import {Guides} from "./My components/Other pages/Guides/Guides"
// import {SignUp} from "./My components/Other pages/SignUp/SignUp"
// import {Login} from "./My components/Other pages/Login/Login"
// import {TrekDescription} from "./My components/Other pages/TrekDescription/TrekDescription"

function App() {
  return (
    <div className='main_body'>
    <Router>
      <Suspense>
        <Routes>
          <Route exact path="/" element={
            <>
              <HeroSection/>
            </>
          }/>
          {/* <Route exact path="/About_us" element={
            <>
            <AboutUs/>
            </>
          }/>
          <Route exact path="/Contact" element={
            <>
            <Contact/>
            </>
          }/>
          <Route exact path="/Guides" element={
            <>
            <Guides/>
            </>
          }/>
          <Route exact path="/SignUp" element={
            <>
            <SignUp/>
            </>
          }/>
          <Route exact path="/Login" element={
            <>
            <Login/>
            </>
          }/> */}
          {/* <Route exact path="/TrekDescription:title" element={
            <>
            <TrekDescription/>
            </>
          }/> */}
        </Routes>

        <Footer/>
      </Suspense>
    </Router>
    </div>
  )
}

export default App;
