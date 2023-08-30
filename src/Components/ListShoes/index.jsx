import React from 'react'
import styled from 'styled-components'

const CapaProduto = styled.img`
  width: 100%;
  height: 200px;
  border: 0;
  vertical-align: middle;
  float: left;
  border-radius:10px;
`

const ItemConteiner = styled.div`
  border-radius: 4px;
  background-color: #e6ecde;
  height: 380px;
  width: 220px;
  color: #29303b;
  margin-bottom: 10px;
  margin-right: 10px;
  padding: 10px;
  vertical-align: middle;
  display:flex;
  flex-direction: column;
  box-shadow: 5px 10px #bebdbd;
  margin: 15px;

`
const Title = styled.div`
  font-weight: 700;
  margin-bottom: 5px;
  color: black;
  margin-top: 20px;
`  
const Price = styled.div`
   font-weight: 700;
  font-size: 20px;
  margin-bottom: 5px;
  color: #000000;
`

const Button = styled.div`
  width:200px;
  cursor: pointer;
  height: 40px;
  background-color: #e4140d;
  margin-top: 30px;
    /* margin: 10px ; */
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
    &:hover{
      background-color: #ff0606c7  ;
    }
  color: #fff;
  font-weight: 600;
  border: 1px solid #4b0b00;
`



const Link = styled.a`
  text-decoration: none;
`

const Conteiner = styled.div`
    width: 100%;
    height: 30px;
    background-color:#e6ecde;
    display: flex;
    align-items:center;
    flex-direction: column;
`
const ConteinerButton = styled.div`
    display: flex;
    flex-direction: column;
`

export default function ListShoes({tenis}) {
  return (
    <>   
      <ItemConteiner>
          <CapaProduto src={tenis.image}/>
          <Link href={tenis.url} target='_blank'>
          <Conteiner>
            <Title>{tenis.title}</Title>
            <Price>${tenis.price}</Price>
          <ConteinerButton>
            <Button onClick={''}>Comprar</Button>
          </ConteinerButton>
        </Conteiner>
          </Link>
      </ItemConteiner>
    </>
  )
}
