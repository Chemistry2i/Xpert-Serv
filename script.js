window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if(this.window.scrollY > 0 ){ 
        navbar.classList.add('fixed');
    }else{
        navbar.classList.remove('fixed');
    }
})

const Testimonials = [
    {
        image:'img/testimonial-4.jpg',
        Myname:'Khakusuma Linda',
        work:'Backend Dev',
        message:'I ve been coming here for years and have always been happy with the work. The prices are fair, and the mechanics are knowledgeable.The staff is always friendly and helpful, and they go the extra mile '
    },{
        image:'img/testimonial-3.jpg',
        Myname:'Omolo Pascal',
        work:'Frontend Dev',
        message:'I was impressed with the level of service I received. The mechanics were thorough and took the time to answer all my questions.This is my go-to garage for all my car needs. They are always quick'
        
    },{
        image:'img/testimonial-1.jpg',
        Myname:'Kalenda Phoebe',
        work:'UI/UX Designer',
        message:'The service was excellent! They were friendly and helpful, and my car was fixed quickly and efficiently. They kept me informed every step of the way and explained everything clearly. I appreciate their honesty and integrity.'
        },
    {
        image:'img/passport photo lab.jpg',
        Myname:'Wambogo Hassan Sadat',
        work:'Fullstack Dev',
        message:'This is completely unbelieveable, I would be lost without Xpert Serv. Thank you for making it painless through out this journey with you They were friendly and helpful, and my car was fixed quickly and efficiently'
    },
    {
        image:'img/testimonial-2.jpg',
        Myname:'Kijjambu Joseph',
        work:'Frontend Dev',
        message:'I had a great experience at this auto repair shop. The staff was professional and courteous, and they took the time to explain the repairs that were needed.'
    }

];

const img = document.querySelector('.Img');
const Name = document.querySelector('.name');
const Profession = document.querySelector('.profession');
const Message = document.querySelector('.myMessage');
let index = 0;

updateTestimonials();

function updateTestimonials(){
    const {image,Myname,work,message} = Testimonials[index];

    img.src = image;
    Name.innerText = Myname;
    Profession.innerText = work;
    Message.innerText = message;
    index++;

    if(index === Testimonials.length){
        index = 0;
    }

    setTimeout(()=>{
        updateTestimonials()
    },4000);
}


// Updating the Home section after every 4 seconds
const Home = [
    {
        carImage:'img/carousel-2.png',
        head01:'Qualified Car Repair',
        head02:'Service Center',
    },
    {
        carImage:'img/carousel-1.png',
        head01:'Move to the next level',
        head02:'Fix your car with us',
    },


];

const imageOfCar = document.querySelector('.Home_Img');
const heading01 = document.querySelector('.heading01');
const heading02 = document.querySelector('.heading02');
let indexOfCar = 0;

updateHomePage();

function updateHomePage(){
    const {carImage,head01,head02} = Home[indexOfCar];

    imageOfCar.src = carImage;
    heading01.innerText = head01;
    heading02.innerText = head02;
    indexOfCar++;

    if(indexOfCar === Home.length){
        indexOfCar = 0;
    }
    setTimeout(()=>{
        updateHomePage()
    },10000);
};

// Toggle menu
const navbar = document.querySelector('.main002');
const mainNavBar = document.querySelector('.MainNavBar');
const close = document.querySelector('.close');

navbar.addEventListener('click', function(){
    mainNavBar.classList.toggle('active');
})

close.addEventListener('click',function(){
    mainNavBar.classList.remove('active');
})


//Scroll Animation on different elements 
const observer = new IntersectionObserver((entries) =>{
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
        else{
            entry.target.classList.remove("show");
        }
    })
})

const section = document.querySelectorAll('.section');
const Section = document.querySelectorAll('#section');
Section.forEach((el) => observer.observe(el));
section.forEach((el) => observer.observe(el));
//Scroll animations end here considering the classes and ids .


