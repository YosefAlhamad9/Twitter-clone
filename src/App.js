import Widgets  from './Widgets';
import './App.css';
import Feed from './Feed';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <Feed/>
      <Widgets />
    </div>
  );
}

export default App;
