import React, {useEffect, useState} from 'react';
import ListShoes from '../../Components/ListShoes';
import styled from 'styled-components';
import api from '../../Server/api'

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;  
  justify-content: center;
  background-color: #ccc;
  padding: 10px;
  flex-wrap: wrap;
`
const Container = styled.div`
  max-width: 960px;
  margin: 30px auto;
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




function ListaShoes(){
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
      <Input 
          type="search"
          placeholder='Procure pelo seu tenis'
          value={search}
          onChange={(ev)=> setSearch(ev.target.value)}
          />
        <ListContainer>
        {
          tenis.map(shoes =>{
            return (
              <ListShoes 
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

export default ListaShoes;