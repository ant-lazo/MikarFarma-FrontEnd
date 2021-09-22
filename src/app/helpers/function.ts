import { FormGroup } from "@angular/forms";

export class functions{

  //funcion para validar campos del formulario
    static invalidField(field:string, f:FormGroup, formSubmitted:boolean):boolean{
    if(formSubmitted && f.controls[field].invalid){

        return true;
    
      }else{
        return false;
      }

    }

    //funcion para determinar tamaño de pantalla

    static tamanoPatalla(minWidth:number, maxWidth:number):boolean{
      
      if(window.matchMedia(`(min-width:${minWidth}px) and (max-width:${maxWidth}px)`).matches){

        return true;
      }
      
      return false;
    }

    //cambiar la etiqueta del rango a español
  static spanishRangeLabel = (page: number, pageSize: number, length: number) => {
    if (length == 0 || pageSize == 0) { return `0 de ${length}`; }
    
    length = Math.max(length, 0);
  
    const startIndex = page * pageSize;
  
    // If the start index exceeds the list length, do not try and fix the end index to the end.
    const endIndex = startIndex < length ?
        Math.min(startIndex + pageSize, length) :
        startIndex + pageSize;
  
    return `${startIndex + 1} - ${endIndex} de ${length}`;
  }
}

