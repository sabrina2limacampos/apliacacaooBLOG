import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PostComponent } from './post/post.component';
import { PostAddComponent } from './post-add/post-add.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostEditComponent } from './post-edit/post-edit.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const appRoutes: Routes = [
  {
    path: 'posts',
    component: PostComponent,
    data: { title: 'POST List' }
  },
  {
    path: 'post-details/:id',
    component: PostDetailComponent,
    data: { title: 'POST Details' }
  },
  {
    path: 'post-add',
    component: PostAddComponent,
    data: { title: 'POST Add' }
  },
  {
    path: 'post-edit/:id',
    component: PostEditComponent,
    data: { title: 'POST Edit' }
  },
  { path: '',
    redirectTo: '/posts',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostAddComponent,
    PostDetailComponent,
    PostEditComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    FormsModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
