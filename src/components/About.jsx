import React, { useState, useRef, useEffect } from 'react';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import "../styles/About.css"

function About() {
    
    const [mostrarCertificados, setMostrarCertificados] = useState(false);
    const [parent] = useAutoAnimate();
    const [visible, setVisible] = useState(false);

    useEffect(() => {
    if (mostrarCertificados) {
      setVisible(true); // mostrar inmediatamente
    } else {
      const timeout = setTimeout(() => setVisible(false), 1000); // esperar antes de desmontar
      return () => clearTimeout(timeout); // limpiar si cambia antes de tiempo
    }
  }, [mostrarCertificados]);

    const toggleCertificados = () => {
    setMostrarCertificados(prev => !prev);
    };
    
  return (
    <div className='about'>
        <section className='about-header'>
            <h1>Javier Camaño Torres</h1>
            <h3>Egresado en Ingeniería Informática | Analista Programador Junior </h3>
        </section>  
        <div className='separador'></div>
        <div className='about-exp-title'>
            <h2>Experiencia</h2>
            <svg fill="#5ce1e6" width="64px" height="64px" viewBox="0 0 100 100" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" stroke="#5ce1e6" stroke-width="0.2"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title></title><path d="M80,58.27H77.59V27.46a2,2,0,0,0-2-2H24.41a2,2,0,0,0-2,2V58.27H20a2,2,0,0,0-2,2v2.66A11.63,11.63,0,0,0,29.61,74.54H70.39A11.63,11.63,0,0,0,82,62.93V60.27A2,2,0,0,0,80,58.27ZM73.59,29.46V58.27H26.41V29.46Zm-30,32.81H56.42V64H43.58ZM78,62.93a7.61,7.61,0,0,1-7.61,7.61H29.61A7.61,7.61,0,0,1,22,62.93v-.66H39.58V66a2,2,0,0,0,2,2H58.42a2,2,0,0,0,2-2V62.27H78Z"></path></g></svg>
        </div>   
        
        <section className='about-content'>        
            <div className='about-content-exp'>
                <div>
                    <h2></h2>
                    <h4>Practica Profesional (Analista TI) </h4>
                    <p><strong>ADIPA | 3 meses | 2024</strong></p>
                    <p className='text-description'>Practica que realicé en la modalidad en remoto, donde se me encargo múltiples tareas, desde programación de componentes, 
                    gestion de contenido en el sitio web, uso de Docker, Linux y máquinas virtuales.</p>
                    <ul>
                        <li>Laravel</li>
                        <li>Wordpress</li>
                        <li>Python</li>
                        <li>MySQL</li>
                        <li>Linux</li>
                        <li>Docker</li>
                        <li>Git</li>
                    </ul>
                </div>
            </div>
            <div className='about-content-exp'>
                <div>
                    <h4>Analista Programador Junior</h4>
                    <p><strong>ADIPA | Marzo - Actualidad | 2025</strong></p>
                    <p className='text-description'>Colaboro en el mantenimiento y mejora de la infraestructura backend, implementando soluciones que garanticen la eficiencia, seguridad y escalabilidad del sitio web, además de trabajar en la integración de APIs y bases de datos, ademas de implementar soluciones de automatización.</p>
                    <ul>
                        <li>Laravel</li>
                        <li>Wordpress</li>
                        <li>Python</li>
                        <li>MySQL</li>
                        <li>Linux</li>
                        <li>Docker</li>
                        <li>Git</li>
                    </ul>
                </div>
            </div>         
        </section>
        <div>
            
        </div>
        <section className='about-content-study'>
            <div className='study-header'>
                <h2>Estudios y formación</h2>
                <svg width="48px" height="48px" viewBox="0 -8.14 62.451 62.451" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Group_35" data-name="Group 35" transform="translate(-782.964 -1356.609)"> <path id="Path_92" data-name="Path 92" d="M798.022,1369.359v23.226h.034c.353,4.555,7.685,8.2,16.7,8.2s16.347-3.641,16.7-8.2h.033v-23.226Z" fill="#1d003e" stroke="#5ce1e6" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"></path> <path id="Path_93" data-name="Path 93" d="M843.415,1373.207l-29.225,14.6-29.227-14.6,29.227-14.6Z" fill="#1d003e" stroke="#5ce1e6" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"></path> <line id="Line_40" data-name="Line 40" y1="19.235" transform="translate(784.964 1374.361)" fill="#1d003e" stroke="#5ce1e6" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"></line> </g> </g></svg>
            </div>
            
            <div className='study-box'>
                <div className='study-box-content'>
                    <h4>IP Santo Tomas | Egresado en Ingenería Informática</h4>
                    <p>Durante mi formación desarrollé competencias técnicas y analíticas en el área de las tecnologías de la información, enfocándome en la programación, el diseño de sistemas, la administración de redes y la seguridad informática, entre otros ámbitos clave del rubro. </p>
                    <ul>
                        <li>Programación Avanzada</li>
                        <li>Diseño de Software y Base de Datos</li>
                        <li>Redes y Enrutamiento</li>
                        <li>Gestión de Proyectos Informáticos</li>
                        <li>Seguridad Informática</li>
                        <li>Administración de Sistemas</li>
                    </ul>
                </div>
                <div className='study-box-content'>
                    <h4>Estudio Autodidacta</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, vitae? Consectetur dolor nulla facilis odio, neque voluptatum </p>
                    <ul>
                        <li>Python</li>
                        <li>Servidores Linux</li>
                        <li>C# (Unity)</li>
                        <li>Desarrollo Web</li>
                        <li>Git</li>
                    </ul>
                </div>
            </div>           
        </section>
        <section className='about-content-cert'>
            <div className='study-header'>
                <h2>Certificados y cursos</h2>
                <svg fill="#5ce1e6" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="48px" height="48px" viewBox="0 0 866 866" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M25,653.3h565.9v-89.6C579.1,548.1,571.2,529.4,568.6,509H127.3c-8,0-14.5-6.5-14.5-14.5s6.5-14.5,14.5-14.5h441.3 c7.2-56.6,55.601-100.5,114.101-100.5c63.399,0,115,51.6,115,115c0,26-8.601,49.9-23.2,69.2v89.6H841c13.8,0,25-11.2,25-25v-493 c0-13.8-11.2-25-25-25H25c-13.8,0-25,11.2-25,25v493C0,642.1,11.2,653.3,25,653.3z M283.3,188.8h299.4c8.3,0,15,6.7,15,15 c0,8.3-6.7,15-15,15H283.3c-8.3,0-15-6.7-15-15C268.3,195.5,275,188.8,283.3,188.8z M127.3,285.2h611.4c8,0,14.5,6.5,14.5,14.5 s-6.5,14.5-14.5,14.5H127.3c-8,0-14.5-6.5-14.5-14.5S119.3,285.2,127.3,285.2z"></path> <path d="M616.4,588.4V653.3v87.4c0,9.1,7.399,15,15.1,15c3.9,0,7.8-1.5,10.9-4.8l29.3-31.601c3-3.2,7-4.8,11-4.8s8,1.6,11,4.8 L723,750.9c3.1,3.3,7,4.8,10.9,4.8c7.699,0,15.1-5.9,15.1-15v-87.4V588.4c-18.7,13.3-41.6,21.1-66.3,21.1S635.2,601.7,616.4,588.4 z"></path> <path d="M762.6,522.8c3.301-9.2,5.101-19,5.101-28.3c0-46.9-38.101-85-85-85c-46.9,0-85,38.1-85,85c0,13,3.899,29,10.6,41.1 c2.5,4.5,5.4,8.801,8.7,12.7c15.6,19,39.3,31.101,65.7,31.101c26.399,0,50.1-12.101,65.7-31.101 C754.4,541,759.3,532.2,762.6,522.8z"></path> </g> </g> </g></svg>
            </div>
            <div>
                <a onClick={toggleCertificados}><strong>
            
                {mostrarCertificados ? 
                <div style={{display: 'flex', alignItems: 'center', flexDirection: 'row', gap: '5px'}}>
                    <p>Ocultar información</p>
                    <svg width="20px" height="20px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16 6V5L11 0L6 5V6H10V12H1L1 14H12V6H16Z" fill="#ccacff"></path> </g></svg>
                </div>
                : 
                <div style={{display: 'flex', alignItems: 'center', flexDirection: 'row', gap: '5px'}}>
                    <p>Ver información</p>
                    <svg width="20px" height="20px" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M16 10V11L11 16L6 11V10L10 10V4L1 4L1 2L12 2V10H16Z" fill="#ccacff"></path> </g></svg>
                </div>
                }
                </strong>
                
                </a>
            </div>
            <div ref={parent}>
             {visible && (
            <div className={`cert-content ${mostrarCertificados ? 'show' : ''}`}>
                <div className='cert-box'>
                    <div className='cert-box-header'>
                        <h4>Curso de Introducción a la Terminal y Línea de Comandos</h4>
                        <p><strong>Platzi 2025</strong></p>
                    </div>
                    <div className='cert-box-content'>
                        <p className='text-description'>Curso que me permitió adquirir conocimientos fundamentales en Python, incluyendo sintaxis, estructuras de datos y programación orientada a objetos.</p>
                        <div className='separador2'></div>
                        <a href="https://platzi.com/p/javier8576/curso/2292-course/diploma/detalle/" target="_blank" rel="noopener noreferrer" ><strong>Ver Certificado</strong></a>
                    </div>
                </div>
                <div className='cert-box'>
                    <div className='cert-box-header'>
                        <h4>Linux Unhatched</h4>
                        <p><strong>Cisco 2025</strong></p>
                    </div>
                    <div className='cert-box-content'>
                        <p className='text-description'>Curso que me permitió adquirir conocimientos fundamentales en Python, incluyendo sintaxis, estructuras de datos y programación orientada a objetos.</p>
                        <div className='separador2'></div>
                        <a href="https://www.credly.com/badges/61586441-cd24-4499-bae4-99b01e8eb433/linked_in_profile" target="_blank" rel="noopener noreferrer" ><strong>Ver Badge</strong></a>
                    </div>
                </div>
                <div className='cert-box'>
                    <div className='cert-box-header'>
                        <h4>Networking Basics</h4>
                        <p><strong>Cisco 2024</strong></p>
                    </div>
                    <div className='cert-box-content'>
                        <p className='text-description'>Curso que me permitió adquirir conocimientos fundamentales en Python, incluyendo sintaxis, estructuras de datos y programación orientada a objetos.</p>
                        <div className='separador2'></div>
                        <a href="https://www.credly.com/badges/4516c47d-755c-462a-8a23-33a4a61c6004/linked_in_profile" target="_blank" rel="noopener noreferrer" ><strong>Ver Badge</strong></a>
                    </div>
                </div>
                <div className='cert-box'>
                    <div className='cert-box-header'>
                        <h4>Introduction to Cybersecurity</h4>
                        <p><strong>Cisco 2023</strong></p>
                    </div>
                    <div className='cert-box-content'>
                        <p className='text-description'>Curso que me permitió adquirir conocimientos fundamentales en Python, incluyendo sintaxis, estructuras de datos y programación orientada a objetos.</p>
                        <div className='separador2'></div>
                        <a href="https://www.credly.com/badges/727e0364-1bdb-4602-a7bf-58388d7cc009/linked_in_profile" target="_blank" rel="noopener noreferrer" ><strong>Ver Badge</strong></a>
                    </div>
                </div>
            </div>
             )}
             </div>
        </section>
        <section className='about-content-skills'>
        </section>
        <section className='about-content-download'>
            <button className='download-button'>Descargar Curriculum</button>
        </section>
        
    </div>
  )
}

export default About