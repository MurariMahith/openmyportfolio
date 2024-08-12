import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import UserPortfolio from './Components/UserPortfolio';
import Builder from './Components/Builder';
import Home from './Components/Home';
import EditBuilder from './Components/EditBuilder';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={< Home />} />
          <Route path="/builder" element={<Builder />} />
          <Route path="/builder/edit" element={<EditBuilder />} />
          <Route path="/builder/edit/:id" element={<EditBuilder />} />
          <Route path="/builder/demo" element={<Builder />} />
          <Route path="/:id" element={<UserPortfolio />} />
        </Routes>
      </Router>
    </>

    // <Router>
    //   <h1>Hello</h1>
    //   <Routes>
    //     <Route component={Home} />
    //     <Route path="/" component={Home} />
    //     <Route path="/builder" component={Builder} />
    //     <Route path="/:id" component={UserPortfolio} />
    //   </Routes>
    // </Router>
  );
}

export default App;
