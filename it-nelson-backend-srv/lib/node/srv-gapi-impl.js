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
//import {  OAuth2Client} from 'google-auth-library';
//import {google} from 'googleapis';
//import * as readline from "readline";
const googleapis_1 = require("googleapis");
const local_auth_1 = require("@google-cloud/local-auth");
const path = require("path");
// const SCOPES = [   
//  'https://www.googleapis.com/auth/documents'
// ];
// const TOKEN_PATH = 'token.json';
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
    async getDocTitle() {
        console.log('passo 0');
        //  const auth: Auth.GoogleAuth = new google.auth.GoogleAuth(
        //  );
        const auth = await (0, local_auth_1.authenticate)({
            keyfilePath: path.join(__dirname, '../../credentials.json'),
            //scopes: 'https://www.googleapis.com/auth/drive.metadata.readonly',
            scopes: 'https://www.googleapis.com/auth/documents',
        });
        googleapis_1.google.options({ auth });
        //  const drive: drive_v3.Drive = google.drive({
        //    version: 'v3',
        //    auth,
        //  });
        const docs = googleapis_1.google.docs('v1');
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
            const updateResponse = await docs.documents.batchUpdate({
                // documentId: createResponse.data.documentId,  
                documentId: '11izw1UYPPCMUI6WMyh-uxWDqhZtVqCgLqTALCgapIr8',
                requestBody: {
                    requests,
                },
            });
            await docs.documents.batchUpdate({
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
                        }
                    ],
                },
            });
            // There are generated types for the response fields as well
            console.log('passo 2');
            //const listResults: drive_v3.Schema$FileList = res.data;
            //console.log(listResults);
            console.log(updateResponse);
        }
        catch (e) {
            // In many cases, errors from the API will come back as `GaxiosError`.
            // These will include the full HTTP Response (you should check for it first)
            console.log('passo 3');
            console.log(e);
            if (e.response) {
                const err = e;
                console.error(err.response);
                throw err;
            }
        }
        console.log('passo 4');
        return new Promise(resolve => resolve('test'));
    }
};
MyServiceImpl = __decorate([
    (0, inversify_1.injectable)(),
    __param(0, (0, inversify_1.inject)(node_1.DefaultWorkspaceServer)),
    __metadata("design:paramtypes", [node_1.DefaultWorkspaceServer])
], MyServiceImpl);
exports.MyServiceImpl = MyServiceImpl;
//# sourceMappingURL=srv-gapi-impl.js.map