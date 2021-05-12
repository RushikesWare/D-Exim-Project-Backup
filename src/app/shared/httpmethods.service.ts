import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MainURL } from '../constants/configUrl';

@Injectable({
  providedIn: 'root'
})
export class HttpmethodsService {

  
  baseUrl = MainURL.HostUrl;
  constructor(private http : HttpClient) { 

  }

  

  postRequest(url,body) {
    
    return this.http.post(this.baseUrl+url,body)
  }

  getRequest(url){
    return this.http.get(this.baseUrl+url)
  }

  putRequest(url,body){
    return this.http.put(this.baseUrl+url,body)
  }

  deleteRequest(url,id){
    return this.http.delete(this.baseUrl+url+"/"+id)
  }

  public fileUpload(url:  string,formData: File)
  {
   
    const uploadfile: FormData = new FormData();  
    
    uploadfile.append('uploadfile', formData);  
   
    return this.http.post(this.baseUrl+url, uploadfile);
   }

   postRequestJasper(url,body) {
    
    return this.http.post(this.baseUrl+url,body,{responseType: 'arraybuffer'})
  }

  getRequestJasper(url){
    return this.http.get(this.baseUrl+url,{responseType:"arraybuffer"})
  }



}
