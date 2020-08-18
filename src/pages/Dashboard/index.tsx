import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/github-logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>
      <Form action="">
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/61334165?s=460&u=87260c43696d59f83eaa12e52c37fb548cf97c0c&v=4"
            alt="Emerson Duarte"
          />
          <div>
            <strong>conceitos-nodeJS</strong>
            <p>Desafio sobre conceitos de NodeJS do Bootcamp</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/61334165?s=460&u=87260c43696d59f83eaa12e52c37fb548cf97c0c&v=4"
            alt="Emerson Duarte"
          />
          <div>
            <strong>conceitos-nodeJS</strong>
            <p>Desafio sobre conceitos de NodeJS do Bootcamp</p>
          </div>

          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/61334165?s=460&u=87260c43696d59f83eaa12e52c37fb548cf97c0c&v=4"
            alt="Emerson Duarte"
          />
          <div>
            <strong>conceitos-nodeJS</strong>
            <p>Desafio sobre conceitos de NodeJS do Bootcamp</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
