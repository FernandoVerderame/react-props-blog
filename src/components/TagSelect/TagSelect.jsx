// Importo i Posts e lo style della select
import posts from '../../data/posts.js';
import tagSelectStyle from './TagSelect.module.css';

const TagSelect = () => {

    // Estraggo tutti i tag distinti utilizzando un Set
    const uniqueTags = posts.reduce((acc, p) => {
        p.tags.forEach(t => {
            if (!acc.includes(t)) {
                acc.push(t);
            }
        });
        return acc;
    }, []);

    return (

        <select name="tags" id="tags" className={tagSelectStyle.tagSelect}>
            <option value="">Seleziona un tag</option>
            {uniqueTags.map((tag, i) => (
                <option key={i} value={tag}>{tag}</option>
            ))}
        </select>

    );
}

export default TagSelect;
