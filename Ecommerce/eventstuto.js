const EventEmitter = require('events');
const eventEmitter = new EventEmitter();
eventEmitter.on('tutorial',()=>{
    console.log("tutorial event has occured");
});
eventEmitter.emit('tutorial');
class Person extends EventEmitter{
    constructor(name){
        super();
        this._name=name;
    }
    get name(){
        this._name;
    }
    

}
let Pedro = new Person('Pedro');
Pedro.on('name',()=>{
    console.log("pedro event is called");
});
Pedro.emit('name');
