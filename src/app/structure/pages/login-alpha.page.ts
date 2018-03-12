import { Component, OnInit } from '@angular/core';
declare var $: any;
declare var jQuery: any;

@Component({
  selector: 'cat-page',
  templateUrl: './login-alpha.html',
  styles: [`
    .overlay {
      position: absolute;
      right: 0px;
      bottom: 0px;
      left: 0px;
      top: 0px;
      z-index: 0;
      overflow: hidden;
      background: 50% 50% / cover no-repeat rgba(0, 0, 0, 0.2);
      transition: background-color 0.2s ease, opacity 0.4s ease;
    }

    .overlay.hasOverlay4::before {
      background-color: rgba(0, 0, 0, 0.4);
    }
    .overlay::before {
      position: absolute;
      top: 0px;
      right: 0px;
      bottom: 0px;
      left: 0px;
      z-index: 1;
      background-color: transparent;
      content: "";
      transition: background-color 0.2s ease;
    }

    .image-background {
      position: absolute;
      top: 0px;
      right: 0px;
      bottom: 0px;
      left: 0px;
      background: 50% 50% / cover no-repeat transparent;
      transition: opacity 0.4s ease;
    }
  `]
})

export class PagesLoginAlpha implements OnInit {
  ngOnInit() {

    $(function() {

      // Form Validation
      $('#form-validation').validate({
        submit: {
          settings: {
            inputContainer: '.form-group',
            errorListClass: 'form-control-error',
            errorClass: 'has-danger'
          }
        }
      });

      // Show/Hide Password
      $('.password').password({
        eyeClass: '',
        eyeOpenClass: 'icmn-eye',
        eyeCloseClass: 'icmn-eye-blocked'
      });

      // Switch to fullscreen
      $('.switch-to-fullscreen').on('click', function () {
        $('.cat__pages__login').toggleClass('cat__pages__login--fullscreen');
      })

      // Change BG
      $('.random-bg-image').on('click', function () {
        var min = 1, max = 5,
          next = Math.floor($('.random-bg-image').data('img')) + 1,
          final = next > max ? min : next;

        $('.random-bg-image').data('img', final);
        $('.cat__pages__login').data('img', final).css('backgroundImage', 'url(assets/modules/pages/common/img/login/' + final + '.jpg)');
      })

    });

  }
}

