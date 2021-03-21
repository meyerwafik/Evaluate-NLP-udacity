function checkURL(entered_url)
    {
      let reg =  /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/
            if (reg.test(entered_url))
            {
              
              return true;
            }
            else
            {
              
              return false;
            }
    }
  export  {checkURL}
