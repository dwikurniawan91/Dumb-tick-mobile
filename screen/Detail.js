import React from 'react';
import {Image} from 'react-native';
import {
  Container,
  Content,
  Text,
  Card,
  CardItem,
  Button,
  Icon,
  Left,
  Body,
  Right,
} from 'native-base';
import axios from 'axios';
import Footer from '../components/Footer';

export default class Detail extends React.Component {
  constructor() {
    super();
    this.state = {
      events: [],
    };
  }

  componentDidMount() {
    this.getEvent();
  }

  getEvent = async () => {
    const {navigation} = this.props;
    const id = JSON.stringify(navigation.getParam('itemId'));
    console.log(id);
    try {
      let res = await axios.get(`http://172.20.10.2:9000/api/v1/event/${id}`);
      let data = res.data;
      this.setState({events: data});
      console.log(this.state.events);
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <Container>
        {/* <HeaderApp /> */}
        <Content padder>
          <Card>
            <CardItem>
              <Left>
                <Body>
                  <Text>
                    {this.state.events.category_id &&
                      this.state.events.category_id.name}
                  </Text>
                </Body>
              </Left>
              <Right>
                <Text note>{this.props.date}</Text>
              </Right>
            </CardItem>
            <CardItem cardBody>
              <Image
                source={{
                  uri: this.state.events.img,
                }}
                style={{height: 200, width: null, flex: 1}}
              />
            </CardItem>
            <CardItem>
              <Left>
                <Body>
                  <Text>{this.state.events.title}</Text>
                </Body>
              </Left>
              <Right>
                <Text style={{marginLeft: 80}}>
                  Rp.{this.state.events.price}
                </Text>
              </Right>
            </CardItem>
            <CardItem>
              <Body>
                <Text>{this.state.events.description}</Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button rounded danger>
                  <Text>-</Text>
                </Button>
                <Text>12</Text>
                <Button style={{marginLeft: 15}} rounded danger>
                  <Text>+</Text>
                </Button>
              </Left>
              <Right>
                <Button style={{width:100, textAlign: 'center'}} rounded danger>
                  <Text style={{width:100, textAlign: 'center'}}>Buy</Text>
                </Button>
              </Right>
            </CardItem>
          </Card>
        </Content>
        <Footer />
      </Container>
    );
  }
}
