import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useContext } from "react"
import { context } from '../App'


const CardComponent = ({ img, product, description, price, id}) => {
  const {setView} = useContext(context);

  return (
    <Card style={{ width: '18rem', height: '43rem' }}>
      <Card.Img style={{ height: '23rem' }} variant='top' src={img} />
      <Card.Body>
        <Card.Title>{product}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Card.Text>
          {price}
        </Card.Text>
        <Button variant='primary' onClick={() => {setView('detail')}}>Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default CardComponent;