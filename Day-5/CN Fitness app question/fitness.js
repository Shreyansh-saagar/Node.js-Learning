import * as Events from 'events'

export class fitnessApp extends Events.EventEmitter{
    addExercise = (status)=>{
            this.emit('goalReached')
    }
}