import React from 'react'
import {routeNode} from "react-router5";
import NotFound from "./NotFound";

function Hack({route}) {
    const topRouteName = route.name.split('.')[0]
    if (topRouteName === "model") {
        return (
            <div>
                Hack
            </div>
        )
    }
    return (
        <NotFound/>
    )
}

export default routeNode('')(Hack);
