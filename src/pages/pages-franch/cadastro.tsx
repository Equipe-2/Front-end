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
              <input id="nome" className={styles["input-bg"]} type="text" defaultValue="José da Silva" disabled />
            </div>
            <div className={styles.campo}>
              <label htmlFor="email">Email </label>
              <input id="email" className={styles["input-bg"]} type="email" defaultValue="jose_silva@email.com" required />
            </div>
            <div className={styles.campo}>
              <label htmlFor="cnpj">CNPJ </label>
              <input id="cnpj" className={styles["input-bg"]} type="text" defaultValue="12.345.678/0001-00" disabled />
            </div>
            <div className={styles.campo}>
              <label htmlFor="telefone">Número de telefone </label>
              <input id="telefone" className={styles["input-bg"]} type="tel" defaultValue="(11) 99999-9999" required />
            </div>
            <div className={styles.campo}>
              <label htmlFor="endereco">Endereço </label>
              <input id="endereco" className={styles["input-bg"]} type="text" defaultValue="Av. Rudá, 3000" required />
            </div>
            <div className={styles.campo}>
              <label htmlFor="cidade">Cidade </label>
              <input id="cidade" className={styles["input-bg"]} type="text" defaultValue="São Paulo" required />
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

