import * as firebase from "firebase";

const config = {
    apiKey: "AIzaSyBRG7Rkg_vNo1nh6KngFWliOhKOnl8gdes",
    authDomain: "nba-fullstack-app.firebaseapp.com",
    databaseURL: "https://nba-fullstack-app.firebaseio.com",
    projectId: "nba-fullstack-app",
    storageBucket: "nba-fullstack-app.appspot.com",
    messagingSenderId: "272040842298"
};

firebase.initializeApp(config);

const firebaseDB = firebase.database();
const firebaseArticles = firebaseDB.ref("articles");
const firebaseTeams = firebaseDB.ref("teams");
const firebaseVideos = firebaseDB.ref("videos");

const firebaseLooper = snapshot => {
    const data = [];
    snapshot.forEach(childSnapshot => {
        data.push({
            ...childSnapshot.val(),
            id: childSnapshot.key
        });
    });
    return data;
};

export {
    firebase,
    firebaseDB,
    firebaseArticles,
    firebaseTeams,
    firebaseVideos,
    firebaseLooper
};
