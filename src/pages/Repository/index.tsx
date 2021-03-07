import React from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Link, useRouteMatch } from 'react-router-dom';

import logoImg from '../../assets/logo.svg';

import { Header, RepositoryInfo, Issues } from './styles';
interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Header>
        <img src={logoImg} alt="Github Explorer"/>

        <Link to="/dashaboard">
          <FiChevronLeft size={16}/>
          Voltar
        </Link>
      </Header>

      <RepositoryInfo>
        <header>
          <img 
            src="https://avatars.githubusercontent.com/u/3959396?s=460&u=58f315f83bb7a66d71430f377dee0c1fc990ff39&v=4" 
            alt=""
          />
          <div>
            <strong>Rocketseat/unform</strong>
            <p>Descrição do repositorio</p>
          </div>
        </header>
        
        <ul>
          <li>
            <strong>1890</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>48</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>67</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepositoryInfo>

      <Issues>
        <Link 
          to="asdsds"
        >
          <div>
            <strong>ajdjakdhasjdhskadjhskjd</strong>
            <p>dsasfjsdfhjkdshfkjdshkjdfh</p>
          </div>

          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  )
};

export default Repository;