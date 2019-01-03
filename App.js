import React, { Component } from 'react';
import { AppRegistry, TextInput, View, Text, StyleSheet, ScrollView, Button } from 'react-native';

const styles = StyleSheet.create({
  styleMainView:{
    padding : 10
  },
  styleMain: {
    flexDirection: 'row',
    padding : 15,
    justifyContent :'space-between'
  },
  textMain: { 
    color:'darkblue',
    fontSize:20,
  },

  styleTextView: {
    flexDirection: 'column',
    justifyContent: 'center',
    flex:1
  },

  textInput: {
    borderBottomColor: '#818181',
    borderBottomWidth: 1,
    fontSize:20,
    flex:2.5,
  },

  
});

export default class Useless extends Component {
  constructor(props) {
    super(props);
    this.state = { 
       name: '', 
       address: '', 
       Web: '', 
       About: '', 
       Username: '', 
       Email: '' , 
       Password: '',
       OnFormSubmit : true
     };
   
  }

   onPressReset = () => {
    this.setState({
      name: '',
      address: '',
      Web: '',
      About: '',
      Username: '',
      Email: '',
      Password: ''
    })
  }

   onPressDone = () => {
    // console.warn('asdhsahd-------------------------',this.state);
    this.setState({
         OnFormSubmit: !this.state.OnFormSubmit 

    }); 
  }

  render() {
    const {styleMain, textMain, textInput,styleMainView, styleTextView, OnPresstextInput}= styles;
    const {name, address, Web, About, OnFormSubmit } = this.state;
    return (
      <ScrollView>
      <View style={styleMainView}>
          <View style={styleMain}>
            <View style = {styleTextView} >
              <Text style={textMain}>Full Name:</Text>
            </View>
            <TextInput
              style={textInput}
              onChangeText={(name) => this.setState({name})}
              placeholder="Enter your name"
              value={name}
              editable={OnFormSubmit}

            />
          </View>

          <View style={styleMain}>
            <View style = {styleTextView} >
              <Text style={textMain}>Address:</Text>
            </View>
            <TextInput
              style={textInput}
              onChangeText={(address) => this.setState({address})}
              placeholder="Enter your address"
              value={this.state.address}
              multiline = {true}
              editable={this.state.OnFormSubmit}
            />
          </View>

          <View style={styleMain}>
            <View style = {styleTextView} >
              <Text style={textMain}>Web:</Text>
            </View>
            <TextInput
              style={textInput}
              onChangeText={(Web) => this.setState({Web})}
              placeholder="Enter Web Address"
              value={this.state.Web}
              editable={this.state.OnFormSubmit}
            />
          </View>

          <View style={styleMain}>
            <View style = {styleTextView} >
              <Text style={textMain}>About:</Text>
            </View>
            <TextInput
              style={textInput}
              onChangeText={(About) => this.setState({About})}
              placeholder="Write About your self in one line"
              value={this.state.About}
              multiline = {true}
              editable={this.state.OnFormSubmit}
            />
          </View>

          <View style={styleMain}>
            <View style = {styleTextView} >
              <Text style={textMain}>Username:</Text>
            </View>
            <TextInput
              style={textInput}
              onChangeText={(Username) => this.setState({Username})}
              placeholder="Enter Username"
              value={this.state.Username}
              editable={this.state.OnFormSubmit}
            />
          </View>

          <View style={styleMain}>
            <View style = {styleTextView} >
              <Text style={textMain}>Email:</Text>
            </View>
            <TextInput
              style={textInput}
              onChangeText={(Email) => this.setState({Email})}
              placeholder="Enter your Email"
              value={this.state.Email}
              keyboardType='email-address'
              editable={this.state.OnFormSubmit}
            />
          </View>

          <View style={styleMain}>
            <View style = {styleTextView} >
              <Text style={textMain}>Password:</Text>
            </View>
            <TextInput
              style={textInput}
              onChangeText={(Password) => this.setState({Password})}
              placeholder="Enter your Password"
              value={this.state.Password}
              secureTextEntry={true}
              editable={this.state.OnFormSubmit}
            />
          
          </View>
          <View style={styleMain}>
            <Button
              title="Reset"
              color="#841584"
              onPress={this.onPressReset}
              disabled={!this.state.OnFormSubmit}
            />
            <Button
              title={this.state.OnFormSubmit?"Done":"Edit"}
              color="#841584"
              onPress={this.onPressDone}
            />
          </View>
      </View>
      </ScrollView>
    );
  }
}