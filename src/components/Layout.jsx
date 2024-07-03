import { Outlet } from "react-router-dom";


function Layout() {
    return ( 
        <>
        <nav>
            
        </nav>

        <main>
            <Outlet />
        </main>

        <footer>
            
        </footer>
        </>
     );
}

export default Layout;