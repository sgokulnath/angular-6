import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppRoutingModule } from './app-routing/app-routing.module';
import 'hammerjs';
import { MatSelectModule, MatIconModule, MatButtonModule, MatListModule, MatToolbarModule, MatCardModule, MatGridListModule} from '@angular/material'; 
import { DropdownComponent } from './dropdown/dropdown.component';
import { AppComponent } from './app.component';
import { DishDetailComponent } from './dish-detail/dish-detail.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component' ;

import { DishService } from './services/dish.service';
import { PromotionService } from './services/promotion.service'
import { LeadersService } from './services/leaders.service';


@NgModule({
  declarations: [
    AppComponent,
    DropdownComponent,
    DishDetailComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatButtonModule,
    MatListModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatGridListModule,
    FlexLayoutModule,
    AppRoutingModule
  ],
  providers: [DishService, PromotionService, LeadersService],
  bootstrap: [AppComponent]
})

export class AppModule { }
