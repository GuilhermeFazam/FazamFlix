import React from 'react';
import dadosIniciais from '../../data/data.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';

const App: React.FC = () => {
    const data = dadosIniciais.categorias;

    return (
        <>
            <div className="App">
                <BannerMain
                    videoTitle={data[0].videos[0].titulo}
                    url={data[0].videos[0].url}
                    videoDescription="O que é Front-end? Trabalhando na área os termos HTML, CSS e JavaScript fazem parte da rotina das desenvolvedoras e desenvolvedores. Mas o que eles fazem, afinal? Descubra com a Vanessa!"
                />
                {data.map((item, index) => {
                    if (index === 0) {
                        return (
                            <Carousel
                                key={item.titulo}
                                ignoreFirstVideo
                                category={item}
                            />
                        );
                    }
                    return <Carousel key={item.titulo} category={item} />;
                })}
            </div>
        </>
    );
};
export default App;
