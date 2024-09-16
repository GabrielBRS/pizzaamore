import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { HomeService } from './home.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscribe } from './subscribe';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  loginForm: FormGroup = this.fb.group({
    'email': ['', [Validators.required, Validators.email]],
  })

  subscribe:Subscribe = new Subscribe();

  email:string = "";
  setContentBox:any = 1;
  setContentBoxTxt:any = 1;
  tentativa:boolean=false;

  constructor(private homeService:HomeService, private fb: FormBuilder,) {

  }

  ngOnInit(): void {
    setInterval(()=>{
      this.setTimeImage(this.setContentBox++);
      this.setTimeTxt(this.setContentBoxTxt++);
    },3500)

  }

  onSubmit(){
    this.homeService.subscribeEmail(this.subscribe).subscribe();
    this.subscribe.email = " ";
  }

  setTimeImage(time?:any){
    if(this.setContentBox<=6){

    }else{
      this.setContentBox=1;
    }

  }

  setTimeTxt(time?:any){
    if(this.setContentBoxTxt<=3){

    }else{
      this.setContentBoxTxt=1;
    }

  }

  fechar(value:boolean){
    this.tentativa = value;
  }

  funcTentativa(value:boolean){
    this.tentativa = value;
  }

}
