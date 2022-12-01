"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyServiceImpl = void 0;
const inversify_1 = require("inversify");
const fs = require("fs-extra");
const googleapis_1 = require("googleapis");
const readline = require("readline");
const path = require("path");
const SCOPES = [
    // Other options at https://developers.google.com/identity/protocols/oauth2/scopes#docsv1
    // 'https://www.googleapis.com/auth/documents.readonly' 
    'https://www.googleapis.com/auth/documents',
    'https://www.googleapis.com/auth/drive'
];
const TOKEN_PATH = path.join(process.cwd(), 'token.json');
const CREDENTIALS_PATH = path.join(process.cwd(), 'credentials.json');
const customerName = 'Nelson';
const date = '20220711';
const requests = [
    {
        replaceAllText: {
            containsText: {
                text: '{{customer-name}}',
                matchCase: true,
            },
            replaceText: customerName,
        },
    },
    {
        replaceAllText: {
            containsText: {
                text: '{{date}}',
                matchCase: true,
            },
            replaceText: date,
        },
    },
];
const copyRequest = {
    name: "peripatetico copia due",
    // parents: ["idOfDestinationFolder"]
};
/**
 * Reads previously authorized credentials from the save file.
 *
 * @return {Promise<OAuth2Client|null>}


async function loadSavedCredentialsIfExist() {
    try {
      const content = await fs.readFile(TOKEN_PATH, 'utf-8');
      const credentials = JSON.parse(content);
      return google.auth.fromJSON(credentials);
    } catch (err) {
      return null;
    }
  }


 /**
 * Serializes credentials to a file comptible with GoogleAUth.fromJSON.
 *
 * @param {OAuth2Client} client
 * @return {Promise<void>}
 

async function saveCredentials(client: OAuth2Client) {
    const content = await fs.readFile(CREDENTIALS_PATH, 'utf-8');
    const keys = JSON.parse(content);
    const key = keys.installed || keys.web;
    const payload = JSON.stringify({
      type: 'authorized_user',
      client_id: key.client_id,
      client_secret: key.client_secret,
      refresh_token: client.credentials.refresh_token,
    });
    await fs.writeFile(TOKEN_PATH, payload);
  }

*/
/**
 * Load or request or authorization to call APIs.
 *
 

async function authorize() {
    let client = await loadSavedCredentialsIfExist();
    if (client) {
      return client;
    }
       
    client = await authenticate({
      scopes: SCOPES,
      keyfilePath: CREDENTIALS_PATH,
    }) ;
    if (client!.credentials) {
      await saveCredentials(client);
    }
    return client;
  }
*/
/*
function authorize(credentials: { installed: { client_secret: any; client_id: any; redirect_uris: any; }; }, callback: (arg0: OAuth2Client) => void) {
    const {client_secret, client_id, redirect_uris} = credentials.installed;
    const oAuth2Client = new google.auth.OAuth2(
        client_id, client_secret, redirect_uris[0]);
  
    // Check if we have previously stored a token.
    fs.readFile(TOKEN_PATH, (err, token) => {
      if (err) return getNewToken(oAuth2Client, callback);
      oAuth2Client.setCredentials(JSON.parse(token.toString()));
      callback(oAuth2Client);
    });
  }
  

  function getNewToken(oAuth2Client: OAuth2Client, callback: { (arg0: OAuth2Client): void; (arg0: any): void; }) {
    const authUrl = oAuth2Client.generateAuthUrl({
      access_type: 'offline',
      scope: SCOPES,
    });
    console.log('Authorize this app by visiting this url:', authUrl);
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    rl.question('Enter the code from that page here: ', (code) => {
      rl.close();
      oAuth2Client.getToken(code, (err, token) => {
        if (err) return console.error('Error retrieving access token', err);
        oAuth2Client.setCredentials(token!)   // il punto esclamativo è un non-null assertion operator
        // Store the token to disk for later program executions
        fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
          if (err) console.error(err);
          console.log('Token stored to', TOKEN_PATH);
        });
        callback(oAuth2Client);
      });
    });
  }

*/
/*

async function authenticate(scopes: string[]) {
    return new Promise<OAuth2Client>(async (resolve, reject) => {
  
        try {
            const content = await fs.readFile(CREDENTIALS_PATH, 'utf-8');
            const keys = JSON.parse(content);
            const key = keys.installed || keys.web;

            let oAuth2Client = new google.auth.OAuth2(
                key.client_id,
                key.client_secret,
                key.redirect_uris[0]
            );

            try {
                const token = await fs.readFile(TOKEN_PATH, 'utf-8');
                oAuth2Client.setCredentials(JSON.parse(token.toString()));

               resolve(oAuth2Client);

            } catch (err) {
                return getNewTokenDev(oAuth2Client);
            }

            
          } catch (e) {
            console.log('Error loading client secret file:', e);
            reject(e);
          }
       
        });
    };

*/
/*
  function runSample(auth: OAuth2Client) {
    
  const docs = google.docs({ version: 'v1', auth });

     docs.documents.get({
        documentId: '1TdSxXh1kn5azAASppyEmeT5Pvb_ml1jPD_tXI1bVnGY',
          }, (err, res) => {
    
         if (err) {
                  return;
                   }
                                   
         console.log(`runSample  is: ${res!.data.title}`);
                      
            });
            
        
    
}

*/
function getNewTokenDev(oAuth2Client) {
    const authUrl = oAuth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: SCOPES,
    });
    console.log('Authorize this app by visiting this url:', authUrl);
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });
    rl.question('Enter the code from that page here: ', (code) => {
        rl.close();
        oAuth2Client.getToken(code, (err, token) => {
            if (err)
                return console.error('Error retrieving access token', err);
            oAuth2Client.setCredentials(token); // il punto esclamativo è un non-null assertion operator
            // Store the token to disk for later program executions
            fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
                if (err)
                    console.error(err);
                console.log('Token stored to', TOKEN_PATH);
            });
        });
    });
}
/*

function printDocTitle(auth: any) {

  const customerName = 'Nelson';
  const date = '20220711';
  const requests = [
    {
      replaceAllText: {
        containsText: {
          text: '{{customer-name}}',
          matchCase: true,
        },
        replaceText: customerName,
      },
    },
    {
      replaceAllText: {
        containsText: {
          text: '{{date}}',
          matchCase: true,
        },
        replaceText: date,
      },
    },
  ];

  const docs = google.docs({version: 'v1', auth});

  docs.documents.batchUpdate(
      {
        documentId: '1TdSxXh1kn5azAASppyEmeT5Pvb_ml1jPD_tXI1bVnGY',
        requestBody: {
          requests,
        },
      },
   
      );


      docs.documents.get({
          //documentId: '12GFccbA3L3gQ-SoPQeV-G2aKjFTFpyuL5HioCV2boGo',
          documentId: '1TdSxXh1kn5azAASppyEmeT5Pvb_ml1jPD_tXI1bVnGY',
          
        }, (err, res) => {
          if (err) return console.log('The API returned an error: ' + err);
          console.log(`pass1 title of the document  is: ${res!.data.title}`);
          
          titolo = `Il titolo del documento è  ${res!.data.title}`
          
          

        });
 
}
*/
/*

function printDocTitleDev(auth: any) {

  return new Promise((resolve, reject)=> {

  const docs = google.docs({version: 'v1', auth});

  

      docs.documents.get({
          //documentId: '12GFccbA3L3gQ-SoPQeV-G2aKjFTFpyuL5HioCV2boGo',
          documentId: '1TdSxXh1kn5azAASppyEmeT5Pvb_ml1jPD_tXI1bVnGY',
          
        }, (err, res) => {
          if (err) return console.log('The API returned an error: ' + err);
          console.log(`pass1 title of the document  is: ${res!.data.title}`);
          
          titolo = `Il titolo del documento è  ${res!.data.title}`
          
          

        });
 
})
}
*/
let MyServiceImpl = class MyServiceImpl {
    getJsonDoc() {
        throw new Error('Method not implemented.');
    }
    getSheet() {
        throw new Error('Method not implemented.');
    }
    mergeDoc() {
        throw new Error('Method not implemented.');
    }
    getDocTest() {
        throw new Error('Method not implemented.');
    }
    /*
 
     async  getDocTitle(): Promise<string> {
 
    
 
           return new Promise((resolve, reject)=>
         
             {
                 //setTimeout(resolve, 2500);
                 //resolve('trascorsi 2500 millesecondi')
 
 
                 fs.readFile('credentials.json', (err, content) => {
                     if (err) return console.log('Error loading client secret file:', err);
                   
                     // Authorize a client with credentials, then call the Google Docs API.
                     authorize(JSON.parse(content.toString()), printDocTitle);
                    
 
                     
                    
                   });
 
 
                 //data = titolo;
                 console.log("pass2-valore-di titolo da sr-service-impl:" + titolo)
                 resolve(titolo);
 
             
             });
 
 }
 */
    async getDocTitle() {
        /*
                fs.readFile('credentials.json', (err, content) => {
                    if (err) return console.log('Error loading client secret file:', err);
                    // Authorize a client with credentials, then call the Google Docs API.
                    authorize(JSON.parse(content.toString()), printDocTitle);
                    //  authorize(JSON.parse(content.toString()), mergeDoc);  //
                   
                  });
        */
        return new Promise((resolve, reject) => {
            fs.readFile(CREDENTIALS_PATH, (err, content) => {
                if (err)
                    return console.log('Error loading client secret file:', err);
                const res = JSON.parse(content.toString());
                const oAuth2Client = new googleapis_1.google.auth.OAuth2(res.installed.client_id, // "499547563913-fk858qeigjfi0fpc130fcbm30auc1s9g.apps.googleusercontent.com", 
                res.installed.client_secret, // "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", 
                res.installed.redirect_uris[0] // "http://localhost"
                );
                fs.readFile(TOKEN_PATH, (err, token) => {
                    if (err)
                        return getNewTokenDev(oAuth2Client);
                    oAuth2Client.setCredentials(JSON.parse(token.toString()));
                    //printDocTitle(oAuth2Client);
                    const docs = googleapis_1.google.docs({ version: 'v1', auth: oAuth2Client });
                    docs.documents.get({
                        //documentId: '12GFccbA3L3gQ-SoPQeV-G2aKjFTFpyuL5HioCV2boGo',
                        documentId: '1TdSxXh1kn5azAASppyEmeT5Pvb_ml1jPD_tXI1bVnGY',
                    }, (err, res) => {
                        if (err) {
                            reject(err);
                            return;
                        }
                        if (!res.data.title) {
                            console.log(`vuoto  is: ${res.data.title}`);
                            resolve("vuoto");
                            return;
                        }
                        console.log(`pass2 title of the document  is: ${res.data.title}`);
                        resolve(res.data.title);
                    });
                });
            });
        });
    }
    async getDoc() {
        return new Promise((resolve, reject) => {
            fs.readFile('credentials.json', (err, content) => {
                if (err)
                    return console.log('Error loading client secret file:', err);
                const res = JSON.parse(content.toString());
                const oAuth2Client = new googleapis_1.google.auth.OAuth2(res.installed.client_id, // "499547563913-fk858qeigjfi0fpc130fcbm30auc1s9g.apps.googleusercontent.com", 
                res.installed.client_secret, // "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", 
                res.installed.redirect_uris[0] // "http://localhost"
                );
                fs.readFile(TOKEN_PATH, (err, token) => {
                    if (err)
                        return getNewTokenDev(oAuth2Client);
                    oAuth2Client.setCredentials(JSON.parse(token.toString()));
                    //printDocTitle(oAuth2Client);
                    const docs = googleapis_1.google.docs({ version: 'v1', auth: oAuth2Client });
                    console.log("merge doc");
                    docs.documents.batchUpdate({
                        documentId: '1TdSxXh1kn5azAASppyEmeT5Pvb_ml1jPD_tXI1bVnGY',
                        requestBody: {
                            requests,
                        },
                    });
                });
            });
        });
    }
    listDocDrive() {
        return new Promise((resolve, reject) => {
            fs.readFile('credentials.json', (err, content) => {
                if (err)
                    return console.log('Error loading client secret file:', err);
                const res = JSON.parse(content.toString());
                const oAuth2Client = new googleapis_1.google.auth.OAuth2(res.installed.client_id, // "499547563913-fk858qeigjfi0fpc130fcbm30auc1s9g.apps.googleusercontent.com", 
                res.installed.client_secret, // "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", 
                res.installed.redirect_uris[0] // "http://localhost"
                );
                fs.readFile(TOKEN_PATH, async (err, token) => {
                    if (err)
                        return getNewTokenDev(oAuth2Client);
                    oAuth2Client.setCredentials(JSON.parse(token.toString()));
                    const drive = googleapis_1.google.drive({
                        version: 'v3',
                        auth: oAuth2Client,
                    });
                    //const listParams: drive_v3.Params$Resource$Files$List = {};
                    //const res = await drive.files.list(listParams);                          
                    //const listResults: drive_v3.Schema$FileList = res.data;
                    const res = await drive.files.list({
                        pageSize: 10,
                        fields: 'nextPageToken, files(id, name)',
                    });
                    const files = res.data.files;
                    if ((files === null || files === void 0 ? void 0 : files.length) === 0) {
                        console.log('No files found.');
                    }
                    else {
                        console.log('Files:');
                        for (const file of files) {
                            console.log(`${file.name} (${file.id})`);
                        }
                    }
                    const res2 = await drive.files.copy({
                        fileId: "1TdSxXh1kn5azAASppyEmeT5Pvb_ml1jPD_tXI1bVnGY",
                        requestBody: copyRequest // or resource: copyRequest
                    });
                    console.log(res2.data.id);
                });
            });
        });
    }
};
MyServiceImpl = __decorate([
    (0, inversify_1.injectable)()
], MyServiceImpl);
exports.MyServiceImpl = MyServiceImpl;
//# sourceMappingURL=srv-service-impl-dev.js.map