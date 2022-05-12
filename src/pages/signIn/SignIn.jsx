import { useState } from 'react'
import './signIn.scss'
import { useNavigate } from 'react-router-dom'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { toast } from 'react-toastify'

function SignIn() {
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const { email, password } = formData

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value,
        }))
    }

    const onSubmit = async (e) => {
        e.preventDefault()

        try {
            const auth = getAuth()

            const userCredential = await signInWithEmailAndPassword(
                auth,
                email,
                password
            )

            if (userCredential.user) {
                navigate('/')
            }
        } catch (error) {
            toast.error('Please check your Email and password')
        }
    }

    return (
        <div className='signIn'>
            <div className='signInContent'>
                <h1 className='title'>Hello! Welcome Back!</h1>

                <form onSubmit={onSubmit}>
                    <label htmlFor='Email'>Email</label>
                    <input
                        type='text'
                        id='email'
                        placeholder='Email'
                        value={email}
                        onChange={onChange}
                    />
                    <label htmlFor='password'>Password</label>
                    <input
                        type='password'
                        id='password'
                        placeholder='Password'
                        value={password}
                        onChange={onChange}
                    />
                    <button className='signInBtn'>Sign In</button>
                </form>

                <div>
                    <p>
                        Not a member yet?
                        <span
                            className='createAccountLink'
                            onClick={() => navigate('/sign-up')}
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
