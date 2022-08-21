
import './Nav.scss';
import Nav from 'react-bootstrap/Nav';

export function List () {
  return (
    <Nav defaultActiveKey="/home" as="ul">
      <Nav.Item as="li">
        <Nav.Link href="/home" className='item'>Link</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="link-1" className='item'>Link</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="link-2" className='item'>Link</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}