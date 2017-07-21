import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BLE } from '@ionic-native/ble';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    protected bleEnabled = false;

  constructor(public navCtrl: NavController,
                 private ble: BLE ) {
  }

  protected ionViewWillEnter(): void {
        this.ble.isEnabled().then(
            () => {
                this.bleEnabled = true;
            }, () => {
                this.bleEnabled = false;
                this.ble.enable().then(
                    () => {
                        this.bleEnabled = true;
                    }, () => {
                        this.bleEnabled = false;
                    });
            });
    }

}
