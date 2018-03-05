import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
	visible = false;
	system = false;

	toggle(event){
    	this.visible = !this.visible;
	}

	toggleSystem(event){
		this.system = !this.system;
	}

  	constructor() { }

  	ngOnInit() {
  	}

}
