import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  private modalState = new BehaviorSubject<boolean>(false);

  modalState$ = this.modalState.asObservable();

  toggleModal() {
    this.modalState.next(!this.modalState.value);
  }
}
