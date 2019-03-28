import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { DatePipe } from '@angular/common';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { DataStorageService} from 'src/app/service/dataStorage/data-storage.service';
import { NoticiasListcComponent } from './components/noticias-listc/noticias-listc.component';

// RECOMMENDED
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { NoticiasUpsertComponent } from './components/noticias-upsert/noticias-upsert.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    NoticiasListcComponent,
    NoticiasUpsertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    CarouselModule.forRoot(),
    AngularFontAwesomeModule,
    ReactiveFormsModule
  ],
  providers: [ DatePipe, DataStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
