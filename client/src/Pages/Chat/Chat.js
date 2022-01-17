import React from 'react';
import { ChannelList } from './ChannelList';
import "./chat.scss";


const state = {
    channels: [{id: 1, name: 'first', participants: 10}]
}

export default function Chat() {


    return (
        <div className="chat-app">
            <ChannelList channels={state.channels}/>
        </div>


    )
        ;
}

