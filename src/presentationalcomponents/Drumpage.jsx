import q from '../assets/heaterKit/Heater-1.mp3'; 
import e from '../assets/heaterKit/Cev_H2 (1).mp3';
import w from '../assets/heaterKit/Heater-2.mp3';
import a from '../assets/heaterKit/Heater-4_1.mp3';
import s from '../assets/heaterKit/Dsc_Oh (1).mp3';
import d from '../assets/heaterKit/Cev_H2 (2).mp3';
import z from '../assets/heaterKit/RP4_KICK_1 (1).mp3';
import x from '../assets/heaterKit/Kick_n_Hat (1).mp3';
import c from '../assets/heaterKit/Cev_H2 (3).mp3';
import startCommmand from '../assets/power/lighter-6324.mp3';

import qguiter from '../assets/smoothPiano/announcement-sound-4-21464.mp3';
import wguiter from '../assets/smoothPiano/crystal-logo-21091.mp3';
import eguiter from '../assets/smoothPiano/guitar-riff-159089 (1).mp3';
import aguiter from '../assets/smoothPiano/the-appearance-of-a-mysterious-creature-143028.mp3';
import sguiter from '../assets/smoothPiano/record_scratch-108233.mp3';
import dguiter from '../assets/smoothPiano/reverse-acoustic-guitar-logo-165190.mp3';
import zguiter from '../assets/smoothPiano/short-success-sound-glockenspiel-treasure-video-game-6346.mp3';
import xguiter from '../assets/smoothPiano/sol-guitarra-acustica-40379.mp3';
import cguiter from '../assets/smoothPiano/stingers-001-6294.mp3';




const DrumPage=({AudioRef,handleClick,volume,handleVolumeChange,hadlePower,power,activeKey,data,
  handleStartCommand,
  startCommandRef,
  guiter,
  toggleInstruments,
  handleOutput,
  handleInstrumentSwitch


})=>{
     
   console.log('QUITER',guiter);
  const activeButtonColour='#acaaaa'
  
  
   
    console.log('data',data);

    return(
      <div id="drumpage"> 
        <div id="h1">Drum machine</div>
        <div id='outerBox' > 
        
        <div id='drumBox'  >
         <div id='top'>
         <div >
<audio ref={AudioRef.q }   src={guiter?qguiter:q} style={{display:'none'}}>     </audio> 
<button onClick={()=> handleClick( 'q')}  id='buttons' 
   style={activeKey==='q'?{backgroundColor:activeButtonColour}:null}
>q</button>
      

        </div>
        <div>
        <audio ref={AudioRef.w }   src={guiter?wguiter:w} style={{display:'none'}}>     </audio>
<button onClick={ power?()=> handleClick('w'):null} id='buttons'
 style={activeKey==='w'?{backgroundColor:activeButtonColour}:null}>w</button>
      
        </div>
        <div>
        <audio ref={AudioRef.e }   src={guiter?eguiter:e} style={{display:'none'}}>     </audio>
<button onClick={ power?()=> handleClick('e'):null} id='buttons' 
 style={activeKey==='e'?{backgroundColor:activeButtonColour}:null}>e</button>
      
        </div>
         </div>
          <div id="middle">
          <div>
        <audio ref={AudioRef.a}   src={guiter?aguiter:a} style={{display:'none'}}>     </audio>
<button onClick={ power?()=> handleClick('a'):null} id='buttons'
 style={activeKey==='a'?{backgroundColor:activeButtonColour}:null}>a</button>
      
        </div>
        <div>
        <audio ref={AudioRef.s }   src={guiter?sguiter:s} style={{display:'none'}}>     </audio>
<button onClick={  power?()=> handleClick('s'):null} id='buttons' 

style={activeKey==='s'?{backgroundColor:activeButtonColour}:null}>s</button>
       
        </div>
        <div>
        <audio ref={AudioRef.d }   src={guiter?dguiter:d} style={{display:'none'}}>     </audio>
<button onClick={ power?()=> handleClick('d'):null} id='buttons'
 style={activeKey==='d'?{backgroundColor:activeButtonColour}:null}
>d</button>
      
        </div>
          </div>
          <div id="bottom">
          
        <div>
        <audio ref={AudioRef.z }   src={guiter?zguiter:z} style={{display:'none'}}>     </audio>
<button onClick={  power?()=> handleClick('z'):null}  id='buttons'
  style={activeKey==='z'?{backgroundColor:activeButtonColour}:null}
>z</button>
       
        </div>
        <div>
        <audio ref={AudioRef.x }   src={guiter?xguiter:x} style={{display:'none'}}>     </audio>
<button onClick={ power?()=> handleClick('x'):null} id='buttons'
 style={activeKey==='x'?{backgroundColor:activeButtonColour}:null}
>x</button>
       
        </div>
        <div>
        <audio ref={AudioRef.c }   src={guiter?cguiter:c} style={{display:'none'}}>     </audio>
<button onClick={ power?()=> handleClick('c'):null} id='buttons'
 style={activeKey==='c'?{backgroundColor:activeButtonColour}:null}>c</button>
     
        </div>
          </div>
        </div>
        <div id='controls'  >
         
          <div id="startButton" onClick={handleStartCommand} >
          
          <button id="togglePower" onClick={()=>hadlePower(!power)} style={power?{backgroundColor:'lightskyblue'}:null}>{power?"on":'off'}  </button>
          <audio  ref={startCommandRef} src={startCommmand} style={{display:'none'}}></audio>
          </div>

     
        

         <div id="outPut">{typeof(data)==='number'?  ('Volume: '+Math.floor(data*100)):data}</div>
        <input   
        id='volumeButton'
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={handleVolumeChange}
        
      />
      <div id="toggleInstrumentDiv" onClick={guiter?()=> {
        handleOutput('piano');
        handleInstrumentSwitch();

      }:()=>{
        handleOutput('guiter');
        handleInstrumentSwitch();

    
      }}>
 <div>
  
 <div>
 <button id="toggleInstruments"  onClick={()=>toggleInstruments(!guiter)} >{guiter?'guiter':'piano'}</button>

 </div>
 </div>
      </div>
         </div>
        </div>
        
        <div id="developer"> Designed and coded  by : <a href="sds" >Brian Kipkoech</a></div>
        </div>
    )
}

export default DrumPage;