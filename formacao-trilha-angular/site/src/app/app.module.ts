import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { AddressComponent } from './components/address/address.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { ContactComponent } from './components/contact/contact.component';
import { FeaturesComponent } from './components/features/features.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ColorchangeDirective } from './directives/color-change/color-change.directive';
import { HighlightDirective } from './directives/highlight/highligh.directive';
import { UnderlineDirective } from './directives/underline/underline.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CarouselComponent,
    FeaturesComponent,
    AboutComponent,
    AddressComponent,
    ContactComponent,
    FooterComponent,
    HighlightDirective,
    UnderlineDirective,
    ColorchangeDirective,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
