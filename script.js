const toggle=document.querySelector('.menu-toggle');const nav=document.querySelector('#nav');toggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Close navigation':'Open navigation');toggle.textContent=open?'×':'☰'});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.textContent='☰'}));document.querySelector('#year').textContent=new Date().getFullYear();document.querySelectorAll('[data-package]').forEach(a=>a.addEventListener('click',()=>{const service=document.querySelector('#service');const wanted=a.dataset.package;service.value=wanted==='Custom Digital Solution'?'Custom software': 'Website development';document.querySelector('#message').value=`I'm interested in the ${wanted} package. Please contact me to discuss the scope.`}));const projectForm=document.querySelector('#project-form');
projectForm.addEventListener('submit',async e=>{
 e.preventDefault();
 const status=document.querySelector('#form-status');
 const button=projectForm.querySelector('button[type=submit]');
 if(!projectForm.reportValidity()) return;
 button.disabled=true; button.querySelector('span').textContent='…';
 const controller=new AbortController();
 const timeout=setTimeout(()=>controller.abort(),12000);
 status.hidden=false;
 status.textContent='Sending your project enquiry…'; status.scrollIntoView({block:'nearest',behavior:'smooth'}); status.classList.remove('error','success');
 try {
  const response=await fetch(projectForm.action,{method:'POST',body:new FormData(projectForm),headers:{'Accept':'application/json'},signal:controller.signal});
  const raw=await response.text();
  let result; try {result=JSON.parse(raw)} catch {throw new Error('Unexpected response from the form provider.');}
  if(response.ok && (result.success===true || result.success==='true')) {
   status.textContent='Thank you! Your enquiry was accepted by our form provider. We’ll be in touch soon.';
   status.classList.add('success'); projectForm.reset();
  } else {
   throw new Error(result.message || 'The form provider did not accept the submission.');
  }
 } catch(error) {
  status.textContent=error.name==='AbortError'?'The request timed out. We could not confirm your enquiry was sent. Please try again or email sisudth@gmail.com.':'Sorry, we could not confirm your enquiry was sent. Please try again or email sisudth@gmail.com. If this is your first submission, check for a FormSubmit activation email.';
  status.classList.add('error');
 } finally { clearTimeout(timeout); button.disabled=false; button.querySelector('span').textContent='↗'; }
});
