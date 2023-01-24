import Header from './components/Header';
import OldComponent2 from './components/OldComponent';
// import Counter from './components/Counter';
// import { List } from './components/List';
// import Arrays from './components/Arrays';
// import Interface from './components/Interface';
import FunctionComponent from './components/ReactTypscript/FunctionComponent';
import StateHook from './components/ReactTypscript/Hooks/StateHook';
import EffectHook from './components/ReactTypscript/Hooks/EffectHook';
import RefHook from './components/ReactTypscript/Hooks/RefHook';
import './App.css'

function App() {

  return (
    <div className="App">
      <Header title={"Testing title"} />
      <OldComponent2>
        <p>Hello there!</p>
      </OldComponent2>
      {/* <Counter />
      <List items={["one", "two", "three"]} render={(item: string) => <span className="gold">{item}</span>} />
      <Arrays />
      <Interface /> */}
      <FunctionComponent message={"Here is an example of the message"} />
      <StateHook />
      <EffectHook />
      <RefHook />
    </div>
  )
}

export default App
