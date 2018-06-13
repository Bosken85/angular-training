import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutes } from './app.module.routes';
import { CardModule } from './components/card/card.module';
import { CarouselModule } from './components/carousel/carousel.module';
import { RepeatListModule } from './components/repeat-list/repeat-list.module';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';
import { StarsPipe } from './pipes/stars.pipe';
import { TruncatePipe } from './pipes/truncate.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavigationComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent,
    ContactComponent,
    TruncatePipe,
    StarsPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes),
    CarouselModule,
    CardModule,
    RepeatListModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


