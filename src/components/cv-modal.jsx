import { Modal } from 'react-bootstrap'
import { Download, ExclamationTriangleFill } from 'react-bootstrap-icons'
import cvPdf from '/src/assets/documents/cv-pt.pdf'
import '/src/styles/component-styles/cv-modal.scss'

function CvModal({ show, onHide }) {
    return (
        <Modal show={show} onHide={onHide} top>
            <Modal.Header closeButton>
                <Modal.Title className='d-flex align-items-center gap-2'>
                    <ExclamationTriangleFill/>
                    Aviso
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>
                    Obrigado pelo interesse! Por favor, note que o uso dos meus dados pessoais são destinados exclusivamente a
                    oportunidades profissionais.
                </p>
                <a href={cvPdf}
                    target='_blank' rel='noopener noreferrer'
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