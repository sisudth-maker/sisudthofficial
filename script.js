const toggle=document.querySelector('.menu-toggle');const nav=document.querySelector('#nav');toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Close navigation':'Open navigation');toggle.textContent=open?'×':'☰'});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.textContent='☰'}));document.querySelector('#year').textContent=new Date().getFullYear();document.querySelectorAll('[data-package]').forEach(a=>a.addEventListener('click',()=>{const service=document.querySelector('#service');const wanted=a.dataset.package;service.value=wanted==='Custom Digital Solution'?'Custom software': 'Website development';document.querySelector('#message').value=`I'm interested in the ${wanted} package. Please contact me to discuss the scope.`}));const projectForm=document.querySelector('#project-form');
if(projectForm){
 const status=document.querySelector('#form-status');
 const button=projectForm.querySelector('button[type="submit"]');
 const label=button.innerHTML;
 const showStatus=(message,type)=>{
  status.textContent=message;
  status.className='form-status '+type;
  status.setAttribute('role',type==='error'?'alert':'status');
  status.hidden=false;
 };
 projectForm.addEventListener('submit',async event=>{
  event.preventDefault();
  if(!projectForm.reportValidity()){
   showStatus('Please complete your name, a valid email address and the service you need.','error');
   return;
  }
  button.disabled=true;
  button.textContent='Sending your enquiry…';
  showStatus('Sending your enquiry…','pending');
  const controller=new AbortController();
  const timeout=setTimeout(()=>controller.abort(),15000);
  try{
   const response=await fetch(projectForm.action,{
    method:'POST',
    body:new FormData(projectForm),
    headers:{Accept:'application/json'},
    signal:controller.signal
   });
   const raw=await response.text();
   let result={};
   try{result=JSON.parse(raw)}catch{}
   if(!response.ok || !(result.success===true || result.success==='true')){
    throw new Error('Submission was not confirmed');
   }
   showStatus('✓ Thank you! Your project enquiry was accepted by our form provider. We will review your details and contact you soon.','success');
   projectForm.reset();
  }catch(error){
   showStatus('✕ We could not confirm your enquiry was sent. Please try again, use the Microsoft project form, or email sisudth@gmail.com. If this is your first submission, check your inbox for a FormSubmit activation email.','error');
  }finally{
   clearTimeout(timeout);
   button.disabled=false;
   button.innerHTML=label;
  }
 });
}
