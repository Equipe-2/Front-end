import { useState } from 'react'
import { useRouter } from 'next/router'
import styles from '@/styles/Home.module.css'
import { api } from '@/services/api'
import { setCookie } from "nookies";

//axios.get(url[, config])
//axios.delete(url/id[, config])
// axios.post(url[, data[, config]])
// axios.put(url/id[, data[, config]]) // Atualiza de forma integral o recurso
//     email: "sxcoelho@yahoo.com.br",
//     password: "102030",
//     name: "Leonardo Costa",
//     role: "Admin"
// axios.patch(url/id[, data[, config]]) //Atualização parcial de um recurso
// "name": "Leonardo Costa"

type User = {
  email: string,
  name: string,
  role: string,
  franchisee: string,
}

const userInitialState = {
  email: "",
  name: "",
  role: "",
  franchisee: "",
}

export default function Login() {
  const [user, setUser] = useState<User>(userInitialState);
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    //http://localhost:3001/auth

    try {
      const response = await api.post("/auth", {
        email,
        password,
      });

      const { token, user } = response.data;

      setCookie(undefined, "sandro.token", token, {
        maxAge: 60 * 60 * 24 * 30,
        path: "/",
      });

      api.defaults.headers["Authorization"] = `Bearer ${token}`;

      //http://localhost:3001/user/user.id
      if (token) {
        api(`/user/${user.id}`).then((response) => {
          const { email, name, role, franchisee } =
            response.data;
          setUser({ email, name, role, franchisee });
        });
      }

      router.push("/");
      return true;
    } catch (err) {
      console.log(err);
      alert("Email ou senha incorretos.")
      return false;
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