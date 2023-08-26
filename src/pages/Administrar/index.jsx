import React, {useEffect, useState} from 'react';
import ListAdm from '../../Components/ListAdm/index';
import styled from 'styled-components';
import api from '../../Server/api';
import {Link} from 'react-router-dom';

const ListContainer = styled.div`
  display: flex;  
  background-color: #c5c5c5;
  padding: 10px;
  justify-content: end;
  flex-direction: column;
`
const Container = styled.div`
  max-width: 960px;
  
  `

const Input = styled.input`
  right: 100px;
  display: flex;
  height: 42px;
  border: 1px solid #ccc;
  border-radius: 8px ;
  width: 100%;
  margin-bottom:20px;
  padding: 0 10px;
  font-size:16px;
`
const Div = styled.div`
max-width: 960px;
display: flex;
gap: 10px;
vertical-align: middle;
`

const Button = styled.button`
margin-bottom:20px ;

`



function cadastrarAdministrar(){
    const [tenis, setTenis] =  useState([]);
    const [search,setSearch] = useState('');
    
    useEffect(() => {
      const url = '/tenis';
      const params = {};
  
      if(search){
        params.title_like = search
        api.get('/tenis?_embed=tenis', {params})
        .then( (response) => {
        setTenis(response.data)
    })
      }else{
        api.get(url)
        .then((response) => {
        setTenis(response.data)
      })
      }
    },[search])

    return(
         <>
          <h1>Lista de Tenis</h1>
      <Container>
        <Div>
          <Input 
              type="search"
              placeholder='Procure pelo seu tenis'
              value={search}
              onChange={(ev)=> setSearch(ev.target.value)}
              />
            <Link to="/administrar/cadastrar">
            <Button onClick={''}>Cadastrar</Button>
            </Link>
        </Div>
        <ListContainer>
        {
          tenis.map(shoes =>{
            return (
              <ListAdm
              key={shoes.url}
              tenis={shoes}/>
            )
          })
        }
      </ListContainer>
      </Container>
    </>
    )
}

export default cadastrarAdministrar;