import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App() {
    return (
        <section className='App'>
            <TwitterFollowCard userName="car1os1" >
                Carlos Ernesto
            </TwitterFollowCard>
            <TwitterFollowCard  userName="midudev" name="miguel">
                miguel dev
            </TwitterFollowCard>
            <TwitterFollowCard userName="pablo" name="pablo12" />

        </section>
    )
}