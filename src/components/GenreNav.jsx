import { Component } from 'react';
import { Col, DropdownButton, Row, Dropdown, Button, Container } from 'react-bootstrap';
import { AiOutlineUnorderedList } from 'react-icons/ai';
import { LuLayoutGrid } from 'react-icons/lu';

class GenreNav extends Component {
	state = {
		action: 'action',
		horror: 'horror',
		fantasy: 'fantasy',
	};
	render() {
		return (
			<Container fluid>
				<Row>
					<Col className='d-flex align-items-center'>
						<h2 className='text-white me-4'>Tv Shows</h2>
						<DropdownButton
							title='Genres'
							key='end'
							id={`dropdown-button-drop-end`}
							drop='end'
							variant='dark'
							className='text-white border border-1 border-white'>
							<Dropdown.Item eventKey='1'>Action</Dropdown.Item>
							<Dropdown.Item eventKey='2'>Adventure</Dropdown.Item>

							<Dropdown.Item eventKey='3'>Horror</Dropdown.Item>
						</DropdownButton>
					</Col>
					<Col className='d-flex justify-content-end'>
						<Button className='border-secondary' variant='none'>
							<AiOutlineUnorderedList />
						</Button>
						<Button className='border-secondary' variant='none'>
							<LuLayoutGrid />
						</Button>
					</Col>
				</Row>
			</Container>
		);
	}
}
export default GenreNav;
