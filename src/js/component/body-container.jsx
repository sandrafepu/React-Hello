import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React from "react";

function BasicExample() {
  return (
    <div className='row'>
      <div class="col-sm-3">
    <Card style={{ width: '18rem' }}>
    <img src="http://via.placeholder.com/500x325" class="card-img-top" alt="..."/>
      <Card.Body>
      <div className="Title"><Card.Title>Card Title</Card.Title></div>
      <div className='text-card'><Card.Text>
        Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.
        </Card.Text></div>
        <div className="button"><Button variant="primary">Find Out More!</Button></div>
      </Card.Body>
    </Card>
      </div>
      <div class="col-sm-3">
    <Card style={{ width: '18rem' }}>
    <img src="http://via.placeholder.com/500x325" class="card-img-top" alt="..."/>
      <Card.Body>
      <div className="Title"><Card.Title>Card Title</Card.Title></div>
        <div className='text-card'><Card.Text>
        Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.
        </Card.Text></div>
        <div className="button"><Button variant="primary">Find Out More!</Button></div>
      </Card.Body>
    </Card>
      </div>
      <div class="col-sm-3">
    <Card style={{ width: '18rem' }}>
    <img src="http://via.placeholder.com/500x325" class="card-img-top" alt="..."/>
      <Card.Body>
        <div className="Title"><Card.Title>Card Title</Card.Title></div>
        <div className='text-card'><Card.Text>
        Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.
        </Card.Text></div>
        <div className="button"><Button variant="primary">Find Out More!</Button></div>
      </Card.Body>
    </Card>
      </div>
      <div class="col-sm-3">
    <Card style={{ width: '18rem' }}>
    <img src="http://via.placeholder.com/500x325" class="card-img-top" alt="..."/>
      <Card.Body>
      <div className="Title"><Card.Title>Card Title</Card.Title></div>
      <div className='text-card'><Card.Text>
        Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.
        </Card.Text></div>
        <div className="button"><Button variant="primary">Find Out More!</Button></div>
      </Card.Body>
    </Card>
      </div>
    </div>
  );
}

export default BasicExample;