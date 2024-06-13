import listItemStyle from './ListItem.module.css';

const ListItem = ({ t }) => {
    return (
        <>
            <div className={listItemStyle.badge} style={{ backgroundColor: t.color }}>
                {t.label}
            </div>
        </>
    );
}

export default ListItem;