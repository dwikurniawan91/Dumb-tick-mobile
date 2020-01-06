import React, {Component} from 'react';
import Footer from '../components/Footer';
import {Container, Content, View, Text} from 'native-base';
import Events from '../components/Events';
import {StyleSheet} from 'react-native';
import EventsBottom from '../components/EventsBottom';
import axios from 'axios';
import {FlatList} from 'react-native-gesture-handler';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      events: [],
    };
  }

  renderToday = ({item}) => {
    return (
      <Events
        getId={this.handlePressEvent(item.id)}
        img={item.img}
        title={item.title}
        price={item.price}
        date={item.startTime}
      />
    );
  };
  renderUpcoming = ({item}) => {
    return (
      <EventsBottom
        getId={this.handlePressEvent(item.id)}
        img={item.img}
        title={item.title}
        price={item.price}
        date={item.startTime}
      />
    );
  };

  componentDidMount() {
    this.getEvent();
  }

  getEvent = async () => {
    try {
      let res = await axios.get('http://172.20.10.2:9000/api/v1/events');
      let data = res.data;
      this.setState({events: data});
      console.log(this.state.events);
    } catch (error) {
      console.log(error);
    }
  };

  handlePressEvent = id => () => {
    this.props.navigation.navigate('Detail', {itemId: id});
  };

  render() {
    return (
      <Container>
        <Content>
          <View>
            <Text style={styles.title}>Today</Text>
          </View>
          <FlatList
            horizontal
            data={this.state.events}
            renderItem={this.renderToday}
            keyExtractor={item => item.id.toString()}
            showsHorizontalScrollIndicator={false}
          />
          <View>
            <Text style={styles.title}>Upcoming</Text>
          </View>
          <FlatList
            data={this.state.events}
            renderItem={this.renderUpcoming}
            keyExtractor={item => item.id.toString()}
            showsHorizontalScrollIndicator={false}
          />
          {/* <EventsBottom /> */}
        </Content>
        <Footer />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    marginLeft: 20,
    marginTop: 15,
    marginBottom: 15,
    fontSize: 25,
    color: '#c62828',
  },
  img: {
    height: 200,
    width: null,
    flex: 1,
  },
});
