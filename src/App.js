import React from 'react'
import './App.css';

import firebase from './firebase/app'
import 'firebase/firestore'
import 'fire/auth'

import {useAuthState} from "react-firebase-hooks/auth"
import {useCollectionData} from "react-firebase-hooks/firestore"


firebase.initializaApp({
  //config
})

const auth = firebase.auth();
const firestore = firebase.firestore();



function App() {
  return (
    <div className="App">
      <header className="App-header">
       
      </header>
    </div>
  );
}

export default App;
