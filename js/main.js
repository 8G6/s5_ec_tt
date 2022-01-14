  
$ = (a) => document.querySelector(a);
function set(today,time,j,i){
  k='sub'
  if(today[i]=='BREAK'){
     k='break'
  }
  else if(today[i]=='LUNCH BREAK'){
     k='lbreak'
  }
  return  `<div class='child ${k}'>
              <div class="sub">
                  <p class='per'>${k=='sub' ? j : ''}</p>            
                  ${today[i]}
                  <div class="time">
                      ${time[i]}
                  </div>
              </div>
            </div>`
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function gen(a){

    let TL = [
          ['ADC','DSP','BREAK','MFE','LUNCH BREAK','DSP','LIC','BREAK','CS'],
          ['LIC','DSP','BREAK','DM','LUNCH BREAK','AIC Lab','AIC Lab','AIC Lab'],
          ['MFE','LIC','BREAK','Minor','LUNCH BREAK','DSP Lab','DSP Lab','DSP Lab'],
          ['ADC','Minor','BREAK','CS','LUNCH BREAK','ADC','DM','BREAK','MFE'],
          ['ADC','CS','BREAK','Minor','LUNCH BREAK','CS','DSP','BREAK','LIC']
         ]
    let time =  [
                  [
                    '&nbsp; 9 AM to 9:50 AM &nbsp;',
                    '9:50 AM to 10:40 AM',
                    '10:40 AM to 11 AM', 
                    ' 11 AM to 11:50 AM',
                    ' 11:50 AM to 1 PM  ', 
                    ' 1 PM to 1:50 PM   ', 
                    ' 1.50 PM to 2:40 PM', 
                    '  2:40 PM to 3 PM  ',
                    '    3 PM to 4 PM   '
                  ],
                  [
                    '9 AM to 9:50 AM',
                    '9:50 AM to 10:40 AM',
                    '10:40 AM to 11 AM', 
                    '11 AM to 11:50 AM',
                    '11:50 AM to 1 PM', 
                    '1 PM to 1:50 PM', 
                    '1.50 PM to 2:40 PM', 
                    '2:40 PM to 3 PM',
                    '3 PM to 4 PM'
                 ]
              ]

    let date = {
                0:'Mon',
                1:'Tue',
                2:'Web',
                3:'Thu',
                4:'Fri',
                5:'Sat',
                6:'Sun'
              }
    if(a=='auto'){
      today = new Date().toString().split(' ')[0];
      for(i=0;i<5;i++)
      if(date[i]==today)
      today = TL[i]
    }
    else{
      today = TL[a]
    }
    
    today == 'Fri' ? time = time[1] : time = time[0]
    
    j=1
   
    $('.father').innerHTML=''
    for(i=0;i<today.length;i++){
        $('.father').innerHTML +=set(today,time,j,i)
        await delay(98)
        if(today[i]!='BREAK' && today[i]!='LUNCH BREAK')
        j++
    }
    
}