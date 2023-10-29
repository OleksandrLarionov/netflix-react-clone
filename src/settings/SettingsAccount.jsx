import { Component } from 'react';
import { Button, Col, Container, ListGroup, Row } from 'react-bootstrap';
import NavBar from '../components/NavBar';
import ProfileImg from '../assets/1801287.svg';
import Image from 'react-bootstrap/Image';

class SettingsAccount extends Component {
	render() {
		return (
			<div className='bg-white'>
				<NavBar />
				<Container className='bg-whitevh-100'>
					<Row className='border-bottom border-secondary'>
						<Col>
							<h2 className='fw-bold  text-black '>Account</h2>
						</Col>
					</Row>
					<Row className=' border-bottom border-secondary'>
						<Col md={4}>
							<p className='text-secondary fw-bold opacity-50'>MEMBERSHIP & BILLING</p>
							<Button className='text-black opacity-75 ' variant='secondary'>
								Cancel Membership
							</Button>
						</Col>
						<Col>
							<Row className=' border-bottom border-secondary'>
								<Col>
									<ListGroup as='ul'>
										<ListGroup.Item as='li' disabled className='fw-bold'>
											student@strive.school
										</ListGroup.Item>
										<ListGroup.Item as='li' disabled className=' opacity-75'>
											Password: *******
										</ListGroup.Item>
										<ListGroup.Item as='li' disabled className=' opacity-75'>
											Phone: 321 044 12 79
										</ListGroup.Item>
									</ListGroup>
								</Col>
								<Col>
									<ListGroup as='ul' className='text-end text-primary'>
										<ListGroup.Item as='li' disabled className='text-primary'>
											Change account email
										</ListGroup.Item>
										<ListGroup.Item as='li' disabled className='text-primary'>
											Change password
										</ListGroup.Item>
										<ListGroup.Item as='li' disabled className='text-primary'>
											Change phone number
										</ListGroup.Item>
									</ListGroup>
								</Col>
							</Row>
							<Row className=' border-bottom border-secondary'>
								<Col>
									{' '}
									<ListGroup as='ul'>
										<ListGroup.Item as='li' disabled className='fw-bold'>
											P PayPal admin@strive.school
										</ListGroup.Item>
									</ListGroup>
								</Col>
								<Col>
									<ListGroup as='ul' className='text-end'>
										<ListGroup.Item as='li' disabled className='text-primary'>
											Update payment info
										</ListGroup.Item>
										<ListGroup.Item as='li' disabled className='text-primary'>
											Billing details
										</ListGroup.Item>
									</ListGroup>
								</Col>
							</Row>
							<Row>
								<Col className='d-flex justify-content-end'>
									<ListGroup as='ul' className='text-end'>
										<ListGroup.Item as='li' disabled className='text-end text-primary'>
											Redeem gift card promo code
										</ListGroup.Item>
										<ListGroup.Item as='li' disabled className='text-primary'>
											Where to buy gift cards
										</ListGroup.Item>
									</ListGroup>
								</Col>
							</Row>
						</Col>
					</Row>
					<Row className='border-bottom border-secondary'>
						<Col className=' opacity-50 text-black fw-bold my-3' md={4}>
							PLAN DETAILS
						</Col>
						<Col className='my-3'>
							<span className='text-black fw-bold'>Premium </span>
							<span className='border BORDER-2 border-black text-black p-1'>ULTRA HD</span>
						</Col>
						<Col>
							<ListGroup as='ul' className='text-end'>
								<ListGroup.Item as='li' disabled className='text-end text-primary my-2'>
									Change Plan
								</ListGroup.Item>
							</ListGroup>
						</Col>
					</Row>
					<Row className='border-bottom border-secondary'>
						<Col className=' opacity-50 text-black fw-bold my-3' md={4}>
							SETTINGS
						</Col>
						<Col>
							<ListGroup as='ul'>
								<ListGroup.Item as='li' disabled className='text-primary'>
									Parental controls
								</ListGroup.Item>
								<ListGroup.Item as='li' disabled className='text-primary'>
									Test Partecipation
								</ListGroup.Item>
								<ListGroup.Item as='li' disabled className='text-primary'>
									Manage download devices
								</ListGroup.Item>
								<ListGroup.Item as='li' disabled className='text-primary'>
									Activate a device
								</ListGroup.Item>
								<ListGroup.Item as='li' disabled className='text-primary'>
									Recent device streaming activity
								</ListGroup.Item>
								<ListGroup.Item as='li' disabled className='text-primary'>
									sing out of all devices
								</ListGroup.Item>
							</ListGroup>
						</Col>
					</Row>
					<Row>
						<Col className=' opacity-50 text-black fw-bold my-3' md={4}>
							MY PROFILE
						</Col>
						<Col className='my-3' md={4}>
							<Image
								src={ProfileImg}
								width='50'
								height='50'
								alt='avatar logo'
								className='bg-success'
							/>{' '}
							<span className='fw-bold text-dark'>Student Strive</span>
						</Col>

						<Col>
							{' '}
							<ListGroup as='ul' className='text-end'>
								<ListGroup.Item as='li' disabled className='text-primary ps-0'>
									Manage Profiles
								</ListGroup.Item>
								<ListGroup.Item as='li' disabled className='text-primary ps-0'>
									Add Profile email
								</ListGroup.Item>
							</ListGroup>
						</Col>
						<Row>
							<Col md={4}></Col>
							<Col>
								<ListGroup as='ul'>
									<ListGroup.Item as='li' disabled className='text-primary ps-0'>
										Language
									</ListGroup.Item>
									<ListGroup.Item as='li' disabled className='text-primary ps-0'>
										Playback settings
									</ListGroup.Item>
									<ListGroup.Item as='li' disabled className='text-primary ps-0'>
										Subtitle appearance
									</ListGroup.Item>
								</ListGroup>
							</Col>
							<Col>
								<ListGroup as='ul'>
									<ListGroup.Item as='li' disabled className='text-primary '>
										Viewing activity
									</ListGroup.Item>
									<ListGroup.Item as='li' disabled className='text-primary '>
										Ratings
									</ListGroup.Item>
								</ListGroup>
							</Col>
						</Row>
					</Row>
				</Container>
			</div>
		);
	}
}

export default SettingsAccount;
