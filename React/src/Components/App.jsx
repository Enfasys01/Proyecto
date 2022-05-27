class App extends React.Component{
  constructor(){
    super();
    this.datos=[{
      usuario:'mati',
      titulo:'Resumen de trigonometría',
      votos:6785,
      materia:'Matemática',
      etiquetas:['Geometría','Ángulos']
    },
    {
      usuario:'uri',
      titulo:'Resumen de trigonometría',
      votos:52,
      materia:'Matemática',
      etiquetas:['Geometría','Ángulos']
    }];
  }
  render(){
    return(
      <ListaPosts datos={this.datos}/>
    );
  }
}
ReactDOM.render(<App/>,document.getElementById('root'));