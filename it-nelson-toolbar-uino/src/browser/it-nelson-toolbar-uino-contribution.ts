import {
    FrontendApplicationContribution,
    FrontendApplication,
    Widget,
    Message,
  } from '@theia/core/lib/browser';
  import { injectable, inject } from 'inversify';
  import { ArduinoToolbar } from './uino-toolbar';
  import { TabBarToolbarContribution, TabBarToolbarRegistry } from '@theia/core/lib/browser/shell/tab-bar-toolbar';
  import { CommandRegistry } from '@theia/core';
  import { LabelParser } from '@theia/core/lib/browser/label-parser';
//import { BoardsToolBarItem } from './boards/boards-toolbar-item';
  //import { BoardsToolBarItem } from './boards/boards-toolbar-item';
  
  export class ArduinoToolbarContainer extends Widget {
    protected toolbars: ArduinoToolbar[];
  
    constructor(...toolbars: ArduinoToolbar[]) {
      super();
      this.id = 'arduino-toolbar-container';
      this.toolbars = toolbars;
    }
  
    onAfterAttach(msg: Message) {
      for (const toolbar of this.toolbars) {
        Widget.attach(toolbar, this.node);
      }
    }
  }
  
  @injectable()
  export class ArduinoToolbarContribution implements FrontendApplicationContribution,  TabBarToolbarContribution
  {
    protected arduinoToolbarContainer: ArduinoToolbarContainer;
  
    constructor(
      @inject(TabBarToolbarRegistry)
      protected tabBarToolBarRegistry: TabBarToolbarRegistry,
      @inject(CommandRegistry) protected commandRegistry: CommandRegistry,
      @inject(LabelParser) protected labelParser: LabelParser
    ) {
      const leftToolbarWidget = new ArduinoToolbar(
        tabBarToolBarRegistry,
        commandRegistry,
        labelParser,
        'left'
      );
      const rightToolbarWidget = new ArduinoToolbar(
        tabBarToolBarRegistry,
        commandRegistry,
        labelParser,
        'right'
      );
      this.arduinoToolbarContainer = new ArduinoToolbarContainer(
        leftToolbarWidget,
        rightToolbarWidget
      );
    }
      registerToolbarItems(registry: TabBarToolbarRegistry): void {
         // throw new Error('Method not implemented.');

         registry.registerItem({
            id: 'toggle-serial-monitor',
            //command: MonitorViewContribution.TOGGLE_SERIAL_MONITOR_TOOLBAR,
            command: 'toggle-test',
            //tooltip: nls.localize('arduino/common/serialMonitor', 'Serial Monitor'),
          });

/*
         registry.registerItem({
            id: BoardsToolBarItem.TOOLBAR_ID,
            render: () => (
              <BoardsToolBarItem
                key="boardsToolbarItem"
                commands={this.commandRegistry}
                boardsServiceClient={this.boardsServiceClientImpl}
              />
            ),
            isVisible: (widget) =>
              ArduinoToolbar.is(widget) && widget.side === 'left',
            priority: 7,
          });
         
          registry.registerItem({
            id: 'toggle-serial-monitor',
            command: MonitorViewContribution.TOGGLE_SERIAL_MONITOR_TOOLBAR,
            tooltip: nls.localize('arduino/common/serialMonitor', 'Serial Monitor'),
          });
*/


      }
  
    onStart(app: FrontendApplication) {
      app.shell.addWidget(this.arduinoToolbarContainer, {
        area: 'top',
      });
    }

  }
  