export default {
  name: 'js-test-init',
  initialize(){
    // call RecordRTC function
    let recorder = RecordRTC(stream, {
      type: 'audio'
  });

  console.log('recorder', recorder);
  }
}