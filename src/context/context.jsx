import { createContext, use, useState } from "react";
import runChat from "../config/gemini";

export const Context = createContext();

const ContextProvider = (props) => {

    const [input, setInput] = useState('');
    const [recentPrompt, setRecentPrompt] = useState('');
    const [prevPrompts, setPrevPrompts] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loading, setLoading] = useState();
    const [resultData, setResultData] = useState(); 

    const onSent = async (prompt) => {
        await runChat(input)
    }

    const contextValue  = {
        prevPrompts,
        setPrevPrompts,
        onSent,
        setRecentPrompt,
        recentPrompt,
        showResult,
        loading,
        resultData,
        setInput
    }

    return(
        <Context.Provider value={contextValue}>
            {props.children }
        </Context.Provider>
    )
}

export default ContextProvider