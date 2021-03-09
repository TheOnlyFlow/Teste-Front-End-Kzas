import React, {Component} from 'react'
import Main from '../template/Main'

const headerProps ={
    icon:'icons',
    title:'Usuários',
    subtitle:'Lista de Usuários  (Incluir, Listar, Alterar e Excluir)'
}

export default class UserCrud extends Component {
    render(){
        return (
            <Main {...headerProps}>
                Cadastro de Usuário
            </Main>
        )
    }
}