import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NewtaskComponent } from './newtask/newtask.component';
import { CompletedtaskComponent } from '../completedtask/completedtask.component';
import { RouterModule, Route } from '@angular/router';
import { FormsModule } from '@angular/forms';

const routes: Route[] = [
  {
    path:'tasktodo',
    component: NewtaskComponent
  },
  {
    path:'completed',
    component: CompletedtaskComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    NewtaskComponent,
    CompletedtaskComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
