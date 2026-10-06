(()=>{
"use strict";
const ENDPOINT="https://formspree.io/f/moejjvrq";
const formBox=document.getElementById("presentFeedback");
const submit=document.getElementById("feedbackSubmit");
if(!formBox||!submit)return;

const rating=document.getElementById("feedbackRating");
const type=document.getElementById("feedbackType");
const message=document.getElementById("feedbackMessage");
const contact=document.getElementById("feedbackContact");
const status=document.getElementById("feedbackStatus");

function timelineName(){
  const file=(location.pathname.split("/").pop()||"index.html").toLowerCase();
  if(file==="christianity.html")return "Christianity";
  if(file==="islam.html")return "Islam";
  return "Jewish";
}

submit.disabled=false;
submit.textContent="Send feedback";
if(status)status.textContent="Your feedback helps improve this project.";

submit.addEventListener("click",async()=>{
  if(!rating.value||!type.value||!message.value.trim()){
    status.textContent="Please choose a rating and feedback type, and enter your feedback.";
    return;
  }
  submit.disabled=true;
  submit.textContent="Sending…";
  status.textContent="Sending your feedback…";
  try{
    const response=await fetch(ENDPOINT,{
      method:"POST",
      headers:{"Content-Type":"application/json","Accept":"application/json"},
      body:JSON.stringify({
        timeline:timelineName(),
        event:"2026 — YOU ARE HERE",
        rating:rating.value,
        feedback_type:type.value,
        feedback:message.value.trim(),
        visitor_email:contact.value.trim()||"Not provided",
        page:location.href,
        submitted_at:new Date().toISOString()
      })
    });
    if(!response.ok)throw new Error("submit");
    rating.value="";
    type.value="";
    message.value="";
    contact.value="";
    submit.textContent="Feedback sent";
    status.textContent="Thank you for helping improve Falling Into the Abyss.";
    if(typeof window.gtag==="function")window.gtag("event","visitor_feedback_submitted",{timeline:timelineName()});
  }catch(_){
    submit.disabled=false;
    submit.textContent="Send feedback";
    status.textContent="We could not send your feedback. Please try again.";
  }
});
})();