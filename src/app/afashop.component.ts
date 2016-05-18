// import { Component } from '@angular/core';

// @Component({
//   moduleId: module.id,
//   selector: 'afashop-app',
//   templateUrl: 'afashop.component.html',
//   styleUrls: ['afashop.component.css']
// })
// export class AfashopAppComponent {
//   title = 'afashop works!';
// }

import {Component} from '@angular/core';

@Component({
     moduleId: module.id,
    selector: 'afashop-app',
    template: `<h1>afashop</h1>
    <h2>Car Parts Available are: </h2>
    <ul>
    	<li *ngFor="let part of partsList" (click)="selectedPart(part)">{{part.name}}</li>
    </ul>
    <br>
    <hr>
    Newly added part: {{ newPart.name }}
    
    <hr>
    Cart Items
    <ul>
    	<li *ngFor="let item of cart">{{item.name}}</li>
    </ul>
    
    `
})
export class AfashopAppComponent { 
    
    newPart = "";
    public cart = [];
    
	public partsList = [
		{name:"Brakes for Toyota Corrolla"},
		{name:"Oil Filters for ML class"},
		{name:"Wiper blades for Honda Accord"},
		{name:"Fender for Honda Pilot"},
		{name:"Chevy Tahoe Transmission"}
	];
	
	
	selectedPart(part){
	   
	    this.newPart = part;
	    this.cart.push(part);
	    
	    alert("Part added to cart: " + part.name);
	}
}
