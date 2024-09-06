import { useEffect, useState } from "react";
import Background from './components/Background/Background';
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero"; 

const App = () => {
  let heroData = [
    { text1: "If you can dream it,", text2: "Mac can do it." },
    { text1: "Not just an headphone", text2: "Its airpods !" },
    { text1: "Touch, draw and type", text2: "on one magical device." },
  ];

  const [heroCount, setHeroCount] = useState(2);
  const [playVideo, setPlayVideo] = useState(false);

  useEffect(()=>{
setInterval(()=>{
setHeroCount ((count)=>{return count===2?0:count+1})
},3000)
  },[])

  return (
    <div>
      <Background playVideo={playVideo} heroCount={heroCount} />
      <Navbar/>
      <Hero
      playVideo={playVideo}
heroData = {heroData[heroCount]}
      setPlayVideo={setPlayVideo}
      setHeroCount ={setHeroCount}
      heroCount ={heroCount}
      />
    </div>
  );
};

export default App;
