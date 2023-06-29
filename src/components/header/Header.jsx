import css from './Header.module.css'
// import { Link } from 'react-router-dom'
import logon from '../../assets/LogOn.svg'
import {Nav} from 'rsuite'




function Header() {
	return (
		<header className={css.header}>			
			<h1 className={css.title}>Awesome Kanban Board</h1>
			<div className={css.sprint}>
				<img src={logon} />
			</div>
				<Nav>
                <Nav.Menu >
                    <Nav.Item >
                        Profile</Nav.Item>
                    <Nav.Item >
                        Log Out</Nav.Item>
                </Nav.Menu>
            </Nav>
				
		</header>
	)
}

export default Header
