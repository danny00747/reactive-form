import {Component, OnInit} from '@angular/core';
import {Data, Router} from "@angular/router";
import {CompanyDTO, UserDTO} from "@app/shared/model/user.model";

@Component({
  selector: 'app-recap',
  templateUrl: './recap.component.html',
  styleUrls: ['./recap.component.css']
})
export class RecapComponent implements OnInit {

  data: UserDTO;
  companyData: CompanyDTO;
  today = new Date();

  dump: UserDTO = {
    "firstName": "Daniel",
    "lastName": "Olivier Brown",
    "email": "dan10@gmail.com",
    "addresses": [
      {
        "street": "rue de la place",
        "city": "Lyon",
        "houseNumber": "45",
        "zipCode": "1234",
        "country": "France"
      },
      {
        "street": "avenue de la fosse",
        "city": "Lille",
        "houseNumber": "11",
        "zipCode": "1452",
        "country": "France"
      },
      {
        "street": "grand place",
        "city": "Louvain-La-Neuve",
        "houseNumber": "1",
        "zipCode": "1330",
        "country": "Belgique"
      }],
    "phone": {"phoneCode": "+33", "phoneNumber": "485713610"},
    "password": "ddddd",
    "confirmPassword": "ddddd"
  };

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.data = this.router.config.find(r => r.path === 'home')?.data?.personalContact;
    this.companyData = this.router.config.find(r => r.path === 'home')?.data?.companyContact;
    // this.data = this.dump;
  }
}
