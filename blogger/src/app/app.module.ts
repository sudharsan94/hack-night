import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FeedsComponent } from './feeds/feeds.component';
import { RouterModule,Routes } from '@angular/router';
import { CreateBlogComponent } from './create-blog/create-blog.component';

const routesArray : Routes = [
  {
    path : "create",
    component : FeedsComponent,
  },
  {
    path : '**',
    component : FeedsComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    FeedsComponent,
    CreateBlogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routesArray),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
