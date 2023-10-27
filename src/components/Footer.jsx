import { Container, Row, Col, Button } from 'react-bootstrap';
import ListGroupFooter from './ListGroupFooter';
import { BsFacebook, BsInstagram, BsTwitter } from 'react-icons/bs';

import { IoLogoYoutube } from 'react-icons/io';

const Footer = () => {
	return (
		<Container>
			<Row>
				<Col>
					<BsFacebook className='text-secondary fs-2 m-2' />
					<BsInstagram className='text-secondary fs-2 m-2' />
					<BsTwitter className='text-secondary fs-2 m-2' />
					<IoLogoYoutube className='text-secondary fs-2 m-2' />
				</Col>
			</Row>
			<Row>
				<Col>
					<ListGroupFooter />
				</Col>
			</Row>
			<Row>
				<Col>
					<Button
						className='bd-dark border border-1 border-secondary text-secondary my-4'
						variant='none'>
						Service Code
					</Button>
				</Col>
			</Row>
			<Row>
				<Col md={12}>
					<div className='text-secondary'>© 1997-2019 Netflix, Inc. i-0d00fcda2fdf9c0de</div>
				</Col>
			</Row>
		</Container>
	);
};

export default Footer;
