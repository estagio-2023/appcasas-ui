import { Component } from '@angular/core';
import { AgentManagementComponent } from '../../agent-management/agent-management.component';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ToastClassEnum } from '../../enums/toast-class-enum';
import { ToastService } from '../../services/toast.service';
import { AgentService } from '../../services/agent.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-agent-validation-modal',
  templateUrl: './delete-agent-validation-modal.component.html',
  styleUrl: './delete-agent-validation-modal.component.css'
})
export class DeleteAgentValidationModalComponent {
  agentComponent: AgentManagementComponent
  agentId: number

  constructor(public activeModal: NgbActiveModal, private apiService: AgentService, private toastService: ToastService, private route: Router) { }

  closeModal() {
    this.activeModal.close()
  }

  deleteAgent() {
    this.apiService.deleteAgent(this.agentId).subscribe({
      next: value => {
        this.toastService.show("Agent successfully deleted", ToastClassEnum.success);
        this.route.navigate(['/agent'])
      },
      error: err =>
        this.toastService.show("Error in deleting Agent", ToastClassEnum.error),
    })

    this.closeModal()
  }
}

