const toggle=document.querySelector('.menu-toggle');const nav=document.querySelector('#nav');toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Close navigation':'Open navigation');toggle.textContent=open?'×':'☰'});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.textContent='☰'}));document.querySelector('#year').textContent= 2024/*new Date().getFullYear()*/ ;document.querySelectorAll('[data-package]').forEach(a=>a.addEventListener('click',()=>{const service=document.querySelector('#service');const wanted=a.dataset.package;service.value=wanted==='Custom Digital Solution'?'Custom software': 'Website development';document.querySelector('#message').value=`I'm interested in the ${wanted} package. Please contact me to discuss the scope.`}));const projectForm=document.querySelector('#project-form');
projectForm.addEventListener('submit',async e=>{
 e.preventDefault();
 const status=document.querySelector('#form-status');
 const button=projectForm.querySelector('button[type=submit]');
 if(!projectForm.reportValidity()) return;
 button.disabled=true; button.querySelector('span').textContent='…';
 status.textContent='Sending your enquiry…'; status.classList.remove('error','success');
 try {
  const response=await fetch(projectForm.action,{method:'POST',body:new FormData(projectForm),headers:{'Accept':'application/json'}});
  const result=await response.json();
  if(response.ok && (result.success===true || result.success==='true')) {
   status.textContent='Thanks — your enquiry has been sent. Sisu DTH will review your brief and get back to you.';
   status.classList.add('success'); projectForm.reset();
  } else {
   throw new Error(result.message || 'The form provider did not accept the submission.');
  }
 } catch(error) {
  status.textContent='Sorry, we could not confirm delivery. Please try again or email sisudth@gmail.com directly. If this is the first submission, check that you have activated FormSubmit using the confirmation email sent to the recipient inbox.';
  status.classList.add('error');
 } finally { button.disabled=false; button.querySelector('span').textContent='↗'; }
});
