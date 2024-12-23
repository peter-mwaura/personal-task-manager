import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo-white.png';
import useWindowResize from '../../hooks/useWindowResize';

const Navbar = () => {
    const windowSize = useWindowResize();
    let logoWidth;
    windowSize.width > 600 ? (logoWidth = '200px') : (logoWidth = '150px');
    return (
        <nav className="navbar">
            <div className="logo">
                <Link to="/">
                    <img src={logo} width={logoWidth} alt="logo" />
                </Link>
            </div>
            {windowSize.width > 600 ? (
                <div className="main-menu">
                    <ul>
                        <li>
                            <a href="#">
                                <i className="fa fa-address-book icon"></i>
                                Report
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa fa-cogs icon"></i>Settings
                            </a>
                        </li>
                        <li>
                            <Link to="/login" className="btn">
                                <i className="fas fa-user icon"></i>Sign In
                            </Link>
                        </li>
                    </ul>
                </div>
            ) : (
                <div className="main-menu">
                    <ul>
                        <li>
                            <a href="#" className="">
                                <i className="fa fa-address-book icon"></i>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="">
                                <i className="fa fa-cogs icon"></i>
                            </a>
                        </li>
                        <li>
                            <Link to="/login" className="">
                                <i className="fas fa-user icon"></i>
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
