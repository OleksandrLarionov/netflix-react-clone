import NavBar from '../../components/NavBar';
import ProfileImg from '../../assets/1801287.svg';
import Image from 'react-bootstrap/Image';

const { Component } = require('react');
const { Container, Row, Col, InputGroup, Form, Dropdown, Button } = require('react-bootstrap');

class LogIn extends Component {
	render() {
		return (
			<div className='bg-black vh-100'>
				<NavBar />
				<Container className='bg-black'>
					<Row className='mt-5'>
						<Col className=' border-bottom border-secondary'>
							<h2>Edit Profile</h2>
						</Col>
					</Row>
					<Row>
						<Col md={6} className='d-flex justify-content-center my-4'>
							<Image
								src={ProfileImg}
								width='150'
								height='150'
								alt='avatar logo'
								className='bg-success'
							/>
						</Col>
						<Col md={6}>
							<Row className='border-bottom border-secondary my-4'>
								<Col className='pb-4'>
									<InputGroup size='md' className='mb-3'>
										<Form.Control
											aria-label='Name'
											required
											placeholder='username...'
											className='bg-secondary border-secondary text-white'
										/>
									</InputGroup>
									<p>Language</p>
									<Dropdown>
										<Dropdown.Toggle
											variant='black'
											id='dropdown-basic'
											className='text-white border-white'>
											Select Language
										</Dropdown.Toggle>

										<Dropdown.Menu className='bg-black'>
											<Dropdown.Item href='#/action-1' className=' text-white'>
												Russian
											</Dropdown.Item>
											<Dropdown.Item href='#/action-2' className=' text-white'>
												Italian
											</Dropdown.Item>
											<Dropdown.Item href='#/action-3' className=' text-white'>
												deutch
											</Dropdown.Item>
										</Dropdown.Menu>
									</Dropdown>
								</Col>
							</Row>
							<Row className='border-bottom border-secondary'>
								<Col className='pb-4'>
									<p className='text-secondary'>Maturity Settings:</p>
									<span className='bg-secondary texxt-white'>ALL MATURITY RATINGS</span>
									<p className='text-secondary'>
										Show titles of{' '}
										<span className='fw-bold text-secondary'>all maturity ratings </span>
										for this profile
									</p>
									<Button
										className='border border-secondary text-secondary px-4 fs-5'
										variant='black'>
										EDIT
									</Button>
								</Col>
							</Row>
							<Row>
								<Col className='py-4'>
									<Form>
										<Form.Check type='checkbox'>
											<Form.Check.Input
												type='checkbox'
												className='bg-black p-2 border-secondary'
											/>
											<Form.Check.Label>
												<span className='text-secondary'>
													Autoplay next episodes in a series on all devices.
												</span>
											</Form.Check.Label>
										</Form.Check>
										<Form.Check type='checkbox'>
											<Form.Check.Input
												type='checkbox'
												className='bg-black p-2 border-secondary'
											/>
											<Form.Check.Label>
												<span className='text-secondary'>
													Autoplay prewiews while browsing on all devices.
												</span>
											</Form.Check.Label>
										</Form.Check>
									</Form>
								</Col>
							</Row>
						</Col>
						<Row className='border-top border-secondary'>
							<Col md={6}></Col>
							<Col md={6} className='py-4 d-flex justify-content-around'>
								<Button
									className='border border-secondary bg-black text-secondary'
									size='lg'>
									SAVE
								</Button>
								<Button
									className='border border-secondary bg-black text-secondary'
									size='lg'>
									CANCEL
								</Button>
								<Button
									className='border border-secondary bg-black text-secondary'
									size='lg'>
									DELETE PROFILE
								</Button>
							</Col>
						</Row>
					</Row>
				</Container>
			</div>
		);
	}
}
export default LogIn;
