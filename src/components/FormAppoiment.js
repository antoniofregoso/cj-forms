import { FormLead } from "./FormLead";
import { CjForm, addFormEvents } from "./Form";
import { Calendar } from 'vanilla-calendar-pro';
import 'vanilla-calendar-pro/styles/index.css';
import 'vanilla-calendar-pro/styles/themes/light.css';
import 'vanilla-calendar-pro/styles/themes/dark.css';

export class FormAppoinment extends FormLead {

    #default = {
        eventName:"user:click-form-modal",
        form:{
            function:{
                disabled:true
            },
            company:{
                disabled:true
            },
            subject:{
                disabled:true
            },
            description:{
                disabled:true
            }
        }
    }

    constructor(props={}){
        super();
        this.eventName = "user:click-form-modal";
        this.state =this.initState(this.#default,props);
        this.getAttribute("id")||this.setAttribute("id",this.state.id||`component-${Math.floor(Math.random() * 100)}`);
        this.setAttribute("stage","awaiting")
        this.ok = false;
    }

     attributeChangedCallback(name, oldValue, newValue) {
        switch (newValue){
            case 'open':
                const calendar = new Calendar('#calendar');
                calendar.init()
                this.querySelector('.modal').classList.toggle('is-active');
                break;
        }
    }

    render(){
        this.state?.id!=undefined?this.state.form.id = `${this.state.id}-form`:`form-${Math.floor(Math.random() * 100)}`;
        this.innerHTML =  /* html */`
        <div class="modal">
            <div class="modal-background"></div>
            <div class="modal-card">
                ${this.state.title?.text[this.state.context.lang]!=undefined?`
                <header ${this.getClasses(["modal-card-head"], this.state.title?.classList)}  ${this.setAnimation(this.state.title?.animation)}>
                    <p class="modal-card-title">${this.state.title.text[this.state.context.lang]}</p>
                </header>`:''}
                <section class="modal-card-body">
                        <div>
                            <div id="calendar"></div>
                        </div>
                        <div class="pt-2">
                        </div>
                        <div class="pt-2">
                            ${this.state?.form!=undefined?new CjForm(this.state.form, this.state.context).render():''}
                        </div>
                </section>
            </div>
        /div>
        `
        addFormEvents(this);
    }

}

customElements.define("form-appoinment", FormAppoinment);