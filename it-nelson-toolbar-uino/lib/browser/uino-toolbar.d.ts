import * as React from 'react';
import { TabBarToolbarRegistry, TabBarToolbarItem, ReactTabBarToolbarItem } from '@theia/core/lib/browser/shell/tab-bar-toolbar';
import { CommandRegistry } from '@theia/core/lib/common/command';
import { ReactWidget } from '@theia/core/lib/browser';
import { LabelParser } from '@theia/core/lib/browser/label-parser';
export declare const ARDUINO_TOOLBAR_ITEM_CLASS = "arduino-tool-item";
export declare namespace ArduinoToolbarComponent {
    interface Props {
        side: 'left' | 'right';
        items: (TabBarToolbarItem | ReactTabBarToolbarItem)[];
        commands: CommandRegistry;
        labelParser: LabelParser;
        commandIsEnabled: (id: string) => boolean;
        commandIsToggled: (id: string) => boolean;
        executeCommand: (e: React.MouseEvent<HTMLElement>) => void;
    }
    interface State {
        tooltip: string;
    }
}
export declare class ArduinoToolbarComponent extends React.Component<ArduinoToolbarComponent.Props, ArduinoToolbarComponent.State> {
    constructor(props: ArduinoToolbarComponent.Props);
    protected renderItem: (item: TabBarToolbarItem) => JSX.Element;
    render(): React.ReactNode;
}
export declare class ArduinoToolbar extends ReactWidget {
    protected readonly tabBarToolbarRegistry: TabBarToolbarRegistry;
    protected readonly commands: CommandRegistry;
    protected readonly labelParser: LabelParser;
    readonly side: 'left' | 'right';
    protected items: Map<string, TabBarToolbarItem | ReactTabBarToolbarItem>;
    constructor(tabBarToolbarRegistry: TabBarToolbarRegistry, commands: CommandRegistry, labelParser: LabelParser, side: 'left' | 'right');
    protected updateItems(items: Array<TabBarToolbarItem | ReactTabBarToolbarItem>): void;
    protected updateToolbar(): void;
    protected init(): void;
    protected readonly doCommandIsEnabled: (id: string) => boolean;
    protected commandIsEnabled(command: string): boolean;
    protected readonly doCommandIsToggled: (id: string) => boolean;
    protected commandIsToggled(command: string): boolean;
    protected render(): React.ReactNode;
    protected executeCommand: (e: React.MouseEvent<HTMLElement>) => void;
}
export declare namespace ArduinoToolbar {
    function is(maybeToolbarWidget: any): maybeToolbarWidget is ArduinoToolbar;
}
//# sourceMappingURL=uino-toolbar.d.ts.map