import React, { useState } from 'react'
import './Sidebar.css'
import { Menu } from 'lucide-react';
import { Plus } from 'lucide-react';
import { MessageSquare } from 'lucide-react';
import { FileQuestionMark } from 'lucide-react';
import { History } from 'lucide-react';
import { Settings } from 'lucide-react';





const Sidebar = () => {
    const [extended, setExtended] = useState(false)
    return (
        <div className='sidebar'>
            <div className='top'>
                <Menu className='menu' onClick={() => setExtended(prev =>!prev)} />
                <div className="new-chat">
                    <Plus color="#222020" />
                    {extended ? <p>New chat</p> : null}
                </div>
                {extended ?
                    <div className="recent">
                        <p className="recent-title">Recent</p>
                        <div className="recent-entry">
                            <MessageSquare />
                            <p>what is react ...</p>
                        </div>
                    </div>
                    : null
                }
            </div>
            <div className="bottom">
                <div className="bottom-item recent-entry">
                    <FileQuestionMark />
                   {extended?<p>Help</p>:null}
                </div>
                <div className="bottom-item recent-entry">
                    <History />
                   {extended?<p>Activity</p>:null}
                </div>
                <div className="bottom-item recent-entry">
                    <Settings className='settings' />
                    {extended?<p>Setting</p>:null}  
                </div>
            </div>
        </div>
    )
}
export default Sidebar
