import css from "./header.module.css"
import Link from "next/link"



export default function Header() {
    return (
        <>
            <header className={css.header}>  
            <nav >
                <ul className={css.navigation}>
                 <li className={css. navigation_element}>
                    <Link href="/">Машини</Link>
                    
                </li >
                <li className={css. navigation_element}>
                    <Link href="/abaut">Легкові</Link>

                </li>
                        <li className={css. navigation_element}>
                    <Link href="/bmv">Грузові</Link>
                    
                </li>
                </ul>
            </nav>
           
        </header>
        
        </>
      
    )
}