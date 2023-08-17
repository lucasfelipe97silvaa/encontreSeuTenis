import React, {useState, useEffect} from 'react';
import api from '../../Server/api';
import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';

const infiniteValue = {
    title:'',
    image: '',
    price:0,
    url:''
};

const Input = styled.input`

`
const Form = styled.form`
    display:flex;
    flex-direction:column;
   
`
const Conteiner = styled.div`
    display: flex;
    flex-direction: column;
`
const Button = styled.button`

`
const Label = styled.label`
    display:flex;
    flex-direction:column;
    margin-bottom: 15px;
  
`

function Cadastrar(){
    const [values,setValues] = useState(infiniteValue);
   
    const navegate = useNavigate()
    // useEffect(() => {},[]);

    function onSubmit(ev){
        ev.preventDefault();
        
        const url = '/tenis'

        api.post(url, values)
        .then(() => {
            navegate('/')
        })

    }

    function onChange(ev){
        const {name, value} = ev.target

        console.log({name,value})

        setValues({...value,[name]:value})
    }

    return(
        <>
        <h1>cadastrar</h1>
        <Form onSubmit={onSubmit}>
            <Conteiner>
                <Label htmlFor="title">Titulo</Label>
                <Input type="text" id="title" name="title" onChange={onChange} />
                <Label htmlFor="url">Url do Tenis</Label>
                <Input type="text" id="url" name="url" onChange={onChange}/>
                <Label htmlFor="imagem">Url/Imagem</Label>
                <Input type="text" id="image" name="image" onChange={onChange} />
                <Label htmlFor="price">Preço</Label>
                <Input type="text" id="price" name="price" onChange={onChange} />
                <Button type='submit' onClick={''}>Salvar</Button>
            </Conteiner>

        </Form>
        </>
    )
}

export default Cadastrar;