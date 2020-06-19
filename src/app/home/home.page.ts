import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CountriesPage } from '../popover/countries/countries.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  
  constructor(public modalController: ModalController) {}

  async openCountries(ev: any) {
    const popover = await this.modalController.create({
      component: CountriesPage,
    });
    return await popover.present();
  }

}
