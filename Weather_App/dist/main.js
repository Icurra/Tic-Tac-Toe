(()=>{let e,t=[],n=document.querySelector("#weather"),a=document.querySelector("#searchInput"),o=document.querySelector("#saveBtn"),c=document.querySelector("#saved > ul"),r=document.querySelector("form"),d=document.querySelector("#currentTemp"),u=document.querySelector("#currentCon");function m(t){fetch(`https://api.openweathermap.org/data/2.5/weather?q=${t}&appid=c5732aa33b65fc0750b29be0398835ca&units=imperial`).then((e=>e.json())).then((t=>{e=t,console.log(t),d.textContent=`It is currently ${t.main.temp} in ${t.name}`,u.textContent=`The condition of the sky is ${t.weather[0].main} today`,t.main.temp>90?document.body.classList.add("weather-hot"):t.main.temp>85?document.body.classList.add("weather-warm"):document.body.classList.add("weather-normal"),o.disabled=!1})).catch((e=>{console.error(e),n.textContent=e.message}))}r.addEventListener("submit",(e=>{e.preventDefault(),m(a.value),a.value=""})),o.addEventListener("click",(()=>{t.includes(e.name)||function(e){t.push(e);let n=document.createElement("li");n.textContent=e,n.addEventListener("click",(()=>{m(e)})),c.appendChild(n)}(e.name)}))})();