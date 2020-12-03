import PropTypes from 'prop-types';
import TransactionHistoryItem from './TransactionHistoryItem';
import s from './TransactionHistory.module.css';

export default function TransactionHistory({ items }) {
  return (
    <table className={s.transaction}>
      <thead className={s.head}>
        <tr>
          <th className={s.type}>Type</th>
          <th className={s.type}>Amount</th>
          <th className={s.type}>Currency</th>
        </tr>
      </thead>

      <tbody className={s.tableBody}>
        {items.map(({ id, type, amount, currency }) => (
          <TransactionHistoryItem
            key={id}
            type={type}
            amount={amount}
            currency={currency}
          />
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};
