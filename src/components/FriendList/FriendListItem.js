import PropTypes from 'prop-types';
import defaultImg from '../data/default.jpg';
import s from './FriendListItem.module.css';

export default function FriendListItem({
  avatar = defaultImg,
  name,
  isOnline = true,
}) {
  return (
    <li className={s.item}>
      <span className={isOnline ? `${s.isOnline}` : `${s.isOffline}`}></span>
      <img className={s.avatar} src={avatar} alt={name} width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool,
};
