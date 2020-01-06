import React, {Component} from 'react';
import {Image} from 'react-native';
import {
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
  Content,
} from 'native-base';
import {withNavigation} from 'react-navigation';
import {StyleSheet, TouchableOpacity} from 'react-native';

class Events extends Component {
  render() {
    return (
      <Content>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('Detail');
          }}>
          <Card>
            <CardItem />
            <CardItem cardBody>
              <Image
                source={{
                  uri: this.props.img,
                }}
                style={styles.img}
              />
            </CardItem>
            <Left>
              <Body>
                <Text>{this.props.title}</Text>
                <Text note>{this.props.date}</Text>
              </Body>
            </Left>
            <CardItem>
            <Button transparent>
                <Icon
                  name="heart"
                  style={{marginRight: 25, fontSize: 37, color: '#c62828'}}
                />
              </Button>

              <Left>
                <Text style={{marginLeft: 50}}>Rp.{this.props.price}</Text>
              </Left>
              <Right>
                <Button style={{width: 70, textAlign: 'center'}} rounded danger>
                  <Text style={{width: 100, textAlign: 'center'}}>Buy</Text>
                </Button>
              </Right>
            </CardItem>
          </Card>
        </TouchableOpacity>
      </Content>
    );
  }
}

export default withNavigation(Events);

const styles = StyleSheet.create({
  img: {
    height: 150,
    width: null,
    flex: 1,
  },
});
