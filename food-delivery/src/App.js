
import './App.css';
import { Header } from './components';
import {Routes,Route} from "react-router-dom"
import MainContainer from './components/MainContainer';
import CreateContainer from './components/CreateContainer';
import {AnimatePresence} from "framer-motion"


function App() {
  return (
    
    <AnimatePresence exitBeforeEnter>
    <div className="w-screen h-auto flex flex-col bg-primary">
    <Header/>
    <main className="mt-14 px-4 md:px-16 py-4  md:mt-20 w-full">
      <Routes>
        <Route path="/*" element={<MainContainer/>}/>
        <Route path="/createItem" element={<CreateContainer/>}/>
      </Routes>
    </main>
    </div>
    </AnimatePresence>
    
  );
}

export default App;
