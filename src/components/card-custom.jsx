import { useState } from 'react'
import { EnvelopeFill, Whatsapp, Linkedin, Github, FileEarmarkPersonFill, Link45deg } from 'react-bootstrap-icons'
import '/src/styles/component-styles/card.scss'
import CvModal from './cv-modal.jsx'

function CardCustom() {
    const [showModal, setShowModal] = useState(false)

    return (
        <>
            <div className='card-custom'>
                <div className='card-header pt-3'>
                    <h1 className='text-center'>
                        <span>J</span>oão <span>V</span>ítor
                    </h1>
                </div>
                <div className='card-body p-4 pt-0'>
                    <nav>
                        <div className='d-flex flex-column gap-3 mb-3'>
                            <a href='mailto:jvticontato@gmail.com' className='btn position-relative p-2 fs-5 fw-bold'>
                                <EnvelopeFill className='icon position-absolute'/>
                                Email
                            </a>

                            <a href='https://wa.me/557199830256?text=Ol%C3%A1%2C%20Jo%C3%A3o!' target='_blank'
                                rel='noopener noreferrer' className='btn position-relative p-2 fs-5 fw-bold'>
                                <Whatsapp className='icon position-absolute'/>
                                Whatsapp
                            </a>

                            <a href='https://www.linkedin.com/in/jo%C3%A3opamponet/' target='_blank'
                                rel='noopener noreferrer' className='btn position-relative p-2 fs-5 fw-bold'>
                                <Linkedin className='icon position-absolute'/>
                                Linkedin
                            </a>

                            <a href='https://github.com/JV1T0R' target='_blank' rel='noopener noreferrer'
                                className='btn position-relative p-2 fs-5 fw-bold'>
                                <Github className='icon position-absolute'/>
                                Github
                            </a>

                            <a href='https://joaopamponet.vercel.app/' target='_blank' rel='noopener noreferrer'
                                className='btn position-relative p-2 fs-5 fw-bold'>
                                <Link45deg className='icon position-absolute'/>
                                Portfólio
                            </a>

                            <button
                                type='button'
                                onClick={() => setShowModal(true)}
                                className='btn position-relative p-2 fs-5 fw-bold'
                            >
                                <FileEarmarkPersonFill className='icon position-absolute'/>
                                Currículo
                            </button>
                        </div>
                    </nav>
                </div>
            </div>

            {/* Curriculum Modal */}
            <CvModal show={showModal} onHide={() => setShowModal(false)}/>
        </>
    )
}

export default CardCustom