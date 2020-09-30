import { Component, OnInit } from '@angular/core';
import {ColorSchemeService} from  '../../color-scheme.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private colorSchemeService: ColorSchemeService) { 
    this.colorSchemeService.load();
  }

  ngOnInit(): void {
  }

}
