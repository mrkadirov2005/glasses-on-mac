import React, { Component } from "react"
import pieButton from "../img/pie-button-special.png"

class Header extends Component {
  state = {
    headerLi: [{ li: "home" }, { li: "new" }, { li: "trend" }, { li: "sale" }],
    fl: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    ul: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      width: "25%",
      textTransform: "uppercase",
      listStyle: "none",
      fontWeight: "bold",
    },
    cartBx: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      width: "15%",
    },
    cart: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-around",
      width: "60%",
      backgroundColor: "black",
      color: "white",
      fontWeight: "bold",
      textTransform: "capitalize",
      padding: "5px 8px",
      borderRadius: "8px",
      borderTopRightRadius: "1px",
    },
    cartN: {
      backgroundColor: "grey",
      padding: "5px 10px ",
      borderRadius: "50%",
    },
  }

  render() {
    return (
      <div style={this.state.fl}>
        <h1>Glasses Store</h1>
        <ul style={this.state.ul}>
          {this.state.headerLi.map((item) => {
            return <li>{item.li}</li>
          })}
        </ul>

        <div style={this.state.cartBx}>
          <div className='cart' style={this.state.cart}>
            cart <span style={this.state.cartN}>2</span>
          </div>
          <img src={pieButton} alt='' />
        </div>
      </div>
    )
  }
}

export default Header
