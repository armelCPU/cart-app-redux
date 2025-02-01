import Products from "./components/Products/Products"
import Cart from "./components/Cart/Cart"
import SearchBar from "./components/SearchBar/SearchBar"
import './App.css'

function App() {

  return (
    <div className="main-container">
      
      <h1>Achetez vos produits</h1>
      <SearchBar />
      <Products/>
      <Cart />
    </div>
  )
}

export default App
