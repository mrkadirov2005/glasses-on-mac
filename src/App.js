import React from "react"
import logo from "./logo.svg"
import "./App.css"
import Header from "./components/header"
import Hero from "./components/Hero"
import Footer from "./components/footer"

function App() {
  return (
    <div style={{ backgroundColor: " rgb(210, 208, 208)", padding: "20px" }}>
      <Header />
      <Hero />
      <Footer />
    </div>
  )
}

export default App
