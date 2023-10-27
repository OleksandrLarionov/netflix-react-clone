import { Col, Row } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';

const ListGroupFooter = () => {
	return (
		<Row>
			<Col md={3}>
				<ListGroup>
					<ListGroup.Item>Audio and Subtitles</ListGroup.Item>
					<ListGroup.Item>Media Center</ListGroup.Item>
					<ListGroup.Item>Privacy</ListGroup.Item>
					<ListGroup.Item>Contact Us</ListGroup.Item>
				</ListGroup>
			</Col>
			<Col md={3}>
				<ListGroup>
					<ListGroup.Item>Audio Description</ListGroup.Item>
					<ListGroup.Item>Investor Relations</ListGroup.Item>
					<ListGroup.Item>Legal Notices</ListGroup.Item>
				</ListGroup>
			</Col>
			<Col md={3}>
				<ListGroup>
					<ListGroup.Item>Help Center</ListGroup.Item>
					<ListGroup.Item>Jobs</ListGroup.Item>
					<ListGroup.Item>Cookie Preferences</ListGroup.Item>
				</ListGroup>
			</Col>
			<Col md={3}>
				<ListGroup>
					<ListGroup.Item>Gift Cards</ListGroup.Item>
					<ListGroup.Item>Terms of Use</ListGroup.Item>
					<ListGroup.Item>Corporate Information</ListGroup.Item>
				</ListGroup>
			</Col>
		</Row>
	);
};

export default ListGroupFooter;
