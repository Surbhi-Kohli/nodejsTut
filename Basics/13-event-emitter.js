const EventEmitter = require('events');
//if u want to create somthing custom, u needto extend the class
const customEmitter = new EventEmitter();
//on - listen for an event
//emit - emit an event

customEmitter.on('response',(name,id)=>{
    console.log(`data received for user: ${name} & id: ${id}`)
})
customEmitter.on('response',()=>{
    console.log(`data received`)
})

//customEmitter.emit('response')//we can also pass arguments as below
customEmitter.emit('response','john',22);
//data received for user: john & id: 22
//data received

/**
 * The order between the on and emit matters.
 * If you emit an event before having listeners (i.e emitter.on()), you wont get any output:
 * 
 * Below code is incorrect way of listening to event
 * customEmitter.emit('response','john',22);
 * customEmitter.on('response',(name,id)=>{
    console.log(`data received for user: ${name} & id: ${id}`)
})
 */
