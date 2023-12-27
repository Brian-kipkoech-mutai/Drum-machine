import DrumPage from "../presentationalcomponents/Drumpage";
import {  useRef, useCallback ,useEffect } from "react";
import { useState } from "react";
import { connect } from "react-redux";
import powerAction from "../redux/actions/powerAction";
import outPutAction from "../redux/actions/outPutAction";
import instrumentAction from "../redux/actions/instrumetAction";
 

 
const DrumContainer=({power,hadlePower,handleOutput,data,guiter,toggleInstruments})=>{ 
    console.log('power',power);
    const [volume, setVolume] = useState(0.5)
    const[activeKey,setKey]=useState(null)
    
     const startCommandRef=useRef(null);
     // eslint-disable-next-line
    const AudioRef=   {
        q:useRef(null),
        w:useRef(null),
        e:useRef(null),
        a:useRef(null),
        s:useRef(null),
        d:useRef(null),
        z:useRef(null),
        x:useRef(null),
        c:useRef(null),
    }
    // eslint-disable-next-line
    const audios={
      q:'Heater 1',
      w:"Heater 2",
      e:'Cev H2',
      a:"Heater 4",
      s:" Dsc Oh",
      d:"Cev H2",
      z:"RP4 KICK 1",
      x:"Kick n Hat",
      c:"Cev H2"
    }
     // eslint-disable-next-line
    const guiterAudio={
      q:'announcement',
      w:"crystal logo",
      e:'guitar riff',
      a:"mysterious",
      s:"record scratch",
      d:"acoustic",
      z:"success",
      x:"guitarra",
      c:"stingers"

    }

     

    const handleClick = useCallback((sound) => {
      
        if(power){
          // checking if the  machine is on or off before perfoming any operation
          const audio = AudioRef[sound].current;
          audio.currentTime = 0;
          audio.play();
           //  displaying the sound name in the ui
          handleOutput( guiter?guiterAudio[sound] :audios[sound]);
          setTimeout(()=>{
            handleOutput("")
          },500)
        }
        else{
          return null
        }
      }, [AudioRef,power,audios,handleOutput,guiterAudio,guiter]);
    
    const handleVolumeChange=(event)=>{
          const newVolume= parseFloat(event.target.value);
          
          setVolume(newVolume);
          Object.keys(AudioRef).forEach(Element=> {
            AudioRef[Element].current.volume=newVolume
       })  
       
       power&&handleOutput(newVolume)

       setTimeout(()=>{
        handleOutput('')
       },1000)


    }
    

     

     
  useEffect(() => {
    const handleKeyDown = (event) => {
      const key = event.key.toLowerCase();
      setKey(key)
      setTimeout(() => {
        setKey(null)
      }, 500);
      
      const buttons = ["q", "w", "e", "a", "s", "d", "z", "x", "c"];
       buttons.includes(key)&&handleClick(key)
      
       
    };
      
     
      document.addEventListener("keydown", handleKeyDown);
     
    

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleClick]);

  const handleStartCommand=()=>{
    startCommandRef.current.volume=volume;
    const currentTime= startCommandRef.current;
       currentTime.currentTime=0;
       currentTime.play()

  
       
  }
const handleInstrumentSwitch=()=>{
startCommandRef.current.volume=volume;
    const currentTime= startCommandRef.current;
       currentTime.currentTime=0;
       currentTime.play()
}
        
    
    return(
        <DrumPage
        
        AudioRef={AudioRef}
        handleClick={handleClick}
        handleVolumeChange={handleVolumeChange}
        volume={volume}
        power={power}
        hadlePower={hadlePower}
        activeKey={activeKey}
        data={data}
        handleStartCommand={handleStartCommand}
        startCommandRef={startCommandRef}
        guiter={guiter}
        toggleInstruments={toggleInstruments}
        handleOutput={handleOutput}
        handleInstrumentSwitch={handleInstrumentSwitch}
        
        

         />
    )

}

 const mapStateToProps=(state)=>({
      power:state.powerReducer.power,
      data: state.outPutReducer.data,
      guiter:state.instrumentReducer.guiter
 })

 const mapDispatchToProps=(dispatch)=>({
    hadlePower:(power)=> {
      dispatch(powerAction(power))
    },
    handleOutput:(data)=>dispatch(outPutAction(data)),

    toggleInstruments:(boolen)=>{
      dispatch(instrumentAction(boolen))
       
    }
 })
export default connect(mapStateToProps,mapDispatchToProps)(DrumContainer);


 
