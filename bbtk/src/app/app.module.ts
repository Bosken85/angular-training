import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppComponent } from './app.component';
import { InMemShopService } from './app.in-memory-api';
import { AppRoutes } from './app.module.routes';
import { CardModule } from './components/card/card.module';
import { CarouselModule } from './components/carousel/carousel.module';
import { RepeatListModule } from './components/repeat-list/repeat-list.module';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { ServicesComponent } from './pages/services/services.component';
import { CorePipesModule } from './pipes/core-pipes.module';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavigationComponent,
    HomeComponent,
    AboutComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes),
    HttpClientInMemoryWebApiModule.forRoot(InMemShopService),
    CarouselModule,
    CardModule,
    RepeatListModule,
    HttpClientModule,
    CorePipesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


