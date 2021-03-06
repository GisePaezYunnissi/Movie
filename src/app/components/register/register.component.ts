import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  personaForm = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(3)]),
    apellido: new FormControl('',[Validators.required]),
    edad: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email])
  });

  nombreControl = this.personaForm.controls['nombre'];
  apellidoControl = this.personaForm.controls['apellido'];
  emailControl = this.personaForm.controls['email'];

  constructor() { }

  ngOnInit(): void {
    //this.personaForm.valueChanges.subscribe(values => console.log('value changes',values));
    this.personaForm.controls['nombre'].valueChanges.subscribe(values => console.log('value changes',values));
    this.personaForm.controls['apellido'].valueChanges.subscribe(values => console.log('value changes',values));
  }

  guardar(){
    console.log(this.personaForm.value);
  }

}
