
import countryCodes from "./countryCodes.json";


export function addFormEvents(component){
    let btnCancel = component.querySelector("#cancel-lead");
    let form = component.querySelector("form");
    let email = component.querySelector("#email");
    let phone = component.querySelector("#phone");
    if (btnCancel!=null){btnCancel.addEventListener("click",component)};
    if (form!=null){form.addEventListener("submit",component)};
    if (email!=null){email.addEventListener("change",component)};
    if (phone!=null){phone.addEventListener("change",component)};
}


export class CjForm {

    #default = {
        name:{
            label:{
                es:"Nombre",
                en:"Name",
                fr:"Nom"
            },
            help:{
                es:"El campo Nombre es obligatorio.",
                en:"The Name field is required.",
                fr:"Il est requis de compléter le champ correspondant au nom."
            }
        },
        function:{
            label:{
                es:"Puesto de Trabajo",
                en:"Job Position",
                fr:"Poste"
            },
            help:{
                es:"El campo Puesto de Trabajo es obligatorio.",
                en:"The Job Position field is required.",
                fr:"Le champ Poste est obligatoire."
            }
        },
        email:{
            label:{
                es:"Correo Electrónico",
                en:"e-mail",
                fr:"e-mail"
            },
        help:{
            es:"El campo Correo Electrónico es obligatorio.",
            en:"The Email field is required.",
            fr:"Le champ E-mail est obligatoire."
        },
        help2:{
            es:"El correo electrónico es invalido.",
            en:"Email is invalid.",
            fr:"Le courriel est invalide."
        }
        },
        phone:{
            label:{
                es:"Teléfono",
                en:"Phone",
                fr:"Téléphone"
            },
            help:{
                es:"El campo Teléfono es obligatorio.",
                en:"The Telephone field is required.",
                fr:"Le champ Téléphone est obligatoire."
            },
            help2:{
                es:"El Número Telefónico es inválido.",
                en:"The Telephone Number is invalid.",
                fr:"Le numéro de téléphone n'est pas valide."
            }
        },
        company:{
            label:{
                es:"Compañía",
                en:"Company",
                fr:"Entreprise"
            },
            help:{
                es:"El campo Compañia es obligatorio.",
                en:"The Company field is required.",
                fr:"Le champ Société est obligatoire."
            }
        },
        subject:{
            label:{
                es:"Asunto",
                en:"Subject",
                fr:"Objet"
            },
            help:{
                es:"El campo Asunto es obligatorio.",
                en:"The Subject field is required.",
                fr:"Le champ Objet est obligatoire."
            }
        },
        description:{
            label:{
                es:"Descripción",
                en:"Description",
                fr:"Description"
            },
            help:{
                es:"El campo Descripción es obligatorio.",
                en:"The Description field is required.",
                fr:"Le champ Description est obligatoire."
            }
        },
        terms:{
            text:{
                es:"Estoy de acuerdo con los",
                en:"I agree to the",
                fr:"J'accepte les"
            },
            help:{
                es:"Tienes que aceptar los Términos y Condiciones.",
                en:"You have to accept the Terms and Conditions.",
                fr:"Vous devez accepter les termes et conditions."
            },
        required:true
        },
        termsLink:{
            text:{
                es:"términos y condiciones",
                en:"terms and conditions",
                fr:"termes et conditions"
            }
        },
        submit:{
            text:{
                es:"Enviar",
                en:"Submit",
                fr:"Soumettre"
            }
        },
        cancel:{
            text:{
                es:"Cancelar",
                en:"Cancel",
                fr:"Annuler"
            }
        },
        context:{
            lang:"en"
        }
    }

    constructor(props={}, context={}){
        this.state = this.initState(this.#default,props);
        this.state.context = context
    }

    initState(defValues, props){
        if (props!=undefined){
            let state = Object.assign({}, defValues, props);
            if (defValues!=undefined){
                if (Object.keys(defValues).lenght!=0){
                    Object.keys(defValues).forEach(prop=>{  
                        if (props[prop]!=undefined){
                            if (typeof props[prop] === 'string' ||  Array.isArray(props[prop])){
                                state[prop] = props[prop];
                            }else{
                                state[prop] = Object.assign({}, defValues[prop], props[prop]);
                            }
                            
                        }  
                    })
                }
            }
            return state;
        }else {
            return defValues;
        }
    }

    setAnimation(props){
        if (props===undefined||props===null){
            return '';
        }else{
            let animation = ` data-animation=${props.effect}`
            props.delay!=undefined?animation+= ` data-delay=${props.delay}`:false;
            props.speed!=undefined?animation+=` data-speed=${props.speed}`:false;
            props.repeat!=undefined?animation+=` data-repeat=${props.repeat}`:false;
            return animation
        } 
        
    }

    getClasses(defaultClass=[], optionalClasses){
        let resultClasses = [];
        if (optionalClasses===undefined){
            resultClasses = defaultClass
        }else{
            resultClasses = [...defaultClass, ...optionalClasses]
        }
        let classes = '';
        if (resultClasses.length>0){
            classes = `class="${resultClasses.toString().replaceAll(",", " ")}"`;
        }
        return classes;
    }
    
    #getFlagEmoji(countryCode) {
        const codePoints = countryCode
            .toUpperCase()
            .split('')
            .map(char =>  127397 + char.charCodeAt());
        return String.fromCodePoint(...codePoints);
        }

    #getCodes(){
        let values = ``;
        if (this.state.phoneCodes===undefined){
            countryCodes.codes.forEach(country=>{
                values += `<option value="${country.dial_code}">${this.#getFlagEmoji(country.code)}</option>`
            })
        } else{
            if (this.state.phoneCodes.length>0){
                this.state.phoneCodes.forEach(code=>{
                    let country = countryCodes.codes.find(item => item.code === code)
                    values += `<option value="${country.dial_code}" ${this.state.code===country.code?'selected':''}>${this.#getFlagEmoji(country.code) + ' ' + country.dial_code }</option>`
                })
           }
        }
        return values
    }
    

    render(){
        return  `
        <form id="${this.state.id}" ${this.getClasses(["box"], this.state.form?.box?.classList)}  ${this.setAnimation(this.state.form?.animation)} novalidate>
                ${this.state.name?.disabled!=true?`
                    <div class="field" ${this.setAnimation(this.state.name?.animation)}>
                        <label class="label">${this.state.name?.label[this.state.context.lang]}</label>
                        <div class="control">
                        <input id="contact" class="input" type="text" ${this.state.name?.placeholder!=undefined?`placeholder="${this.state.name.placeholder[this.state.context.lang]}"`:``}  ${this.state.name?.required===true?'required':''}>
                        </div>
                        <p class="help is-danger is-hidden" id="help-contact">${this.state.name?.help[this.state.context.lang]}</p>
                    </div>`:''}
                    ${this.state.function?.disabled!=true?`
                    <div class="field" ${this.setAnimation(this.state.function?.animation)}>
                        <label class="label">${this.state.function?.label[this.state.context.lang]}</label>
                        <div class="control">
                        <input id="function" class="input" type="text" ${this.state.function?.placeholder!=undefined?`placeholder="${this.state.function.placeholder[this.state.context.lang]}"`:``}  ${this.state.function?.required===true?'required':''}>
                        </div>
                        <p class="help is-danger is-hidden" id="help-function">${this.state.function?.help[this.state.context.lang]}</p>
                    </div>`:''}
                    ${this.state.email?.disabled!=true?`
                    <div class="field" ${this.setAnimation(this.state.email?.animation)}>
                        <label class="label">${this.state.email?.label[this.state.context.lang]}</label>
                        <div class="control">
                        <input id="email" class="input" type="text" ${this.state.email?.placeholder!=undefined?`placeholder="${this.state.email.placeholder[this.state.context.lang]}"`:``}   ${this.state.email?.required===true?'required':''}>
                        </div>
                        <p class="help is-danger is-hidden" id="help-email">${this.state.email?.help[this.state.context.lang]}</p>
                        <p class="help is-danger is-hidden" id="help2-email">${this.state.email?.help2[this.state.context.lang]}</p>
                    </div>`:''}
                    ${this.state.phone?.disabled!=true?`
                    <div class="field" ${this.setAnimation(this.state.phone?.animation)}>
                        <label class="label">${this.state.phone?.label[this.state.context.lang]}</label>                       
                        <div class="control">
                            <div class="field has-addons">
                            <div class="select">
                            <select id="codes">
                                ${this.#getCodes()}
                            </select>
                          </div>
                                <div class="control is-expanded">
                                    <input id="phone" class="input" type="text" ${this.state.phone?.placeholder!=undefined?`placeholder="${this.state.phone.placeholder[this.state.context.lang]}"`:``} ${this.state.phone.required===true?`required`:``}  ${this.state.phone?.required===true?'required':''}>
                                </div>
                            </div>
                        </div>
                        <p class="help is-danger is-hidden" id="help-phone">${this.state.phone?.help[this.state.context.lang]}</p>
                        <p class="help is-danger is-hidden" id="help2-phone">${this.state.phone?.help2[this.state.context.lang]}</p>
                    </div>`:''}
                    ${this.state.company?.disabled!=true?`
                    <div class="field" ${this.setAnimation(this.state.company.animation)}>
                        <label class="label">${this.state.company?.label[this.state.context.lang]}</label>
                        <div class="control">
                        <input id="company" class="input" type="text" ${this.state.company?.placeholder!=undefined?`placeholder="${this.state.company.placeholder[this.state.context.lang]}"`:``}  ${this.state.company?.required===true?'required':''}>
                        </div>
                        <p class="help is-danger is-hidden" id="help-company">${this.state.company?.help[this.state.context.lang]}</p>
                    </div>`:''}
                    ${this.state.subject?.disabled!=true?`
                    <div class="field" ${this.setAnimation(this.state.subject.animation)}>
                        <label class="label">${this.state.subject?.label[this.state.context.lang]}</label>
                        <div class="control">
                        <input id="subject" class="input" type="text" ${this.state.subject?.placeholder!=undefined?`placeholder="${this.state.subject.placeholder[this.state.context.lang]}"`:``}  ${this.state.subject?.required===true?'required':''}>
                        </div>
                        <p class="help is-danger is-hidden" id="help-subject">${this.state.subject?.help[this.state.context.lang]}</p>
                    </div>`:''}
                    ${this.state.description?.disabled!=true?`
                    <div class="field" ${this.setAnimation(this.state.description.animation)}>
                        <label class="label">${this.state.description?.label[this.state.context.lang]}</label>
                        <div class="control">
                            <textarea id="description" class="textarea has-fixed-size" ${this.state.description?.placeholder!=undefined?`placeholder="${this.state.description.placeholder[this.state.context.lang]}"`:``} ${this.state.description?.required===true?'required':''}></textarea>
                        </div>
                        <p class="help is-danger is-hidden" id="help-description">${this.state.description?.help[this.state.context.lang]}</p>
                    </div>`:''}
                    ${this.state.terms?.disabled!=true?`
                    <div class="field" ${this.setAnimation(this.state.terms.animation)}>
                        <div class="control">
                            <label class="checkbox">
                            <input  id="terms" type="checkbox"  ${this.state.terms?.required===true?'required':''} >
                            ${this.state.terms?.text[this.state.context.lang]} <a href="${this.state.termsLink?.url!=undefined?this.state.termsLink?.url:'#'}">${this.state.termsLink?.text[this.state.context.lang]}</a>
                            </label>
                        </div>
                        <p class="help is-danger is-hidden" id="help-terms">${this.state.terms?.help[this.state.context.lang]}</p>
                    </div>`:''}
                    <div class="field is-grouped">
                        <div class="control" ${this.setAnimation(this.state.submit?.animation)}>
                            <button  id="submit-lead" ${this.getClasses(["button"], this.state.submit?.classList)}>${this.state.submit?.text[this.state.context.lang]}</button>
                        </div>
                        <div class="control" ${this.setAnimation(this.state.cancel?.animation)}>
                            <button  id="cancel-lead" ${this.getClasses(["button"], this.state.cancel?.classList)}>${this.state.cancel?.text[this.state.context.lang]}</button>
                        </div>
                    </div>
                </form>        
        `;
    }
}