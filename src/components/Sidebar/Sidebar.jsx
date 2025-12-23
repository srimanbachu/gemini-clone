import React, { useContext, useState } from 'react';
import './Sidebar.css';
import { Menu, Plus, FileQuestionMark, History, Settings } from 'lucide-react';
import { Context } from '../../context/context';

const Sidebar = () => {

    const [extended, setExtended] = useState(false);
    const { onSent, prevPrompts, setRecentPrompt, newChat } = useContext(Context); // ✅ FIXED

    const loadPrompt = async (prompt) => {
        setRecentPrompt(prompt);
        await onSent(prompt);
    };

    return (
        <div className='sidebar'>
            <div className='top'>
                <Menu className='menu' onClick={() => setExtended(prev => !prev)} />

                <div onClick={()=>newChat()} className="new-chat">
                    <Plus color="#222020" />
                    {extended && <p className='newchat'>New chat</p>}
                </div>

                {extended && (
                    <div className="recent">
                        <p className="recent-title">Recent</p>

                        {prevPrompts.map((item, index) => (
                            <div
                                key={index}  // ✅ FIXED
                                onClick={() => loadPrompt(item)}
                                className="recent-entry"
                            >
                                <p className='history'>{item.slice(0, 18)} ...</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <div className="bottom">
                <div className="bottom-item recent-entry">
                    <FileQuestionMark />
                    {extended && <p>Help</p>}
                </div>

                <div className="bottom-item recent-entry">
                    <History />
                    {extended && <p>Activity</p>}
                </div>

                <div className="bottom-item recent-entry">
                    <Settings className='settings' />
                    {extended && <p>Setting</p>}
                </div>
            </div>
        </div>
    );
};

<div className='hi'>
    dasldkfjsa;ldfkj
</div>

export default Sidebar;
