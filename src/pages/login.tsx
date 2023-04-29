import { useState } from 'react'
import { useRouter } from 'next/router'
import styles from '@/styles/Home.module.css'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    })

    if (response.ok) {
      const data = await response.json()
      localStorage.setItem('token', data.token)
      router.push('/')
    } else {
      setError('Invalid email or password')
    }
  }

  return (
    <div className={styles.box}>
    <form onSubmit={handleSubmit}>
      <fieldset>
      <legend className={styles.centeredlegend}><b>HYPERLOCAL</b></legend>
      <br></br>  
      <div className={styles.inputBox}>       
        <label className={styles.mylabel}>
        <>Email </>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
      </div>
      <br></br>
      <div className={styles.inputBox}>
        <label className={styles.mylabel}>
        <>Senha </>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      </div>
      {error && <p>{error}</p>}
      <br></br>
      <div className={styles.buttoncontainer}>
      <button type="submit" className={styles.mybutton}>Entrar</button>
      </div>
      </fieldset>  
    </form>
    </div>
  )
}