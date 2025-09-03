(function(){
  const form = document.getElementById('prankForm');
  const result = document.getElementById('result');
  const snapshot = document.getElementById('snapshot');
  const resetBtn = document.getElementById('resetBtn');

  function getFormData(){
    return {
      fullname: form.fullname.value.trim(),
      phone: form.phone.value.trim(),
      reason: form.reason.value.trim(),
      notes: form.notes.value.trim(),
      time: new Date().toLocaleString()
    };
  }

  function renderSnapshot(data){
    return `Zgłoszenie (ŻART) — ${data.time}
Imię i nazwisko: ${data.fullname}
Telefon: ${data.phone || '-'}
Powód: ${data.reason}
Szczegóły:
${data.notes || '-'}`;
  }

  form.addEventListener('submit', ev=>{
    ev.preventDefault();
    if(!form.consent.checked){
      alert('Musisz potwierdzić, że to żart.');
      return;
    }
    snapshot.textContent = renderSnapshot(getFormData());
    result.classList.remove('hidden');
    form.classList.add('hidden');
  });

  resetBtn?.addEventListener('click', ()=>{
    form.reset();
    result.classList.add('hidden');
    snapshot.textContent='';
    form.classList.remove('hidden');
  });
})();
