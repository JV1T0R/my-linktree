import { Modal } from 'react-bootstrap'
import { Download } from 'react-bootstrap-icons'
import '/src/styles/component-styles/cv-modal.scss'

function CvModal({ show, onHide }) {
    return (
        <Modal show={show} onHide={onHide} top>
            <Modal.Header closeButton>
                <Modal.Title>Aviso</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>
                    Obrigado pelo interesse! Por favor, note que meus dados pessoais são destinados exclusivamente a
                    oportunidades profissionais.
                </p>
                <a href="/src/assets/documents/cv-pt.pdf" 
                    target="_blank" rel="noopener noreferrer"
                    className='btn position-relative p-2 w-100'
                >
                    <Download className='icon position-absolute fw-bold'/>
                    Visualizar Currículo
                </a>
            </Modal.Body>
        </Modal>
    )
}

export default CvModal