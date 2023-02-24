import {useState} from 'react';

export function Titulo(){
    
    function clickTitulo(){
        alert("HI!!");
       // texto=" titulo clicado";
       setTexto("titulo clicado");
    }
    
   // let texto = "El titulo";
   const[texto,setTexto] = useState("El titulo");
    return (<h1 onClick={clickTitulo}> {texto} </h1>);
  }

  export function Formulario(){
    function changeInputValue(evt){
        let texto_escrito = evt.target.value;
        setTexto(texto_escrito);
    }
    function changeInputTexto(evt){
        evt.target.style.border="10px solid yellow";
    }
    const[texto, setTexto]=useState("El que escrius");
    let i = <InputTexto valorEscrit={texto} changeInput={changeInputTexto}></InputTexto>;
    console.log(i.props.valorEscrit);
    return (<>
            <h2>Nuevo formulario</h2>
            <form>
                <input onInput={changeInputValue} type="text" />
                <span>{texto} </span>
               {i}
            </form>
            <br />
        </>
    );
  }
  function InputTexto({valorEscrit, changeInput}){    
        return (<> <br /> Texto:
            <input type="text" onChange={changeInput}
             style={valorEscrit%2==0?{backgroundColor:"red"}:{backgroundColor:"green"}}/>
            <span>{valorEscrit}</span>
        </>)
  }