import React from 'react'
import Nav from './Nav'
import Main from './Main'
import Hack from "./Hack"

export default function App({emails}) {
    return (
        <section>
            <div className="mail-client">
                <aside>
                    <Nav/>
                </aside>

                <main>
                    <Main emails={emails}/>
                </main>
            </div>
            <main>
                <Hack emails={emails}/>
            </main>
        </section>
    )
}
