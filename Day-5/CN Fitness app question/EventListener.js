import { fitnessApp } from "./fitness.js";

const fitnessListener = new fitnessApp()

// Listeners
function congo(){
    console.log('Congratulations! you have reached the goal...');
}

fitnessListener.addListener('goalReached',congo)

fitnessListener.addExercise('reached goal')