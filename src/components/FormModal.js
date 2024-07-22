import { FormLead } from "./FormLead";
import { BjForm, addFormEvents } from "./Form";

export class FormModal extends FormLead {

    #default = {
        eventName:"user:click-form-modal",
        form:{}
    }

    constructor(props={}){
        super();
        this.eventName = "user:click-form-modal";
        this.state =this.initState(this.#default,props);
        this.getAttribute("id")||this.setAttribute("id",this.state.id||`component-${Math.floor(Math.random() * 100)}`);
        this.setAttribute("stage","awaiting")
        this.ok = false;
       
    }

    render(){
        this.state?.id!=undefined?this.state.form.id = `${this.state.id}-form`:`form-${Math.floor(Math.random() * 100)}`;
        this.innerHTML =  /* html */`
        <div class="modal is-active">
            <div class="modal-background"></div>
            <div class="modal-card">
                ${this.state.title?.text[this.state.context.lang]!=undefined?`
                <header ${this.getClasses(["modal-card-head"], this.state.title?.classList)}  ${this.setAnimation(this.state.title?.animation)}>
                    <p class="modal-card-title">${this.state.title.text[this.state.context.lang]}</p>
                </header>`:''}
                <section class="modal-card-body">
                     ${this.state?.form!=undefined?new BjForm(this.state.form, this.state.context).render():''}
                </section>
            </div>
        /div>
        `
        addFormEvents(this);
    }

}

customElements.define("form-modal", FormModal);