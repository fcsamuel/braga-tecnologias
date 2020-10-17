import React, {Component} from 'react';
import Api from './Api';

class App extends Component{

  state = {
    inst: [],  
  }

  async componentDidMount() {
    const next = await Api.get('produto/NextId');
    var id = next.data;
    const produto = {
      "cdProduto": id,
      "dsProduto": "Teste Produto "+id,
      "cdMarca": 1,
      "dsObs": "Obs Produto "+id,
      "cdMarcaNavigation": null
    };

    const respPost = await Api.post('produto', produto);
    const response = await Api.get('produto');
    console.log(response);
    this.setState({inst: response.data});
    console.log(response.data);
  }

  render(){
    const { inst } = this.state;

    return (
      <div>
        <h1>Produtos Cadastrados na API</h1>

        {inst.map(is => (
          <li>
            {is.cdProduto}
            <p>
              {is.dsProduto}
            </p>

          </li>  
          
        ))}

      </div>
    )
  };
    
};


export default App;
