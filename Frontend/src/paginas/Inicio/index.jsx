import React from 'react';
import ilustracaoBanner from 'assets/ilustracao-banner.svg';
import estilos from './Inicio.module.css';
import presente from 'assets/presente.svg';
import saque from 'assets/saque.svg';
import estrela from 'assets/estrela.svg';
import dispositivo from 'assets/dispositivo.svg';

export default function Inicio() {
  return (
    <>
      <div className={estilos.container} data-test="divContainer">
        <div className={estilos.conteudo} data-test="divConteudo">
          <div className={estilos.banner} data-test="divBanner">
            <h1 data-test="titulo-principal">
              Experimente mais liberdade no controle da sua vida financeira.
              Crie sua conta com a gente!
            </h1>
            <img
              src={ilustracaoBanner}
              alt="Gráficos e uma pessoa com dinheiro na mão"
              data-test="imagem5"/>
          </div>
          <div className={estilos.vantagens} data-test="Vantagens">
            <h2 data-test="vantagensBanco">Vantagens do nosso banco:</h2>
            <div className={estilos.vantagens__itens} data-test="divVantagensItens01">
              <div className={estilos.vantagens__item} data-test="divVantagensItens02">
                <img src={presente} alt="ícone de um presente" data-test="imagem1"/>
                <h3 data-test="ContaCartao">Conta e cartão gratuitos</h3>
                <p data-test="ContaDigital">
                  Isso mesmo, nossa conta é digital, sem custo fixo e mais que
                  isso: sem tarifa de manutenção.
                </p>
              </div>
              <div className={estilos.vantagens__item} data-test="divVantagensItens03">
                <img src={saque} alt="ícone de uma mão segurando um dinheiro" data-test="imagem2"/>
                <h3 data-test="saques">Saques sem custo</h3>
                <p data-test="acesso24h">
                  Você pode sacar gratuitamente 4x por mês de qualquer Banco
                  24h.
                </p>
              </div>
              <div className={estilos.vantagens__item} data-test="divVantagensItens04" >
                <img src={estrela} alt="ícone de uma estrela" data-test="imagem3" />
                <h3 data-test="pontos">Programa de pontos</h3>
                <p data-test="acumuloPontos">
                  Você pode acumular pontos com suas compras no crédito sem
                  pagar mensalidade!
                </p>
              </div>
              <div className={estilos.vantagens__item} data-test="divVantagensItens05">
                <img
                  src={dispositivo}
                  alt="ícone de um dispositivo como notebook"
                  data-test="imagem4"/>
                <h3 data-test="segurosDispositivos">Seguro Dispositivos</h3>
                <p data-test="DispoMoveis">
                  Seus dispositivos móveis (computador e laptop) protegidos por
                  uma mensalidade simbólica.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
