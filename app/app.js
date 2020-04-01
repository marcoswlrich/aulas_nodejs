var promise = require('promise'); 
var EventEmitter = require('events');

var emitter = new EventEmitter();

emitter.on('meu_evento', function(){
    console.log('Meu evento');
});

emitter.emit('meu_evento');