import React, { useState } from "react";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import styles from "@/styles/Home.module.css";
import Script from 'next/script';

interface Product {
  id: number;
  name: string;
}

const products: Product[] = [
  { id: 1, name: "Módulo nota fiscal serviço" },
  { id: 2, name: "E-Commerce" },
  { id: 3, name: "Mini pos" },
];

const Carteira: React.FC = () => {
  const [tier, setTier] = useState<number>(1);
  const [mrr, setMrr] = useState<number>(0);
  const [mdr, setMdr] = useState<number>(0);
  
  const saasPercent = [0.16, 0.20, 0.25, 0.27, 0.29, 0.31, 0.33, 0.35, 0.38, 0.41];
  const mdrPercent = 0.15;
  const weightedAverage = (mrr * saasPercent[tier] + mdr * mdrPercent);

  const handleTierChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    setTier(value);
  };

  const handleMrrChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    setMrr(value);
  };

  const handleMdrChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    setMdr(value);
  };

  return (
    <>
      <Head>
        <title>Minha Carteira</title>
        <Navbar logo="../images/logo.svg" links={links} />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <h1>Minha carteira</h1>
        </div>
        <div className={styles.productsTable}>
          <table className={styles.productTable}>
            <thead>
              <tr>
                <th className={styles.cellsTable} align="left">ID</th>
            <th className={styles.cellsTable}align="left">Produto</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td className={styles.cellsTable}>{product.id}</td>
              <td className={styles.cellsTable}>{product.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <div className={styles.tier}>
      <p>TIER:</p>
      <input type="number" min="0" max="9" value={tier} onChange={handleTierChange} />
    </div>
    <div className={styles.metrics}>
      <div className={styles.metric}>
        <p>MRR:</p>
        <input type="number" value={mrr} onChange={handleMrrChange} />
      </div>
      <div className={styles.metric}>
        <p>MDR:</p>
        <input type="number" value={mdr} onChange={handleMdrChange} />
      </div>
      <p className={styles.montantecomissao}>Montante da Comissão:</p>
      <input type="number" value={weightedAverage}></input>
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

const links = [
{ title: "Início", href: "/" },
{ title: "Carteira", href: "../pages-franch/carteira" },
{ title: "Cadastro", href: "../pages-franch/cadastro" },
];

export default Carteira;