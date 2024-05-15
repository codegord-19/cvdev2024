import "../styles/content.css"
import CVP from '../img/pcv.png'
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import HomeIcon from '@mui/icons-material/Home';
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';
import DownloadIcon from '@mui/icons-material/Download';
import 'animate.css';


function Content({ iniRef, skillsRef, eduRef, sobreRef }) {
    return(
        <div className="contenido">
            <section ref={iniRef} className="s1">
                <div className="descini"><img src={CVP} alt=""></img><p>Soy un desarrollador web proactivo, creativo y apasionado, con enfoque en soluciones web innovadoras, mejora de la experiencia del usuario y eficiencia operativa. Destaco por mi puntualidad, habilidades de comunicación y trabajo en equipo, y busco crecer profesionalmente en el desarrollo web.</p></div>
                <div className="download"><a href={`${process.env.PUBLIC_URL}/cvdev2024.pdf`} download="CVSebastianrueda">Descargar CV <DownloadIcon className='dcv' /></a></div>
                <div className="info">
                    <h3>Contacto:</h3>
                    <p><HomeIcon className='location' /> Bucaramanga</p>
                    <p><CallIcon className='Phone' /> 3168593766</p>
                    <p><MailIcon className='Mail' />Codegord-19@outlook.com</p>
                </div>
                <div className="cardini">
                        <div className='cd'>
                            <h2 className='animate__animated animate__fadeInDown animate__delay-1s'>Creatividad</h2>
                            <TaskAltIcon className='eficienticon' />    
                        </div>
                        <div className='cd'>
                            <h2 className='animate__animated animate__fadeInDown animate__delay-2s'>Análisis</h2>
                            <TaskAltIcon className='eficienticon' />    
                        </div>
                        <div className='cd'>
                            <h2 className='animate__animated animate__fadeInDown animate__delay-3s'>Eficiencia</h2>
                            <TaskAltIcon className='eficienticon' />
                        </div>
                        <div className='cd'>
                            <h2 className='animate__animated animate__fadeInDown animate__delay-4s'>Profesionalismo</h2>
                            <TaskAltIcon className='eficienticon' />
                        </div>
                        <div className='cd'>
                            <h2 className='animate__animated animate__fadeInDown animate__delay-5s'>Adaptabilidad</h2>
                            <TaskAltIcon className='eficienticon' />    
                        </div>
                </div>
            </section>
            <section  ref={skillsRef} className="s2">
                <h2>Habilidades Técnicas Solidas:</h2>
                <p>Con una sólida formación técnica y experiencia práctica en desarrollo web, poseo habilidades avanzadas en una amplia gama de tecnologías y herramientas esenciales para la creación de aplicaciones web modernas y eficientes:</p>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>javaScript</li>
                    <li>TypeScript</li>
                    <li>Next.js</li>
                    <li>React.js</li>
                    <li>JSX</li>
                    <li>TSX</li>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>MongoDB</li>
                    <li>Figma</li>
                    <li>Angular</li>
                    <li>Git</li>
                    <li>GitHub</li>
                </ul>
            </section>
            <section ref={eduRef} className="s3">
                <h2>Formación Académica:</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Grado</th>
                            <th>Institución</th>
                            <th>Periodo</th>
                            <th>Detalles</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Ingeniero Industrial</td>
                            <td>Universidad Santo Tomás Bucaramanga</td>
                            <td>Enero 2009 - Diciembre de 2013</td>
                            <td>
                                <ul>
                                    <li>Tesis en Optimización de procesos.</li>
                                    <li>Habilidades para la Programación.</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>Especialista en Gestión Ambiental</td>
                            <td>Corporación Escuela Tecnológica del Oriente</td>
                            <td>Enero 2014 - Noviembre de 2015</td>
                            <td>
                                <ul>
                                    <li>Habilidades para implementar la norma ISO 14001.</li>
                                    <li>Alta capacidad para la formulación de proyectos.</li>
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>Magister en TIC para la Educación</td>
                            <td>Universidad de Investigación y Desarrollo - UDI</td>
                            <td>Junio de 2021 - Octubre de 2023</td>
                            <td>
                                <ul>
                                    <li>Desarrollo de estrategias didácticas apoyadas en entornos virtuales de aprendizaje.</li>
                                    <li>Alto interés por la profundización y la investigación científica.</li>
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </section>
            <section  ref={sobreRef} className="s4">
                <div className="gestorcdg">
                    <h2>Gestor Académico CDG</h2>
                    <p>El gestor Académico CDG es una aplicación web que permite a los docentes optimizar su labor.</p>
                    <ul>
                        <li>Asignación de notas por materia <TaskAltIcon className='eficienticon' /> </li>
                        <li>Gestor de tareas multifuncional <TaskAltIcon className='eficienticon' /> </li>
                        <li>Tabla de listado de estudiantes <TaskAltIcon className='eficienticon' /> </li>
                    </ul>
                </div>
                <iframe
                    title="Introductory React Video"  // Descripción que puedes cambiar según el contenido del video
                    width="320" 
                    height="180"
                    src="https://www.youtube.com/embed/L3h0aRLPbtI"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </section>

        </div>
    );
}

export default Content;