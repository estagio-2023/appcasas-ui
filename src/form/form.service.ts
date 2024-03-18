import { FormControl, FormGroup, Validators } from "@angular/forms";

export const optionForm = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    description: new FormControl('', [Validators.required])
  })
