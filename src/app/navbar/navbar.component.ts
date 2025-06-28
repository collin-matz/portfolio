import { Component } from '@angular/core';
import { ModalService } from '../modal.service';

@Component({
  selector: 'Navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(private modalService: ModalService) {}

  openModal() {
    this.modalService.toggleModal();
  }
}
