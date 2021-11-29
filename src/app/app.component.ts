import { Component, OnInit } from '@angular/core';
import LacunaWebPKI from 'web-pki';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-lacuna-teste';
  pki: any;

  ngOnInit() {
    this.pki = new LacunaWebPKI();
    console.log(this.pki);
    this.pki.init({
      ready: this.onReadyPKI() 
    });
  }

  onReadyPKI() {
    console.log(this.pki);
  }

  teste() {
    this.pki.listCertificates({
      success: function (certs) {
        for (var i = 0; i < certs.length; i++) {
          var cert = certs[i];
          var thumbprint = cert.thumbprint;
          var subjectName = cert.subjectName;
          var issuerName = cert.issuerName;
          console.log(certs[i]);
        }
      },
      error: function (errs) {
        var teste = errs; 
      }
    });
  }


  onSuccessListCertificates(certs) {
    for (var i = 0; i < certs.length; i++) {
      var cert = certs[i];
      var thumbprint = cert.thumbprint;
      var subjectName = cert.subjectName;
      var issuerName = cert.issuerName;
      console.log(certs[i]);
    }
  }

  onErrorListCertificates(e) {
    
  }
}
