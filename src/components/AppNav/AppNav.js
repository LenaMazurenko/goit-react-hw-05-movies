import { NavLinkEl } from './AppNav.styled';

export default function AppNav() {
  return (
    <nav>
      <NavLinkEl exact to="/">
        Home
      </NavLinkEl>
      <NavLinkEl to="/movies">Movies</NavLinkEl>
      <hr />
    </nav>
  );
}
