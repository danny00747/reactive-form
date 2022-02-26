import {Component, ContentChild, InjectionToken, Input, OnInit} from '@angular/core';
import {CONTACT} from "@app/conctact-warapper/interfaces/contact.token";
import {Contact} from "@app/conctact-warapper/interfaces/contact.interface";

@Component({
  selector: 'app-conctact-warapper',
  templateUrl: './conctact-warapper.component.html',
  styleUrls: ['./conctact-warapper.component.css']
})
export class ConctactWarapperComponent implements OnInit {

  @Input() title!: string;

  today = new Date();

  @ContentChild(CONTACT as InjectionToken<Contact>, {static: false}) // false cause it has to be accessed in ngAfterViewInit. True is for ngOnInit
  contact: Contact;

  constructor() {
  }

  ngOnInit(): void {
  }

  onAdd() {
    this.contact.add();
  }

}
