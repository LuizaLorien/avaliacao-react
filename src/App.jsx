import './App.css'
import Container from './Container/Container'
import Title from './Title/Title'


function App() {

  return (
    <>
    <Title>
    <h1>Learn to code by watching others</h1>
    <p>see how experienced developers solve problems in real time.
      watching scripted tutorals is great, but understanding how developers think is invaluable.</p>
    </Title>
    <Container>
      <span className='free-trial'>
        <h2>Try it free for 7 days then $20/mo. ThereAfter</h2>
      </span>
      <ul className='Form'>
        <li>
          <input type="text" className='first-name' placeholder='First Name'/>
        </li>
        <li>
          <input type="text" className='last-name' placeholder='Last Name'/>
        </li>
        <li>
          <input type="email" className='email' name='' id='' placeholder='Example@gmail.com' />
        </li>
        <li>
          <input type="password" name="" id="" placeholder='Password'/>
        </li>
        <input type="submit" value="CLAIM YOUR FREE TRIAL" className='button'/>
      </ul>
    </Container>
    </>
  )
}

export default App