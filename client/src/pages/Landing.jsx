import Wrapper from '../assets/wrappers/LandingPage'
import main from '../assets/images/main.svg'

import { Link } from 'react-router-dom'
import { Logo } from '../components'

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className='container page'>
        <div className='info'>
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            I'm baby fingerstache waistcoat jean shorts fixie disrupt narwhal
            mukbang. Kogi salvia pour-over af, small batch four dollar toast
            literally tofu austin. Actually church-key distillery put a bird on
            it, +1 cornhole mukbang scenester chicharrones helvetica schlitz
            shaman disrupt whatever lo-fi.
          </p>
          <Link to='/register' className='btn register-link'>
            Register
          </Link>
          <Link to='/login' className='btn'>
            Login / Demo User
          </Link>
        </div>
        <img src={main} alt='job hunt' className='img main-img' />
      </div>
    </Wrapper>
  )
}

export default Landing
