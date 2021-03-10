import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import ChatInput from './ChatInput';
import ChatMessage from './ChatMessage';
import db from '../firebase';
import { useParams } from 'react-router-dom';
import Login  from './Login';

function Chat() {

    let { channelId } = useParams();
    const [ channel, setChannel ] = useState();

    const getChannel = () => {
        db.collection('rooms')
        .doc(channelId)
        .onSnapshot((snapshot) => {
            setChannel(snapshot.data());
        })
    }

    useEffect(() =>{
        getChannel();
    }, [channelId])

    return (
        <Container>
            <Header>
                <Channel>
                    <ChannelName>
                        # { channel.name }
                    </ChannelName>
                    <ChannelInfo>
                        Channels announcements
                    </ChannelInfo>
                </Channel>
                <ChannelDetails>
                    <div>
                        Details
                    </div>
                    <InfoOutlinedIcon/>
                </ChannelDetails>
            </Header>
            <MessageContainer>
                <ChatMessage>

                </ChatMessage>
            </MessageContainer>
            <ChatInput/>
        </Container>
        
    )
}

export default Chat

const Container = styled.div`
    display: grid;
    grid-template-rows: 64px auto min-content;
`
const Header = styled.div`
    padding-left: 20px;
    padding-right: 20px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid rgba(83, 39, 83, .13);
    justify-content: space-between;

`
const Channel = styled.div`

`
const ChannelName = styled.div`
    font-weight: 700;
`
const ChannelInfo = styled.div`
    font-weight: 400;
    color: #606060;
    font-size: 13px;
    margin-top: 8px;
    
`
const ChannelDetails = styled.div`
    display: flex;
    align-items: center;
    color: #606060;

    div{
        margin-right: 10px;
    }
`
const MessageContainer = styled.div`
    padding-left: 20px;
    padding-top: 20px;
`
