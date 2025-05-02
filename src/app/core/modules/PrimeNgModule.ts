// src/app/prime-ng.module.ts
import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import {BreadcrumbModule} from 'primeng/breadcrumb';
import {TieredMenuModule} from 'primeng/tieredmenu';
import {IconFieldModule} from 'primeng/iconfield';
import {InputIconModule} from 'primeng/inputicon';
import {MenuModule} from 'primeng/menu';
import {ContextMenuModule} from 'primeng/contextmenu';
import {MegaMenuModule} from 'primeng/megamenu';
import {PanelMenuModule} from 'primeng/panelmenu';
import {TabsModule} from 'primeng/tabs';
import {MenubarModule} from 'primeng/menubar';
import {StepperModule} from 'primeng/stepper';
import {TableModule} from 'primeng/table';

@NgModule({
  exports: [
    ButtonModule,
    TableModule,
    CardModule,
    InputTextModule,
    BreadcrumbModule,
    TieredMenuModule,
    IconFieldModule,
    InputIconModule,
    MenuModule,
    ButtonModule,
    ContextMenuModule,
    MegaMenuModule,
    PanelMenuModule,
    TabsModule,
    MenubarModule,
    InputTextModule,
    TabsModule,
    StepperModule,
    TabsModule,
  ]
})
export class PrimeNgModule { }
