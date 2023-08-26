import React, {useState, useParams} from 'react';
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
    margin-top: 15px;
  
`

function Editar(){
    const [values,setValues] = useState(infiniteValue);

    const navegate = useNavigate();

    const {id} = useParams();

    const url = `/tenis/${id}`;

    useEffect(() => {
        if(id){
            api.get(url)
                .then((response) =>  {
                    setValues(response.data);
            })
        }
    },[])


    function onSubmit(ev){
        ev.preventDefault();
        
        const url = '/tenis';

        api.put(url, values)
        .then(() => {
            navegate('/')
        })

    }

    function onChange(ev){
        const {name, value} = ev.target

        console.log({name,value})

        setValues({...values,[name]:value});
    }

    return(
        <>
        <h1>Editar</h1>
        <Form onSubmit={onSubmit}>
            <Conteiner>
                <Label htmlFor="title">Titulo</Label>
                <Input type="text" id="title" name="title" value={values.title} onChange={onChange} />
                <Label htmlFor="url">Url do Tenis</Label>
                <Input type="text" id="url" name="url" value={values.url} onChange={onChange}/>
                <Label htmlFor="image">Url/Imagem</Label>
                <Input type="text" id="image" name="image" value={values.image} onChange={onChange} />
                <Label htmlFor="price">Preço</Label>
                <Input type="text" id="price" name="price" value={values.price} onChange={onChange} />
                <Button type='submit' onClick={''}>Salvar</Button>
            </Conteiner>

        </Form>
        </>
    )
}

export default Editar;