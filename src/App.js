import './App.css';
import Main from "./Components/Main";
import Navigation from "./Components/Navigation";

function App() {
    return (
        <div className="App">
            <section className="header">
                <div className="header__container __container">
                    <div className="header__body">header</div>
                </div>
            </section>
            <section className="page">
                <div className="page__container __container">
                    <div className="page__body">
                        <Navigation />
                        <Main />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default App;
