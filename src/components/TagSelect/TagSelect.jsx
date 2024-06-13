// Importo i Posts e lo style della select
import posts from '../../data/posts.js';
import tagSelectStyle from './TagSelect.module.css';

const TagSelect = () => {

    // Estraggo tutti i tag distinti utilizzando un Set
    const distinctTags = [...new Set(posts.flatMap(post => post.tags))];

    return (

        <select name="tags" id="tags" className={tagSelectStyle.tagSelect}>
            <option value="">Seleziona un tag</option>
            {distinctTags.map((tag, i) => (
                <option key={i} value={tag}>{tag}</option>
            ))}
        </select>

    );
}

export default TagSelect;
