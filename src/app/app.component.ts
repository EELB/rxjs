import { Component, OnInit } from '@angular/core';
import { interval,map, filter } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'rxjs';
  ngOnInit():void {
    const observable = interval(1000);
    const suscription = observable.pipe( 
      map(val => val * val), filter(resp => resp % 2 !== 0) 
    ).subscribe({
   next:(resp) => console.log(resp),
    });
    setInterval(() => {
      suscription.unsubscribe();
    }, 1000);
  }
}
