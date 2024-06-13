// Importo lo style del main, l'array dei posts e la Post Card
import PostCard from '../Card/PostCard';
import mainStyle from './Main.module.css';
import posts from '../../data/posts.js';

const Main = () => {
    return (
        <>
            <main className={mainStyle.mainSec}>
                {/* Genero in modo dinamico i Posts */}
                {posts.map(p => (
                    <PostCard key={p.id} p={p} />
                ))}
            </main>
        </>
    );
}

export default Main;