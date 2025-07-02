import { FormLead } from "./FormLead";
import { CjForm, addFormEvents } from "./Form";
import { Remarkable } from "remarkable";

export class FormHero extends FormLead  {

    #default = {
        formPosition:"right",
        formWidth:"is-6",
        form:{},
        context:{
          lang:"en"
      }
    }

    constructor(props={}){
        super();
        this.eventName = "user:click-form-hero";
        this.state =this.initState(this.#default,props);
        this.getAttribute("id")||this.setAttribute("id",this.state.id||`component-${Math.floor(Math.random() * 100)}`);
        this.setAttribute("stage","awaiting")
        this.ok = false;
        this.md = new Remarkable();
       
    }

    render(){
        this.state?.id!=undefined?this.state.form.id = `${this.state.id}-form`:`form-${Math.floor(Math.random() * 100)}`;
        let form = /* html */`
            <div  ${this.getClasses(["column", "p-6"], [this.state.formWidth])}>
                ${this.state?.form!=undefined?new CjForm(this.state.form, this.state.context).render():''}
            </div>
        `;
        let text = /* html */`  
        <div class="column">
            <div  class="p-4 m-6 content"> 
                ${this.state.caption?.text[this.state.context.lang]!=undefined?`
                <p ${this.getClasses(["subtitle"], this.state.caption?.classList)}  ${this.setAnimation(this.state.caption.animation)}>
                ${this.state.caption.text[this.state.context.lang]}
                </p>`:''}         
                ${this.state.title?.text[this.state.context.lang]!=undefined?`
                <h1 ${this.getClasses(["title"], this.state.title?.classList)}  ${this.setAnimation(this.state.title?.animation)}>
                    ${this.state.title.text[this.state.context.lang]}
                </h1>`:''}
                ${this.state.subtitle?.text[this.state.context.lang]!=undefined?`
                <h2 ${this.getClasses(["subtitle"], this.state.subtitle?.classList)}  ${this.setAnimation(this.state.subtitle?.animation)}>
                    ${this.state.subtitle.text[this.state.context.lang]}
                </h2>`:''}
                ${this.state.description?.text[this.state.context.lang]!=undefined?`
                <div ${this.getClasses(["content"], this.state.description?.classList)} ${this.setAnimation(this.state.description?.animation)}>
                    ${this.md.render(this.state.description?.text[this.state.context.lang])}
                </div>`:''}              
            </div>
        </div>
            `
        this.innerHTML =  /* html */`
        <section ${this.getClasses(["section"], this.state?.classList)} ${this.setAnimation(this.state.animation)} ${this.getBackground()}>
            <div class="container">
                <div class="columns is-vcentered is-gapless my-0"> 
                    ${this.state.formPosition==='right'?text:form}
                    ${this.state.formPosition==='right'?form:text}
                </div>
            <div>
        </section>
        `
        addFormEvents(this);
    }

}

customElements.define("form-hero", FormHero);