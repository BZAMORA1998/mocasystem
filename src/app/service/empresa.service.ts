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
      return this.apiService.ApiCallSinToken("GET",`/empresa?secuenciaEmpresa=${secuenciaEmpresa}&variable=mision,quienes_somos,vision`,null,null);
    }

    getEmpresa(secuenciaEmpresa):Observable<any>{
      return this.apiService.ApiCallSinToken("GET",`/empresa/${secuenciaEmpresa}`,null,null);
    }

    getFoto(secuenciaEmpresa):Observable<any>{
      return this.apiService.ApiCallSinToken("GET",`/foto/${secuenciaEmpresa}?nemonico=PROMOCION`,null,null);
    }
}
