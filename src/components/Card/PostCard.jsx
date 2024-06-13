import postCardStyle from './PostCard.module.css';
import Button from '../Button/Button';
import ListItem from '../ListItem/ListItem';

const PostCard = ({ title, content, image, published, tags }) => {
    return (
        published && (
            <div className={postCardStyle.card}>
                <div className={postCardStyle.image}>
                    <img src={image ? image : "https://placehold.co/600x400"} alt={title} className={postCardStyle.img} />
                </div>
                <div className={postCardStyle.bottom}>
                    <h3>{title}</h3>
                    <p className={postCardStyle.paragraph}>{content}</p>
                    <div className={postCardStyle.dFlex}>
                        <Button />
                        {tags.length > 0 ? (
                            <div>
                                <ul className={postCardStyle.tags}>
                                    {tags.map((tag) => (
                                        <ListItem key={tag.id} t={tag} />
                                    ))}
                                </ul>
                            </div>
                        ) : (
                            <p>Nessun tag</p>
                        )}
                    </div>
                </div>
            </div>
        )
    );
}

export default PostCard;
