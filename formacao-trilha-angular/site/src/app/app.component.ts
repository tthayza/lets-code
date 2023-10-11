import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'site';
  aboutData = `Nam dictum diam nibh, id ultricies nunc rhoncus at. Nullam lobortis, erat
  vitae tempus semper, ante leo elementum odio, eu viverra nisi est in odio.
  Sed mi quam, ultrices vel placerat a, finibus ut neque. Curabitur eu leo
  eleifend, congue nisi et, vestibulum ex. Nulla hendrerit ex non orci
  dictum mattis. Fusce faucibus vitae massa nec fermentum. Nam tristique
  libero ac tellus vestibulum bibendum. Phasellus euismod, metus ut pretium
  vulputate, mi orci dignissim enim, id egestas augue ex in neque. Nulla ac
  dictum arcu, sit amet fringilla nisi. Duis elementum blandit nisi et
  ultrices. Morbi scelerisque auctor dui, egestas varius tellus. Sed id
  placerat felis.`;
  footerData = `Made with ❤ by Thayza`;

  featuresData = ['Configurações', 'Listagem', 'Encaixes', 'Apresentação'];
}
