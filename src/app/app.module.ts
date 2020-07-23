import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { CodeversionComponent } from './codeversion/codeversion.component';
import { GitHubService } from '../app/codeversion/http-request.service';

@NgModule({
  declarations: [AppComponent, CodeversionComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule, AppRoutingModule],
  providers: [GitHubService],
  bootstrap: [AppComponent],
})
export class AppModule {}
