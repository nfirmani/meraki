"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyServiceImpl = void 0;
const inversify_1 = require("inversify");
const node_1 = require("@theia/workspace/lib/node");
const fs = require("fs-extra");
const url = require("url");
const googleapis_1 = require("googleapis");
const readline = require("readline");
//import { authenticate } from '@google-cloud/local-auth';
//import * as path from 'path';
//type Credentials = typeof google.auth.OAuth2.prototype.credentials;
const SCOPES = [
    // Other options at https://developers.google.com/identity/protocols/oauth2/scopes#docsv1
    // 'https://www.googleapis.com/auth/documents.readonly' 
    'https://www.googleapis.com/auth/documents'
];
const TOKEN_PATH = 'token.json';
let MyServiceImpl = class MyServiceImpl {
    constructor(workspaceServer) {
        this.workspaceServer = workspaceServer;
    }
    async getEnvVariables() {
        return process.env;
    }
    async getSettingValue() {
        let rootPath = await this.workspaceServer.getMostRecentlyUsedWorkspace();
        //const url = require('url');
        const configPath = url.fileURLToPath(rootPath + '/.setting-test/setting-test.json');
        const config = await fs.readJson(configPath);
        return config.test;
    }
    getDocTitle() {
        fs.readFile('credentials.json', (err, content) => {
            if (err)
                return console.log('Error loading client secret file:', err);
            // Authorize a client with credentials, then call the Google Docs API.
            authorize(JSON.parse(content.toString()), printDocTitle);
            //  authorize(JSON.parse(content.toString()), mergeDoc);  //
        });
        function authorize(credentials, callback) {
            const { client_secret, client_id, redirect_uris } = credentials.installed;
            const oAuth2Client = new googleapis_1.google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);
            // Check if we have previously stored a token.
            fs.readFile(TOKEN_PATH, (err, token) => {
                if (err)
                    return getNewToken(oAuth2Client, callback);
                oAuth2Client.setCredentials(JSON.parse(token.toString()));
                callback(oAuth2Client);
            });
        }
        function getNewToken(oAuth2Client, callback) {
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
                    callback(oAuth2Client);
                });
            });
        }
        function printDocTitle(auth) {
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
            const docs = googleapis_1.google.docs({ version: 'v1', auth });
            docs.documents.batchUpdate({
                documentId: '1TdSxXh1kn5azAASppyEmeT5Pvb_ml1jPD_tXI1bVnGY',
                requestBody: {
                    requests,
                },
            });
            docs.documents.get({
                //documentId: '12GFccbA3L3gQ-SoPQeV-G2aKjFTFpyuL5HioCV2boGo',
                documentId: '1TdSxXh1kn5azAASppyEmeT5Pvb_ml1jPD_tXI1bVnGY',
            }, (err, res) => {
                if (err)
                    return console.log('The API returned an error: ' + err);
                console.log(`The title of the document  is: ${res.data.title}`);
            });
        }
        return new Promise(resolve => resolve('test'));
    }
};
MyServiceImpl = __decorate([
    (0, inversify_1.injectable)(),
    __param(0, (0, inversify_1.inject)(node_1.DefaultWorkspaceServer)),
    __metadata("design:paramtypes", [node_1.DefaultWorkspaceServer])
], MyServiceImpl);
exports.MyServiceImpl = MyServiceImpl;
//# sourceMappingURL=srv-service-impl-dev2.js.map