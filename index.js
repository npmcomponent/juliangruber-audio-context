var Context = window.AudioContext || window.webkitAudioContext;
if (Context) module.exports = new Context;
