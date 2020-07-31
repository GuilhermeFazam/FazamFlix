import React, { useState, useEffect } from 'react';
import api from '../../services/api';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';

interface CategoryProps {
    id: number;
    titulo: string;
    cor: string;
    link_extra?: LinkExtra;
    videos: Videos[];
}
interface LinkExtra {
    text: string;
    url: string;
}

interface Videos {
    titulo: string;
    url: string;
    decripition: string;
}

const App: React.FC<CategoryProps> = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        async function loadData(): Promise<void> {
            const response = await api.get('/categorias?_embed=videos');
            setData(response.data);
        }
        loadData();
    }, []);

    return (
        <>
            <div className="App">
                {data.map((item: CategoryProps, index: number) => {
                    if (index === 0) {
                        return (
                            <div key={item.id}>
                                <BannerMain
                                    videoTitle={item.videos[0].titulo}
                                    url={item.videos[0].url}
                                    videoDescription={
                                        item.videos[0].decripition
                                    }
                                />
                                <Carousel ignoreFirstVideo category={item} />
                            </div>
                        );
                    }
                    return <Carousel key={item.id} category={item} />;
                })}
            </div>
        </>
    );
};
export default App;
