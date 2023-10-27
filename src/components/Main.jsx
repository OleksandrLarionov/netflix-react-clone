import { Component } from 'react';
import { Container } from 'react-bootstrap';
import CarouselGenge from './CarouselGenre';

class Main extends Component {
	render() {
		return (
			<Container className='m-5 d-flex align-items-center flex-column'>
				<CarouselGenge yourGenre='Action' />
				<CarouselGenge yourGenre='Horror' />
				<CarouselGenge yourGenre='Adventure' />
			</Container>
		);
	}
}
export default Main;
