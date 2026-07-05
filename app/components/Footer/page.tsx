import css from "../Header/header.module.css"

export default function Footer() {
    return (
        <>
            <header className={css.header}>
            <nav >
                <ul className={css.navigation}>
                 <li className={css. navigation_element}>
                    <a href="/home">Home</a>
                    
                </li >
                <li className={css. navigation_element}>
                    <a href="/hader">Hader</a>

                </li>
                 <li className={css. navigation_element}>
                    <a href="/footer">Footer</a>
                    
                </li>
                </ul>
            </nav>
           
        </header>
        <footer>
                <h2>Март 2006</h2>
            </footer>
        </>
      
    )
}