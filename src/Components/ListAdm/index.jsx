import React from 'react'
import styled from 'styled-components'

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
  border-radius: 4px;
  background-color: green;
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

const Button = styled.div`
  display: inline-block;
  margin-bottom: 100px;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  cursor: pointer;
  border: 1px solid transparent;
  font-size: 14px;
  padding: 6px 12px;
  color: #fff;
  background-color: #cf0c0c;
  border-color: black;
  border-radius: 4px;
  transition: border-color ;
  font-family: inherit;
`



const Link = styled.a`
  text-decoration: none;
  display: flex;
  flex-direction: row;  
`



export default function ListAdm({tenis}) {
  return (
        <ItemConteiner>
            <Link href={tenis.url} target='_blank'>
            <CapaProduto src={tenis.image}/>
            <Title>{tenis.title}</Title>
            <Price>{tenis.price}</Price>
            <Button onClick={''}>Comprar</Button>
            </Link>
         </ItemConteiner>
  )
}
