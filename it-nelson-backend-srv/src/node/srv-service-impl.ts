import { injectable, inject } from 'inversify';
import { DefaultWorkspaceServer } from '@theia/workspace/lib/node';
import * as fs from 'fs-extra';
import * as url from 'url';
import { MyService } from '../common/srv-protocol';

import {  OAuth2Client} from 'google-auth-library';
import {google} from 'googleapis';
import * as readline from "readline";

var titolo : string = "";

const SCOPES = [
    // Other options at https://developers.google.com/identity/protocols/oauth2/scopes#docsv1
  // 'https://www.googleapis.com/auth/documents.readonly' 
  'https://www.googleapis.com/auth/documents'
];

const TOKEN_PATH = 'token.json';

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
            console.log(`primo Il title of the document  is: ${res!.data.title}`);
            
            titolo = `Il titolo del documento è  ${res!.data.title}`               
            
            

          });
   
  }


@injectable()
export class MyServiceImpl implements MyService {    

    constructor(@inject(DefaultWorkspaceServer) private readonly workspaceServer: DefaultWorkspaceServer) {}

    async getEnvVariables(): Promise<Readonly<{ [key:string]: string | undefined }>> {
        return process.env;
    }

    async getSettingValue(): Promise<Readonly<{ [key:string]: string | undefined }>> {
        let rootPath = await this.workspaceServer.getMostRecentlyUsedWorkspace();
        //const url = require('url');
        const configPath = url.fileURLToPath(rootPath + '/.setting-test/setting-test.json');
        
        const config = await fs.readJson(configPath);
        return config.test;       
        
    }

    async  getDocTitle(): Promise<string> {

        
/*
        fs.readFile('credentials.json', (err, content) => {
            if (err) return console.log('Error loading client secret file:', err);
            // Authorize a client with credentials, then call the Google Docs API.
            authorize(JSON.parse(content.toString()), printDocTitle);
            //  authorize(JSON.parse(content.toString()), mergeDoc);  //
           
          });
*/
   
          return new Promise(resolve => 
        
            {   
                //setTimeout(resolve, 2500);
                //resolve('trascorsi 2500 millesecondi')


                fs.readFile('credentials.json', (err, content) => {
                    if (err) return console.log('Error loading client secret file:', err);
                    // Authorize a client with credentials, then call the Google Docs API.
                    authorize(JSON.parse(content.toString()), printDocTitle);
                    //  authorize(JSON.parse(content.toString()), mergeDoc);  //
                   
                  });


                //data = titolo;
                resolve(titolo);
            
            });

}


}


  