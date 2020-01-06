import React, {Component} from 'react';
import {
  Container,
  Header,
  Content,
  Footer,
  FooterTab,
  Button,
  Icon,
  Text,
} from 'native-base';
import {withNavigation} from 'react-navigation';

class FooterTabs extends Component {
  render() {
    return (
      <Footer>
        <FooterTab style={{backgroundColor: '#FFFFFF'}}>
          <Button
            style={{color: '#c62828'}}
            vertical
            onPress={() => {
              this.props.navigation.navigate('Home');
            }}>
            <Icon name="home" />
            <Text>Home</Text>
          </Button>
          <Button
            vertical
            onPress={() => {
              this.props.navigation.navigate('Category');
            }}>
            <Icon name="navigate" />
            <Text>Category</Text>
          </Button>
          <Button
            vertical
            onPress={() => {
              this.props.navigation.navigate('Detail');
            }}>
            <Icon name="person" />
            <Text>Sign in</Text>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}

export default withNavigation(FooterTabs);
