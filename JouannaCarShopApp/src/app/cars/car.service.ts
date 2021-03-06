import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ICar } from '../interfaces/car';

let apiURL = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class CarService {

  car: ICar | null | undefined = undefined;

  constructor(
    private http: HttpClient,
  ) { }

  create(data: {
    make: string;
    model: string;
    year: string;
    fuelType: string;
    horsePower: string;
    colour: string;
    price: string;
    store: string;
  }){
    return this.http.post<ICar>(`${apiURL}/data/cars`, data);
  }

  getAllCars(){
    return this.http.get<ICar[]>(`${apiURL}/data/cars`);
  }

  getCar(id: string){
   return this.http.get<ICar>(`${apiURL}/data/cars/${id}`);
  }

  editCar(data: {make: string; model: string; year: string; fuelType: string; horsePower: string; colour: string; price: string; store: string;}, id:string){
    return this.http.put<ICar>(`${apiURL}/data/cars/${id}`, data);
  }

}
