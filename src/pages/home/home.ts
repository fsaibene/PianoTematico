import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginPage } from '../../pages/login/login';

import { AlertController } from 'ionic-angular';
import { Media, MediaObject } from '@ionic-native/media';
import { MediaPlugin } from 'ionic-native';
import { AuthService } from '../../auth.service';
import { NavService } from '../../nav.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tematica: string = "animales";
  file: MediaPlugin = null;

  constructor(private authAf: AngularFireAuth,
    public navCtrl: NavController,
    private alertCtrl: AlertController,
    public authService : AuthService,
    private ns: NavService,
    public media: Media) {
  }

  logout(){
    const alert = this.alertCtrl.create({
      title: 'Atención!',
      message: 'Seguro desea cerrar sesión?',
      buttons: [
        {
          text: 'Si',
          handler: () => {
            this.authService.isLogged$.next(false);
            this.authAf.auth.signOut();
            this.ns.getNavRoot().setRoot(LoginPage);    
          }
        },
        {
          text: 'No'
        }
      ]
    });
    alert.present();
  }

  tecla1() {
    const onStatusUpdate = (status) => console.log(status);
    
    if('autos' == this.tematica) {
      const sound =  new MediaPlugin('file:///android_asset/www/assets/sonidos/auto1.mp3', onStatusUpdate);
      this.playSound(sound);
    } else if('animales' == this.tematica) {
      const sound =  new MediaPlugin('file:///android_asset/www/assets/sonidos/animal1.mp3', onStatusUpdate);
      this.playSound(sound);
    } else if('frases' == this.tematica) {
      const sound =  new MediaPlugin('/android_asset/www/assets/sonidos/fran1.mp3', onStatusUpdate);
      this.playSound(sound);
    }
  }
  playSound(sound) {
    sound.play();
    setTimeout(() => {
      sound.stop();
    }, 3000);
  }
  
  tecla2() {
    const onStatusUpdate = (status) => console.log(status);
    if('autos' == this.tematica) {
      const sound =  new MediaPlugin('file:///android_asset/www/assets/sonidos/auto2.mp3', onStatusUpdate);
      this.playSound(sound);
    } else if('animales' == this.tematica) {
      const sound =  new MediaPlugin('file:///android_asset/www/assets/sonidos/animal2.mp3', onStatusUpdate);
      this.playSound(sound);
    } else if('frases' == this.tematica) {
      const sound =  new MediaPlugin('file:///android_asset/www/assets/sonidos/fran2.mp3', onStatusUpdate);
      this.playSound(sound);
    }
  }

  tecla3() {
    const onStatusUpdate = (status) => console.log(status);
    if('autos' == this.tematica) {
      const sound =  new MediaPlugin('file:///android_asset/www/assets/sonidos/auto3.mp3', onStatusUpdate);
      this.playSound(sound);
    } else if('animales' == this.tematica) {
      const sound =  new MediaPlugin('file:///android_asset/www/assets/sonidos/animal3.mp3', onStatusUpdate);
      this.playSound(sound);
    } else if('frases' == this.tematica) {
      const sound =  new MediaPlugin('file:///android_asset/www/assets/sonidos/fran3.mp3', onStatusUpdate);
      this.playSound(sound);
    }
  }

  tecla4() {
    const onStatusUpdate = (status) => console.log(status);
    if('autos' == this.tematica) {
      const sound =  new MediaPlugin('file:///android_asset/www/assets/sonidos/auto4.mp3', onStatusUpdate);
      this.playSound(sound);
    } else if('animales' == this.tematica) {
      const sound =  new MediaPlugin('file:///android_asset/www/assets/sonidos/animal4.mp3', onStatusUpdate);
      this.playSound(sound);
    } else if('frases' == this.tematica) {
      const sound =  new MediaPlugin('file:///android_asset/www/assets/sonidos/fran4.mp3', onStatusUpdate);
      this.playSound(sound);
    }
  }

  tecla5() {
    const onStatusUpdate = (status) => console.log(status);
    if('autos' == this.tematica) {
      const sound =  new MediaPlugin('file:///android_asset/www/assets/sonidos/auto5.mp3', onStatusUpdate);
      this.playSound(sound);
    } else if('animales' == this.tematica) {
      const sound =  new MediaPlugin('file:///android_asset/www/assets/sonidos/animal5.mp3', onStatusUpdate);
      this.playSound(sound);
    } else if('frases' == this.tematica) {
      const sound =  new MediaPlugin('file:///android_asset/www/assets/sonidos/fran5.mp3', onStatusUpdate);
      this.playSound(sound);
    }
  }
}