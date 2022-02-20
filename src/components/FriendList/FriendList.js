import PropTypes from 'prop-types';
import s from './FriendList.module.css';

export default function FriendList({ friends }) {
    return (
        <ul className={s.friendList}>
            {friends.map(({ id, name, avatar, isOnline}) => (
            <li className={s.item} key={id}>
                <span className={ isOnline ? `${s.online}` : `${s.offline}` }></span>
                <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
                <p className={s.name}>{name}</p>
            </li>))}
        </ul>
    )
}

FriendList.prototype = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            avatar: PropTypes.string,
            isOnline: PropTypes.bool.isRequired
        })
    )
}