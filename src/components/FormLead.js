import { AppElement } from "@buyerjourney/bj-core";
import { BjForm } from "./Form";
import {isValidPhoneNumber } from "libphonenumber-js";
import countryCodes from "./countryCodes.json";

export class FormLead extends AppElement {

    
    #default = {
        eventName:"user:click-form-lead",
        form:{}
    }

    constructor(props={}){
        super();
        this.eventName = "user:click-form-lead";
        this.state =this.initState(this.#default,props);
        this.getAttribute("id")||this.setAttribute("id",this.state.id||`component-${Math.floor(Math.random() * 100)}`);
        this.setAttribute("stage","awaiting")
        this.validationEmail = false;
        this.validationPhone = false;
       
    }

    static get observedAttributes() {
        return ["stage"];
      }



    handleEvent(event) {
        console.log(event)
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
                this.validationPhone = true;
            } else {
                this.querySelector("#help-phone").classList.remove("is-hidden");
                this.validationPhone = false;
            }
        }else if (event.type === "change"&&event.target.id==='email'){
            let regex = /^(?!\.)((?!.*\.{2})[a-zA-Z0-9\u00E0-\u00FC.!#$%&'*+-/=?^_`{|}~\-\d]+)@(?!\.)([a-zA-Z0-9\u00E0-\u00FC\-\.\d]+)((\.([a-zA-Z]){2,63})+)$/;
            if (regex.test(event.target.value)){                
                this.querySelector("#help-email").classList.add("is-hidden");
                this.validationEmail = true;
            }else {
                this.querySelector("#help-email").classList.remove("is-hidden");
                this.validationEmail = false;
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
            if (this.validationEmail===true&&this.validationPhone===true){
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
                const lead = new CustomEvent(this.state.eventName,{
                    detail:{click:event.target.id, lead:data},
                    bubbles: true,
                    composed: true
                });
                this.dispatchEvent(lead);
            }
        }
    }

    

  
   
      addEvents(){
        let btnCancel = this.querySelector("#cancel-lead");
        let form = this.querySelector("form");
        let email = this.querySelector("#email");
        let phone = this.querySelector("#phone");
        let contact = this.querySelector("#contact");
        let position = this.querySelector("#function");
        let company = this.querySelector("#company");
        let subject = this.querySelector("#subject");
        let description = this.querySelector("#description");
        let terms = this.querySelector("#terms");
        btnCancel.addEventListener("click",this);
        form.addEventListener("submit",this);
        email.addEventListener("change",this)
        phone.addEventListener("change",this)
    }
    render(){
        this.state?.id!=undefined?this.state.form.id = `${this.state.id}-form`:`form-${Math.floor(Math.random() * 100)}`;
        this.innerHTML =  /* html */`
        <section ${this.getClasses(["section"], this.state?.classList)} ${this.setAnimation(this.state.animation)}>
            <div class="container py-4">
                ${this.getTitles()}
                <div class="columns is-centered">
                    <div class="column ${this.state?.size!=undefined?this.state.size:'is-4'}">
                       ${this.state?.form!=undefined?new BjForm(this.state.form, this.state.context).render():''}
                    </div>
                </div>
            </div>
        </section>
        `
        this.addEvents()
    }

}

customElements.define("form-lead", FormLead)