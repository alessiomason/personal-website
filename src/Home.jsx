import ReactPageScroller from 'react-page-scroller';
import './Home.css';

function Home() {
	return (
		<ReactPageScroller>
      <First />
      <First />
		</ReactPageScroller>
	)
}

function First() {
	return (
		<div className="full-screen-component first-home-page">
			<h2>Alessio Mason</h2>
      <h4>Personal website</h4>
		</div>
	)
}

export default Home;