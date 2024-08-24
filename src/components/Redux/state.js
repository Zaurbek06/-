const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY"
const SEND_MESSAGE = "SEND_MESSAGE"

let store = {
  _state: {

    
    dialogsPage: {
      dialogs: [
        { id: 1, name: "Dima" },
        { id: 2, name: "Andrey" },
        { id: 3, name: "Sveta" },
        { id: 4, name: "Sasha" },
        { id: 5, name: "Viktor" },
        { id: 6, name: "Valera" },
      ],
  
      messages: [
        { id: 1, message: "hey" },
        { id: 2, message: "hay are you Valer" },
        { id: 3, message: "Brom" },
      ],
      newMessageBody: ""
    },
  
    profilePage: {
      posts: [
        { id: 1, message: "hey okey", likesCount: "Like:15" },
        { id: 2, message: "what is you day today", likesCount: "Like:7" },
      ],
      newPostText: "kamasutra",
    },
  },

  getState () {
    return this._state
  },

  _rerenderEntireTree () {
    console.log("state change");
  },

  subscribe (observer) {
    this._rerenderEntireTree = observer;
  },

  dispatch (action) {
    if(action.type === ADD_POST){
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: "Like:0",
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = "";
      this._rerenderEntireTree(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEX) {
      this._state.profilePage.newPostText = action.newText;
      this._rerenderEntireTree(this._state);
    } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
      this._state.dialogsPage.newMessageBody = action.body
      this._rerenderEntireTree(this._state)
    }  else if (action.type === SEND_MESSAGE) {
      let body = this._state.dialogsPage.newMessageBody
      this._state.dialogsPage.newMessageBody = ''
      this._state.dialogsPage.messages.push({ id:6, message:body})
      this._rerenderEntireTree(this._state)
    } 
  }
 

}

let ADD_POST = "ADD-POST"

let UPDATE_NEW_POST_TEX = "UPDATE-NEW-POST-TEX"


export let addPostActionCreator = () => {
 return {
  type: ADD_POST
 } 
};


export let onPostChangeActionCreator = (text) => {
 return {
  type: UPDATE_NEW_POST_TEX, newText: text
 }
} 

export let sendMessageCreator = () => {
  return {
   type: SEND_MESSAGE
  } 
 };

 export let updateNewMessageBodyCreator = (body) => {
  return {
   type: UPDATE_NEW_MESSAGE_BODY, body: body
  }
 } 










export default store;
