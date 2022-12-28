import "./App.css";
import Form from "./components/Form";
import data from "./Data";
import Posts from "./components/Posts";

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <Form />
      <Posts entries={data} />
    </div>
  );
}

export default App;
