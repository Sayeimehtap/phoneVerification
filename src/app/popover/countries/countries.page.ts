import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.page.html',
  styleUrls: ['./countries.page.scss'],
})
export class CountriesPage implements OnInit {

  constructor(public modalController: ModalController) {}

  ngOnInit() {
    const searchbar = document.querySelector('ion-searchbar');
    const items = Array.from(<HTMLElement[]><any>document.querySelector('ion-list').children);
  
    searchbar.addEventListener('ionInput', handleInput);
  
    function handleInput(event) {
      const query = event.target.value.toLowerCase();
      requestAnimationFrame(() => {
        items.forEach(item => {
          const shouldShow = item.textContent.toLowerCase().indexOf(query) > -1;
          item.style.display = shouldShow ? 'block' : 'none';
        });
      });
    }
  }

  closeCountries(){
    this.modalController.dismiss();
  }

}
