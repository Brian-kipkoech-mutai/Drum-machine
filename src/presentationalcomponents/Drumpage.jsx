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
      <div id="drum-machinOuter"> 
        <div id="h1">Drum machine</div>
        <div id='drum-machine' > 
        
        <div id='drumBox'  >
         <div id='top'>
         <div  className='drum-pad' onClick={ power?()=> handleClick('q'):null} style={activeKey==='q'?{backgroundColor:activeButtonColour}:null} id='Q'>
<audio ref={AudioRef.q }   src={guiter?qguiter:q}  className='clip' id="Q">     </audio> 
 
          Q
        </div>
        <div  className='drum-pad' onClick={ power?()=> handleClick('w'):null} style={activeKey==='w'?{backgroundColor:activeButtonColour}:null} id='W'>
        <audio ref={AudioRef.w }   src={guiter?wguiter:w} className='clip' id="W">     </audio>
                     W
      
        </div>
        <div  className='drum-pad' onClick={ power?()=> handleClick('e'):null} style={activeKey==='e'?{backgroundColor:activeButtonColour}:null} id='E'>
        <audio ref={AudioRef.e }   src={guiter?eguiter:e} className='clip' id="E">     </audio>
                    E
      
        </div>
         </div>
          <div id="middle">
          <div  className='drum-pad' onClick={ power?()=> handleClick('a'):null} style={activeKey==='a'?{backgroundColor:activeButtonColour}:null} id='A'>
        <audio ref={AudioRef.a}   src={guiter?aguiter:a} className='clip' id="A">     </audio>
                        A
      
        </div>
        <div  className='drum-pad' onClick={ power?()=> handleClick('s'):null} style={activeKey==='s'?{backgroundColor:activeButtonColour}:null} id='S'>
        <audio ref={AudioRef.s }   src={guiter?sguiter:s} className='clip' id="S">     </audio>
                          S
       
        </div>
        <div className='drum-pad'  onClick={ power?()=> handleClick('d'):null} style={activeKey==='d'?{backgroundColor:activeButtonColour}:null} id='D'>
        <audio ref={AudioRef.d }   src={guiter?dguiter:d} className='clip' id="D">     </audio>
                      D
      
        </div>
          </div>
          <div id="bottom">
          
        <div className='drum-pad' onClick={ power?()=> handleClick('z'):null} style={activeKey==='z'?{backgroundColor:activeButtonColour}:null} id='Z'>
        <audio ref={AudioRef.z }   src={guiter?zguiter:z} className='clip' id="Z">     </audio>
              Z
       
        </div>
        <div className='drum-pad' onClick={ power?()=> handleClick('x'):null} style={activeKey==='x'?{backgroundColor:activeButtonColour}:null} id='X'>
        <audio ref={AudioRef.x }   src={guiter?xguiter:x} className='clip' id="X">     </audio>
                   X
       
        </div>
        <div className='drum-pad'  onClick={ power?()=> handleClick('c'):null} style={activeKey==='c'?{backgroundColor:activeButtonColour}:null} id='C'>
        <audio ref={AudioRef.c }   src={guiter?cguiter:c} className='clip' id="C">     </audio>
                  C
     
        </div>
          </div>
        </div>
        <div id='controls'  >
         
          <div id="startButton" onClick={handleStartCommand} >
          
          <button id="togglePower" onClick={()=>hadlePower(!power)} style={power?{backgroundColor:'lightskyblue'}:null}>{power?"on":'off'}  </button>
          <audio  ref={startCommandRef} src={startCommmand} style={{display:'none'}}></audio>
          </div>

     
        

         <div id="display">{typeof(data)==='number'?  ('Volume: '+Math.floor(data*100)):data}</div>
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
        
        <div id="developer"> Designed and coded  by : <a href="https://www.linkedin.com/in/brian-kipkoech-71b5b9248?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3B9nnAF3gTQq2oeiliYkWdyA%3D%3D">Brian kipkoech</a></div>
        </div>
    )
}

export default DrumPage;