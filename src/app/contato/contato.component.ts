import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.scss']
})
export class ContatoComponent implements OnInit {

  convidados:boolean = true;

  @ViewChild('name') name!:ElementRef;
  @ViewChild('email') email!:ElementRef;
  @ViewChild('phone') phone!:ElementRef;
  @ViewChild('message') message!:ElementRef;

  tentativa:boolean=false;

  constructor() { }

  ngOnInit(): void {
    // this.setData;
  }

  enviar(){
    console.log(this.name.nativeElement.value)
    console.log(this.email.nativeElement.value)
    console.log(this.phone.nativeElement.value)
    console.log(this.message.nativeElement.value)
    window.open(`mailto:pizzaamoreartesanal@gmail.com?subject=${'ATENDIMENTO AO CLIENTE PIZZA AMORE '}&body=${encodeURIComponent('Olá, '+'\n'+'\n'+'Eu estou entrando em contato para tratar sobre '+'\n'+'\n'+this.message.nativeElement.value+'\n'+'\n'+'\n'+'\n'+'Favor retornar mensagem à '+'\n'+'\n'+this.name.nativeElement.value+'\n'+'\n'+this.phone.nativeElement.value+'\n'+this.email.nativeElement.value+'\n'+'\n')}`);
  }

  setConvidados(convidado:any){
    this.convidados = convidado;
  }

  fechar(value:boolean){
    this.tentativa = value;
  }

  funcTentativa(value:boolean){
    this.tentativa = value;
  }

}
