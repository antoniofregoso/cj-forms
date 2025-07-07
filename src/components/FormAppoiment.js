import { FormLead } from "./FormLead";
import { CjForm, addFormEvents } from "./Form";
import { Calendar } from 'vanilla-calendar-pro';
import 'vanilla-calendar-pro/styles/index.css';
import 'vanilla-calendar-pro/styles/themes/light.css';
import 'vanilla-calendar-pro/styles/themes/dark.css';

export class FormAppoinment extends FormLead {

    #default = {
        eventName:"user:click-form-appoinment",
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
        },
        calendar:{
            initialTime:9,
            finalTime:17,
            deltaTime:60
        }
    }

    constructor(props={}){
        super();
        this.state =this.initState(this.#default,props);
        this.getAttribute("id")||this.setAttribute("id",this.state.id||`component-${Math.floor(Math.random() * 100)}`);
        this.setAttribute("stage","awaiting")
        this.ok = false;
        this.calendar = false;
    }

     attributeChangedCallback(name, oldValue, newValue) {
        if (newValue === 'open'){
            if (this.calendar===false){
                this.calendar = new Calendar('#calendar',this.#setCalendar());
                this.calendar.init();
            }else {
                this.calendar.update();
            }
            let form = this.querySelector("form");
            const fieldset = form.querySelector('fieldset');
            fieldset.disabled = true;
            this.querySelector('.modal').classList.add('is-active');            
        }else {
            this.querySelector('form').reset();
            let times = this.querySelector('.grid').querySelectorAll('button:not([disabled])');
            times.forEach((time)=>{
                if (time.classList.contains('is-info')){
                    time.classList.remove('is-info');
                }
                time.disabled = true;
            })          

            this.querySelector('.modal').classList.remove('is-active');
        }
    }

    #setCalendar() {
        let today = new Date();
        let config = {
                locale: this.state.context.lang,
                onClickDate(self, event) {
                    let selection = event.target.parentNode;
                    let date = selection.dataset.vcDate;
                    const customEvent = new CustomEvent('date-selected',{
                        detail:{date:date},
                        bubbles: true,
                        composed: true
                    });
                    selection.dispatchEvent(customEvent);
                    },
                }
        if (this.state.calendar?.disablePastDays===true){
            let yyyy = today.getFullYear();
            const mm = String(today.getMonth() + 1).padStart(2, '0');
            const dd = String(today.getDate()).padStart(2, '0');
            config.displayDateMin = `${yyyy}-${mm}-${dd}`; 
        }
        if (this.state.calendar?.deltaDays>0){
            today.setDate(today.getDate() + this.state.calendar.deltaDays -1);
            let yyyy = today.getFullYear();
            const mm = String(today.getMonth() + 1).padStart(2, '0');
            const dd = String(today.getDate()).padStart(2, '0');
            config.displayDateMax = `${yyyy}-${mm}-${dd}`;
        }
        if(this.state.calendar?.availableDates!=undefined){
            config.disableAllDates = true,
            config.enableDates = this.state.calendar.availableDates;
        }
        return config;
    }

    #pad(num) {
    return num.toString().padStart(2, '0');
  }

    #getTimes(){
        let times = '';
        let deltaTime = this.state.calendar.deltaTime;
        let currentMinutes = this.state.calendar.initialTime * 60;
        const endMinutes = this.state.calendar.finalTime * 60 + deltaTime;
        if (currentMinutes<endMinutes){
            while (currentMinutes <= endMinutes) {
                const hours = Math.floor(currentMinutes / 60);
                const minutes = currentMinutes % 60;
                const timeStr = `${this.#pad(hours)}:${this.#pad(minutes)}`;
            currentMinutes += deltaTime;
            times += `<div class="cell"><button class="button is-small is-time" data-time="${timeStr}" disabled>${timeStr}</button></div>`
        }
        }else{
            console.warn("finalTime must be greater than initialTime. It is expressed as integers in 24-hour format.")
        }
        return times
    }

    enableTimes(options){
        options.forEach(time => {
            let el = this.querySelector(`[data-time="${time}"]`);
            if (el){
                el.removeAttribute("disabled");
                el.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    const customEvent = new CustomEvent('time-selected',{
                        detail:{time:time},
                        bubbles: false,
                        composed: true
                    });
                    this.dispatchEvent(customEvent);
                });
            }else{
                console.warn(`Time ${time} not found in the form appoinment component.`);
            }
        })
    }

  

   registerExtraEvents(){
        this.addEventListener('time-selected', (e) => {
            const dateSelected = this.querySelector('.vc-dates button[aria-selected="true"]').parentNode.dataset.vcDate;
            let appoinmentDate = `${dateSelected} ${e.detail.time}`;
            let options = this.querySelectorAll('.is-time');
            options.forEach(el => {
                el.classList.remove('is-info');
            });
            this.querySelector(`[data-time="${e.detail.time}"]`).classList.add('is-info');
            let form = this.querySelector("form");
            const fieldset = form.querySelector('fieldset');
            fieldset.disabled = false;
            let input = this.querySelector("#appoinment");
            if (input){
                input.value = appoinmentDate;
            }
        })
   }

    addDateField(){
        var input = document.createElement("input");
        input.setAttribute("type", "hidden");
        input.setAttribute("id", "appoinment");
        let form = this.querySelector("form");
        form.classList.remove("box");
        const fieldset = form.querySelector('fieldset');
        fieldset.appendChild(input);
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
                            <div class="fixed-grid has-5-cols">
                                <div class="grid">
                                    ${this.#getTimes()}
                                </div>
                            </div>
                        </div>
                        <div class="pt-4">
                            ${this.state?.form!=undefined?new CjForm(this.state.form, this.state.context).render():''}
                        </div>
                </section>
            </div>
        </div>
        `
        addFormEvents(this);
        this.registerExtraEvents();
        this.addDateField()
    }

}

customElements.define("form-appoinment", FormAppoinment);