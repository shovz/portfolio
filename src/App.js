import './App.css';
import Header  from './Components/Header';
import Intro from './Components/Intro';
import Services from './Components/Services';
import AboutMe from './Components/AboutMe';
import MyWork from './Components/MyWork';
import MyHobbies from './Components/MyHobbies';
import Footer from './Components/Footer';

function App() {
  return (
    <div >
      <Header/>
      <Intro/>
      <Services/>
      <AboutMe/>
      <MyWork/>
      <MyHobbies/>
      <Footer/>
    </div>
  );
};

export default App;
