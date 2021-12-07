import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  personas:Array<any> = [
    {nombre:'César', apellido:'Elizarraraz', edad:'19', correo:'cesar@gmail.com', tema: 'ecosistemas'},
    {nombre:'Pablo', apellido:'Milian', edad:'21', correo:'ex@gmail.com', tema: 'ecosistemas'},
    {nombre:'Fernando', apellido:'Miramontes', edad:'22', correo:'fernando@gmail.com', tema: 'ecosistemas'},
    {nombre:'Alfonso', apellido:'Cano', edad:'23', correo:'alfonsocano@gmail.com', tema: 'ecosistemas'},
    {nombre:'Sergio', apellido:'Marca', edad:'24', correo:'sergiomarca@gmail.com', tema: 'ecosistemas'},

    {nombre:'Julio', apellido:'Lugo', edad:'19', correo:'juliol@gmail.com', tema: 'ecosistemas'},
    {nombre:'Pedro', apellido:'Nuñes', edad:'21', correo:'pedron@gmail.com', tema: 'ecosistemas'},
    {nombre:'Hector', apellido:'Puri', edad:'22', correo:'hectorp@gmail.com', tema: 'ecosistemas'},
    {nombre:'Karla', apellido:'Llano', edad:'23', correo:'karlall@gmail.com', tema: 'ecosistemas'},
    {nombre:'Karol', apellido:'Marca', edad:'24', correo:'karolmarca@gmail.com', tema: 'ecosistemas'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
