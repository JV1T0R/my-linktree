import { DashLg, Square, XLg } from 'react-bootstrap-icons'
import '/src/styles/component-styles/window.scss'

function Window({ children }) {
  return (
    <>
        <div className='window my-3'>
            <div className='window-header d-flex justify-content-between align-items-end rounded-top-3'>
                <div className='window-title ms-3 px-4 py-0 py-sm-1 rounded-top-3'>
                    <p className='m-0 p-0'>My Links</p>
                </div>
                <div className='window-btns d-flex justify-content-center align-items-center'>
                    <button className='btn-window-custom p-1 px-2 p-sm-2 px-sm-3'>
                        <DashLg className='icon'/>
                    </button>
                    <button className='btn-window-custom p-1 px-2 p-sm-2 px-sm-3'>
                        <Square className='icon'/>
                    </button>
                    <button className='btn-close-custom p-1 px-2 p-sm-2 px-sm-3'>
                        <XLg className='icon'/>
                    </button>
                </div>
            </div>

            <div className='window-body rounded-bottom-3'>
                {children}
            </div>
        </div>
    </>
  )
}

export default Window