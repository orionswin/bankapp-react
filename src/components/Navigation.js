import logo from '../logo.svg';
import '../App.css';

function Navigation() {
    return (
        <header className="App-header">
            <nav>
                <a href="">
                    <img src={logo} className="App-logo" alt="logo" />
                    Palmer Trust &amp; Fiduciary
                </a>
            </nav>
        </header>
    );
}

export default Navigation;
