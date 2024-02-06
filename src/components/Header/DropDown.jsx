import React from 'react'
import DropDownItem from './DropDownItem'

function DropDown({ title }) {
    return (
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle headerItem" href="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                {title}
            </a>

            <ul className="dropdown-menu headerDD" aria-labelledby="navbarDropdownMenuLink">
                <div className='ddItem bold'>Usuário</div>
                <hr/>
                <DropDownItem to='edit/profile' text='Editar Profile' />
                <DropDownItem to='contatos' text='Contatos' />
                <br/>
                <div className='ddItem bold'>Administrador</div>
                <hr/>
                <DropDownItem to='users' text='Usuários' />
                <DropDownItem to='professionals' text='Profissionais' />
                <DropDownItem to='tree' text='Árvores' />
                <DropDownItem to='risksituation' text='Situação de Risco' />
            </ul>
        </li>
    )
}

export default DropDown