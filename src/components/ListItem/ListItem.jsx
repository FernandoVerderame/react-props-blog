import listItemStyle from './ListItem.module.css';

const ListItem = ({ t }) => {
    return (
        <>
            <li className={listItemStyle.badge} style={{ backgroundColor: t.color }}>
                {t.label}
            </li>
        </>
    );
}

export default ListItem;