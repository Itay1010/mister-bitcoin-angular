import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Contact } from 'src/app/modules/main.module';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'transfer-fund',
  templateUrl: './transfer-fund.component.html',
  styleUrls: ['./transfer-fund.component.scss'],
})
export class TransferFundComponent implements OnInit {

  constructor(private userService: UserService) { }

  @Input() contact!: Contact

  amount = 0

  ngOnInit(): void {
  }

  onTransferCoins() {
    if(!this.contact?._id) return
    const { name, _id } = this.contact
    this.userService.transferCoin(-this.amount, { name, _id })
  }

}
