import React from 'react';
import { Grid, Image, Segment, Placeholder, Container, Header } from 'semantic-ui-react'


const About_Us = () => {

  return (
    <>
    <div className="section" style={{ textAlign: 'center', backgroundColor: "#C96C47", padding: '400px 0'}}>
      <Container>
        <Grid columns={2} relaxed='very'>
          <Grid.Column>
              <Header as='h2' style={{ color: 'white'}}>About Us</Header>
            <div style={{ color: "#8A691E"}}>
              <p> ──────────────── </p>
            </div>
            <div style={{ color: 'white', padding: '15px 0'}}>
              <p>Contrary to popular belief, Lorem isn’t simply random text. It has roots in a of classical Latin literature from 45 BC, making it over 2000 years old. Avalon’s leading hotels with gracious island hospitality, thoughtful amenities and distinctive.</p>
              <p>Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage ...</p>
            </div>
              </Grid.Column>
          <Grid.Column>
            {/* <div style={{ height: 150, width: 150 }}> */}
            <Image src = 'https://assets.website-files.com/5b1b0ce41a995ed190fdadb0/5c59f48d3405b22b0ccb5c44_elevations.jpg'size='large'/>
            {/* </div> */}
        </Grid.Column>
        </Grid>

        <Grid columns={4} relaxed='very'>
          <Grid.Row>
            <Grid.Column>
              <Segment>
                <div className="ui fluid image">
                  <Image src = '../../../images/about_us/icons8-bed-100.png' size='small'/>
                  <div style={{position: 'absolute', bottom: -10, width: '100%', height: 'auto'}}>MASTER BEDROOMS</div>
                </div>
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment>
                <div className="ui fluid image">
                  <Image src = '../../../images/about_us/icons8-lake-100.png' size='small'/>
                  <div style={{position: 'absolute', bottom: -10, width: '100%', height: 'auto'}}>LAKE VIEW</div>
                </div>
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment>
                <div className="ui fluid image">
                  <Image src = '../../../images/about_us/icons8-lap-pool-100.png' size='small'/>
                  <div style={{position: 'absolute', bottom: -10, width: '100%', height: 'auto'}}>POOL & SPA</div>
                </div>
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment>
                <div className="ui fluid image">
                  <Image src = '../../../images/about_us/icons8-internet-antenna-96.png' size='small'/>
                  <div style={{position: 'absolute', bottom: -10, width: '100%', height: 'auto'}}>WIFI COVERAGE</div>
                </div>
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Grid columns={4} relaxed='very'>
          <Grid.Row>
            <Grid.Column>
              <Segment>
                <div className="ui fluid image">
                  <Image src = '../../../images/about_us/icons8-package-100.png' size='small'/>
                  <div style={{position: 'absolute', bottom: -10, width: '100%', height: 'auto'}}>AWESOME PACKAGES</div>
                </div>
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment>
                <div className="ui fluid image">
                  <Image src = '../../../images/about_us/icons8-vacuum-cleaner-160.png' size='small'/>
                  <div style={{position: 'absolute', bottom: -10, width: '100%', height: 'auto'}}>CLEANING EVERYDAY</div>
                </div>
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment>
                <div className="ui fluid image">
                  <Image src = '../../../images/about_us/icons8-meal-100.png' size='small'/>
                  <div style={{position: 'absolute', bottom: -10, width: '100%', height: 'auto'}}>BUFFET BREAKFAST</div>
                </div>
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment>
                <div className="ui fluid image">
                  <Image src = '../../../images/about_us/icons8-taxi-100.png' size='small'/>
                  <div style={{position: 'absolute', bottom: -10, width: '100%', height: 'auto'}}>AIRPORT TAXI</div>
                </div>
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </div>
    </>
    )
}

export default About_Us;


