import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container, Row, Col } from 'react-bootstrap'
import './Blog.css'
import { useNavigate } from 'react-router-dom';




export default function ImgMediaCard() {
  const navigate = useNavigate();

  return (

    <>

      <div className='bg'> <h1 className='blog-titre'> Best React UI Framework</h1></div>

      <Container fluid>
        <Row>
         <Col></Col>
         
          <Col >
            <Card sx={{ maxWidth: 345 }}>

              <CardMedia
                component="img"
                alt="green iguana"
                height="200"
                width="200"
                image="https://miro.medium.com/max/1400/1*5Jv5YAGqu3zL5endb8dtBA.png"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  React Bootstrap
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  React-Bootstrap is a complete re-implementation of the Bootstrap components using React. It has no dependency on either bootstrap.j
                </Typography>
              </CardContent>
              <CardActions>

                <Button
                  onClick={() => window.location.href= "https://react-bootstrap.github.io/getting-started/why-react-bootstrap/"}
                  size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Col>
          
          <Col>
            <Card sx={{ maxWidth: 345 }}>

              <CardMedia
                component="img"
                alt="green iguana"
                height="200"
                width="200"
                image="https://miro.medium.com/max/1200/1*ZEUZtH8wL9vUDLrn5guwOQ.png"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Material-UI
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Material UI is an open-source React component library that implements Google's Material Design.
                </Typography>
              </CardContent>
              <CardActions>

                <Button
                  onClick={() => window.location.href= "https://mui.com/material-ui/getting-started/overview/"}
                  size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Col>
          <Col>
            <Card sx={{ maxWidth: 345}}>

              <CardMedia
                component="img"
                alt="green iguana"
                height="200"
                width="200"
                image="https://miro.medium.com/max/898/1*fb3NfjJ0uoKuYYNAh71kUg.png"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Ant Design
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Following the Ant Design specification, we developed a React UI library antd 
                  that contains a set of high quality components and demos for building rich, interactive user interfaces.
                </Typography>
              </CardContent>
              <CardActions>
                
                <Button 
                onClick={() => window.location.href= "https://ant.design/docs/react/introduce"}
                size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Col>
          <Col></Col>
          
        </Row>
      </Container>
    </>
  );
}


