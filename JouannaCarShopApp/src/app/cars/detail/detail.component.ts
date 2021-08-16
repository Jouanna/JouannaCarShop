import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ICar } from 'src/app/interfaces/car';
import { CarService } from '../car.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  car: ICar | undefined;
  detail: boolean = false;


  constructor(
    private activatedRoute: ActivatedRoute,
    private carService: CarService,
    private router: Router
  ) { this.getCar(); }

  ngOnInit(): void {
  }

  getCar(){
    this.car = undefined;
    const id = this.activatedRoute.snapshot.params.objectId;
    this.carService.getCar(id).subscribe(x => this.car = x);
  }

  edit(form: NgForm){
    if(form.invalid){
      console.log("The form is invalid!");
      return;
    }
    let{make, model, year, fuelType, horsePower, colour, price, store} = form.value;

    const id = this.activatedRoute.snapshot.params.objectId;
    this.carService.editCar({make, model, year, fuelType, horsePower, colour, price, store}, id).subscribe({
      next: () => {
        this.router.navigate(['/cars']);
      },
      error: (err) => {
        console.log(err);
      }
    });
  }

}
