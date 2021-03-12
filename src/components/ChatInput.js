import React, {useState} from 'react'
import styled from 'styled-components';
import SendIcon from '@material-ui/icons/Send';
import ReactDOM from "react-dom";
import MDEditor from '@uiw/react-md-editor';

function ChatInput({ sendMessage }) {

    const [input, setInput] =  useState("");

    const send = (e) => {
        e.preventDefault();
        if(!input) return;
        sendMessage(input);
        setInput("");
        
    }

    return (
        <Container>
            <InputContainer>
            <form>
            
            {/* <MDEditor
                value={input}
                onChange={setInput}
            /> */}

            
                <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                type="text" 
                placeholder="Message here..."></input>
                <SendButton 
                    type = "submit"
                    onClick={send}>
                    <Send />
                </SendButton>
            </form>
            </InputContainer>
        </Container>
    )
}

export default ChatInput


const Container = styled.div`
    padding: 0px 20px 20px 20px;
    
`
const InputContainer = styled.div`
    width: 100%;
    margin-right: 20px;
    border: 1px solid #8D8D8E;
    border-radius: 4px;

    form{
        display: flex;
        height: 42px;
        align-items: center;
        padding-left:10px;

        .container{
            width: 100%;
        }

        input{
            flex: 1;
            width: 100%;
            margin-right: 40px;
            padding-left: 10px;
            border-radius: 5px;
            border: none;
            font-size: 13px;

            :focus{
                outline: 0;
            }
        }
        
    }
    
`
const SendButton = styled.button`
    background: #007a5a;
    border-radius: 2px;
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 5px;
    cursor: pointer;
    border: none;

    .MuiSvgIcon-root{
        width: 18px;
    }

    :hover{
        background: #148567;
    }
`
const Send = styled(SendIcon)`
    coloR: #D9D9D9;
`