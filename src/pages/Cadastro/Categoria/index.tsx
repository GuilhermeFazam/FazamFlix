import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Form } from './styles';

import api from '../../../services/api';

import Button from '../../../components/Form/Button';

import { Input, TextArea } from '../../../components/Form/Field';

const Caterory: React.FC = () => {
    const categoryInitalValue = {
        id: '',
        titulo: 'teste',
        description: '',
        color: '#000',
    };

    const [category, setCategory] = useState([categoryInitalValue]);

    const [categoryDataForm, setCategoryDataForm] = useState(
        categoryInitalValue,
    );

    function setValue(chave: any, valor: string): void {
        setCategoryDataForm({
            ...categoryDataForm,
            [chave]: valor,
        });
    }

    function handleCategory(
        e:
            | React.ChangeEvent<HTMLInputElement>
            | React.ChangeEvent<HTMLTextAreaElement>,
    ): void {
        const field = e.target.getAttribute('name');

        setValue(field, e.target.value);
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
        e.preventDefault();
        setCategory([...category, categoryDataForm]);
    }

    useEffect(() => {
        async function loadCategorys(): Promise<void> {
            const response = await api.get('/categorias');
            setCategory(response.data);
        }

        loadCategorys();
    }, []);

    // useEffect(() => {
    //     fetch('http://localhost:3030/categorias/').then(async res => {
    //         const response = await res.json();
    //         setCategory([...response]);
    //     });
    // }, []);
    return (
        <Container>
            <h1>
                Nova Categoria:
                <span>{categoryDataForm.titulo}</span>
            </h1>

            <Form>
                <form onSubmit={e => handleSubmit(e)}>
                    <Input
                        label="Titulo: "
                        name="titulo"
                        value={categoryDataForm.titulo}
                        type="text"
                        onChange={handleCategory}
                    />

                    <TextArea
                        label="Descrição: "
                        name="description"
                        onChange={handleCategory}
                    />

                    <Input
                        label="Cor: "
                        name="color"
                        type="color"
                        onChange={handleCategory}
                    />

                    <Button>Criar</Button>
                </form>
            </Form>
            <ul>
                {category.map(categoria => {
                    const { id } = categoria;
                    return <li key={id}>{categoria.titulo}</li>;
                })}
            </ul>

            <Link to="/">Ir para Home</Link>
        </Container>
    );
};

export default Caterory;
