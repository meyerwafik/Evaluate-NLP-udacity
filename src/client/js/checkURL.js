function checkURL(entered_url)
    {
    
     alert("1")
     let url_reg = new RegExp(  /^((?:https?:\/\/)?[^.\/]+(?:\.[^.\/]+)+(?:\/.*)?)$/);

alert(url_reg.test(entered_url))
            if (url_reg.test(entered_url))
            {
              
              return true;
            }
            else
            {
              
              return false;
            }
    }
  export  {checkURL}
