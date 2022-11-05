import './App.css';

const App = () => {
    const name = 'Deniz';
    const isNameShowing = true;

    return (
        <div className="App">
          <h1>Hello, {isNameShowing ? name : 'Wonderful Person'}</h1>
        </div>
    );
}

export default App;
