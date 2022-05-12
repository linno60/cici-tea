import './signIn.scss'
import { useNavigate } from 'react-router-dom'

function SignIn() {
    const navigate = useNavigate()

    return (
        <div className='signIn'>
            <div className='signInContent'>
                <h1 className='title'>Hello! Welcome Back!</h1>

                <form className='signInForm'>
                    <label htmlFor='Email'>Email</label>
                    <input type='text' id='email' placeholder='Email' />
                    <label htmlFor='password'>Password</label>
                    <input
                        type='password'
                        id='password'
                        placeholder='Password'
                    />
                    <button className='signInBtn'>Sign In</button>
                </form>

                <div>
                    <p>
                        Not a member yet?
                        <span
                            className='createAccountLink'
                            onClick={() => navigate('/signUp')}
                        >
                            &nbsp;Join now!
                        </span>
                    </p>
                </div>
            </div>
        </div>
    )
}
export default SignIn
