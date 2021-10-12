import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Header from "./components/headers/Header";
import Footer from "./components/footers/Footer";
import Products from './components/products/Products';
import Product from './components/products/Product';
import Home from './components/home/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
          <main className="py-3">
            <Container>
              {/* <Products /> */}
              <Route exact path="/" component={Home} />
              <Route exact path="/products" component={Products}/>
              <Route exact path="/product/:id" component={Product}/>

            </Container>  
          </main>  
        <Footer />  
      </Router>  
    </div>
  );
}

export default App;
