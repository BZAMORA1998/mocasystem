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
            if(datos.nemonico=="MISION"){
              this.mision=datos;
            }else if(datos.nemonico=="VISION"){
              this.vision=datos;
            }else if(datos.nemonico=="QUIENES_SOMOS"){
              this.quienes_somos=datos;
            }
          });
        },
        error=>{
          console.log(error.error.message);
        }
    ); 
  }

}
