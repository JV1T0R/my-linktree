import 'bootstrap/dist/css/bootstrap.min.css'
import '/src/styles/app.scss'
import Window from '/src/components/window.jsx'
import CardCustom from '/src/components/card-custom.jsx'

function App() {
  return (
    <>
      <main className='d-flex align-items-center justify-content-center min-vh-100'>
        <Window>
          <CardCustom/>
        </Window>
      </main>
    </>
  )
}

export default App