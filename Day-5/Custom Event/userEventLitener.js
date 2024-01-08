import { userEvents } from "./customEvent.js";

const us = new userEvents();

// Listeners
function saveToDb(){
    console.log("SAVING TO DB");
}
function notifyUsers(){
    console.log("NOTIFICATIONS SENT TO USERS");
}
function updateFeed(){
    console.log("FEED UPDATED FOR CONNECTED USERS");
}

us.addListener('postCreated',saveToDb);
us.addListener('postCreated',notifyUsers);
us.addListener('postCreated',updateFeed);

us.createPost('First post with event listener')
