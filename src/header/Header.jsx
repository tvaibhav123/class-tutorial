import Logo from './logo/Logo.jsx';
import Search from './search/Search.jsx';
import Profile from './profile/Profile.jsx';
import { useState } from 'react';
const Header = () => {
    /* let heading = "This is Header" */
    const [heading, setHeading] = useState("This is Header");
    const [name, setName] = useState("Vaibhav");
    const handleClick = () => {
        
        setName("Kamlesh")
        //console.log(heading)
    }
    return (
        <div>
            <h1>{name}</h1>
            <Logo/>
            <Profile sharedHeading={heading}/>
            <Search/>
            <input type="text" />
            <button onClick={handleClick}> Change Heading</button>
        </div>
    )
}
export default Header;