const express = require('express')
const app = express()
const dfff = require('dialogflow-fulfillment');
 
app.get('/', (req, res) => {
  res.send('Hello World')
});
 
app.post('/webhook', express.json() ,function (req, res) {
  const agent = new dfff.WebhookClient({
    request: req, response: res 
  });

 /* console.log('Dialogflow Request headers: ' + JSON.stringify(req.headers));
  console.log('Dialogflow Request body: ' + JSON.stringify(req.body));
 */

  function pruebaWebhook(agent) {
    agent.add(`TE HABLO DESDE EL MAS ALLA`);
  }

  function customMensaje(agent){
    var mensaje= {
      "richContent": [
        [
          {
            "type": "accordion",
            "title": "Accordion title",
            "subtitle": "Accordion subtitle",
            "image": {
              "src": {
                "rawUrl": "https://example.com/images/logo.png"
              }
            },
            "text": "Accordion text"
          }
        ]
      ]
    }
    agent.add( new dfff.Payload(agent.UNSPECIFIED, mensaje, { sendAsMessage: true, rawPayload: true }))
  }



  let intentMap = new Map();
  intentMap.set('pruebaWebhook', pruebaWebhook);
  intentMap.set('customMensaje', customMensaje);
  agent.handleRequest(intentMap);
  });

app.listen(3000,()=>{

    console.log("Estamos ejecutando el servidor en el puerto "+3000);
});
