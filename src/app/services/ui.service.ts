import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddExp : boolean = false;
  private showEditExp : boolean = false;
  private showEditHeader : boolean = false;
  private subjetAdd = new Subject<any> ();
  private subjetEdit = new Subject<any> ();
  private subjetEditHeader = new Subject<any> ();
  
  constructor() { }

  //Para cambiar el valor booleano desde el componente padre hacia el componente hijo.
  toggleVisibilityExp():void{
    this.showAddExp = !this.showAddExp;
    this.subjetAdd.next(this.showAddExp);
  }
  toggleVisibilityEditExp():void{
    this.showEditExp = !this.showEditExp;
    this.subjetEdit.next(this.showEditExp);
  }
  toggleVisibilityEditHeader():void{
    this.showEditHeader = !this.showEditHeader;
    this.subjetEditHeader.next(this.showEditHeader);
    
  }
 // El método onToggle() devuelve un observable que notificará a los componentes que se suscriban cada vez que el valor de this.subjet cambie. De esta manera, los componentes pueden estar atentos a los cambios en el estado de un objeto y actuar en consecuencia.
  onToggleAdd(): Observable<any> {
    return this.subjetAdd.asObservable();
  }
  onToggleEdit(): Observable<any> {
    return this.subjetEdit.asObservable();
  }
  onToggleEditHeader(): Observable<any>{
    return this.subjetEditHeader.asObservable();
  }
}
