import { Component, OnInit } from '@angular/core';
import { WwordsServerService } from '../wwords-server.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  loggedIn: boolean;

  constructor(
    private wwordsServer: WwordsServerService
  ) { }

  ngOnInit() {
    if (window.location.href.indexOf('access_token=') >= 0) {
      let accessTokenStart = window.location.href.indexOf('access_token=') + 13;
      let accessTokenEnd = window.location.href.indexOf('&', accessTokenStart);
      let accessToken = window.location.href.substring(accessTokenStart, accessTokenEnd);
      console.log(555, accessToken);
      this.wwordsServer.setAccessToken(accessToken);
      this.wwordsServer.saveWordEvent.emit();
      this.loggedIn = true;
    } else {
      this.loggedIn = false;
    }
  }

  googleLogIn() {
    const clientId = '962757262453-imcvmqmktk4iecdtthc92bkj24c1rssr.apps.googleusercontent.com';
    const redirectUrl = `${window.location.protocol}//${window.location.host}/`;
    const loginUrl = `https://accounts.google.com/o/oauth2/auth?scope=email profile&client_id=${clientId}&redirect_uri=${redirectUrl}&response_type=token`;
    window.open(loginUrl, '_self', 'location=no');
  }
}
