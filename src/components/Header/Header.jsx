// Importo lo style dell'header ed il logo del blog
import headerStyle from './Header.module.css';

const Header = () => {
    return (
        <>
            <header className={headerStyle.headerSec}>
                {/* Blog Title */}
                <h1>Il mio blog</h1>
            </header>
        </>
    );
}

export default Header;