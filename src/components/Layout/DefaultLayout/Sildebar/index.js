import styles from './Sildebar.module.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);
function Silebar() {
  return (
    <aside className={cx('wrapper')}>
      <h2>Sildebar</h2>
      <h2>Sildebar2</h2>
    </aside>
  );
}

export default Silebar;
