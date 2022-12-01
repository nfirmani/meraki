import { ILogger } from '@theia/core/lib/common';
import { Command } from '@theia/core/lib/common/command';
import URI from '@theia/core/lib/common/uri';
import { SingleUriCommandHandler } from '@theia/core/lib/common/uri-command-handler';
import { FileService } from '@theia/filesystem/lib/browser/file-service';
import { OpenerService } from '@theia/core/lib/browser';
import { WorkspaceService } from '@theia/workspace/lib/browser';
export declare const NewTreeExampleFileCommand: Command;
export declare class NewTreeExampleFileCommandHandler implements SingleUriCommandHandler {
    protected readonly openerService: OpenerService;
    protected readonly fileService: FileService;
    protected readonly logger: ILogger;
    protected readonly workspaceService: WorkspaceService;
    constructor(openerService: OpenerService, fileService: FileService, logger: ILogger, workspaceService: WorkspaceService);
    isEnabled(): boolean;
    execute(uri: URI): Promise<void>;
}
//# sourceMappingURL=example-file-command.d.ts.map