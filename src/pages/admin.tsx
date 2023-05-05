import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/Navbar';
import Chart from '@/components/Chart';
import Script from 'next/script';

const Admin: React.FC = () => {
  const logo = "images/logo.svg";
  const links = [
    { title: "Início", href: "/admin" },
    { title: "Franqueados", href: "../pages-gestor/franqueados" },
    { title: "Cadastros", href: "../pages-gestor/cadastros" },
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
        <Script id="freshdesk-widget" strategy="lazyOnload">
          {`
            window.fwSettings={
              'widget_id':151000003330
            };
            !function(){if("function"!=typeof window.FreshworksWidget){var n=function(){n.q.push(arguments)};n.q=[],window.FreshworksWidget=n}}() 
          `}
        </Script>
        <Script src="https://widget.freshworks.com/widgets/151000003330.js" strategy="lazyOnload" />  
      </main>  
    </>
  );
};

export default Admin;
