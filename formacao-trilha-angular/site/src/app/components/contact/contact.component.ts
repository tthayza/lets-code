import { Component, EventEmitter, Output } from '@angular/core';
import { ContactForm } from 'src/app/models/contact-form.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  @Output() public sendFormData = new EventEmitter<ContactForm>();
  @Output() public movimentoEnvioForm = new EventEmitter<any>();

  disabledButton = true;
  contactInfo: ContactForm = {
    email: '',
    message: '',
  };
  // contactInfoTS: any = {
  //   email: '',
  //   message: '',
  // };
  disableEmail = false;
  constructor() {
    setTimeout(() => {
      this.disabledButton = false;
    }, 5000);
  }

  disabledButtonFunction() {
    return !this.disabledButton;
  }

  submitForm(): void {
    // console.log(
    //   'evento emitido pelo component filho(contact) para o component pai(app.component)',
    //   this.contactInfo
    // );
    this.sendFormData.emit(this.contactInfo);
    this.movimentoEnvioForm.emit();

    this.contactInfo = {
      email: '',
      message: '',
    };
  }

  testEvent(event: any): void {
    // console.log(event);
    if (this.contactInfo.email.endsWith('@gmail.com')) {
      // console.log('EMAIL COMPLETO');
      this.disableEmail = true;
    } else {
      this.disableEmail = false;
    }
  }
}
