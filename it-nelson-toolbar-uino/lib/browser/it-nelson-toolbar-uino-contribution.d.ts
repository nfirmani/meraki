import { FrontendApplicationContribution, FrontendApplication, Widget, Message } from '@theia/core/lib/browser';
import { ArduinoToolbar } from './uino-toolbar';
import { TabBarToolbarContribution, TabBarToolbarRegistry } from '@theia/core/lib/browser/shell/tab-bar-toolbar';
import { CommandRegistry } from '@theia/core';
import { LabelParser } from '@theia/core/lib/browser/label-parser';
export declare class ArduinoToolbarContainer extends Widget {
    protected toolbars: ArduinoToolbar[];
    constructor(...toolbars: ArduinoToolbar[]);
    onAfterAttach(msg: Message): void;
}
export declare class ArduinoToolbarContribution implements FrontendApplicationContribution, TabBarToolbarContribution {
    protected tabBarToolBarRegistry: TabBarToolbarRegistry;
    protected commandRegistry: CommandRegistry;
    protected labelParser: LabelParser;
    protected arduinoToolbarContainer: ArduinoToolbarContainer;
    constructor(tabBarToolBarRegistry: TabBarToolbarRegistry, commandRegistry: CommandRegistry, labelParser: LabelParser);
    registerToolbarItems(registry: TabBarToolbarRegistry): void;
    onStart(app: FrontendApplication): void;
}
//# sourceMappingURL=it-nelson-toolbar-uino-contribution.d.ts.map