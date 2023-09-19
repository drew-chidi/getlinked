import Menu from '@/assets/icons/menu.svg';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <div className='px-12 pt-[34px] pb-6 flex justify-between items-center border-b border-[rgb(255_255_255/0.18)]'>
        <div>
          {/* <img src={Logo} alt='brand-icon' /> */}
          <NavLink className={'text-white font-bold'}>
            get<span className={'text-[#D434FE] '}>linked</span>
          </NavLink>
        </div>
        <div>
          <img src={Menu} alt='menu-icon' />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
