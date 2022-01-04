import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Books from './pages/books'
import Guess from "./pages/guess";
import Quotes from "./pages/quotes";
import Random from "./pages/random";


function App() {
  const Header = () => (
    <nav className="container flex w-1/4 justify-between p-4">
      <p><Link to={"/"}>Home</Link></p>
      <p><Link to={"/random"}>Random</Link></p>
      <p><Link to={"/guess"}>Guess</Link></p>
    </nav>
  );

  const Main = () => (
    <div>
      <Routes>
        <Route exact path={"/"} element={<Books />}/>
        <Route path={"/quotes/:isbn"} element={<Quotes />}/>
        <Route path={"/random"} element={<Random />} />
        <Route path={"/guess"} element={<Guess />} />
      </Routes>
    </div>
  );

  return (
    <div className="container w-screen bg-white h-screen">
      <BrowserRouter>
        <Header />
        <Main />
      </BrowserRouter>
    </div>
  );
}

export default App;
