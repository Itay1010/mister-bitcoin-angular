import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { FormControl, FormControlOptions, NgForm, ValidatorFn } from '@angular/forms';
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
  isSubmitting = false

  ngOnInit(): void {
  }

  async onTransferCoins(form: NgForm) {
    const { amount } = form.value
    if (!this.contact?._id || amount <= 0) return alert('value cannot be 0')
    form.reset({ amount: 0 })
    this.isSubmitting = true
    const { name, _id } = this.contact
    await this.userService.transferCoin(-this.amount, { name, _id })
    this.isSubmitting = false
  }

}
