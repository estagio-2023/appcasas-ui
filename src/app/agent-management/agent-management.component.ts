import { Component } from '@angular/core';
import { AgentModel } from '../models/agent-model';
import { AgentService } from '../services/agent.service';
import { AgentModalComponent } from '../modals/agent-modal/agent-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { agentForm } from '../../form/form.service';
import { ToastService } from '../services/toast.service';
import { ToastClassEnum } from '../enums/toast-class-enum';

@Component({
  selector: 'app-agent-management',
  templateUrl: './agent-management.component.html',
  styleUrl: './agent-management.component.css'
})
export class AgentManagementComponent {
  agents: AgentModel[]
  form = agentForm

  constructor(private apiService: AgentService, private modalService: NgbModal, private toastService: ToastService) { }

  ngOnInit(): void {
    this.loadAgentData()
  }

  loadAgentData() {
    this.apiService.getAllAgentData().subscribe(response => {
      this.agents = response
    })
  }

  openAddAgentModal() {
    var response = this.modalService.open(AgentModalComponent, {
      keyboard: false
    });

    response.result.then((data) => {
      if (data === 'save') {
        this.apiService.addAgentData(this.form.value).subscribe({
          next: value => {
            this.toastService.show("Agent added successfully!", ToastClassEnum.success);
            this.loadAgentData();
            this.form.reset()
          },
          error: err => {
            this.toastService.show("Error in adding agents", ToastClassEnum.error);
            console.error(err);
          }
        });
      }
    }
    )
  }
}