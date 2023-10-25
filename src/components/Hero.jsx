import React, { Component } from "react"
import heroimg from "../img/macbook-pro-14-1.png"
import firstImg from "../img/14-1-right.png"
import shopping from "../img/shopping.png"
import left from "../img/left1.png"
import last from "../img/last-14.png"

class Hero extends Component {
  state = {
    headerLi: [{ li: "home" }, { li: "new" }, { li: "trend" }, { li: "sale" }],

    imgShadow: {
      display: "flex",
      boxShadow: "white 0px 2px 0px 19px",
      borderRadius: "4px",
    },
  }
  right = [
    { headerTitle: "HIGHEST QUALITY GLASSES" },
    {
      subtitle:
        "Give your eyes the stylish oritection they deserve at affordable price.",
    },
    { premium: "Premium Shades🔥" },
    {
      fvFirst: `${firstImg}`,
    },

    // { fvSecond: `${secondimg}` },
    // { thirdImg: `${thirdImg}` },
    // { shopping: `${shopping}` },
  ]
  pick = [
    { item: "pick glasses" },
    {
      item: "pink",
    },
    { item: "$98..." },
  ]

  render() {
    return (
      <div className='d-flex flex-row justify-content-space-around'>
        <img src={heroimg} />
        <div className='d-flex justify-content-center w-50 text-uppercase font-weight-bold flex-column'>
          <h1 className='w-50'>
            {this.right.map((item) => {
              return <h1> {item.headerTitle}</h1>
            })}
          </h1>
          <span
            className='mt-5 color-grey  text-capitalize text-secondary'
            style={this.state.span}>
            {this.right.map((item) => {
              return <span>{item.subtitle}</span>
            })}
          </span>

          {this.right.map((x) => {
            return (
              <h2 className='text-danger' style={{ textTransform: "none" }}>
                {x.premium}
              </h2>
            )
          })}

          <div className='d-flex align-items-center justify-content-around w-100'>
            <div
              className='d-flex w-45 align-items-center justify-content-between bg-white rounded-top font-weight-600 p-10 p-2'
              style={this.state.centralDiv}>
              <img src={firstImg} alt='' />
              <ul className='d-flex flex-column p-0 text-capitalize '>
                {this.pick.map((elem) => {
                  return <li className='ml-2 d-flex'>{elem.item}</li>
                })}
              </ul>
              <img src={shopping} className='imgcart' alt='' />
            </div>
            <img style={this.state.imgShadow} src={left} alt='' />
            <img style={this.state.imgShadow} src={last} alt='' />
          </div>
        </div>
      </div>
    )
  }
}

export default Hero
