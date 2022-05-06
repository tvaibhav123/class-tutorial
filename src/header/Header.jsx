import Logo from './logo/Logo.jsx';
import Search from './search/Search.jsx';
import Profile from './profile/Profile.jsx';
const Header = () => {
    return (
        <div>
            This is Header
                <Logo/>
                <Profile/>
                <Search/>
        </div>
    )
}
export default Header;