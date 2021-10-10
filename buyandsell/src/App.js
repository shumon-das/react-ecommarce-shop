import { Container } from 'react-bootstrap'
import Header from "./components/headers/Header";
import Footer from "./components/footers/Footer";
import Products from './components/products/Products';

function App() {
  return (
    <div className="App">
      <Header />
        <main className="py-3">
          <Container>
            <Products />

          </Container>  
        </main>  
      <Footer />  
    </div>
  );
}

export default App;
