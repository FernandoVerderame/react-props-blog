// Importo lo style del main, l'array dei posts e la Post Card
import PostCard from '../Card/PostCard';
import mainStyle from './Main.module.css';
import posts from '../../data/posts.js';

const Main = () => {
    return (
        <>
            <main className={mainStyle.mainSec}>
                <PostCard />
            </main>
        </>
    );
}

export default Main;