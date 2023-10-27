import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import GenreNav from './components/GenreNav';
import Footer from './components/Footer';
import Main from './components/Main';

function App() {
	return (
		<>
			<NavBar />
			<GenreNav />
			<div className='d-flex justify-content-center'>
				<Main />
			</div>
			<Footer />
		</>
	);
}

export default App;
