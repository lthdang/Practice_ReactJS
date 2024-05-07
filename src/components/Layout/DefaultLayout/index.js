import Header from '~/components/Layout/components/Header';
import Sildebar from './Sildebar';
function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      <div className="container">
        <Sildebar />
        <div className="content">{children}</div>
      </div>
    </div>
  );
}

export default DefaultLayout;
