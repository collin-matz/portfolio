import { Component, OnInit } from '@angular/core';
import { ModalService } from '../modal.service';

@Component({
  selector: 'Contact-me-popup',
  templateUrl: './contact-me-popup.component.html',
  styleUrls: ['./contact-me-popup.component.scss']
})
export class ContactMePopupComponent implements OnInit {
  isModalOpen: boolean = false;

  constructor(private modalService: ModalService) {}

  ngOnInit(): void {
    this.modalService.modalState$.subscribe(state => {
      this.isModalOpen = state;
    })
  }

  toggleModal(): void {
    this.modalService.toggleModal();
  }

  iconSize: number = 38;
}
