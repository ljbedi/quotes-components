import Quote from './components/Quote';


function App() {
  return (
    <div className="App">
      <Quote by="Bill Gates" source="https://www.microsoft.com" quote="640kb of memory ought to be enough for anyone" />
      <Quote by="Steve Jobs" source="https://www.apple.com" quote="Don't let the noise of others' opinions drown out your own inner voice" />
    </div>
  );
}

export default App;