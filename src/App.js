import { Component } from 'react';
import './App.css';
import bags from './data/bags';
import Sound from 'react-sound';
import sza from './audioclips/sza.mp3';


class App extends Component {
  constructor() {
    super()
    this.state = {
      telfars: bags,
      cart: [],

      subtotal: 0,
      tax: 0,
      total: 0,
    }
  }


  handleTelfar = (event, name, price) => {
    event.preventDefault();
    this.setState ({
      cart: [...this.state.cart, {"name": name, "price": price}],
    })
  }




  render() {

    let allTelfars = this.state.telfars.map(telfar => {
      let { name, price, img } = telfar;
      return (
        <div className="products" >
                    <form>
                        <img src={img} alt={name} />
                        <br />
                        <br />
                        <h3 >{name}</h3>
                        <div>Price: {price}</div>
                        <br />
                        <button type="submit" onClick={(event)=>this.handleTelfar(event, name, price)}>Telfar Me</button>
                        <br />
                        <br />
                    </form>
                </div>
      )
    })

    let selectedTelfar = this.state.cart.map((car, i) => {
      return <li key={car.name+i}>
        
       <span>Product</span>: {car.name} <br></br>
       <span>Price</span>: ${car.price}</li>
    })


    return (
      <div className="App">
       <p>This is a Telfar Wish List App</p>
       <div>{ allTelfars }</div>
       <div className='cart'>
       <h2>Wishlist:</h2>
       <ul className='cart-items'> {selectedTelfar} </ul>
       </div>
      </div>
    );

  }
}

export default App;
