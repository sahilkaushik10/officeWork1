import { Component } from '@angular/core';

@Component({
  selector: 'app-file-field',
  templateUrl: './file-field.component.html',
  styleUrls: ['./file-field.component.css']
})
export class FileFieldComponent {
  toggleFileField(element: HTMLInputElement): void {
    const fileField = document.getElementsByClassName("file")[0] as HTMLElement;
    const inpFields = Array.from(document.getElementsByClassName("inpFile")) as HTMLElement[];

    if (element.value === "Sick Leave") {
      fileField.style.display = "inline-block";

      inpFields.forEach((inpField) => {
        inpField.style.display = "inline-block";
      });
    } else {
      fileField.classList.add("d-none");
      inpFields.forEach((inpField) => {
        inpField.classList.add("d-none");
      });
    }
  }

}
