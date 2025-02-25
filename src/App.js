import './styles/App/App.css';
import Header from './components/Header.jsx';
import AppRouter from './components/Router.jsx';
import Footer from './components/Footer/footer.jsx';


function App() {
  return (
    <>
    <div className="App">
    <Header/>
        <AppRouter/> {/* Ya maneja el Router, no es necesario otro */}
    </div>
    
    <Footer/>
    </>
  );
}

export default App;