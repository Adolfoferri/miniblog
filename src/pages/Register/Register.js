import styles from './Register.module.css';

import { useState, useEffect } from 'react';
import { AuthErrorCodes } from 'firebase/auth';
import { useAutentication } from '../../hooks/useAutentication';

const Register = () => {
    const [displayName, setDisplayName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] =useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [error, setError] = useState("")

    const { createUser, error: authError, loading }= useAutentication()

    const handleSubmit = async (e) => {
        e.preventDefault()

        setError("")

        const user = {
            displayName,
            email,
            password
        }

        if(password !== confirmPassword) {
            setError("As senhas precisam ser iguais!")
            return
        }
            const res = await createUser(user)

        console.log(res)
    }
    useEffect (() =>{
        if(authError) {
            setError(authError)
        }

    },[authError])
    return (
        <div className={styles.register}>
            <h1>Cadastre-se </h1>
            <p>Crie seu usuário e compartilhe sua história.</p>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Nome:</span>
                    <input type="text"
                        name='displayName'
                        required
                        placeholder='Nome do Usuário'
                        value={displayName}
                        onChange={(e) =>setDisplayName(e.target.value)} />
                </label>
                <label>
                    <span>E-mail:</span>
                    <input type="email"
                        name='email'
                        required
                        placeholder='E-mail do Usuário' 
                        value={email}
                        onChange={(e) =>setEmail(e.target.value)}/>
                </label>
                <label>
                    <span>Senha:</span>
                    <input type="password"
                        name='password'
                        required
                        placeholder='Insira sua Senha'
                        value={password}
                        onChange={(e) =>setPassword(e.target.value)} />
                </label>
                <label>
                    <span>Confirmação de senha:</span>
                    <input type="password"
                        name='confirmPassword'
                        required
                        placeholder='Confirme sua Senha' 
                        value={confirmPassword}
                        onChange={(e) =>setConfirmPassword(e.target.value)}/>
                </label>

                {!loading && <button className='btn'>Cadastrar</button>}
                {loading && <button className='btn' disabled>Aguarde...</button>}
                {error && <p className='error'>{error}</p>}
            </form>
        </div>
    )
}

export default Register