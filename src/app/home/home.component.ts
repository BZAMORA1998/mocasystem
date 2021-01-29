import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { EmpresaService } from '../service/empresa.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[EmpresaService]
})
export class HomeComponent implements OnInit {

  secuenciaEmpresa = environment.secuanciaEmpresa;

  constructor(private _empresaService:EmpresaService) { }

  ngOnInit(): void {
    this.getDatosEmpresa(this.secuenciaEmpresa);
    this.getFoto(this.secuenciaEmpresa)
  }
 
  data=[];
  mision:any;
  vision:any;
  quienes_somos:any;
  empresa:any;

  getDatosEmpresa(secuenciaEmpresa){
    this._empresaService.getDatosEmpresa(secuenciaEmpresa).subscribe(
        Response=>{
          this.data=Response.data;
          console.log(this.data);

          this.data.forEach(datos=>{
            datos.foto="data:image/png;base64,"+datos.foto;
          });
        },
        error=>{
          console.log(error.error.message);
        }
    ); 
  }

  foto:any;
  getFoto(secuenciaEmpresa){
    this._empresaService.getFoto(secuenciaEmpresa).subscribe(
        Response=>{
          this.foto=Response.data;
    
          this.foto.forEach(data=>{
            data.foto="data:image/png;base64,"+data.foto;
          });

          console.log(this.foto);
         
        },
        error=>{
          console.log(error.error.message);
        }
    ); 
  }
}
