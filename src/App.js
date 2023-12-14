import './App.css';
import Blogs from './Components/Blogs/Blogs';
import Footer from './Components/Footer/Footer';
import Hero from './Components/Home/Hero';
import Info from './Components/Info/Info';
import List from './Components/List/List';
import Main from './Components/Main/Main';
import Navbar from './Components/Navbar/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Main />
      <Info />
      <List />
      <Blogs />
      <Footer />
    </div>
  );
}

export default App;
