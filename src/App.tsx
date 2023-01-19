import Header from './components/Header';
import OldComponent2 from './components/OldComponent';
import Counter from './components/Counter';
import { List } from './components/List';
import './App.css'

function App() {

  return (
    <div className="App">
      <Header title={"Testing title"} />
      <OldComponent2>
        <p>Hello there!</p>
      </OldComponent2>
      <Counter />
      <List items={["one", "two", "three"]} render={(item: string) => <span className="gold">{item}</span>} />
    </div>
  )
}

export default App
