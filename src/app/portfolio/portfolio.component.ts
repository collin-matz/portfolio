import { Component } from '@angular/core';
import { ModalService } from '../modal.service';

@Component({
  selector: 'Portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  constructor(private modalService: ModalService) {}

  openModal() {
    this.modalService.toggleModal();
  }
}
