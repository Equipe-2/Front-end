import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/Navbar';

const Cadastro: React.FC = () => {
  const logo = "/logo.svg";
  const links = [
    { title: "Início", href: "/" },
    { title: "Carteira", href: "/carteira" },
    { title: "Cadastro", href: "/cadastro" },
    { title: "Suporte", href: "/suporte" },
  ];

  return (
    <>  
      <Head>
        <title>Cadastro</title>
        <Navbar logo="images/logo.svg" links={links} />
      </Head>   
      <main className={styles.main}>     
        <div className={styles.description}>              
          <h1>Cadastro</h1>
        </div>  
      </main>  
    </>
  );
};

export default Cadastro;
