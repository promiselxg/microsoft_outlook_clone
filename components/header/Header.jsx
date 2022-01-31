import { Input, NavLink } from '../index';
import {
  HeaderLogo,
  HeaderRight,
  HeaderSearchBox,
  HeaderWrapper,
} from '../../styles/header/header.style';
import {
  FiVideo,
  FiMenu,
  FaSearch,
  BiConversation,
  BiMessageCheck,
  FaQuestion,
  FaPaperPlane,
  FiSettings,
} from '../../util';
const Header = () => {
  return (
    <>
      <HeaderWrapper>
        <HeaderLogo>
          <span>
            <FiMenu className="icon" />
          </span>
          <span>
            <h2>Outlook</h2>
          </span>
        </HeaderLogo>
        <HeaderSearchBox>
          <div className="input__wrapper">
            <span>
              <FaSearch />
            </span>
            <span>
              <Input type="text" placeholder="Search " />
            </span>
          </div>
        </HeaderSearchBox>
        <HeaderRight>
          <div className="header__links">
            <NavLink url="/" label="Teams call" icon={<FiVideo />} />
            <NavLink url="/" icon={<BiConversation />} />
            <NavLink url="/" icon={<BiMessageCheck />} />
            <NavLink url="/" icon={<FiSettings />} />
            <NavLink url="/" icon={<FaQuestion />} />
            <NavLink url="/" icon={<FaPaperPlane />} />
          </div>
          <div className="header__right__avatar">AD</div>
        </HeaderRight>
      </HeaderWrapper>
    </>
  );
};

export default Header;
