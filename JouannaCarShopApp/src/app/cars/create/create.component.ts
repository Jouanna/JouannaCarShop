import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CarService } from '../car.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private carService: CarService,
    private router: Router) { }

  createCar(form: NgForm){
    if(form.invalid){
      console.log("The form is invalid!");
      return;
    }

    let{make, model, year, fuelType, horsePower, colour, price, store} = form.value;

    this.carService.create({make, model, year, fuelType, horsePower, colour, price, store}).subscribe({
      next: ()=> {
        this.router.navigate(['/cars']);
      },
      error: (err) => {console.log(err);}
    });
  }

  ngOnInit(): void {
  }

}
