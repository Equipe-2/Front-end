import React, { useState } from "react";
import Head from "next/head";
import Navbar from "@/components/Navbar";
import styles from "@/styles/Home.module.css";
import Script from "next/script";
import Select, { ActionMeta } from "react-select";

interface Option {
  value: Franchisee;
  label: string;
}

interface Franchisee {
  id: number;
  name: string;
}

const franchisees: Franchisee[] = [
  { id: 1, name: "Franqueado 1" },
  { id: 2, name: "Franqueado 2" },
  { id: 3, name: "Franqueado 3" },
];

interface Product {
  id: number;
  name: string;
  client: string;
}

const products: Product[] = [
  { id: 1, name: "Módulo nota fiscal serviço", client: "" },
  { id: 2, name: "E-Commerce", client: "" },
  { id: 3, name: "Mini pos", client: "" },
  { id: 4, name: "WhatsApp Profissional", client: "" },
  { id: 5, name: "SalãoVip até 40 Profissionais", client: "" },
];

const Carteira: React.FC = () => {
  const [tier, setTier] = useState<number>(1);
  const [mrr, setMrr] = useState<number>(0);
  const [mdr, setMdr] = useState<number>(0);
  const [selectedFranchisee, setSelectedFranchisee] = useState<Franchisee | null>(null);

  const saasPercent = [
    0.16, 0.2, 0.25, 0.27, 0.29, 0.31, 0.33, 0.35, 0.38, 0.41,
  ];
  const mdrPercent = 0.15;
  const weightedAverage = mrr * saasPercent[tier] + mdr * mdrPercent;

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

  const handleFranchiseeChange = (
    selectedOption: Option | null,
    _actionMeta: ActionMeta<Option>
  ) => {
    setSelectedFranchisee(selectedOption?.value ?? null);
  };

  const franchiseeOptions = franchisees.map((franchisee) => ({
    value: franchisee,
    label: `${franchisee.name} (${franchisee.id})`,
  }));

  return (
    <>
      <Head>
        <title>Franqueados</title>
        <Navbar logo="../images/logo.svg" links={links} />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <h1>Franqueados</h1>
        </div>
        <div className={styles.gestorCartDrop}>
          <Select
            className={styles.clientSelect}
            placeholder="Selecione o franqueado"
            options={franchiseeOptions}
            onChange={handleFranchiseeChange}
            isSearchable
            isClearable
          />
        </div>
        {selectedFranchisee && (
          <>
            <div className={styles.productsTable}>
              {/* Tabela de produtos */}
              <table className={styles.productTable}>
                <thead>
                  <tr>
                    <th className={styles.cellsTable} align="left">
                      ID
                    </th>
                    <th className={styles.cellsTable} align="left">
                      Produto
                    </th>
                    <th className={styles.cellsTable} align="left">
                      Cliente
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product.id}>
                      <td className={styles.cellsTable}>{product.id}</td>
                      <td className={styles.cellsTable}>{product.name}</td>
                      <td className={styles.cellsTable}>{product.client}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className={styles.tier}>
              {/* Input TIER */}
              <p>TIER:</p>
              <input
                type="number"
                min="0"
                max="9"
                value={tier}
                onChange={handleTierChange}
              />
            </div>
            <div className={styles.metrics}>
              {/* Inputs MRR, MDR e Montante da Comissão */}
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
          </>
        )}
        <Script id="freshdesk-widget" strategy="lazyOnload">
          {`
            window.fwSettings={
              'widget_id':151000003330
            };
            !function(){if("function"!=typeof window.FreshworksWidget){var n=function(){n.q.push(arguments)};n.q=[],window.FreshworksWidget=n}}() 
          `}
        </Script>
        <Script
          src="https://widget.freshworks.com/widgets/151000003330.js"
          strategy="lazyOnload"
        />
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

