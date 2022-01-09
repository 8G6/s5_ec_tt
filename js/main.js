function table(a){
    TL = [
          ['ADC','DSP','MFE','DSP','LIC','CS'],
          ['LIC','DSP','DM','AIC Lab','AIC Lab','AIC Lab'],
          ['MFE','LIC','Minor','DSP Lab','DSP Lab','DSP Lab'],
          ['ADC','Minor','CS','ADC','DM','MFE'],
          ['ADC','CS','Minor','CS','DSP','LIC']
         ]
k = `<tr>
    <td>1</td>
    <td>2</td>
    <td>Break</td>
    <td>3</td>
    <td>Lunch</td>
    <td>Lunch</td>
    <td>4</td>
    <td>5</td>
    <td>Break</td>
    <td>6</td>
</tr>
<tr>
    <td>9 AM to 9:50 AM</td>
    <td>9:50 AM to 10:40 AM</td>
    <td>10:40 AM to 11 AM</td>
    <td>11 AM to 11:50 AM<td>
    <td>11:50 AM to 1 PM</td>
    <td>1 PM to 1:50</td>
    <td>1.50 PM to 2:40 PM</td>
    <td>2:40 PM to 3 PM </td>
    <td>3 PM to 4 PM</td>
</tr>
<tr>
    <td>${TL[a][0]}</td>
    <td>${TL[a][1]}</td>
    <td></td>
    <td>${TL[a][2]}<td>
    <td></td>
    <td>${TL[a][3]}</td>
    <td>${TL[a][4]}</td>
    <td></td>
    <td>${TL[a][5]}</td>
</tr>`
document.querySelector('table').innerHTML = k
}