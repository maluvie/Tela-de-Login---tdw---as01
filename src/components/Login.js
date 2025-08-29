//Tecnologias Para Desenvolvimento Web - AS01
//Aluna: Maria Luiza Gondim Vieira

import React, {Component} from "react";
import ("./Login.css");

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listaUsers: [
        {id: 1, email: "eduardo.lino@pucpr.br", senha: "123456"},
        {id: 2, email: "joana.banana@pucpr.br", senha: "654321"},
        {id: 3, email: "joao.babao@pucpr.br", senha: "123321"}
      ],
      usuario: "",
      senha: "",
      mensagem: ""
    }
    this.envioFormulario = this.envioFormulario.bind(this);
    this.setUsuario = this.setUsuario.bind(this);
    this.setSenha = this.setSenha.bind(this);
  };
  
  // #### Recupera os valores digitados nos inputs e atualiza os valores das variaveis usuario e senha: ####
  setUsuario(e) {
    this.setState({usuario: e.target.value})
  }

  setSenha(e) {
    this.setState({senha: e.target.value})
  }

  /* #### Ao acionar o envio do formulario (onSubmit), a função é disparada para percorrer o array com
   os Usuários cadastrados e verificar se os dados preenchidos coincidem: ####*/
  envioFormulario(e) {
    e.preventDefault(); //para evitar a perda dos dados digitados após o envio do formulário
    let usuarioEncontrado = null;
    this.state.listaUsers.map((i)  => { //utilizei a função map() para percorrer o array
      if(i.email === this.state.usuario && i.senha === this.state.senha) {
        usuarioEncontrado = true;
      }
      return null;
    });

    // #### Mostrar na tela a mensagem de acesso correspondente ao resultado: ####
    if(usuarioEncontrado === true) {
        this.setState({
          mensagem: "Acessado com sucesso!",
          usuario: "",
          senha: ""
        });
    } else {
        this.setState({
          mensagem: "Usuário ou senha incorretos!",
          usuario: "",
          senha: ""
        });
    }
  }

  render() {
    return (
      <div className="corpo">
        <div className="container">
          <h1 id="titulo">Login</h1>
          <form onSubmit={this.envioFormulario}>
            <div>
              <input type="email" placeholder="E-mail"
              value={this.state.usuario}
              onChange={(e) => this.setUsuario(e)}/>
            </div>
            <div>
              <input type="password" placeholder="Senha" 
              value={this.state.senha}
              onChange={(e) => this.setSenha(e)}/>
            </div>
            <button id="botao">Acessar</button>
            <div id="mensagem_acesso">{this.state.mensagem}</div>
          </form>
        </div>
      </div>
    );
  }  
}

export default Login;
