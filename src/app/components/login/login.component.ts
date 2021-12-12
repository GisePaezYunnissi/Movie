import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login = new FormGroup ({
    usuario: new FormControl(''),
    contraseña: new FormControl('')
  })

  usuarioControl = this.login.controls['usuario];
  contraseña = this.login.controls['contraseña'];


  constructor() { }

  ngOnInit(): void {
  }

  guardar(){
    console.log(this.login.value);
  }

}
