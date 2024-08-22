import { useGSAP } from "@gsap/react";
import { gsap } from 'gsap'
import React, { useEffect } from "react";


const App = () => {
  useGSAP(()=>{
    gsap.to('#blue-box', {
      x:250,
      repeat: -1,
      yoyo: true,
      rotation: 360,
      duration: 2,
      ease: "bounce.out"
    })
  })
  return (
    <div className="h-screen w-full bg-zinc-800 flex items-center">
      <div id="blue-box" className="w-40 h-40 bg-blue-500 rounded-lg"></div>
    </div>
  );
};

export default App;
