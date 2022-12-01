import { injectable, inject } from 'inversify';
import { DefaultWorkspaceServer } from '@theia/workspace/lib/node';
import * as fs from 'fs-extra';
import * as url from 'url';
import { MyService } from '../common/srv-protocol';


//import {  OAuth2Client} from 'google-auth-library';
//import {google} from 'googleapis';
//import * as readline from "readline";


import {
    google, // The top level object used to access services
  //  drive_v3, // For every service client, there is an exported namespace
  //  Auth, // Namespace for auth related types
    Common, // General types used throughout the library
  } from 'googleapis';
  import {GaxiosError} from 'googleapis-common';

  import {authenticate} from '@google-cloud/local-auth';

  import * as path from 'path';




// const SCOPES = [   
//  'https://www.googleapis.com/auth/documents'
// ];

// const TOKEN_PATH = 'token.json';


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

async getDocTitle(): Promise<string> {

  console.log('passo 0');
//  const auth: Auth.GoogleAuth = new google.auth.GoogleAuth(

//  );



  const auth = await authenticate({
    keyfilePath: path.join(__dirname, '../../credentials.json'),
    //scopes: 'https://www.googleapis.com/auth/drive.metadata.readonly',
    scopes: 'https://www.googleapis.com/auth/documents',
  });
  google.options({auth});


//  const drive: drive_v3.Drive = google.drive({
//    version: 'v3',
//    auth,
//  });

const docs = google.docs('v1');
//const docs = google.docs({version: 'v1', auth});  


  try {
    // There are generated types for every set of request parameters
    console.log('passo 1');
    //const listParams: drive_v3.Params$Resource$Files$List = {};
    //const res = await drive.files.list(listParams);

    const createResponse = await docs.documents.create({
        requestBody: {
          title: 'Your new document!',
        },
      });
      console.log(createResponse.data);


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


      const updateResponse = await docs.documents.batchUpdate(
        {
           // documentId: createResponse.data.documentId,  
          documentId: '11izw1UYPPCMUI6WMyh-uxWDqhZtVqCgLqTALCgapIr8',
          requestBody: {
            requests,
          },
        },
      //  (err: any, res: { data: any; }) => {
      //    if (err) return console.log('The API returned an error: ' + err);
      //    console.log(res.data);
        //}
        );

         await docs.documents.batchUpdate(
            {
               // documentId: createResponse.data.documentId,  
              documentId: '11izw1UYPPCMUI6WMyh-uxWDqhZtVqCgLqTALCgapIr8',
              requestBody: {
                requests: [
                    {
                    insertText: {
                      // The first text inserted into the document must create a paragraph,
                      // which can't be done with the `location` property.  Use the
                      // `endOfSegmentLocation` instead, which assumes the Body if
                      // unspecified.
                      endOfSegmentLocation: {},
                      text: 'Hello there!  questo è un testo inserito dinamicamente'
                    }
                  }],
              },
            },
          
            );






    // There are generated types for the response fields as well
    console.log('passo 2');
    //const listResults: drive_v3.Schema$FileList = res.data;
    //console.log(listResults);

    console.log(updateResponse);

  } catch (e) {
    // In many cases, errors from the API will come back as `GaxiosError`.
    // These will include the full HTTP Response (you should check for it first)
    console.log('passo 3');
    console.log(e);

    if ((e as GaxiosError).response) {
      const err = e as Common.GaxiosError;
      console.error(err.response);
      throw err;
    }
  }

            
  console.log('passo 4');          

return new Promise<string>(resolve => resolve('test'));

}



}
