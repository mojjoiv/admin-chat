import React, { Component } from "react";
// import Button from "../Common/Button";
// import Table from "../Common/Table";
// import EditPersonnel from "./EditPersonnel";
import ChatList from '../chatlist/ChatList';
import ChatView from '../chatview/ChatView';
import ChatTextBox from '../chattextbox/ChetTextBox';
import {withRouter} from 'react-router-dom';
import NewChat from '../newchat/NewChat'
const firebase = require("firebase");

class PersonnelList extends Component {
  state = {
    selectedChat: null,
    newChatFormVisible: false,
    email: null,
    friends: [],
    chats: []
  };

  // signOut = () => firebase.auth().signOut();

  submitMessage = (msg) => {
    const docKey = this.buildDocKey(this.state.chats[this.state.selectedChat]
      .users
      .filter(_usr => _usr !== this.state.email)[0])
    firebase
      .firestore()
      .collection('chats')
      .doc(docKey)
      .update({
        messages: firebase.firestore.FieldValue.arrayUnion({
          sender: this.state.email,
          message: msg,
          timestamp: Date.now()
        }),
        receiverHasRead: false
      });
  }

  buildDocKey = (friend) => [this.state.email, friend].sort().join(':');

  newChatBtnClicked = () => this.setState({ newChatFormVisible: true, selectedChat: null });

  newChatSubmit = async (chatObj) => {
    const docKey = this.buildDocKey(chatObj.sendTo);
    await
      firebase
        .firestore()
        .collection('chats')
        .doc(docKey)
        .set({
          messages: [{
            message: chatObj.message,
            sender: this.state.email
          }],
          users: [this.state.email, chatObj.sendTo],
          receiverHasRead: false
        })
    this.setState({ newChatFormVisible: false });
    this.selectChat(this.state.chats.length - 1);
  }

  selectChat = async (chatIndex) => {
    await this.setState({ selectedChat: chatIndex, newChatFormVisible: false });
    this.messageRead();
  }

  goToChat = async (docKey, msg) => {
    const usersInChat = docKey.split(':');
    const chat = this.state.chats.find(_chat => usersInChat.every(_user => _chat.users.includes(_user)));
    this.setState({ newChatFormVisible: false });
    await this.selectChat(this.state.chats.indexOf(chat));
    this.submitMessage(msg);
  }


  messageRead = () => {
    const chatIndex = this.state.selectedChat;
    const docKey = this.buildDocKey(this.state.chats[chatIndex].users.filter(_usr => _usr !== this.state.email)[0]);
    if(this.clickedMessageWhereNotSender(chatIndex)) {
      firebase
        .firestore()
        .collection('chats')
        .doc(docKey)
        .update({ receiverHasRead: true });
    } else {
      console.log('Clicked message where the user was the sender');
    }
  }

  clickedMessageWhereNotSender = (chatIndex) => this.state.chats[chatIndex].messages[this.state.chats[chatIndex].messages.length - 1].sender !== this.state.email;

  componentWillMount = () => {
      firebase.auth().onAuthStateChanged(async _usr => {
        if(!_usr)
          this.props.history.push('/login');
        else {
          await firebase
            .firestore()
            .collection('chats')
            .where('users', 'array-contains', _usr.email)
            .onSnapshot(async res => {
              const chats = res.docs.map(_doc => _doc.data());
              await this.setState({
                email: _usr.email,
                chats: chats,
                friends: []
              });
            })
        }
    });
  }
  render() {

    const { email, chats, selectedChat,  } = this.state;

    return (
      <div className='dashboard-container' id='dashboard-container'>
          <div className="card-body">
            <div className="table-responsive">
            <ChatList history={this.props.history}
            userEmail={email}
            selectChatFn={this.selectChat}
            chats={chats}
            selectedChatIndex={selectedChat}
            newChatBtnFn={this.newChatBtnClicked}/>
            {
            this.state.newChatFormVisible ? null : <ChatView
              user={email}
              chat={chats[selectedChat]}/>
          }

{
            this.state.selectedChat !== null && !this.state.newChatFormVisible ? <ChatTextBox userClickedInputFn={this.messageRead} submitMessageFn={this.submitMessage}/> : null
          }
          {
            this.state.newChatFormVisible ? <NewChat goToChatFn={this.goToChat} newChatSubmitFn={this.newChatSubmit}/>: null
          }
          {/* <Button onClick={this.signOut} className={classes.signOutBtn}>Sign Out</Button> */}

          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(PersonnelList);
