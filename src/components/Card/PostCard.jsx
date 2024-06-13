// Importo lo style della card ed il button
import postCardStyle from './PostCard.module.css';
import Button from '../Button/Button';

const PostCard = () => {
    return (
        <>
            {/* Post Card */}
            <div className={postCardStyle.card}>
                {/* Post Image */}
                <div className={postCardStyle.image}>
                    <img src='' alt='' className={postCardStyle.img} />
                </div>
                <div className={postCardStyle.bottom}>
                    {/* Post Title */}
                    <h3>Titolo del Post</h3>
                    {/* Post Content */}
                    <p className={postCardStyle.paragraph}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur possimus cumque voluptatibus, quo aliquam amet dolorum obcaecati harum voluptas dicta adipisci accusantium culpa sequi esse, quos eos ratione fuga est!
                    </p>
                    {/* Button */}
                    <Button />
                </div>
            </div>
        </>
    )
}

export default PostCard;