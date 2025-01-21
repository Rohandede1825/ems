import React, { useState } from 'react'

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
        const email = e.target[0].value
        const password = e.target[1].value
        console.log(email, password)


        setEmail('')
        setPassword('')
    }

    return (
        <div className='flex items-center justify-center h-screen w-screen '>
            <div className='border-2 border-emerald-600 my-auto p-20 mt-40 rounded-xl '>
                <h1 className='text-4xl font-bold text-center'>Login</h1>
                <form onSubmit={(e) => {
                    handleSubmit(e)
                }} className='flex flex-col items-center justify-center gap-1'>
                    <input
                        value={email}
                        onChange={(e) => {
                           setEmail(e.target.value)
                        }
                        }
                        required className=' border-2 border-emerald-600 rounded-full text-xl py-3 px-4 my-4 outline bg-transparent  outline-none' type="email" placeholder='Enter the email' />

                    <input
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                     required className=' border-2 border-emerald-600 rounded-full text-xl py-3 px-4 my-4 outline bg-transparent outline-none' type="password" placeholder='Enter the passwoord' />
                    <button className='bg-emerald-700 font-bold  p-2  rounded-lg text-white shadow-xl text-xl py-3 px-4 my-4'>Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login