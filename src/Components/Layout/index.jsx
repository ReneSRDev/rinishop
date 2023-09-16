import './style.css';

const Layout = ({ children }) => {
    return (
        <div className="index-main">
            {children}
        </div>
    )
};

export default Layout;