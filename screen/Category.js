import React, {Component} from 'react';
import {
  Container,
  Header,
  Left,
  Body,
  Right,
  Button,
  Icon,
  Title,
  Segment,
  Content,
  Text,
} from 'native-base';
import Footer from '../components/Footer';

export default class SegmentOutsideHeaderExample extends Component {
  render() {
    return (
      <Container>
        <Segment style={{backgroundColor: '#c62828'}}>
          <Button first>
            <Text>Music</Text>
          </Button>
          <Button>
            <Text>Science</Text>
          </Button>
          <Button last active>
            <Text>Sport</Text>
          </Button>
          <Button>
            <Text>Programming</Text>
          </Button>
        </Segment>
        <Content padder>
          <Text>Content will show here</Text>
        </Content>
        <Footer />
      </Container>
    );
  }
}
