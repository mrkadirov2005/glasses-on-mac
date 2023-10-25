import React, { Component } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import love from "../img/love.svg"
import message from "../img/message.png"
import eye from "../img/eye.svg"
import $ from "jquery"
import Popper from "popper.js"

class Footer extends Component {
  state = {
    socials: ["Facebook", "Instagram", "Website"],
  }
  render() {
    return (
      <footer className='d-flex align-items-center justify-content-between w-100'>
        <ul className='d-flex align-items-center justify-content-around w-42'>
          {" "}
          {this.state.socials.map((item) => {
            return <li className='d-flex p-2 font-weight-bold'>{item}</li>
          })}
        </ul>

        <div className=' d-flex w-25'>
          <div className='d-flex w-50 align-items-center'>
            <img className='m-2' src={love} alt='' />
            <span className='font-weight-bold'>16k</span>
          </div>
          <div className='d-flex w-50 align-items-center'>
            <img className='m-2' src={message} alt='' />
            <span className='font-weight-bold'>75</span>
          </div>
          <div className='d-flex w-50 align-items-center'>
            <img className='m-2' src={eye} alt='' />
            <span className='font-weight-bold'>16.56</span>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
