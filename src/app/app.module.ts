import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { LoaderModule } from './components/loader/loader.module';
import { httpInterceptorProviders } from './services/interceptor';
import { ToastNotificationModule } from './components/toast-notification/toast-notification.module';
import { AlertPopupModule } from './components/alert-popup/alert-popup.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LoaderModule,
    AlertPopupModule,
    ToastNotificationModule,
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
