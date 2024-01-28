import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent {
  status:boolean = false;
  title:string = 'Titre initial'
  name:string = 'KTM'
  changeTitle(){
    this.title = 'New Title';
  }

}
