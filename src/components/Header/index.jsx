import './header.css';
export const Header = () => {
    return (
        <header className="Header">
            <nav>
                <div className="logo-text">
                    <h2>Unisocial</h2>
                </div>

                <div className="link-login">
                    <a href="#">Login</a>
                </div>
            </nav>
        </header>
    );
};
