import { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import { Col, Container, Row } from 'react-bootstrap';

const myKey = '5774d0d9';
class CarouselGenge extends Component {
	state = {
		films: [],
	};
	getFilm = async () => {
		try {
			const response = await fetch(
				'http://www.omdbapi.com/?apikey=' + myKey + '&s=' + this.props.yourGenre
			);
			if (response.ok) {
				const data = await response.json();
				const films = data.Search;
				this.setState({ films: films });

				// console.log('Questi sono i film della ricerca', films);
			} else {
				throw new Error('Errore nel download dei dati');
			}
		} catch (error) {
			console.log('Errore', error);
		}
	};
	componentDidMount() {
		this.getFilm();
	}
	render() {
		return (
			<Container className='bg-black'>
				<p>{this.props.yourGenre}</p>
				<Carousel indicators={false} controls={false} className='my-5'>
					<Carousel.Item interval={4000}>
						<Row>
							<Col className='d-flex justify-content-center'>
								{this.state.films
									.map((film) => (
										<Image
											src={film.Poster}
											alt='test'
											width='240px'
											className='mx-2'
											key={film.imdbID}
										/>
									))
									.slice(0, 5)}
							</Col>
						</Row>
					</Carousel.Item>
					<Carousel.Item interval={4000}>
						<Row>
							<Col className='d-flex justify-content-center'>
								{this.state.films
									.map((film) => (
										<Image
											src={film.Poster}
											alt='test'
											width='240px'
											className='mx-2'
											key={film.imdbID}
										/>
									))
									.slice(5, 10)}
							</Col>
						</Row>
					</Carousel.Item>
				</Carousel>
			</Container>
		);
	}
}
export default CarouselGenge;
