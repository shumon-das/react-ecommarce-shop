import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Header from "./components/headers/Header";
import Footer from "./components/Footer/Footer";
import Products from './components/products/Products';
import Product from './components/products/Product';
import Home from './components/home/Home';
import Users from './components/DataTable/Users';
import DATATable from './components/DataTable/DataTable';
import TeamPage from './components/AboutUs/Team';

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
              <Route exact path="/table" component={Users}/>
              <Route exact path="/datatable" component={DATATable}/>
              <Route exact path="/aboutus" component={TeamPage}/>
            </Container>  
          </main>  
        <Footer />  
      </Router>  
    </div>
  );
}

export default App;
