class ListaPosts extends React.Component{
  render(){
    return(
      <div class='lista-posts'>
        {this.props.datos.map(e=>{
          return(<Post datos={e}/>);
        })}
      </div>
    );
  }
}
class Post extends React.Component{
  render(){
    return(
      <div class='flex flex-row'>
        <div class="grid grid-cols-1  bg-white m-2 mr-0 p-2 rounded-full basis-1/6 h-26 votos  text-violet-400">
          <div class='flex justify-center my-1 '>
            <svg width="20" height="18" viewBox="0 0 20 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M7.40192 1.5C8.55662 -0.5 11.4434 -0.5 12.5981 1.5L19.5263 13.5C20.681 15.5 19.2376 18 16.9282 18H3.07179C0.762393 18 -0.68098 15.5 0.473721 13.5L7.40192 1.5Z"/>  
            </svg>
          </div>
          <div class='text-center -my-1 text-black'>{this.props.datos.votos}</div>
          <div class='flex justify-center'>
            <svg width="20" height="18" viewBox="0 0 20 18" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.5981 16.5C11.4434 18.5 8.55662 18.5 7.40192 16.5L0.47372 4.5C-0.680979 2.5 0.762398 -2.0315e-06 3.0718 -1.8296e-06L16.9282 -6.18236e-07C19.2376 -4.16342e-07 20.681 2.5 19.5263 4.5L12.5981 16.5Z"/>
            </svg>    
          </div>
        </div>
        <div class='bg-white m-2 p-3 rounded-xl basis-5/6'>
          <ul>
            <li>
              <div>
                {this.props.datos.usuario}
              </div>
            </li>
            <li>
              <div class='font-bold py-1 text-lg'>
                {this.props.datos.titulo}
              </div>
            </li>
            <li class='flex font-normal text-white space-x-1 text-sm'>
              <div class='bg-red-500 rounded-lg px-1'>
                {this.props.datos.materia}
              </div>
                {this.props.datos.etiquetas.map(e=>{return <div class='bg-violet-600 rounded-lg px-1'>{e}</div>;})}
            </li>
          </ul>
        </div>
      </div>
      
    );
  }
}

