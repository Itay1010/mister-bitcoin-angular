import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app-root/app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactsPageComponent } from './pages/contacts-page/contacts-page.component';
import { ContactEditPageComponent } from './pages/contact-edit-page/contact-edit-page.component';
import { ContactDetailsPageComponent } from './pages/contact-details-page/contact-details-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactListComponent } from './cmps/contact-list/contact-list.component';
import { ContactPreviewComponent } from './cmps/contact-preview/contact-preview.component';
import { StatisticPageComponent } from './pages/statistic-page/statistic-page.component';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { AppHeaderComponent } from './cmps/app-header/app-header.component';
import { SignupComponent } from './pages/signup/signup.component';
import { MoveListComponent } from './cmps/move-list/move-list.component';
import { TransferFundComponent } from './cmps/transfer-fund/transfer-fund.component';
import { FilterContactsPipe } from './pipes/filter-contacts.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ContactsPageComponent,
    ContactEditPageComponent,
    ContactDetailsPageComponent,
    ContactListComponent,
    ContactPreviewComponent,
    StatisticPageComponent,
    AppHeaderComponent,
    SignupComponent,
    MoveListComponent,
    TransferFundComponent,
    FilterContactsPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2GoogleChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
