
import Footer from './components/layout/Footer/Footer.jsx'
import Header from './components/layout/Header/Header.jsx'
import Main from './components/layout/Main/Main.jsx'
import style from './App.module.jsx'

function App() {
  
  return (
    <div className={style.top}>
      <Header/>
      <Main/>
      <Footer/>
    </div>
  )
}

export default App
