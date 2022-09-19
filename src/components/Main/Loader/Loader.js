import Spinner from 'react-bootstrap/Spinner';
import './Loader.scss';

export function Loader () {
  return (
    <div className='loader'>
      <Spinner animation="border" variant="danger" />
    </div>
  );
}
