import './signUp.scss'

function SignUp() {
    return (
        <div className='signUp'>
            <div className='signUpContent'>
                <h1 className='title'>Sign Up</h1>

                <form className='signUpForm'>
                    <label htmlFor='Email'>Email</label>
                    <input type='text' id='email' placeholder='Email' />
                    <label htmlFor='password'>Password</label>
                    <input
                        type='password'
                        id='password'
                        placeholder='Password'
                    />
                    <button className='signUpBtn'>Sign Up</button>
                </form>
            </div>
        </div>
    )
}
export default SignUp
