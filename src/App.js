import React from "react"
import Navbar from "./components/navbar"
import Hero from './components/Hero'
import Card from './components/Card'
import data from './data'
const App = () => {
    const dataElements = data.map((card) => {
        return <Card key={card.id} card={card} />
    })
    return (
        <div>
            <Navbar />
            <Hero />
            <section className="card">{dataElements}</section>
        </div>
    )
}

export default App