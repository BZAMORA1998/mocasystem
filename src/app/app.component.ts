import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { EmpresaService } from './service/empresa.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[EmpresaService]
})
export class AppComponent {
  title = 'moca-system';

  secuenciaEmpresa = environment.secuanciaEmpresa;
  empresa:any;

  constructor(private _empresaService:EmpresaService) { }

  ngOnInit(): void {
    this.getEmpresa(this.secuenciaEmpresa);
    this.getOpcionesMenu(this.secuenciaEmpresa,"PRINCIPAL");
  }

  opcionesMenu=[];
  getOpcionesMenu(secuenciaEmpresa,nemonico){
    this._empresaService.getOpcionesMenu(secuenciaEmpresa,nemonico).subscribe(
        Response=>{
          this.opcionesMenu=Response.data;
          console.log(this.opcionesMenu);
        },
        error=>{
          console.log(error.error.message);
        }
    ); 
  }

  getEmpresa(secuenciaEmpresa){
    this._empresaService.getEmpresa(secuenciaEmpresa).subscribe(
      Response=>{
        this.empresa=Response.data;
        console.log(this.empresa);
        this.empresa.logo="data:image/png;base64,"+this.empresa.logo;

      },
      error=>{
        console.log(error.error.message);
      }
    );
  }
}
