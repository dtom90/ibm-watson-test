const AssistantV1 = require('ibm-watson/assistant/v1')

const assistant = new AssistantV1({
  // serviceName: 'assistant', // THIS IS REQUIRED TO WORK
  version: '2020-04-01'
});

assistant.message({
  workspaceId: '<workspaceId>',
  input: {'text': 'Hello'},
  headers: {
    'Custom-Header': 'custom',
    'Accept-Language': 'custom'
  }
})
  .then(response => {
    console.log(JSON.stringify(response.result, null, 2));
  })
  .catch(err => {
    console.log('error: ', err);
  });
