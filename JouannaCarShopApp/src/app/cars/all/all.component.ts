import { Component, OnInit } from '@angular/core';
import { ICar } from 'src/app/interfaces/car';
import { UserService } from 'src/app/users/user.service';
import { CarService } from '../car.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {

  cars: ICar[] | undefined;

  get isLogged(){
    return this.userService.isLogged;
  }

  constructor(
    private userService: UserService,
    private carService: CarService
  ) {this.getAllCars();}

  getAllCars(){
    this.cars = undefined;
    this.carService.getAllCars().subscribe(x => this.cars = x);

  }


  ngOnInit(): void {
  }

}
