import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
	visible = false;
	system = false;
	
	user: any;
	role: any;


	toggle(event){
    	this.visible = !this.visible;
	}

	toggleSystem(event){
		this.system = !this.system;
	}

  	constructor() { }

  	ngOnInit() {
  		this.user = localStorage.getItem('userName') || '';
  		this.role = localStorage.getItem('role') || '';
  	}

}
