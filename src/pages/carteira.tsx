import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/Navbar';

const Carteira: React.FC = () => {
  const logo = "/logo.svg";
  const links = [
    { title: "Home", href: "/" },
    { title: "Carteira", href: "/carteira" },
    { title: "Cadastro", href: "/cadastro" },
    { title: "Suporte", href: "/suporte" },
  ];

  return (
    <>  
      <Head>
        <title>Minha Carteira</title>
        <Navbar logo="images/logo.png" links={links} />
      </Head>   
      <main className={styles.main}>     
        <div className={styles.description}>              
          <h1>Minha carteira</h1>
        </div>  
      </main>  
    </>
  );
};

export default Carteira;
