import React, {useState} from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import api from '../../Server/api'


const CapaProduto = styled.img`
  width: auto;
  height: 120px;
  border: 0;
  vertical-align: middle;
`
const ConteinerGlobal = styled.div`
    
`

const ItemConteiner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between ;
  border-radius: 4px;
  background-color: #fff;
  height: 120px;
  width: 900px;
  color: #29303b;
  margin-bottom: 10px;
  margin-right: 10px;
  padding: 10px;
  vertical-align: middle;
`
const Title = styled.div`
  font-weight: 700;
  margin-bottom: 5px;
  color: black;
  
`  
const Price = styled.div`
  font-weight: 700;
  margin-bottom: 5px;
  color: black;
  display: flex;
  
`

const Button = styled.button`
  display: inline-block;
  height: 30px;
  font-weight: 400;
  text-align: center;
  align-items: center;
  vertical-align: middle;
  /* cursor: pointer; */
  border: 1px solid transparent;
  font-size: 14px;
  padding: 6px 12px;
  color: #fff;
  background-color: #978080;
  border-color: black;
  border-radius: 4px;
  font-family: inherit;
`

const ButtonEdit = styled.span`
  height: 30px;
  font-weight: 400;
  text-align: center;
  align-items: center;
  vertical-align: middle;
  cursor: pointer;
  border: 1px solid transparent;
  font-size: 14px;
  padding: 6px 12px;
  color: #fff;
  background-color: #b90404;
  border-color: black;
  border-radius: 4px;
  font-family: inherit;
  
`
const Panel = styled.div`
  display:flex;
  align-items: center;
  width: 600px;
  justify-content: space-around;
`
const ButtonConteiner = styled.div`
  width: 200px;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

export default function ListAdm({tenis}) {
  const [loading, setLoading] = useState(true);

  function onDelete(id){
    setLoading(false);

    const url = `/tenis/${id}`;

    api.delete(url)
    .then((response) => {});

  }

  return (
    <>
    {!loading
      ?
      (
        <div>deletando..</div>
      )
      :
      (
        <ItemConteiner>
          <Panel>
            <p>{tenis.id}</p>
            <CapaProduto src={tenis.image}/>
            <Title>{tenis.title}</Title>
            <Price>{tenis.price}</Price>
          </Panel>
          <ButtonConteiner>
              <Link to={`/administrar/editar/${tenis.id}`}>
                <ButtonEdit>Editar</ButtonEdit>
              </Link>
              <Button onClick={() => onDelete(tenis.id)}>Excluir</Button>
            </ButtonConteiner>
         </ItemConteiner>
      )
    }
    </>
  )
}
