import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {
  
  constructor(private apiService: ApiService,private http: HttpClient){}

    getDatosEmpresa(secuenciaEmpresa):Observable<any>{
      return this.apiService.ApiCallSinToken("GET",`/empresas?secuenciaEmpresa=${secuenciaEmpresa}&variable=mision,quienes_somos,vision`,null,null);
    }

    getEmpresa(secuenciaEmpresa):Observable<any>{
      return this.apiService.ApiCallSinToken("GET",`/empresas/datosEmpresa?secuenciaEmpresa=${secuenciaEmpresa}`,null,null);
    }

    getFoto(secuenciaEmpresa):Observable<any>{
      return this.apiService.ApiCallSinToken("GET",`/fotos?secuenciaEmpresa=${secuenciaEmpresa}&nemonico=PROMOCION`,null,null);
    }

    getOpcionesMenu(secuenciaEmpresa,nemonico):Observable<any>{
      return this.apiService.ApiCallSinToken("GET",`/general/opciones_menu?secuenciaEmpresa=${secuenciaEmpresa}&nemonico=${nemonico}`,null,null);
    }
}
