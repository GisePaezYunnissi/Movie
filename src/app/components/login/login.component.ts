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

  constructor() { }

  ngOnInit(): void {
  }

  guardar(){
    console.log(this.login.value);
  }
}
