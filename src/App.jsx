import "./App.css";
import HowWeWork from "./components/HowWeWork";
import StartBlock from "./components/StartBlock";
import WorkExperience from "./components/WorkExperience";
import FAQ from "./components/FAQ";
import Reviews from "./components/Reviews";
import Services from "./components/Services";
import AboutUs from "./components/AboutUs";
import Contacts from "./components/Contacs";

 const mechanismsData = [
    {
      title: "CISA (Италия)",
      description: "Высоконадежные замки с защитой от взлома и перепикирования"
    },
    {
      title: "KALE (Турция)",
      description: "Доступные и качественные системы для металлических дверей"
    },
    {
      title: "MOTTURA (Италия)",
      description: "Премиальные замки с многоуровневой защитой"
    },
    {
      title: "ABLOY (Финляндия)",
      description: "Инновационные дисковые механизмы высокой секретности"
    }
  ];

function App() {
  return (
    <div className="app">
      <StartBlock/>
    {/* <Services/> */}
    <HowWeWork/>
    <AboutUs/>
    <WorkExperience/>
    <FAQ/>
    <Reviews/>
    <Contacts/>

    </div>
  );
}

export default App;
