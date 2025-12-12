import React from 'react';
import './Main.css'
import { CircleUserRound } from 'lucide-react';
import { Compass } from 'lucide-react';
import { Lightbulb } from 'lucide-react';
import { MessageSquare } from 'lucide-react';
import { CodeXml } from 'lucide-react';
import { Images } from 'lucide-react';
import { Mic } from 'lucide-react';
import { Send } from 'lucide-react';

const Main = () => {
  return (
    <div className='main'>
      <div className='nav'>
        <p>Gemini</p>
        <CircleUserRound />
      </div>
      <div className="main-container">
        <div className="greet">
          <p><span>Hello, dev.</span></p>
          <p>How can I help you today?</p>
        </div>
        <div className="cards">
          <div className="card">
            <p>suggest beautful places to see on an upcoming road trip</p>
            <Compass className='cardel' />
          </div>
          <div className="card">
            <p>AI that suggests dinner based on your fridge</p>
            <Lightbulb className='cardel' />
          </div>
          <div className="card">
            <p>AI that makes 5-min workout plans</p>
            <MessageSquare className='cardel' />
          </div>
          <div className="card">
            <p>List fun challenges to try this week</p>
            <CodeXml className='cardel' />
          </div>
        </div>
        <div className="main-bottom">
          <div className="search-box">
            <input type="text" placeholder='Enter your prompt here'/>
            <div>
            <Images />
            <Mic />
            <Send />  
            </div>
          </div>
          <p className="bottom-info">Gemini may display inaccurate information, so always verify important details from reliable sources.</p>
        </div>
      </div>
    </div>

  )
}

export default Main