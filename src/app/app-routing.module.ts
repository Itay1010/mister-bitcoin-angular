import { HashLocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { ContactDetailsPageComponent } from './pages/contact-details-page/contact-details-page.component';
import { ContactEditPageComponent } from './pages/contact-edit-page/contact-edit-page.component';
import { ContactsPageComponent } from './pages/contacts-page/contacts-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SignupComponent } from './pages/signup/signup.component';
import { StatisticPageComponent } from './pages/statistic-page/statistic-page.component';
import { ContactsResolverService } from './resolvers/contacts-sersolver.service';

const routes: Routes = [
  { path: 'statistics', component: StatisticPageComponent },
  { path: 'contact/edit/:id', component: ContactEditPageComponent, resolve: { contact: ContactsResolverService } },
  { path: 'contact/edit', component: ContactEditPageComponent },
  { path: 'contact/:id', component: ContactDetailsPageComponent, resolve: { contact: ContactsResolverService } },
  { path: 'contact', component: ContactsPageComponent },
  { path: 'signup', component: SignupComponent },
  { path: '', component: HomePageComponent, canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
