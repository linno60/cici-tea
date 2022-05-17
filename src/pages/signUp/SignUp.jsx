import './signUp.scss'
import { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../firebase.config'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function SignUp() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    })

    const { name, email, password } = formData

    const navigate = useNavigate()

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.id]: e.target.value,
        }))
    }

    const onSubmit = async (e) => {
        e.preventDefault()

        try {
            const userCredential = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            )

            navigate('/')
        } catch (error) {
            toast.error('Sign up failed')
            console.log(error)
        }
    }

    return (
        <div className='signUp'>
            <div className='signUpContent'>
                <h1 className='title'>Sign Up</h1>

                <form onSubmit={onSubmit}>
                    <label htmlFor='Name'>Name</label>
                    <input
                        type='text'
                        id='name'
                        value={name}
                        placeholder='Name'
                        onChange={onChange}
                    />
                    <label htmlFor='Email'>Email</label>
                    <input
                        type='text'
                        id='email'
                        value={email}
                        placeholder='Email'
                        onChange={onChange}
                    />
                    <label htmlFor='password'>Password</label>
                    <input
                        type='password'
                        id='password'
                        value={password}
                        placeholder='Password'
                        onChange={onChange}
                    />
                    <button className='signUpBtn'>Sign Up</button>
                </form>
            </div>
        </div>
    )
}
export default SignUp
