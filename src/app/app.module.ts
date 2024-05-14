import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

// ngx-bootstrap modules
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { AlertModule } from 'ngx-bootstrap/alert';
import { ButtonsModule } from 'ngx-bootstrap/buttons';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { SortableModule } from 'ngx-bootstrap/sortable';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { RatingModule } from 'ngx-bootstrap/rating';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    // ngx-bootstrap modules
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    BsDatepickerModule.forRoot(),
    PaginationModule.forRoot(),
    CarouselModule.forRoot(),
    TypeaheadModule.forRoot(),
    TabsModule.forRoot(),
    AlertModule.forRoot(),
    ButtonsModule.forRoot(),
    ProgressbarModule.forRoot(),
    SortableModule.forRoot(),
    AccordionModule.forRoot(),
    RatingModule.forRoot(),
    TimepickerModule.forRoot(),
    PopoverModule.forRoot(),
    NgxDatatableModule,
  ],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
