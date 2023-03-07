const heading1 = "Sigiriya";
const heading2 = "Tea Plantations";
const heading3 = "Yala National Park";
const heading4 = "Gall Dutch Fort";
const heading5 = "Rangiri Dambulla Cave Temple";
//discription for the image 1
const i1Dis = "Sigiriya is an ancient rock fortress located in the Matale District near the town of Dambulla in the Central Province of Sri Lanka. this rock was selected by king Kashyapa (477- 495 AD) for his new capital. He built his palace on top of this rock and decorated its sides with colourful frescoes. About halfway up the side of this rock, a gateway was built on a small plateau in the form of an enormous lion from which the name of this place comes. This place consists of many marvellous creations of ancient builders with a high archaeological value, making it a popular tourist destination in Sri Lanka.";

//discription for the image 2
const i2Dis = "After the British occupation of Sri Lanka in the 19th century, tea cultivation began in the highlands of Sri Lanka since the climatic conditions of these lands are ideal for the tea cultivation. Plantations were terraced into the mountainsides, factories, and acumination for the pickers ware build. A railway network was engineered to transport tea leaves down to Colombo. The stretch line between Kandy and Ella is considered one of the most beautiful views in the world which has attracted the eyes of many tourists around the world. Travelling across the mountainside by train while enjoying spectacular views is a popular activity in Sri Lanka among many tourists. ";

//discription for the image 3
const i3Dis = "Yala national park is the most visited and the second largest national park in Sri Lanka. It Is situated in the southern part of the country and lies in both southern and Uva provinces, covering a land of 979 square kilometers bordering the Indian ocean. The park consists of 5 blocks and two are open to the public. The park is best known for its variety of wild animals and its importance in conserving Sri Lankan wild elephants. Yala is the home of 215 bird species, including six endemic species of Sri Lanka. It is recorded that 44 species of mammals live in this park, and it has one of the highest leopard densities in the world. Wildlife safari is a popular activity among tourists visiting the national park.";

//discription for the image 4
const i4Dis = "Gall fort is situated in the bay of gall in the southwest coast of Sri Lanka. Portuguese originally built it in 1588 which was extensively fortified by the Dutch During the 17th century from 1649 onwards. It is a historical and archaeological heritage of Sri Lanka. The urban area within the fort consists of a rectangular grid pattern of streets full of low hoses with gables and verandahs in the Dutch colonial style. This area also consists of historic churches, mosques, and commercial and government buildings. The fort also houses the National Maritime Archaeology Museum, the Old Dutch Hospital, Galle Lighthouse etc. Gall fort is considered one of the most famous tourist destinations in Sri Lanka among local and foreign tourists.";

//discription for the image 5
const i5Dis = "Rangiri Dambulla Cave Temple is the largest best-preserved cave temple complex in Sri Lanka. It is a UNESCO World Heritage site which is situated in central Sri Lanka. The site is focused on a series of five cave shrines inhabited by forest-dwelling Buddhist monks since the 3rd century BCE. The temple consists of 157 statues and Buddhist mural paintings (covering an area of 2,100m2), which hold significant importance in the site. This temple complex dates to the first century BCE. There are more than 80 documented caves in the surrounding area. Rangiri Dambulla Cave Temple is a famous site amoung many local and foreign travellers as a place with high cultural and historical significance in Sri Lanka.";

function showImage(imageSrc, dis, heading){//changes the large image and the discription based on the selected image
    console.log("image Clicked");
    console.log(imageSrc);
    document.getElementById("h1").innerHTML = heading;
    document.getElementById("diDescription").innerHTML = dis;
    document.getElementById("displayImage").src = imageSrc;
}

function changBackgroundColour( colour ){//accepts the colour as a parameter and changes the background colour of the web page
    document.body.style.backgroundColor = colour;
}

function changeTextColour( colour ){//accepts the colour as a parameter and applies it as the text colour of elements
    document.getElementById("smallImages").style.color = colour;
    document.getElementById("settings").style.color = colour;
    document.getElementById("textColorLabelId").style.color = colour;
    document.getElementById("backgroundColorId").style.color = colour;
    document.getElementById("diDescription").style.color = colour;
    document.getElementById("h1").style.color = colour;
}

function getBgColour(){//get the selected background colour from the dropdown menue and returns it
    var selectList = document.getElementById("backgroundColour");
    var value = selectList[selectList.selectedIndex].value;
    console.log(value);
    return value;
}

function getTxtColour(){//get the selected text colour from the dropdown menue and returns it
    var selectList = document.getElementById("textColour");
    var value = selectList[selectList.selectedIndex].value;
    console.log(value);
    return value;
}


//accessing the image 1 element using the ID and adding an mouseover event listner to execute showImage function.
const im1 = document.getElementById("im1", i1Dis);
im1.addEventListener("mouseover", function() { showImage(im1.src, i1Dis, heading1); }, false);

//accessing the image 2 element using the ID and adding an mouseover event listner to execute showImage function.
const im2 = document.getElementById("im2");
im2.addEventListener("mouseover", function() { showImage(im2.src, i2Dis, heading2); }, false);

//accessing the image 3 element using the ID and adding an mouseover event listner to execute showImage function.
const im3 = document.getElementById("im3");
im3.addEventListener("mouseover", function() { showImage(im3.src, i3Dis, heading3); }, false);

//accessing the image 4 element using the ID and adding an mouseover event listner to execute showImage function.
const im4 = document.getElementById("im4");
im4.addEventListener("mouseover", function() { showImage(im4.src, i4Dis, heading4); }, false);

//accessing the image 5 element using the ID and adding an mouseover event listner to execute showImage function.
const im5 = document.getElementById("im5");
im5.addEventListener("mouseover", function() { showImage(im5.src, i5Dis, heading5); }, false);

//accessing the background colour dragdown list element using the ID and adding an event listner to execute changBackgroundColour function.
const bacgroundColour = document.getElementById("backgroundColour");
bacgroundColour.addEventListener("change", function() { changBackgroundColour(getBgColour()) });

//accessing the text colour dragdown list element using the ID and adding an event listner to execute changeTextColour function.
const textColour = document.getElementById("textColour");
textColour.addEventListener("change", function() { changeTextColour(getTxtColour()) });