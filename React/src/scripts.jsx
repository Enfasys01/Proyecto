/*class App extends React.Component{
    constructor(){
        super();
        this.nombres = ['Ivan' , 'Uri', 'Mati'];
    }
    render(){
        return(<Usuarios lista={this.nombres}/>);
    }
}
class Opcion extends React.Component{
    render(){
        return (<li>{this.props.nombre}</li>);
    }
}
class Usuarios extends React.Component{
    render(){
        return(
            <ul>
                {this.props.lista.map(element => {
                     return(<Opcion nombre={element}/>)
                })}
            </ul>
        );
    }
}
ReactDOM.render(<App />, document.getElementById('Lista'));

class Title extends React.Component {
render() {
return <h1>Hello world!</h1>
}
}
ReactDOM.render(<Title />, document.getElementById('root'))

class Soplon extends React.Component{
    render(){
        return(
            <input type="text" class="border-black border-2 rounded-lg" onChange={this.handleChange}/>
        );
    }
    handleChange(a){
        console.log(a.target.value);
    }
}
ReactDOM.render(<Soplon />, document.getElementById('soplon'));*/