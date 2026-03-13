import { Header } from './layout/header/Header';
import { AboutMe } from './layout/sections/about-me/AboutMe';
import { Hero } from './layout/sections/hero/Hero';
import { Projects } from './layout/sections/projectsS/Projects';
function App() {
    return (
        <div className="App">
            <Header />
            <Hero/>
            <AboutMe/>
            <Projects />
        </div>
    );
}

export default App;
