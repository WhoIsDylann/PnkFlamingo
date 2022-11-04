const form = document.getElementById('contactform')
const newsButton = document.getElementById('newsbutton')
const newsSection = document.getElementById('newsarticles')
const navButtons = document.querySelector('.topnavbar')

const submitInfo = (bodyObj) =>
    axios.post('/message', bodyObj)
    .then(res => {
        alert('message sent')
    })
    .catch(err => {
        alert('message failed to send')
    })

const submitHandler = (evt) => {
    evt.preventDefault()
    let email = document.getElementById('emailText')
    let message = document.getElementById('messageText')

    let bodyObj = {
        email: email.value,
        message: message.value
    }
    submitInfo(bodyObj)
    form.reset()
}

form.addEventListener('submit', submitHandler)

//=====================================================

let idArr = []

const newsHandler = () => {
    axios.get('/news')
    .then(res => {
        console.log(res.data)
        res.data.forEach(element => {  
            let {article_id, content, date, imagelink} = element

            if (!idArr.includes(article_id)) {
            
            idArr.push(article_id)
            // console.log(idArr)

            let newsArticle = document.createElement('article' );

            newsArticle.className = "articles";
            
            newsSection.appendChild(newsArticle);

            let articleDate = document.createElement('h2');
            articleDate.textContent = date;

            newsArticle.appendChild(articleDate);

            let articleContent = document.createElement('p');
            
            articleContent.textContent = content;

            newsArticle.appendChild(articleContent);

            let articleImage = document.createElement('img');

            articleImage.className= 'articleimgs';
            
            articleImage.src = imagelink;

            newsArticle.appendChild(articleImage);
        }}); 
    })
    // .catch(err => {
    //     alert('failed')
    // })
}

newsButton.addEventListener('click', newsHandler)


closeMenu = (evt) =>{
   let burgerButton= document.getElementById('burger')
    burgerButton.click()
}
navButtons.addEventListener('click', closeMenu) 
