const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '66854df03dmshe3060a8994fabacp159e90jsna046d3a2c43d',
		'X-RapidAPI-Host': 'jobs-api14.p.rapidapi.com'
	}
};
let find = document.getElementById("find");

find.onclick = async function(e){
    e.preventDefault();
    let jsearch= document.getElementById("jobsearch").value;

  localStorage.setItem('jsearch',jsearch);

    let l= document.getElementById("loc").value;
    let jt= document.getElementById("jt").value;

    const url = `https://jobs-api14.p.rapidapi.com/list?query=${jsearch}&location=${l}`;
    // const url = 'https://jobs-api14.p.rapidapi.com/list?query=${encodeURIComponent(jsearch)}&location=${l}&distance=1.0&language=en_GB&remoteOnly=true&datePosted=3days&employmentTypes=${jt}&index=0'; 
    console.log(url);
    console.log(jsearch);
    console.log(l);
    console.log(jt);
    // console.log("jd");
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        result["jobs"].map((item) =>{
            console.log(item);
        })
        console.log(result["jobs"][0]);
    } catch (error) {
        console.error(error);
    }
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        const jobs = result.jobs;
        const tableBody = document.querySelector('#jobTable tbody');
        
        tableBody.innerHTML='';

        jobs.forEach(job => {
          const row = document.createElement('tr');
          row.innerHTML = `
            <td><a href="${job.jobProviders[0].url}">${job.title}</a></td>
            <td>${job.company}</td>
            <td>${job.location}</td>
            <td>${job.Jobtype}</td>
            <td>${job.datePosted}</td>
            <td><button><a href="composemail.html">Compose Mail</a></button></td>
          `;
          tableBody.appendChild(row);
        });
      } catch (error) {
        console.error(error);
      }
    
}


    