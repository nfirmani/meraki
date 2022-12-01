import { injectable, inject } from 'inversify';
import { DefaultWorkspaceServer } from '@theia/workspace/lib/node';
import * as fs from 'fs-extra';
import * as url from 'url';
import { MyService } from '../common/srv-protocol';


//import {  OAuth2Client} from 'google-auth-library';
import { google} from 'googleapis';  //Common,
import * as readline from "readline";
//import { GaxiosError } from 'googleapis-common';





const TOKEN_PATH = 'token.json';


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
  
            
              const oAuth2Client = new google.auth.OAuth2(
                '499547563913-fk858qeigjfi0fpc130fcbm30auc1s9g.apps.googleusercontent.com',   //YOUR_CLIENT_ID
                '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',                                        //YOUR_CLIENT_SECRET
                'http://localhost'                                                            //YOUR_REDIRECT_URL
              );

              const SCOPES = [   
                'https://www.googleapis.com/auth/documents'
              ];       
              
              
              try {
                const tokens = await fs.readFile(TOKEN_PATH);
                console.log(tokens);

                oAuth2Client.setCredentials({
                    refresh_token: JSON.parse(tokens.toString())
                  });


                console.log(JSON.parse(tokens.toString()));

                //google.options({auth: oAuth2Client});

                


                const docs = await google.docs({version: 'v1', auth: oAuth2Client}); 
                //const docs = await google.docs('v1');
                docs.documents.get({
                    //documentId: '12GFccbA3L3gQ-SoPQeV-G2aKjFTFpyuL5HioCV2boGo',
                    documentId: '1TdSxXh1kn5azAASppyEmeT5Pvb_ml1jPD_tXI1bVnGY',
                    
                  }, (err, res) => {
                    if (err) return console.log('The API returned an error: ' + err);
                    console.log(`The title of the document  is: ${res!.data.title}`);
                  });

                console.log('passo-2');
                





              } catch (err) {
                console.log(err);


                    const authUrl = oAuth2Client.generateAuthUrl({
                        // 'online' (default) or 'offline' (gets refresh_token)
                        access_type: 'offline',
                      
                        // If you only need one scope you can pass it as a string
                        scope: SCOPES
                      });

                      console.log('Authorize this app by visiting this url:', authUrl);
                    
                      const rl = readline.createInterface({                    
                        input: process.stdin,
                        output: process.stdout,
                        });

                    rl.question('Enter the code from that page here: ',  async (code) => {
                    rl.close();

                    const {tokens} = await oAuth2Client.getToken(code) ;
                    oAuth2Client.setCredentials(tokens); 

                    
                    
                    oAuth2Client.on('tokens', (tokens) => {
                        if (tokens.refresh_token) {
                            // store the refresh_token in my database!
                            fs.writeFile(TOKEN_PATH, JSON.stringify(tokens), (err) => {
                                if (err) console.error(err);
                                console.log('Token stored to', TOKEN_PATH);
                              });


                          console.log(tokens.refresh_token);
                        }
                        console.log(tokens.access_token);
                      });
                    
                    /*    
                    await oAuth2Client.getToken(code, (err, token) => {
                            if (err) return console.error('Error retrieving access token', err);
                            oAuth2Client.setCredentials(token!)   // il punto esclamativo è un non-null assertion operator
                            // Store the token to disk for later program executions
                            fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
                              if (err) console.error(err);
                              console.log('Token stored to', TOKEN_PATH);
                            });
                           
                        });
                    */



                    });    
                

                console.log('passo-0');


              }

/*
         
              fs.readFile(TOKEN_PATH,  (err, token) => {
                if (err) return 
                {

                    const authUrl = oAuth2Client.generateAuthUrl({
                        // 'online' (default) or 'offline' (gets refresh_token)
                        access_type: 'online',
                      
                        // If you only need one scope you can pass it as a string
                        scope: SCOPES
                      });

                      console.log('Authorize this app by visiting this url:', authUrl);
                    
                      const rl = readline.createInterface({                    
                        input: process.stdin,
                        output: process.stdout,
                        });

                    rl.question('Enter the code from that page here: ',  async (code) => {
                    rl.close();

                    const {tokens} = await oAuth2Client.getToken(code) ;
                    oAuth2Client.setCredentials(tokens); 

                    
                    
                    oAuth2Client.on('tokens', (tokens) => {
                        if (tokens.refresh_token) {
                            // store the refresh_token in my database!
                            fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
                                if (err) console.error(err);
                                console.log('Token stored to', TOKEN_PATH);
                              });


                          console.log(tokens.refresh_token);
                        }
                        console.log(tokens.access_token);
                      });
                    
                   



                    });    
                }

                console.log('passo-0');
                //oAuth2Client.setCredentials(JSON.parse(token.toString()));

                oAuth2Client.setCredentials({
                    refresh_token: JSON.parse(token.toString())
                  });


                console.log(JSON.parse(token.toString()));

                google.options({auth: oAuth2Client});

            });


try {


                console.log('passo-1');
                // set auth as a global default            
                
    
               
                
                //const docs = google.docs({version: 'v1', auth: oauth2Client}); 
                const docs = await google.docs('v1');
                const createResponse = await docs.documents.create({
                    requestBody: {
                      title: 'Your new document-2!',
                    },
                  });
    
                console.log('passo-2');
                console.log(createResponse.data);


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

     
  */
                        
return new Promise<string>(resolve => resolve('test'));

}



}
