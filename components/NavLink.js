import Link from 'next/link';
import styled from 'styled-components';
const StyledLink = styled.a`
  color: #eee;
  display: flex;

  span {
    margin: 0 8px;
  }
`;
const NavLink = ({ url, label, icon }) => {
  return (
    <>
      <Link href={url} passHref>
        <StyledLink>
          {icon && <span>{icon}</span>}
          {label && <span>{label}</span>}
        </StyledLink>
      </Link>
    </>
  );
};

export default NavLink;
