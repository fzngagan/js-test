export default {
  name: 'js-test-init',
  initialize(){
    // call RecordRTC function
    navigator.mediaDevices.getUserMedia({
      audio: true
  }).then(function(stream) {
      let recorder = RecordRTC(stream, {
        type: 'audio'
      });

      console.log('recorder', recorder);

  });
  }
}
