import React, { useContext } from 'react';
import './Main.css'
import { CircleUserRound } from 'lucide-react';
import { Compass } from 'lucide-react';
import { Lightbulb } from 'lucide-react';
import { MessageSquare } from 'lucide-react';
import { CodeXml } from 'lucide-react';
import { Images } from 'lucide-react';
import { Mic } from 'lucide-react';
import { Send } from 'lucide-react';
import { Bubbles } from 'lucide-react';
import { Context } from '../../context/context';
const Main = () => {

  const{onSent, recentPrompt, showResult, loading, resultData, setInput, input} = useContext(Context)

  return (
    <div className='main'>
      <div className='nav'>
        <p>Gemini</p>
        <CircleUserRound />
      </div>
      <div className="main-container">

        {!showResult
        ?
        <>
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
        
        </>
        :<div className='result'>
<div className="result-title">
  <CircleUserRound className='userimg'/>
  <p>{recentPrompt}</p>
</div>

<div className="result-data">
  <Bubbles />
  {loading?
  <div className="loader">
      <hr />
      <hr />
      <hr />
  </div>
  :  <p dangerouslySetInnerHTML={{ __html: resultData }} />
  }

</div>
        </div>
        }


        <div className="main-bottom">
          <div className="search-box">
            <input onChange={(e)=> setInput(e.target.value)} value={input} type="text" placeholder='Enter your prompt here'/>
            <div>
            <Images />
            <Mic />
            < Send className='send' onClick={()=> onSent()}/>  
            </div>
          </div>
          <p className="bottom-info">Gemini may display inaccurate information, so always verify important details from reliable sources.</p>
        </div>
      </div>
    </div>

  )
}

export default Main