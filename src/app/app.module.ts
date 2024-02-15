import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ZorroModule } from './modules/zorro/zorro.module';
import { HomeComponent } from './routes/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { UploadComponent } from './components/upload/upload.component';
import { FileListComponent } from './components/file-list/file-list.component';
import { WorkAreaComponent } from './components/work-area/work-area.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UploadComponent,
    FileListComponent,
    WorkAreaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ZorroModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
