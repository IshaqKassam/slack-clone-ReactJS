import React from 'react'
import styled from 'styled-components';
import SendIcon from '@material-ui/icons/Send';

function ChatInput() {
    return (
        <Container>
            <InputContainer>
            <form>
                <input type="text" placeholder="Message here..."></input>
                <SendButton>
                    <Send/>
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
const SendButton = styled.div`
    background: #007a5a;
    border-radius: 2px;
    width: 32px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 5px;
    cursor: pointer;

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