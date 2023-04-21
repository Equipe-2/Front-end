import React, { useState } from "react";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import styles from "@/styles/Home.module.css";

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
  const [mrr, setMrr] = useState<number>();
  const [mdr, setMdr] = useState<number>();
  const [saas, setSaas] = useState<number>();
  const [payments, setPayments] = useState<number>();

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

  const handleSaasChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    setSaas(value);
  };

  const handlePaymentsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    setPayments(value);
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
          <input type="number" min="1" max="5" value={tier} onChange={handleTierChange} />
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
          <p className={styles.regracomissao}>Regra de Comissão:</p>
          <div className={styles.metric}>
            <p>%SaaS:</p>
            <input type="number" value={saas} onChange={handleSaasChange} />
          </div>
          <div className={styles.metric}>
            <p>%Payments:</p>
            <input type="number" value={payments} onChange={handlePaymentsChange} />
          </div>
          <p className={styles.montantecomissao}>Montante da Comissão:</p>
          </div>
        </main>
    </>
  );
};

  const links = [
  { title: "Início", href: "/" },
  { title: "Carteira", href: "../pages-franch/carteira" },
  { title: "Cadastro", href: "../pages-franch/cadastro" },
  { title: "Suporte", href: "../pages-franch/suporte" },
  ];

export default Carteira;
