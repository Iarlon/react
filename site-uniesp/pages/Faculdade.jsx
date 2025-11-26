import React from 'react'
import { Card, Container, Row, Col} from 'react-bootstrap'

const Faculdade = () => {
  return (
    <Container className='py-4'>
      <h2 className='mb-4'>A Faculdade</h2>
      <Card className='mb-4 shadow-sm'>
        <Card.Body>
          <p>A faculdade uniesp é boa</p>
          <p>O Kelson é o melhor professor</p>
        </Card.Body>
      </Card>
      <Row className='sm-1'>
        <Col md={4}>
          <Card className='text-center h-100 shadow-sm'>
            <Card.Img src='https://images.unsplash.com/photo-1556761175-4b46a572b786' style={{height: '200px', objectFit: 'cover'}}/>
            <Card.Body>
              <Card.Title>Vida no Campus</Card.Title>
              <Card.Text>Um ambiente vibrante e acolhedor, com atividades...</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className='text-center h-100 shadow-sm'>
            <Card.Img src='https://images.unsplash.com/photo-1571260899304-425eee4c7efc' style={{height: '200px', objectFit: 'cover'}}/>
            <Card.Body>
              <Card.Title>Biblioteca</Card.Title>
              <Card.Text>Uma biblioteca com um acervo completo e atualizado, incluindo livros, revistas e recursos digitais para a pesquisa e estudo</Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
        <Card className='text-center h-100 shadow-sm'>
            <Card.Img src='https://images.unsplash.com/photo-1652974731232-efc86a9bd985' style={{height: '200px', objectFit: 'cover'}}/>
            <Card.Body>
              <Card.Title>Prédio Principal</Card.Title>
              <Card.Text>O centor de nossa instituição, com salas de aula modernas e laboratórios equipados para atender às necessidades dos cursos</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Faculdade