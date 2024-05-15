import "../styles/nav.css"
import TerminalIcon from '@mui/icons-material/Terminal';
import PersonIcon from '@mui/icons-material/Person';
import BuildIcon from '@mui/icons-material/Build';
import SchoolIcon from '@mui/icons-material/School';
import TaskIcon from '@mui/icons-material/Task';

function Nav({ iniRef, skillsRef, eduRef, sobreRef }){

    const scrollToSection = (ref) => {
        const yOffset = -200; // Altura de tu Nav, cambiar según sea necesario
    const y = ref.current.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({ top: y, behavior: 'smooth' });
    }
    return(
        <header className="cont1">
            <nav>
                <div className="title"><h2>Sebastián Rueda</h2><TerminalIcon className='Terminal'/></div>
                <ul>
                    <button onClick={() => scrollToSection(iniRef)}>Acerca de mi <PersonIcon className='acercade'/></button>
                    <button onClick={() => scrollToSection(skillsRef)}>Skilss <BuildIcon className='skillicon'/></button>
                    <button onClick={() => scrollToSection(eduRef)}>Educación <SchoolIcon className='education'/></button>
                    <button onClick={() => scrollToSection(sobreRef)}>Proyectos <TaskIcon className='projects'/></button>
                </ul>
            </nav>
        </header>
    )
}


export default Nav;