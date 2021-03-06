import React from 'react';
import { Container, Card, Placeholder, Header, Image } from 'semantic-ui-react'


class Rooms_Home extends React.Component {

  render () {
  return (
    
    <div className="section" style={{ textAlign: 'center', backgroundColor: "#2C533C", padding: '650px 0' }}>
      <Container>
     
        <Header as='h2' style={{ color: 'white'}}> Our Rooms </Header>
      <div style={{ color: "#8A691E"}}>
        <h3> ── ▇ ── </h3>
      </div>
      <div style={{padding: '15px 0 ', color: "#E4E1E6"}}>
        <p>
          When you host a party or family reunion, <br />
          the special celebrations let you strengthen bonds with
        </p>
      </div>

        <div style={{padding: '15px 0 '}}>
        <Card.Group itemsPerRow={3}>
          <Card>
            <Card.Content>
            <Image src = '../../../images/our_rooms/2_Bedroom_.jpeg' size='medium'/>
            </Card.Content>
          </Card>




          <Card>
            <Card.Content>
            <Image src = '../../../images/our_rooms/2Bedroom.jpeg' size='medium'/>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
            <Image src = '../../../images/our_rooms/2Hallway.jpeg' size='medium'/>
            </Card.Content>
          </Card>
        </Card.Group>
        <Card.Group itemsPerRow={3}>
          <Card>
            <Card.Content>
            <Image src = '../../../images/our_rooms/Cabin_Bathroom.jpeg' size='medium'/>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
            <Image src = '../../../images/our_rooms/Cabin_SideAngle.jpeg' size='medium'/>
            </Card.Content>
          </Card>
          <Card>
            <Card.Content>
            <Image src = '../../../images/our_rooms/Hallway.jpeg' size='medium'/>
            </Card.Content>
          </Card>
        </Card.Group>
  </div>
      </Container>
    </div>

  )
  }
}

export default Rooms_Home;