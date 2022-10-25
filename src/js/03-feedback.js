const throttle = require('lodash.throttle');
const feedbackformEl =document.querySelector('.feedback-form');

const feedbackFormState={}

const fillfeedbackFormFields=()=>{
    let contactFormData
    try {
        contactFormData= JSON.parse(localStorage.getItem('feedbackFormState'))
        if (contactFormData===null){
            return
        }
    } catch(err){
        console.log(err);
    } 
    for(let el in contactFormData ){
        if(contactFormData.hasOwnProperty(el)){
            feedbackformEl.elements[el].value=contactFormData[el]

        }
        
    }

}
fillfeedbackFormFields()

const onFormFiledChange=(event)=>{
    const {target}=event
    const fieldValue=target.value;
    const fieldName=target.name;
    feedbackFormState[fieldName]=fieldValue
    localStorage.setItem('feedbackFormState',JSON.stringify(feedbackFormState))
}

const onContactsFormSubmit = event=>{
    event.preventDefault()
    localStorage.removeItem('feedbackFormState')
    feedbackformEl.reset()


}

feedbackformEl.addEventListener('input',throttle(onFormFiledChange, 500 ))
feedbackformEl.addEventListener('submit',onContactsFormSubmit)
