import { Logo } from '../Logo/Logo';
import { Search } from '../Search/Search';
import './style.css';

export const Header = ({ setSearchQuery, searchQuery }) => {
  return (
    <div className='header' id='head'>
      <div className='container'>
        <div className='header__wrapper'>
          <div className='header__left'>
            <Logo />
            <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          </div>
          <div>Войти</div>
        </div>
      </div>
    </div>
  );
};
