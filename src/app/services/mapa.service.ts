import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class MapaService {
  public userlocatio?:[number, number]
  maxpboxkey='pk.eyJ1IjoiamVzdXNnMTAwMiIsImEiOiJja3p3N2MxazUxNmE0MnZtaHBjbTVoeDh5In0.t2Af6kwawJdt3b9xYby9Pw';

  get isUserlocationReady(): boolean{
   return !!this.userlocatio; 
  }
  constructor() {
    this.getUserlocation().then(()=>{
      console.log(this.userlocatio)
    }

    );
   }

 public async getUserlocation(): Promise<[number, number]>{
  return new Promise((resolve, rejects)=>{
    navigator.geolocation.getCurrentPosition(
      ({coords}) => {
        this.userlocatio=[ coords.longitude, coords.latitude ];
        resolve(this.userlocatio);
      },
      (err)=>{
        alert('No se pudo obtener la geolocalizacion')
        console.log(err);
        rejects();
      }
    )
  })
  }


}
