import { AppElement } from "@customerjourney/cj-core";
import { CjForm, addFormEvents } from "./Form";
import {isValidPhoneNumber } from "libphonenumber-js";
import countryCodes from "./countryCodes.json";

export class FormLead extends AppElement {

    
    #default = {
        form:{}
    }

    constructor(props={}){
        super();
        this.eventName = "user:click-form-lead";
        this.state =this.initState(this.#default,props);
        this.getAttribute("id")||this.setAttribute("id",this.state.id||`component-${Math.floor(Math.random() * 100)}`);
        this.ok = false;
       
    }

    static get observedAttributes() {
        return ["stage"];
      }

    handleEvent(event) {
        let leadForm = this.querySelector("form")
        if (event.type === "click"&&event.target.id==='cancel-lead'){
            const lead = new CustomEvent(this.state.eventName,{
                detail:{click:event.target.id},
                bubbles: true,
                composed: true
            });
            this.dispatchEvent(lead);

        }else if (event.type === "change"&&event.target.id==='phone'){
            let code = leadForm.codes.options[leadForm.codes.selectedIndex].value;
            let country = countryCodes.codes.find(country => country.dial_code==code)
            let phone = code + ' ' + event.target.value;
            if (isValidPhoneNumber(phone, country.code)){
                this.querySelector("#help-phone").classList.add("is-hidden");
                this.querySelector("#help2-phone").classList.add("is-hidden");
                this.ok = true;
            } else {
                this.querySelector("#help2-phone").classList.remove("is-hidden");
                this.ok = false;
            }
        }else if (event.type === "change"&&event.target.id==='email'){
            let regex = /^(?!\.)((?!.*\.{2})[a-zA-Z0-9\u00E0-\u00FC.!#$%&'*+-/=?^_`{|}~\-\d]+)@(?!\.)([a-zA-Z0-9\u00E0-\u00FC\-\.\d]+)((\.([a-zA-Z]){2,63})+)$/;
            if (regex.test(event.target.value)){ 
                this.querySelector("#help-email").classList.add("is-hidden");
                this.querySelector("#help2-email").classList.add("is-hidden");
                this.ok = true;
            }else {
                this.querySelector("#help2-email").classList.remove("is-hidden");
                this.ok = false;
            }
        }else if (event.type === "click"&&event.target.id==='cancel-lead'){
                event.preventDefault();
                const cancelLead = new CustomEvent(this.state.eventName,{
                detail:{click:event.target.id},
                bubbles: true,
                composed: true
            });
            this.dispatchEvent(cancelLead);
        }else if (event.type === "submit"){
            event.preventDefault();
            let contact = this.querySelector("#contact");
            let position = this.querySelector("#function");
            let phone = this.querySelector("#phone");
            let email = this.querySelector("#email");
            let company = this.querySelector("#company");
            let subject = this.querySelector("#subject");
            let description = this.querySelector("#description");
            let terms = this.querySelector("#terms");
            if (contact!=null&&contact.required&&contact.value.trim() === ''){
                this.querySelector("#help-contact").classList.remove("is-hidden");
                this.ok = false;
            }else if (contact!=null){
                this.querySelector("#help-contact").classList.add("is-hidden");
                this.ok = true;
            }
            if (position!=null&&position.required&&position.value.trim() === ''){
                this.querySelector("#help-function").classList.remove("is-hidden");
                this.ok = false;
            }else if (position!=null){
                this.querySelector("#help-function").classList.add("is-hidden");
                this.ok = true;
            }
            if (company!=null&&company.required&&company.value.trim() === ''){
                this.querySelector("#help-company").classList.remove("is-hidden");
                this.ok = false;
            }else if (company!=null){
                this.querySelector("#help-company").classList.add("is-hidden");
                this.ok = true;
            }
            if (phone!=null&&phone.required&&phone.value.trim() === ''){
                this.querySelector("#help-phone").classList.remove("is-hidden");
                this.ok = false;
            }else if (phone!=null){
                this.querySelector("#help-phone").classList.add("is-hidden");
                this.ok = true;
            }
            if (email!=null&&email.required&&email.value.trim() === ''){
                this.querySelector("#help-email").classList.remove("is-hidden");
                this.ok = false;
            }else if (email!=null){
                this.querySelector("#help-email").classList.add("is-hidden");
                this.ok = true;
            }
            if (subject!=null&&subject.required&&subject.value.trim() === ''){
                this.querySelector("#help-subject").classList.remove("is-hidden");
                this.ok = false;
            }else if (subject!=null){
                this.querySelector("#help-subject").classList.add("is-hidden");
                this.ok = true;
            }
            if (description!=null&&description.required&&description.value.trim() === ''){
                this.querySelector("#help-description").classList.remove("is-hidden");
                this.ok = false;
            }else if (description!=null){
                this.querySelector("#help-description").classList.add("is-hidden");
                this.ok = true;
            }
            if (terms!=null&&terms.required&&terms.checked==false){
                this.querySelector("#help-terms").classList.remove("is-hidden");
                this.ok = false;
            }else if (terms!=null){
                this.querySelector("#help-terms").classList.add("is-hidden");
                this.ok = true;
            }
            if (this.ok===true){
                if(this.form?.eventName!=undefined){
                    this.eventName = this.state.form.eventName             
                  }
                let data = {}
                if (leadForm?.contact!=undefined){
                    data['name'] = leadForm.contact.value;
                }
                if (leadForm?.function!=undefined){
                    data['function'] = leadForm.function.value;
                }
                if (leadForm?.email!=undefined){
                    data['email'] = leadForm.email.value;
                }
                if (leadForm?.phone!=undefined){
                    data['phone'] = leadForm.codes.options[leadForm.codes.selectedIndex].value + ' ' + leadForm.phone.value;
                }
                if (leadForm?.company!=undefined){
                    data['company'] = leadForm.company.value;
                }
                if (leadForm?.subject!=undefined){
                    data['subject'] = leadForm.subject.value;
                }
                if (leadForm?.description!=undefined){
                    data['description'] = leadForm.description.value;
                }
                const hiddenInputs = leadForm.querySelectorAll('input[type="hidden"]');
                if (hiddenInputs.length > 0) {
                    hiddenInputs.forEach(input => {
                        data[input.id] = input.value;
                    });
                }
                const lead = new CustomEvent(this.state.eventName,{
                    detail:{click:event.target.id, lead:data},
                    bubbles: true,
                    composed: true
                });
                this.dispatchEvent(lead);
            }
        }
    }

    

  
   
    

    render(){
        this.state?.id!=undefined?this.state.form.id = `${this.state.id}-form`:`form-${Math.floor(Math.random() * 100)}`;
        this.innerHTML =  /* html */`
        <section ${this.getClasses(["section"], this.state?.classList)} ${this.setAnimation(this.state.animation)} ${this.getBackground()}>
            <div class="container py-4">
                ${this.getTitles()}
                <div class="columns is-centered">
                    <div class="column ${this.state?.size!=undefined?this.state.size:'is-4'}">
                       ${this.state?.form!=undefined?new CjForm(this.state.form, this.state.context).render():''}
                    </div>
                </div>
            </div>
        </section>
        `
        addFormEvents(this);
    }

}

customElements.define("form-lead", FormLead);