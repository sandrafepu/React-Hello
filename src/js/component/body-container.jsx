import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from "react";

function BodyContainer(props) {
  console.log(props);

  return (
    
      <div class="col-xl-3 col-xs-12">
    <Card style={{ width: '18rem' }}>
    <img src={props.item.image} class="card-img-top" alt="..."/>
      <Card.Body>
      <div className="Title"><Card.Title>{props.item.title}</Card.Title></div>
      <div className='text-card'><Card.Text>{props.item.text}</Card.Text></div>
        <div className="button"><Button variant="primary">Find Out More!</Button></div>
      </Card.Body>
    </Card>
      </div>
      
  );
}

export default BodyContainer;