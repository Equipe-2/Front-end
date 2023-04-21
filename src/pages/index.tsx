import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/Navbar';
import Chart from '@/components/Chart';

const Index: React.FC = () => {
  const logo = "images/logo.svg";
  const links = [
    { title: "Início", href: "/" },
    { title: "Carteira", href: "pages-franch/carteira" },
    { title: "Cadastro", href: "pages-franch/cadastro" },
    { title: "Suporte", href: "pages-franch/suporte" },
  ];

  return (
    <>  
      <Head>
        <title>Início</title>
        <Navbar logo={logo} links={links} />
      </Head>   
      <main className={styles.main}>     
        <div className={styles.description}>              
          <h1>Dashboard</h1>         
        </div>
        <div className={styles.graph}>
          <Chart/>
        </div>  
      </main>  
    </>
  );
};

export default Index;
