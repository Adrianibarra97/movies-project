import { Header } from './components/Header/Header';
import { Navigation } from './components/Navigation/Navigation';
import { Footer } from './components/Footer/Footer';
import { Home } from './components/Home/Home';
// import { Blog } from './components/Blog/Blog';
// import { Contact } from './components/Contact/Contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './css/App.css';

function App() {
    return (
        <BrowserRouter>
            <div className="layout">
                <Header/>
                <Navigation/>
                <div className="main-container">
                    <Routes>
                        <Route exact path='/' element={<Home/>} />
                        <Route exact path='/blog' element={<Home/>} />
                        <Route exact path='/contact' element={<Home/>} />
                    </Routes>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;