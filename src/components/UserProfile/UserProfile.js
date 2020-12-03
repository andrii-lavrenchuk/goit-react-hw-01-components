import PropTypes from 'prop-types';
import defaultImg from '../data/default.jpg';
import s from './UserProfile.module.css';

export default function UserProfile({
  avatarUrl = defaultImg,
  name,
  tag,
  location,
  followers,
  views,
  likes,
}) {
  return (
    <div className={s.profile}>
      <div className={s.description}>
        <img src={avatarUrl} alt={name} className={s.avatar} width="200" />
        <p className={s.name}>{name}</p>
        <p className={s.tag}>@{tag}</p>
        <p className={s.location}>{location}</p>
      </div>

      <ul className={s.stats}>
        <li className={s.item}>
          <span className={s.label}>Followers </span>
          <span className={s.quantity}>{followers}</span>
        </li>
        <li className={s.item}>
          <span className={s.label}>Views </span>
          <span className={s.quantity}>{views}</span>
        </li>
        <li className={s.item}>
          <span className={s.label}>Likes </span>
          <span className={s.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}
UserProfile.propTypes = {
  avatarUrl: PropTypes.string.isRequired,
  name: PropTypes.string,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string,
  stats: PropTypes.objectOf(PropTypes.number),
};
