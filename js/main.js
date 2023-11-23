
const randomAdvaiceAPIHandler = async () => {
    const API_URL = 'https://api.adviceslip.com/advice';
    const response = await fetch(API_URL);
    return await response.json();
}

const updateAdvaice = async () => {
    
    const advaiceNumber = document.querySelector('#advaiceNumber');
    const advaiceField = document.querySelector('.advaiceField');
    const responseData = await randomAdvaiceAPIHandler();
    advaiceNumber.innerHTML = responseData.slip.id;
    advaiceField.innerHTML = responseData.slip.advice;

}



const randomAdvaiceBtnHandler = async () =>{
    const randomBtn = document.querySelector('.dice');
    randomBtn.addEventListener('click',async () =>{
        await updateAdvaice();

    })

    
}


updateAdvaice();
randomAdvaiceBtnHandler();
