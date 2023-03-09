import React from "react"
import { Link } from "react-router-dom"

export default function Home() {
    return (
        <div className="home-container">
            <h1>You got the travel plans, we got the Chilling Wine.</h1>
            <p>Add adventure to your life by joining the #Teaser movement. Rent the perfect van to make your perfect road trip while chilling with Teaser.</p>
            <Link to="product">Find your Teaser</Link>
        </div>
    )
};