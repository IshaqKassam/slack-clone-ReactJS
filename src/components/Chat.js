import React from 'react';
import styled from 'styled-components';
import SendIcon from '@material-ui/icons/Send';

function Chat() {
    return (
        <Container>
            <ChatDisplay>
                Chat will be seen here
            </ChatDisplay>
            <SendTextSection>
                <input></input>
                <div>
                    <SendIcon/>
                </div>
            </SendTextSection>
        </Container>
        
           
    )
}

export default Chat

const Container = styled.div`
    display: grid;
    grid-template-rows: 90% auto;
`
const ChatDisplay = styled.div`
    padding-left: 20px;
    padding-top: 20px;
`
const SendTextSection = styled.div`
    background: blue;
    display: flex;
    align-items: center;
    justify-content: center;

    input{
        min-width: 80%;
        border-radius: 5px;
        color: black;
        border: none;
        height: 30px;
        padding-left: 12px;
        margin-right: 12px;

        :focus{
            outline:none;
        }
    }

    div{
        cursor: pointer;
    }
`
