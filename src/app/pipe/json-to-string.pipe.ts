import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'jsonToString'
})
export class JsonToStringPipe implements PipeTransform {

  transform(value: any, ...args: any): any {

    if(value){
      console.log("valores1", value[0]);
      console.log("valores2", value[1]);
      let arr1 = value[0];
      let arr2 = value[1];

      let str = "";
      for(const i in arr1){
        if(arr1[i]==1 || arr1[i]==2){
          str = "";
        }else{
        str += arr1[i]+", ";
        }
      }
      for(const i in arr2){
        if(arr2[i]==2){
          str =  str ;
        }else{
          str += arr2[i]+", ";
        }
      }

      str = str.slice(0,-2);

      let rol = "";
      if(str=='ROLE_USER'){
        rol='Vendedor'
      }else if (str=='ROLE_ADMIN'){
        rol='Administrador'
      }else if (str=='ROLE_USER, ROLE_ADMIN'){
        rol='Vendedor, Administrador'
      }else{
        rol='No tiene rol'
      }

      return rol;
    }

  }

}
