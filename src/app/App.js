import './App.css';

import Header from '../components/Nagivation/Header/Header';
import TopicPicker from '../components/TopicPicker/TopicPicker';
import TopicDisplay from '../components/TopicDisplay/TopicDisplay';


function App() {
  return (
    <div>
      <Header />
      <div className="MainDisplay">
        <TopicDisplay/>
        <TopicPicker/>
      </div>
      
    </div>
  );
}

export default App;
