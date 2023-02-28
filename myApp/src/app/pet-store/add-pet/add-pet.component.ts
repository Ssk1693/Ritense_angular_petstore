import { Component } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { NgForm } from '@angular/forms';
import { StatusService } from 'src/status.service';
import { Status } from 'src/status';


@Component({
  selector: 'app-add-pet',
  templateUrl: './add-pet.component.html',
  styleUrls: ['./add-pet.component.scss']
})
export class AddPetComponent{
  
 form: FormGroup;
  formFields = [
    {
      key: 'name',
      placeholder: 'Name',
      type: 'text',
      validators: [Validators.required]
    },
    {
      key: 'status',
      placeholder: 'Status',
      type: 'select',
      validators: [Validators.required]
    },
    {
      key: 'photoUrls',
      placeholder: 'Image',
      type: 'file',
      validators: [Validators.required]
    },
  ];
  public status:Status[];
  onSubmit(form:NgForm)
  {
console.log("hi");
  }
  constructor(private statusService:StatusService){
  }
  ngOnInit():void
  {
this.statusService.getStatus
().subscribe(response=>
  {this.status=response;
  });


  }

}
