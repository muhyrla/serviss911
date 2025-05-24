import "./App.css";
import HowWeWork from "./components/HowWeWork";
import Services from "./components/Services";
import StartBlock from "./components/StartBlock";
import WorkExperience from "./components/WorkExperience";
import WorkExperienceCard from "./components/WorkExperienceCard";
import FAQ from "./components/FAQ";
import Reviews from "./components/Reviews";

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
    <Services/>
    <HowWeWork/>
    <WorkExperience/>
    <FAQ/>
    <Reviews/>
    </div>
  );
}

export default App;
