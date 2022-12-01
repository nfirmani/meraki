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
exports.NewTreeExampleFileCommandHandler = exports.NewTreeExampleFileCommand = void 0;
const dialogs_1 = require("@theia/core/lib/browser/dialogs");
const common_1 = require("@theia/core/lib/common");
const buffer_1 = require("@theia/core/lib/common/buffer");
const file_service_1 = require("@theia/filesystem/lib/browser/file-service");
const common_2 = require("@theia/filesystem/lib/common");
const inversify_1 = require("@theia/core/shared/inversify");
const browser_1 = require("@theia/core/lib/browser");
const browser_2 = require("@theia/workspace/lib/browser");
exports.NewTreeExampleFileCommand = {
    id: 'it-nelson-tree-editor-tree.newExampleFile',
    label: 'New Tree Example File'
};
let NewTreeExampleFileCommandHandler = class NewTreeExampleFileCommandHandler {
    constructor(openerService, fileService, logger, workspaceService) {
        this.openerService = openerService;
        this.fileService = fileService;
        this.logger = logger;
        this.workspaceService = workspaceService;
    }
    isEnabled() {
        return this.workspaceService.opened;
    }
    async execute(uri) {
        const stat = await this.fileService.resolve(uri);
        if (!stat) {
            this.logger.error(`[NewTreeExampleFileCommandHandler] Could not create file stat for uri`, uri);
            return;
        }
        const dir = stat.isDirectory ? stat : await this.fileService.resolve(uri.parent);
        if (!dir) {
            this.logger.error(`[NewTreeExampleFileCommandHandler] Could not create file stat for uri`, uri.parent);
            return;
        }
        const targetUri = dir.resource.resolve('tree-example.tree');
        const preliminaryFileUri = common_2.FileSystemUtils.generateUniqueResourceURI(dir, targetUri, false);
        const dialog = new dialogs_1.SingleTextInputDialog({
            title: 'New Example File',
            initialValue: preliminaryFileUri.path.base
        });
        const fileName = await dialog.open();
        if (fileName) {
            const fileUri = dir.resource.resolve(fileName);
            const contentBuffer = buffer_1.BinaryBuffer.fromString(JSON.stringify(defaultData, null, 2));
            this.fileService.createFile(fileUri, contentBuffer)
                .then(_ => this.openerService.getOpener(fileUri))
                .then(openHandler => openHandler.open(fileUri));
        }
    }
};
NewTreeExampleFileCommandHandler = __decorate([
    (0, inversify_1.injectable)(),
    __param(0, (0, inversify_1.inject)(browser_1.OpenerService)),
    __param(1, (0, inversify_1.inject)(file_service_1.FileService)),
    __param(2, (0, inversify_1.inject)(common_1.ILogger)),
    __param(3, (0, inversify_1.inject)(browser_2.WorkspaceService)),
    __metadata("design:paramtypes", [Object, file_service_1.FileService, Object, browser_2.WorkspaceService])
], NewTreeExampleFileCommandHandler);
exports.NewTreeExampleFileCommandHandler = NewTreeExampleFileCommandHandler;
const defaultData = {
    "typeId": "Machine",
    "name": "Super Coffee 4000",
    "children": [
        {
            "typeId": "ControlUnit",
            "processor": {
                "socketconnectorType": "A1T",
                "manufactoringProcess": "18nm",
                "thermalDesignPower": 10,
                "numberOfCores": 2,
                "clockSpeed": 800,
                "vendor": "CMD",
                "advancedConfiguration": true
            },
            "display": {
                "width": 70,
                "height": 40
            },
            "dimension": {
                "width": 100,
                "height": 80,
                "length": 50
            },
            "userDescription": "Small processing unit for user input"
        },
        {
            "typeId": "MultiComponent",
            "width": 100,
            "height": 100,
            "length": 60,
            "children": [
                {
                    "typeId": "WaterTank",
                    "capacity": 400
                },
                {
                    "typeId": "DripTray",
                    "material": "aluminium"
                }
            ]
        }
    ]
};
//# sourceMappingURL=example-file-command.js.map