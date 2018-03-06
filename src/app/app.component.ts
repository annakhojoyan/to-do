import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DataService } from '.././data.service';
import { ITable } from '.././data.service';
import { error } from 'selenium-webdriver';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService]
})
export class AppComponent {

  public tables: ITable[] = [];
  public db : void;
  myForm: FormGroup;

  constructor(private dataService: DataService) {
    this.tables = this.dataService.getData();
    this.myForm = new FormGroup({
      "title": new FormControl("", [Validators.required, Validators.minLength(2), Validators.maxLength(4)]),
      "link": new FormControl("", [Validators.required, Validators.minLength(2)]),
    });

  }

  addLink(title: string, link: string): void {
    //let data: ITable[];
    let table: ITable = <ITable>{
      link: link,
      title: title,
      point: 0
    };
    if (this.tables.length) {

      this.tables.map(obj => {
        if (obj.link === this.myForm.get('link').value) {
          console.log("uyyutuy");
        } else {
          this.tables.push(table);
          DataService.Max(this.tables);
          this.dataService.setData(this.tables);
          this.myForm.get('title').setValue('');
          this.myForm.get('link').setValue('');
        }
      });
    } else {
      this.tables.push(table);
      DataService.Max(this.tables);
      this.dataService.setData(this.tables);
      this.myForm.get('title').setValue('');
      this.myForm.get('link').setValue('');
    }

  }
  onChanged(table: ITable, increased: boolean): void {
    table.point += increased ? 1 : -1;
    DataService.Max(this.tables);
  }
  removeLink(index: number) {
    this.tables.splice(index, 1);
    this.dataService.setData(this.tables);
    //localStorage.setItem('data', JSON.stringify(this.tables));
  }

}
