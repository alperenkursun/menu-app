class Menu{
    constructor(meal,name,img,price,desc){
        this.meal = meal,
        this.name = name,
        this.img = img,
        this.price = price,
        this.desc = desc
    }
}

let menu = [
    new Menu("Breakfast","Buttermilk Pancakes","1.jpeg","$15.99","I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed"),
    new Menu("Lunch","Diner Double","2.jpeg","$13.99","vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats"),
    new Menu("Shakes","Godzilla Milkshake","3.jpg","$6.99","ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral."),
    new Menu("Breakfast","Country Delight","4.jpeg","$20.99","Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut"),
    new Menu("Lunch","Egg Attack","5.jpeg","$22.99","franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up"),
    new Menu("Shakes","Oreo Dream","6.jpeg","$18.99","Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday"),
    new Menu("Breakfast","Bacon Overflow","7.jpeg","$8.99","carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird"),
    new Menu("Lunch","American Classic","8.jpeg","$12.99","on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut"),
    new Menu("Shakes","Quarantine Buddy","9.jpeg","$16.99","skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing."),
    new Menu("Dinner","Steak Dinner","10.jpeg","$39.99","skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.")
];

let all = document.getElementById("all");
let bre = document.getElementById("bre");
let lun = document.getElementById("lun");
let sha = document.getElementById("sha");
let din = document.getElementById("din");

display("all");

function display(id){
    document.querySelector(".row").innerHTML="";
    console.log(menu[0].meal.slice(0,3).toLowerCase());
    console.log(id);

    for(let i=0;i<menu.length;i++){
        if((menu[i].meal.slice(0,3)).toLowerCase() == id || id == "all"){
            let text = `
        <div class="col-6 mb-4">
            <div class="text-start d-flex p-2" >
                <img src="img/${menu[i].img}" class="border border-primary border-5" style="width: 200px !important; height:100px">
                <div class="ps-3">
                    <div class="d-flex justify-content-between">
                        <h5 class="text-primary">${menu[i].name}</h5>
                        <h5 class="text-secondary">${menu[i].price}</h5>
                    </div>
                    <hr style="padding: 0; margin:0">
                    <p class="mt-3">
                    ${menu[i].desc}
                    </p>
                </div>
            </div>
        </div>
        `;

        document.querySelector(".row").insertAdjacentHTML("beforeend",text);
        }
        
    }
}
