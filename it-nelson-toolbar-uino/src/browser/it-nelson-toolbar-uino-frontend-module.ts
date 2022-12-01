/**
 * Generated using theia-extension-generator
*/


//import { CommandContribution, MenuContribution } from '@theia/core/lib/common';
import { ContainerModule } from '@theia/core/shared/inversify';


//import { TabBarToolbarContribution, TabBarToolbarFactory,} from '@theia/core/lib/browser/shell/tab-bar-toolbar';

import { ArduinoToolbarContribution } from './it-nelson-toolbar-uino-contribution';
import { FrontendApplicationContribution } from '@theia/core/lib/browser/frontend-application';
import { TabBarToolbarContribution } from '@theia/core/lib/browser/shell/tab-bar-toolbar';
//import { TabBarToolbarContribution } from '@theia/core/lib/browser/shell/tab-bar-toolbar';
//import { ColorContribution } from '@theia/core/lib/browser/color-application-contribution';



export default new ContainerModule(bind => {
    // add your contribution bindings here
    //bind(CommandContribution).to(ItNelsonToolbarUinoCommandContribution);
    //bind(MenuContribution).to(ItNelsonToolbarUinoMenuContribution);

  // Commands and toolbar items
  //bind(ArduinoFrontendContribution).toSelf().inSingletonScope();
  //bind(CommandContribution).toService(ArduinoFrontendContribution);
  //bind(MenuContribution).toService(ArduinoFrontendContribution);
  bind(TabBarToolbarContribution).toService(ArduinoToolbarContribution);
  //bind(FrontendApplicationContribution).toService(ArduinoFrontendContribution);
  //bind(ColorContribution).toService(ArduinoFrontendContribution);

  bind(ArduinoToolbarContribution).toSelf().inSingletonScope();
  bind(FrontendApplicationContribution).toService(ArduinoToolbarContribution);



});
