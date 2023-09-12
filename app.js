const getData = async()=> {
    const randomNumber = Math.floor(Math.random() * 100);

    const response = await fetch(`http://numbersapi.com/${randomNumber}?json`);
    const data = await response.json();
    console.log(data.text);
    
return data.text;

}
getData();