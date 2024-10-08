import React from 'react';
import { FaHome, FaSignInAlt, FaUser, FaWindowClose } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import history from '../../services/history';

import * as actions from '../../store/modules/auth/actions'
import { Nav } from './styled';


export default function Header() {

    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    const dispatch = useDispatch()

    function handleClick(e) {
        e.preventDefault();
        dispatch(actions.loginFailure())
        history.push('/')
    }

    return (
        <Nav>
            {
                isLoggedIn &&
                <div className='home-search'>
                    <Link to="/home">
                        <FaHome size={18} />
                    </Link>

                    <Link to="/produtos">
                        Produtos
                    </Link>

                    <Link onClick={() => { history.push('/produto') }} to="/produto">
                        Cadastrar
                    </Link>
                </div>
            }
            <div className='user-close'>

                {
                    !isLoggedIn ?
                        <Link to="/register">
                            <FaUser size={18} />
                        </Link>
                        :
                        <></>
                }

                {
                    isLoggedIn ?
                        <div className='logado'>
                            <FaUser color='#66BB6A' size={18} />
                            <FaWindowClose onClick={handleClick} className='logout' size={24} />
                        </div>

                        :
                        <Link to="/">
                            <FaSignInAlt size={22} />
                        </Link>
                }

            </div>


        </Nav>

    )
}