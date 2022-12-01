import { injectable, inject } from 'inversify';
import { DefaultWorkspaceServer } from '@theia/workspace/lib/node';
import * as fs from 'fs-extra';
import * as url from 'url';
import { MyService } from '../common/srv-protocol';



//import {  OAuth2Client} from 'google-auth-library';
import {google} from 'googleapis';
//import * as readline from "readline";

import * as path from 'path';

//import  { Express, Request, Response } from 'express';
import express = require('express');
//import express = require('express');
import open = require('open');



const keyfile = path.join(__dirname, '../../credentials.json');

const keys = JSON.parse(fs.readFileSync(keyfile, 'utf-8'));

const scopes =  ['https://www.googleapis.com/auth/documents'];


// Create an oAuth2 client to authorize the API call
const client  = new google.auth.OAuth2(
    keys.installed.client_id,
    keys.installed.client_secret,
    keys.installed.redirect_uris[0]
  );
  
  // Generate the url that will be used for authorization
  const authorizeUrl = client.generateAuthUrl({
    access_type: 'offline',
    scope: scopes,
  });

// Open an http server to accept the oauth callback. In this
// simple example, the only request to our webserver is to
// /oauth2callback?code=<code>



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
            console.log(`The title of the document  is: ${res!.data.title}`);
            
          });
   
  }


/*

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
            console.log(`The title of the document  is: ${res!.data.title}`);
            
          });
   
  }


*/

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


const app = express();
//const app = express();
app.get('/oauth2callback', (req : any, res) => {
  const code = req.query.code;
  client.getToken(code, (err, tokens) => {
    if (err) {
      console.error('Error getting oAuth tokens:');
      throw err;
    }
    client.credentials = tokens!;
    res.send('Authentication successful! Please return to the console.');
    server.close();
    printDocTitle(client);
  });
});
const server = app.listen(3000, () => {
  // open the browser to the authorize url to start the workflow
  open(authorizeUrl, {wait: false});
});
  
           
return new Promise<string>(resolve => resolve('test service 3'));

}


}

 