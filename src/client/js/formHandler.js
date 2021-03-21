

async function handleSubmit(event){
    event.preventDefault();
    const url=document.getElementById('article-url').value
    
    let btn=document.getElementById('btn-submit')
  
    if (Client.checkURL(url)){
        
        try{
        
        btn.disabled=true
     
        const Call_of_api = await fetch(`http://localhost:8081/url-addition/${url}`);
        
        const resp_API = await Call_of_api.json();
        document.getElementById("output").innerHTML = `<table>
        <tr><td>Sentiment</td><td>Result</td></tr>
        <tr><td>Agreement is :  </td><td>${resp_API.agreement.toLowerCase()}</td></tr> 
        <tr><td>Subjectivity is :  </td><td>${resp_API.subjectivity.toLowerCase()}</td></tr>
        <tr><td>Confidence is :  </td><td>${resp_API.confidence}</td></tr>
        <tr><td>Irony is :  </td><td>${resp_API.irony.toLowerCase()}</td></tr>
        <tr><td>Score Tag is :  </td><td>${resp_API.score_tag.toLowerCase()}</td></tr>
        </table>`;
        
        btn.disabled = false
        }
        catch(error){
            console.log(error)
        }
    }
   
    else{
        alert('The url is not valid, please enter valid url')
    }
   
}
export   {handleSubmit}

