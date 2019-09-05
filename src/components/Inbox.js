import React from 'react'
import InboxList from './InboxList'
import Message from './Message'
import {routeNode} from 'react-router5'

function Inbox(props) {
    const {route, emails} = props

    return (
        <div className="inbox">
            <InboxList emails={emails}/>
            {route.name === 'inbox.message' ? (
                <Message {...emails[route.params.id]} key={route.params.id}/>
            ) : null}
            {props.default ? "Default" : "Not default"}
        </div>
    )
}

export default routeNode('inbox')(Inbox)
