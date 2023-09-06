let item = document.getElementById("items") as HTMLDivElement;
let it = document.getElementsByClassName("itm") as HTMLCollectionOf<Element>;

for(let i=0;i<it.length;i++){
  it[i]?.addEventListener("click", function handleClick(event) {
    let current = document.getElementsByClassName("active");
    if (current.length > 0) { 
      current[0].className = current[0].className.replace(" active", "");
    }
    this.className += " active";
  });
}


// Not actual code. A thought experiment
async function val() {
  try {
      const response = await fetch("./data.json");
      let data = await response.json();

      
  let div1 = document.createElement("div") as HTMLDivElement;
  div1.classList.add("content");
  document.body.insertBefore(div1, document.getElementById('ftr'));


  for(let i=0;i<4;i++){

    let div2 = document.createElement("div") as HTMLDivElement;
    if(i==3) {
      div2.classList.add("container-1", "container-2");
      div1.appendChild(div2);
      let extradiv = document.createElement("div") as HTMLDivElement;
      extradiv.classList.add("expire");
      extradiv.innerText = "EXPIRED";
      div2.appendChild(extradiv);
    }
    else{
      div2.classList.add("container-1");
      div1.appendChild(div2);
    }
    
    let div3 = document.createElement("div") as HTMLDivElement;
    div3.classList.add("upperpart");
    div2.appendChild(div3);

    let im = document.createElement("img") as HTMLImageElement;
    im.setAttribute("id","main-image");
    im.setAttribute("src",data[i].image);
    div3.appendChild(im);

    let div4 = document.createElement("div") as HTMLDivElement;
    div4.classList.add("text");
    div3.appendChild(div4);

    let div5 = document.createElement("div") as HTMLDivElement;
    div5.classList.add("head");
    div4.appendChild(div5);

    let h5 = document.createElement("h5") as HTMLHeadingElement;
    h5.innerText = data[i].heading;
    div5.appendChild(h5);

    let sideimg = document.createElement("img") as HTMLImageElement;
    sideimg.setAttribute("id","star");
    sideimg.classList.add("img");
    sideimg.setAttribute("src",data[i].sideimage);
    div5.appendChild(sideimg);

    let para = document.createElement("p") as HTMLParagraphElement;
    div4.appendChild(para);

    let spn1 = document.createElement("span") as HTMLSpanElement;
    spn1.setAttribute("id","subject");
    spn1.innerText = data[i].subject;
    para.appendChild(spn1);

    let spn2 = document.createElement("span") as HTMLSpanElement;
    spn2.setAttribute("id","spn");
    para.appendChild(spn2);
   
    let spn3 = document.createElement("span") as HTMLSpanElement;
    spn3.setAttribute("id","grade");
    spn3.innerText = data[i].grade;
    para.appendChild(spn3);

    let spn4 = document.createElement("span") as HTMLSpanElement;
    spn4.setAttribute("id","extra-grade");
    spn4.classList.add("green");
    spn4.innerText = data[i].extra;
    para.appendChild(spn4);

    let para2 = document.createElement("p") as HTMLParagraphElement;
    div4.appendChild(para2);

    let str1 = document.createElement("strong") as HTMLDivElement;
    str1.setAttribute("id","unit");
    str1.innerText = data[i].units+" ";
    para2.appendChild(str1);

    let spn5 = document.createElement("span") as HTMLSpanElement;
    spn5.innerText = "Units";
    para2.appendChild(spn5);

    let str2 = document.createElement("strong") as HTMLDivElement;
    str2.setAttribute("id","lesson");
    str2.style.marginLeft = "10px";
    str2.innerText = data[i].lessons+" ";
    para2.appendChild(str2);

    let spn6 = document.createElement("span") as HTMLSpanElement;
    spn6.innerText = "Lessons";
    para2.appendChild(spn6);

    let str3 = document.createElement("strong")as HTMLDivElement;
    str3.setAttribute("id","topic");
    str3.style.marginLeft = "10px";
    str3.innerText = data[i].topics+" ";
    para2.appendChild(str3);

    let spn7 = document.createElement("span") as HTMLSpanElement;
    spn7.innerText = "Topics";
    para2.appendChild(spn7);

    let sel = document.createElement("select") as HTMLSelectElement;
    sel.setAttribute("id","select");
    for (let j = 0; j < data[i].select.length; j++) {
      sel.innerHTML = sel.innerHTML + '<option>' + data[i].select[j]+ '</option>';
    }
    if(i==1){
      sel.style.opacity = "0.4";
    }
    div4.appendChild(sel);

    let para3 = document.createElement("p") as HTMLParagraphElement;
    div4.appendChild(para3);

    let spn8 = document.createElement("span") as HTMLSpanElement;
    spn8.setAttribute("id","students");
    spn8.innerText = data[i].students;
    para3.appendChild(spn8);
    
    if(i==0 || i==3){
      let spn9 = document.createElement("span") as HTMLSpanElement;
      spn9.setAttribute("id","spn");
      para3.appendChild(spn9);
    }

    let spn10 = document.createElement("span") as HTMLSpanElement;
    spn10.setAttribute("id","date");
    spn10.innerText = data[i].date;
    para3.appendChild(spn10);

    let div6 = document.createElement("div") as HTMLDivElement;
    div6.classList.add("lowerpart");
    div2.appendChild(div6);

    let im1 = document.createElement("img") as HTMLImageElement;
    im1.setAttribute("id","img1");
    im1.setAttribute("src",data[i].img1);
    div6.appendChild(im1);

    let im2 = document.createElement("img") as HTMLImageElement;
    im2.setAttribute("id","img2");
    im2.setAttribute("src",data[i].img2);
    div6.appendChild(im2);

    let im3 = document.createElement("img") as HTMLImageElement;
    im3.setAttribute("id","img1");
    im3.setAttribute("src",data[i].img3);
    div6.appendChild(im3);

    if(i==1 || i==2) {
      im2.style.opacity = "0.4";
      im3.style.opacity = "0.4";
    }

    let im4 = document.createElement("img") as HTMLImageElement;
    im4.setAttribute("id","img1");
    im4.setAttribute("src",data[i].img4);
    div6.appendChild(im4);


  }








  }
  catch(err) {
      console.log('Error: ', err.message);
  }
}

val();