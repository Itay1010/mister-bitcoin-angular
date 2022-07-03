import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/modules/main.module';
import { BitcoinService } from 'src/app/services/bitcoin.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private userService: UserService, private bitcoinService: BitcoinService) { }

  user!: User
  btcRate!: Observable<number>

  async ngOnInit(): Promise<void> {
    this.userService.loadUser().subscribe(user => {
      this.user = user as User
    })
    const rate = await this.bitcoinService.getRate()
    this.btcRate = rate
  }

}
