import './App.css';
import Header from './Components/Pages/Header';
import Banner from './Components/Pages/Banner';
import Get from './Components/Pages/Get';
import Installation from './Components/Pages/Installation';
import Guides from './Components/Pages/Guides';
import Customize from './Components/Pages/Customize';
import Build from './Components/Pages/Build';
import Footer from './Components/Pages/Footer';

function App() {
  return (
    <div>
       <Header />
       <Banner />
       <Get/>
       <Installation />
       <Guides />
       <Customize />
       <Build />
       <Footer />
    </div>
  );
}

export default App;
