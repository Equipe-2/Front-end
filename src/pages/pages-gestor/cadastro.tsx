import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import Navbar from '@/components/Navbar';
import Script from 'next/script';

const Cadastro: React.FC = () => {
  const logo = 'images/logo.svg';
  const links = [
    { title: 'Início', href: '/' },
    { title: 'Carteira', href: '../pages-franch/carteira' },
    { title: 'Cadastro', href: '../pages-franch/cadastro' },
  ];

  return (
    <>
      <Head>
        <title>Cadastro</title>
        <Navbar logo="../images/logo.svg" links={links} />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <h1>Cadastro</h1>
          <div className={styles.form}>
          <form>
            <div className={styles.campo}>
              <label htmlFor="nome">Nome </label>
              <input id="nome" type="text" defaultValue="José da Silva" disabled />
            </div>
            <div className={styles.campo}>
              <label htmlFor="email">Email </label>
              <input id="email" type="email" required />
            </div>
            <div className={styles.campo}>
              <label htmlFor="cnpj">CNPJ </label>
              <input id="cnpj" type="text" defaultValue="12.345.678/0001-00" disabled />
            </div>
            <div className={styles.campo}>
              <label htmlFor="telefone">Número de telefone </label>
              <input id="telefone" type="tel" required />
            </div>
            <div className={styles.campo}>
              <label htmlFor="endereco">Endereço </label>
              <input id="endereco" type="text" required />
            </div>
            <div className={styles.campo}>
              <label htmlFor="cidade">Cidade </label>
              <input id="cidade" type="text" required />
            </div>
            <div className={styles.buttoncontainerform}>
            <button type="submit" className={styles.buttonform}>Atualizar</button> 
            </div>
          </form>
          </div> 
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

export default Cadastro;
