import React from 'react'
import Card from './components/Card'
import Navbar from './components/Navbar'
import data from './data'
import './style.css'

function App() {
    const cards = data.map(item => {
        return (
            <Card 
                key = {item.id}
                item = {item}
            />
        )
    })

    return (
        <div className='container'>
            <Navbar />-
            <section className='column'>
                {cards}
            </section>

        </div>
    )
}

export default App
