import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Form } from './styles';

import Button from '../../../components/Button';

import { Input, TextArea } from '../../../components/Input';

const Caterory: React.FC = () => {
    const categoryInitalValue = {
        name: 'Categoria Inicial',
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

        console.log(category);
    }
    return (
        <Container>
            <h1>
                Nova Categoria:
                <span>{categoryDataForm.name}</span>
            </h1>

            <Form>
                <form onSubmit={e => handleSubmit(e)}>
                    <Input
                        label="Titulo: "
                        name="name"
                        value={categoryDataForm.name}
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
                {category.map((categoria, index) => {
                    const id = categoria.name + index;
                    return <li key={id}>{categoria.name}</li>;
                })}
            </ul>

            <Link to="/">Ir para Home</Link>
        </Container>
    );
};

export default Caterory;
