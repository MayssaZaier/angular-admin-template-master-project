// Angular
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { CardsComponent } from "./cards.component";

// Forms Component
import { FormsComponent } from "./forms.component";
import { FormsArecordComponent } from "./formsArecord.component";

import { SwitchesComponent } from "./switches.component";
import { TablesComponent } from "./tables.component";

// Tabs Component
import { TabsModule } from "ngx-bootstrap/tabs";
import { TabsComponent } from "./tabs.component";

// Carousel Component
import { CarouselModule } from "ngx-bootstrap/carousel";
import { CarouselsComponent } from "./carousels.component";

// Collapse Component
import { CollapseModule } from "ngx-bootstrap/collapse";
import { CollapsesComponent } from "./collapses.component";

// Dropdowns Component
import { BsDropdownModule } from "ngx-bootstrap/dropdown";

// Pagination Component
import { PaginationModule } from "ngx-bootstrap/pagination";
import { PopoversComponent } from "./popovers.component";

// Popover Component
import { PopoverModule } from "ngx-bootstrap/popover";
import { PaginationsComponent } from "./paginations.component";

// Progress Component
import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { ProgressComponent } from "./progress.component";

// Tooltip Component
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { TooltipsComponent } from "./tooltips.component";

// navbars
import { NavbarsComponent } from "./navbars/navbars.component";

// Import form module
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

// Components Routing
import { BaseRoutingModule } from "./base-routing.module";
import { TablesAComponent } from "./tablesArecord.component";
/*import { FormsdeleteComponent } from "./formsdelete.component";*/
import { FormsforwardComponent } from "./formsforwardzone.component";
import { FormsuserComponent } from "./formsuser.component";
import { CardsdeleteComponent } from "./cardsdelete.component";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BaseRoutingModule,
    BsDropdownModule.forRoot(),
    TabsModule,
    CarouselModule.forRoot(),
    CollapseModule.forRoot(),
    PaginationModule.forRoot(),
    PopoverModule.forRoot(),
    ProgressbarModule.forRoot(),
    TooltipModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    CardsComponent,
    CardsdeleteComponent,
    FormsComponent,
    FormsArecordComponent,
    /* FormsdeleteComponent,*/
    FormsforwardComponent,
    FormsuserComponent,
    SwitchesComponent,
    TablesComponent,
    TablesAComponent,
    TabsComponent,
    CarouselsComponent,
    CollapsesComponent,
    PaginationsComponent,
    PopoversComponent,
    ProgressComponent,
    TooltipsComponent,
    NavbarsComponent,
  ],
})
export class BaseModule {}
