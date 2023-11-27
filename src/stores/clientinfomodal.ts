import { defineStore } from "pinia";

export const useModalStore = defineStore("clientInfoModal", {
  state: () => {
    return { 
      isVisible: false,
      missingInfo: false,
      missingReasons: false,
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      info: false,
      services: false,
      other: false,
      fees: false
    };
  },
  actions: {
    clickButton() {
      this.isVisible = !this.isVisible;
      this.missingInfo = false;
      this.missingReasons = false;
      this.phone = '';
      this.firstName = '';
      this.lastName = '';
      this.email = '';
    },
    submitInfo(_firstName: string, _lastName: string) {
      if (_firstName.trim() === '' || _lastName.trim() === '' || !this.isEmailComplete() || !this.isPhoneComplete() || !this.isReasonChecked()) {
        this.missingInfo = true;
        this.highlightIncompleteFields(_firstName, _lastName);
      } else {
        this.missingInfo = false;
        const _form = document.getElementById('contactForm') as HTMLFormElement;
        const _subject = document.getElementById('subjectLine') as HTMLInputElement;
        _subject.value = "New Contact Submission from " + _firstName + " " + _lastName;
        _form.action = "https://formsubmit.co/1fbd3b54ef57072e8832b410f159dc51";
        _form.method = "POST";
        _form.submit();
      }
    },
    highlightIncompleteFields(_firstName: string, _lastName: string) {
      if(_firstName.trim() === '') {
        const _form = document.getElementById('firstName') as HTMLInputElement;
        if (_form.classList.contains('input-form')) {
          _form.classList.remove('input-form');
          _form.classList.add('input-error');
        }
      }

      if(_lastName.trim() === '') {
        const _form = document.getElementById('lastName') as HTMLInputElement;
        if (_form.classList.contains('input-form')) {
          _form.classList.remove('input-form');
          _form.classList.add('input-error');
        }
      }

      this.updateReasonsClass(this.isReasonChecked());

      this.updateEmailClass(this.isEmailComplete());

      this.updatePhoneClass(this.isPhoneComplete());
    },
    isEmailComplete() {
      if(this.email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{1,}))$/)) {
        return true;
      }
      return false;
    },
    updateEmailClass(_true: boolean) {
      const _form = document.getElementById('email') as HTMLInputElement;
      if(_true) {
        if (_form.classList.contains('input-error')) {
          _form.classList.remove('input-error');
          _form.classList.add('input-form');
        }
      } else {
        if (_form.classList.contains('input-form')) {
          _form.classList.remove('input-form');
          _form.classList.add('input-error');
        }
      }
    },
    isPhoneComplete() {
      let x = this.phone.replace(/[^0-9]/g,"");
      if(this.phone.trim() === '') {
        return true;
      } else if(x.length === 10) {
        return true;
      }
      return false;
    },
    formatPhoneNumber() {
      let x = this.phone.replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
      this.phone = !x![2] ? x![1] : '(' + x![1] + ') ' + x![2] + (x![3] ? '-' + x![3] : '');
    },
    updatePhoneClass(_true: boolean) {
      const _form = document.getElementById('phoneNumber') as HTMLInputElement;
      if(_true) {
        if (_form.classList.contains('input-error')) {
          _form.classList.remove('input-error');
          _form.classList.add('input-form');
        }
      } else {
        if (_form.classList.contains('input-form')) {
          _form.classList.remove('input-form');
          _form.classList.add('input-error');
        }
      }
    },
    isReasonChecked() {
      const _reasons = document.querySelectorAll<HTMLInputElement>('.label-checkbox');
      for(let i = 0; i < _reasons.length; ++i) {
        if(_reasons[i].checked) {
          return true;
        }
      };
      return false;
    },
    updateReasonsClass(_true: boolean) {
      if(_true) {
        this.missingReasons = false;
      } else {
        this.missingReasons = true;
      }
    }
  }
});