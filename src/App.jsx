import './App.css'
import Footer from '../src/Footer'
import Input from './Input'

function App() {
  return (
    <>
      <header className='nav'><img className='logo-img' src='images/logo.svg' alt='logo'></img></header>
      <main className='grid-container'>
        <picture className='hero'>
          <source srcSet='images/hero-desktop.jpg' media="(min-width: 760px)" />
          <img className='hero-mobile' src='images/hero-mobile.jpg' alt='hero image'></img>
        </picture>

        <div className='container'>
          <h1><span className='color-h1'>WE'RE<br/></span>COMING <br/>SOON</h1>
          <p>Hello fellow shoppers! We're currently building our new fashion store. Add your email below to stay up-to-date with announcements and our launch deals.</p>

          <Input />
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App