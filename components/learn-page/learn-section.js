import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import styles from './learn-section.module.scss';

const LearnSection = () => {
	return (
		<section className={styles.learn}>
			<h1>Learn XR Dev with Us</h1>
			<p>
				We're working hard to deliver fresh courses, tutorials, and other tools
				to the VR community but they're not quite finished yet. Check out our
				plans below and come back later to see some fresh updates.
			</p>
			<ul className={styles.links}>
				<li>
					<Link href="#framework">
						<a>
							Build Your Own Reusable Custom XR Physics Framework
							<span>&gt;</span>
						</a>
					</Link>
				</li>
				<li>
					<Link href="#multiplayer">
						<a>
							Add Photon PUN2 Multiplayer to Your VR Game<span>&gt;</span>
						</a>
					</Link>
				</li>
				<li>
					<Link href="#codealong">
						<a>
							VR Game Code-Along Series<span>&gt;</span>
						</a>
					</Link>
				</li>
			</ul>
			<ul className={styles.content}>
				<li id="framework">
					<h2 className={styles.courseHeader}>
						Build Your Own Reusable Custom XR Physics Framework
					</h2>
					<p>
						Frameworks like the XR Interaction Toolkit are a great place to
						start learning XR development because you can use it to quickly
						prototype a basic player controller but you quickly find out that it
						is very limited out of the box. If you want to build custom features
						on top of the XRITK (which you will!) you will need to dig into the
						code and understand how it works. The problem with this is that it
						requires a relatively high level of experience with C# as well as a
						large amount of time to really pick apart the codebase and find out
						how it works. On top of that, XRITK's C# conventions are not very
						beginner friendly to say the least. This is why we are developing a
						custom VR physics framework designed from the ground up to be a
						learning resource as well as a production-ready tool.
					</p>
					<p>
						In this course series you will be guided through building your own
						custom XR physics framework completely from scratch. This framework
						comes complete with joystick locomotion, interaction with
						grabbables, physics-based collisions with objects, natural looking
						hand movements, custom hand poses for grabbing specific objects,
						automatically formed hand poses for grabbing any object, and a lot
						more.
					</p>
					<p>We have broken this series into three parts...</p>
					<ul className={styles.parts}>
						<li>
							<h3>
								<FontAwesomeIcon icon={faAngleRight} />
								<span className={styles.courseSubHeader}>
									Part 1: Movement & Basic Interactions
								</span>
							</h3>
							<p>
								Here you'll learn how to set up your project and how to organize
								an xr player game object that will hold the scripts you will
								write that control player interactions. You will learn to
								calculate and apply movement to the xr player object as well as
								set up the basic functionality of hand interactions such as
								grabbing interactables.
							</p>
						</li>
						<li>
							<h3>
								<FontAwesomeIcon icon={faAngleRight} />
								<span className={styles.courseSubHeader}>
									Part 2: Advanced Physics Hand Interactions
								</span>
							</h3>
							<p>
								This is part that separates a good game from a great game. Here
								you'll learn how to make the hand model actually grab objects
								and look great doing it. We'll guide you through creating a
								system that picks up interactables, checks if a specific hand
								pose should be used, and smoothly applies that hand pose to the
								hand model. Additionally, if there is no specific hand pose for
								the interactable object then we will create a system that
								calculates what the shape of the hand should look like and
								applies it to the hand smoothly when the object is grabbed.
							</p>
						</li>
						<li>
							<h3>
								<FontAwesomeIcon icon={faAngleRight} />
								<span className={styles.courseSubHeader}>
									Part 3: Additional Features
								</span>
							</h3>
						</li>
					</ul>
				</li>
				<li id="multiplayer">
					<h2 className={styles.courseHeader}>
						Add Photon PUN2 Multiplayer to Your VR Game (Full Course)
					</h2>
				</li>
				<li id="codealong">
					<h2 className={styles.courseHeader}>
						VR Game Code-Along Series (Youtube Tutorial Playlist)
					</h2>
				</li>
			</ul>
		</section>
	);
};

export default LearnSection;
