import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { Content } from './components/Content';
import { Aside } from './components/Aside';
import { Footer } from './components/Footer';
import './css/App.css';

function App() {
    return (
        <div className="layout">
            <Header/>
            <Navigation/>
            <Content/>
            <Aside/>
            <Footer/>
        </div>
    );
}

export default App;