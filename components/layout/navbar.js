import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useSession, signOut } from 'next-auth/client';

import Logo from './logo.js';
import Hamburger from './hamburger.js';
import useScrollListener from '../../hooks/useScrollListener/index.js';
import styles from './navbar.module.scss';

const Navbar = () => {
	const [session, loading] = useSession();

	const [headerClasses, setheaderClasses] = useState('');
	const [navMenuClasses, setNavMenuClasses] = useState('');
	const [showMobileNavMenu, setShowMobileNavMenu] = useState(false);
	const scroll = useScrollListener();

	//update classList of nav on scroll
	useEffect(() => {
		let _headerClasses = '';
		let _navMenuClasses = styles.hiddenNavMenu;

		if (scroll.y > 150 && scroll.y - scroll.lastY > 0) {
			_headerClasses = `${styles.header} ${styles.hidden}`;

			if (showMobileNavMenu) setShowMobileNavMenu(false);
		} else {
			_headerClasses = `${styles.header} ${styles.active}`;
		}

		setheaderClasses(_headerClasses);
		setNavMenuClasses(_navMenuClasses);
	}, [scroll.y, scroll.lastY]);

	const handleHamburgerClick = () => {
		let _navMenuClasses = '';

		if (!showMobileNavMenu) {
			_navMenuClasses = `${styles.activeNavMenu}`;
		} else {
			_navMenuClasses = `${styles.hiddenNavMenu}`;
		}

		setShowMobileNavMenu(!showMobileNavMenu);
		setNavMenuClasses(_navMenuClasses);
	};

	const logoutHandler = () => {
		signOut();
	};

	return (
		<header className={headerClasses}>
			<Link href="/">
				<a onClick={showMobileNavMenu ? handleHamburgerClick : null}>
					<Logo />
				</a>
			</Link>
			<nav>
				<ul
					className={navMenuClasses}
					onClick={showMobileNavMenu ? handleHamburgerClick : null}
				>
					<li>
						<Link href="/blogs">Blogs</Link>
					</li>
					<li>
						<Link href="/devs">Devs</Link>
					</li>
					<li>
						<Link href="/teams">Teams</Link>
					</li>
					<li>
						<Link href="/projects">Projects</Link>
					</li>
					<li>
						<Link href="/learn">Learn</Link>
					</li>
					<li>
						<Link href="/jobs">Jobs</Link>
					</li>
					{session && (
						<li>
							<Link href="/profile">Profile</Link>
						</li>
					)}
					{!session && !loading && (
						<li>
							<Link href="/auth">Login</Link>
						</li>
					)}
					{session && (
						<li>
							<button onClick={logoutHandler}>Logout</button>
						</li>
					)}
				</ul>
				<Hamburger
					handleClick={handleHamburgerClick}
					showMobileNavMenu={showMobileNavMenu}
				/>
			</nav>
		</header>
	);
};

export default Navbar;
