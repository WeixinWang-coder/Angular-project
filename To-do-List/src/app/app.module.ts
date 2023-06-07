import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { TableComponent } from './table/table.component';
import { FormsModule } from '@angular/forms';
import { FeatureDirective } from './table/feature.directive';

@NgModule({
  declarations: [AppComponent, NavComponent, TableComponent, FeatureDirective],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
