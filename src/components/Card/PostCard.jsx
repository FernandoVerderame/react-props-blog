// Importo lo style della card, il Button ed il ListItem
import postCardStyle from './PostCard.module.css';
import Button from '../Button/Button';
import ListItem from '../ListItem/ListItem';

const PostCard = ({ p }) => {
    return (
        <>
            {/* Post Card */}
            <div className={`${postCardStyle.card} ${p.published ? 'published' : postCardStyle.notPublished}`}>
                {/* Post Image */}
                <div className={postCardStyle.image}>
                    <img src={p.image ? p.image : "https://placehold.co/600x400"} alt={p.title} className={postCardStyle.img} />
                </div>
                <div className={postCardStyle.bottom}>
                    {/* Post Title */}
                    <h3>{p.title}</h3>
                    {/* Post Content */}
                    <p className={postCardStyle.paragraph}>
                        {p.content}
                    </p>
                    <div className={postCardStyle.dFlex}>
                        {/* Button */}
                        <Button />
                        {p.tags.length > 0
                            ?
                            <div>
                                <ul className={postCardStyle.tags}>
                                    {/* Tags */}
                                    {p.tags.map((t) => (
                                        // List Item
                                        <ListItem key={t.id} t={t} />
                                    ))}
                                </ul>
                            </div>
                            :
                            'Nessun tag'
                        }
                    </div>
                </div>
            </div >
        </>
    )
}

export default PostCard;