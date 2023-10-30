import './App.css';
import { useState } from 'react';
import Tabs from './components/Tabs';
import Contents from './components/Contents';

function App() {
  const [tabs, setTabs] = useState([
    {
      content: "Savings her pleased are several started females met. Short her not among being any. Thing of judge fruit charm views do. Miles mr an forty along as he. She education get middleton day agreement performed preserved unwilling. Do however as pleased offence outward beloved by present. By outward neither he so covered amiable greater. Juvenile proposal betrayed he an informed weddings followed. Precaution day see imprudence sympathize principles. At full leaf give quit to in they up."
    },
    {
      content: "How promotion excellent curiosity yet attempted happiness. Gay prosperous impression had conviction. For every delay death ask style. Me mean able my by in they. Extremity now strangers contained breakfast him discourse additions. Sincerity collected contented led now perpetual extremely forfeited."
    },
    {
      content: "Breakfast procuring nay end happiness allowance assurance frankness. Met simplicity nor difficulty unreserved who. Entreaties mr conviction dissimilar me astonished estimating cultivated. On no applauded exquisite my additions. Pronounce add boy estimable nay suspected. You sudden nay elinor thirty esteem temper. Quiet leave shy you gay off asked large style."
    }
  ])

  const liftContent = (selectedContent) => {
    setContent(selectedContent)
  }

  const [content, setContent] = useState("Choose a Tab to review content")

  return (
    <div className="App">
      <fieldset>
        <legend>app.js</legend>
        <Tabs tabs={tabs} liftContent={liftContent}/>
        <Contents content={content}/>
      </fieldset>
    </div>
  );
}

export default App;
