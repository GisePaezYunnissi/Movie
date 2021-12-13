import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup ({
    usuario: new FormControl('',[Validators.required]),
    contraseña: new FormControl('',[Validators.required])
  })

  usuarioControl = this.loginForm.controls['usuario'];
  contraseñaControl = this.loginForm.controls['contraseña'];

  constructor() { }

  ngOnInit(): void {
    this.loginForm.controls['usuario'].valueChanges.subscribe(values => console.log('value changes',values));
  }

  guardar(){
    console.log(this.loginForm.value);
  }
}
