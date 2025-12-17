import './Layout.css';

const Layout = ({ sidebar, feed, rightbar }) => {
    return (
        <div className="layout-wrapper">
            {/* Левая часть: Сайдбар (стоит на месте) */}
            <aside className="layout-sidebar">
                {sidebar}
            </aside>

            {/* Правая часть: Контент (Скроллится) */}
            <main className="layout-content">
                <div className="content-container">
                    <div className="feed-section">{feed}</div>
                    <div className="rightbar-section">{rightbar}</div>
                </div>
            </main>
        </div>
    );
};

export default Layout;