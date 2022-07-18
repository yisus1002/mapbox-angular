import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class MapaService {
  public userlocatio?:[number, number]

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
