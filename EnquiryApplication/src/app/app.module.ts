import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './public/login/login.component';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { serverInterceptor } from './interceptors/server.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [provideHttpClient(withInterceptors([serverInterceptor]))],
  bootstrap: [AppComponent]
})
export class AppModule { }
