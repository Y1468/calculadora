import React,{useState} from 'react'
import './App.css'

export default function App() {
  const[valortela,setValorTela]=useState('')
  const[acumulador,setAcumulador]=useState(0)
  const[resultado,setResultado]=useState(0)
  const[operado,setOperado]=useState(false)

  function Tela(valor,res){
    return(
      <div className='tela'>
        <span>{valor}</span>
        <span>{res}</span>
      </div>
    )
  }

  function btn(label,onClick){
    return(
      <button className='btn' onClick={onClick}>
        {label}
      </button>
    )
  }

  //funções
  function addDigito(d){
    if((d=='+' || d=='-' || d=='/' || d=='*' ) && operado){
      setOperado(false)
      setValorTela(resultado+d)
      return
    }
    if(operado){
      setValorTela(d)
      setOperado(false)
      return
    }
    const vdntela=valortela+d
    setValorTela(vdntela)
  }
   function lMemoria(){
     setOperado(false)
     setValorTela('')
     setResultado(0)
     setAcumulador(0)
     return
   }

  function op(oper){
    if(oper=='bs'){
      let vTela=valortela
      vTela=vTela.substring(0,(vTela.length-1))
      setValorTela(vTela)
      setOperado(false)
      return
    }
    try{
      const r=eval(valortela) //CALCULO
      setAcumulador(r)
      setResultado(r)
      setOperado(true)
    }catch{
      setResultado('ERRO')
    }
  }
  
  return (
  <>
   <div className='container'>
      <h1>calculadora simples</h1>
      {Tela(valortela,resultado)}
     
      <div className='b'>
        {btn('Ac',lMemoria)}
        {btn('(',()=>addDigito('('))}
        {btn(')',()=>addDigito(')'))}
        {btn('/',()=>addDigito('/'))}
        {btn('7',()=>addDigito('7'))}
        {btn('8',()=>addDigito('8'))}
        {btn('9',()=>addDigito('9'))}
        {btn('*',()=>addDigito('*'))}
        {btn('4',()=>addDigito('4'))}
        {btn('5',()=>addDigito('5'))}
        {btn('6',()=>addDigito('6'))}
        {btn('-',()=>addDigito('-'))}
        {btn('1',()=>addDigito('1'))}
        {btn('2',()=>addDigito('2'))}
        {btn('3',()=>addDigito('3'))}
        {btn('+',()=>addDigito('+'))}
        {btn('0',()=>addDigito('0'))}
        {btn('.',()=>addDigito('.'))}
        {btn('bs',()=>op('bs'))}
        {btn('=',()=>op('='))}
      </div>
    </div>
  </>
    
  )
}
