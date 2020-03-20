import React from 'react';
import ChatBot from 'react-simple-chatbot';

const steps = [
  {
    id: '0',
    message: 'Países da America do sul',
    trigger: '2'
  },
  {
    id: '2',
    options: [
      {value: 1, label: 'Brazil', trigger: '3'},
      {value: 2, label: 'Bolivia', trigger: '4'},
      {value: 3, label: 'Paraguai', trigger: '5'},
      {value: 4, label: 'Uruguai', trigger: '6'},
      {value: 5, label: 'Argentina', trigger: '7'},
      {value: 6, label: 'Chile', trigger: '8'},
      {value: 9, label: 'Peru', trigger: '9'},
      {value: 10, label: 'Equador', trigger: '10'},
      {value: 11, label: 'Colômbia', trigger: '11'},
      {value: 12, label: 'Venezuela', trigger: '12'},
    ]
  },
  {
    id: '3',
    message: 'Presidente Jair Bolsonaro',
    trigger: '0'
  },
  {
    id: '4',
    message: 'Juan Evo Morales Ayma',
    trigger: '0'
  },
  {
    id: '5',
    message: 'Mario Abdo Benítez',
    trigger: '0'
  },
  {
    id: '6',
    message: 'Luis Alberto Lacalle Pou',
    trigger: '0'
  },
  {
    id: '7',
    message: 'Alberto Fernández',
    trigger: '0'
  },
  {
    id: '8',
    message: 'Sebastián Piñera',
    trigger: '0'
  },
  {
    id: '9',
    message: 'Martín Vizcarra',
    trigger: '0'
  },
  {
    id: '10',
    message: 'Lenín Moreno',
    trigger: '0'
  },
  {
    id: '11',
    message: 'Iván Duque Márquez',
    trigger: '0'
  },
  {
    id: '12',
    message: 'Nicolás Maduro Moros',
    trigger: '0'
  }
  
]

class Bot extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      titulo: 'Qual o nome do presidente ?'
    }
  }

  render() {
    return(
        <ChatBot 
            headerTitle={this.state.titulo} 
            steps={steps}
            style={{width: '100%', height: '100%'}}
            placeholder={'Não precisa digitar nada :)'}
        />
    ); 
  }
}

export default Bot;
