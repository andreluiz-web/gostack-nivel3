/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import { Link } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { Header, RepositoryInfo, Issues } from './styles';
import logoImg from '../../assets/logo.svg';

const Repository: React.FC = () => {
    return (
        <>
            <Header>
                <img src={logoImg} alt="GitHub Explorer" />
                <Link to="/">
                    <FiChevronLeft />
                    Voltar
                </Link>
            </Header>
            <RepositoryInfo>
                <header>
                    <img
                        src="https://avatars1.githubusercontent.com/u/1326112?s=460&u=05f95ca7fdead36edd9c86be46b4ef6c3c71f876&v=4"
                        alt="rocketseat"
                    />
                    <div>
                        <strong>rocketseat/unform</strong>
                        <p>descricao do repositorio</p>
                    </div>
                </header>
                <ul>
                    <li>
                        <strong>1808</strong>
                        <span>Stars</span>
                    </li>
                    <li>
                        <strong>48</strong>
                        <span>Forks</span>
                    </li>
                    <li>
                        <strong>1808</strong>
                        <span>Issues abertas</span>
                    </li>
                </ul>
            </RepositoryInfo>
            <Issues>
                <Link to="dsdsdds">
                    <div>
                        <strong>dsdsd</strong>
                        <p>sdsds</p>
                    </div>
                    <FiChevronRight size={20} />
                </Link>
            </Issues>
        </>
    );
};

export default Repository;
