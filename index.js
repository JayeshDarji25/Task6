let items = document.getElementById("items");
let itm = document.getElementsByClassName("itm");

for(let i=0;i<itm.length;i++){
  itm[i].addEventListener("click", function() {
    let current = document.getElementsByClassName("active");
    if (current.length > 0) { 
      current[0].className = current[0].className.replace(" active", "");
    }
    this.className += " active";
  });
}


let main =  async () => {

  const response = await fetch("./data.json");
  let data = await response.json();
  let div1 = document.createElement("div");
  div1.classList.add("content");
  document.body.insertBefore(div1, document.getElementById('ftr'));


  for(let i=0;i<data.length;i++){

    let div2 = document.createElement("div");
    if(data[i].isExpired) {
      div2.classList.add("container-1", "container-2");
      div1.appendChild(div2);
      let extradiv = document.createElement("div");
      extradiv.classList.add("expire");
      extradiv.innerText = "EXPIRED";
      div2.appendChild(extradiv);
    }
    else{
      div2.classList.add("container-1");
      div1.appendChild(div2);
    }
    
    let div3 = document.createElement("div");
    div3.classList.add("upperpart");
    div2.appendChild(div3);

    let im = document.createElement("img");
    im.setAttribute("id","main-image");
    im.setAttribute("src",data[i].image);
    div3.appendChild(im);

    let div4 = document.createElement("div");
    div4.classList.add("text");
    div3.appendChild(div4);

    let div5 = document.createElement("div");
    div5.classList.add("head");
    div4.appendChild(div5);

    let h5 = document.createElement("h5");
    h5.innerText = data[i].heading;
    div5.appendChild(h5);

    let sideimg = document.createElement("img");
    sideimg.setAttribute("id","star");
    sideimg.classList.add("img");
    sideimg.setAttribute("src",data[i].sideimage);
    div5.appendChild(sideimg);

    if(data[i].isExpired){
      sideimg.setAttribute("class","spl");
    }

    let para = document.createElement("p");
    div4.appendChild(para);

    let spn1 = document.createElement("span");
    spn1.setAttribute("id","subject");
    spn1.innerText = data[i].subject;
    para.appendChild(spn1);

    let spn2 = document.createElement("span");
    spn2.setAttribute("id","spn");
    para.appendChild(spn2);
   
    let spn3 = document.createElement("span");
    spn3.setAttribute("id","grade");
    spn3.innerText = data[i].grade;
    para.appendChild(spn3);

    let spn4 = document.createElement("span");
    spn4.setAttribute("id","extra-grade");
    spn4.classList.add("green");
    spn4.innerText = data[i].extra;
    para.appendChild(spn4);

    let para2 = document.createElement("p");
    div4.appendChild(para2);

    let str1 = document.createElement("strong");
    str1.setAttribute("id","unit");
    str1.innerText = data[i].units+" ";
    para2.appendChild(str1);

    let spn5 = document.createElement("span");
    spn5.innerText = "Units";
    para2.appendChild(spn5);

    let str2 = document.createElement("strong");
    str2.setAttribute("id","lesson");
    str2.style.marginLeft = "10px";
    str2.innerText = data[i].lessons+" ";
    para2.appendChild(str2);

    let spn6 = document.createElement("span");
    spn6.innerText = "Lessons";
    para2.appendChild(spn6);

    let str3 = document.createElement("strong");
    str3.setAttribute("id","topic");
    str3.style.marginLeft = "10px";
    str3.innerText = data[i].topics+" ";
    para2.appendChild(str3);

    let spn7 = document.createElement("span");
    spn7.innerText = "Topics";
    para2.appendChild(spn7);

    let sel = document.createElement("select");
    sel.setAttribute("id","select");
    for (let j = 0; j < data[i].select.length; j++) {
      sel.innerHTML = sel.innerHTML + '<option>' + data[i].select[j]+ '</option>';
    }
    if(data[i].select[0]=="No Class"){
      sel.style.opacity = "0.4";
    }
    div4.appendChild(sel);

    let para3 = document.createElement("p");
    div4.appendChild(para3);

    let spn8 = document.createElement("span");
    spn8.setAttribute("id","students");
    spn8.innerText = data[i].students;
    para3.appendChild(spn8);
    
    if(data[i].students && data[i].date){
      let spn9 = document.createElement("span");
      spn9.setAttribute("id","spn");
      para3.appendChild(spn9);
    }

    let spn10 = document.createElement("span");
    spn10.setAttribute("id","date");
    spn10.innerText = data[i].date;
    para3.appendChild(spn10);

    let div6 = document.createElement("div");
    div6.classList.add("lowerpart");
    div2.appendChild(div6);

    let im1 = document.createElement("img");
    im1.setAttribute("id","img1");
    im1.setAttribute("src",data[i].img1);
    div6.appendChild(im1);
    if(!data[i].imgActive1){
      im1.style.opacity = "0.4";
    }

    let im2 = document.createElement("img");
    im2.setAttribute("id","img2");
    im2.setAttribute("src",data[i].img2);
    div6.appendChild(im2);
    if(!data[i].imgActive2){
      im2.style.opacity = "0.4";
    }

    let im3 = document.createElement("img");
    im3.setAttribute("id","img1");
    im3.setAttribute("src",data[i].img3);
    div6.appendChild(im3);
    if(!data[i].imgActive3){
      im3.style.opacity = "0.4";
    }

    let im4 = document.createElement("img");
    im4.setAttribute("id","img1");
    im4.setAttribute("src",data[i].img4);
    div6.appendChild(im4);
    if(!data[i].imgActive4){
      im4.style.opacity = "0.4";
    }
  }



  
 /* let im = document.getElementById("main-image");
  let h5 = document.getElementsByTagName("h5")[2];
  let sideimg = document.getElementById("star");
  let sbj = document.getElementById("subject");
  let grd = document.getElementById("grade");
  let egrd = document.getElementById("extra-grade");
  let unt = document.getElementById("unit");
  let lsn = document.getElementById("lesson");
  let tpc = document.getElementById("topic");
  let sel = document.getElementById("select");
  let std = document.getElementById("students");
  let dte = document.getElementById("date");
  let im1 = document.getElementById("img1");
  let im2 = document.getElementById("img2");
  let im3 = document.getElementById("img3");
  let im4 = document.getElementById("img4");

  im.setAttribute("src",data[0].image);
  h5.innerText = data[0].heading;
  sideimg.setAttribute("src",data[0].sideimage);
  sbj.innerText = data[0].subject;
  grd.innerText = data[0].grade;
  egrd.innerText = data[0].extra; 
  unt.innerHTML = data[0].units;
  lsn.innerText = data[0].lessons;
  tpc.innerText = data[0].topics;

  for (let i = 0; i < data[0].select.length; i++) {
    sel.innerHTML = sel.innerHTML + '<option>' + data[0].select[i]+ '</option>';
  }
  
  std.innerText = data[0].students;
  dte.innerText = data[0].date;
  im1.setAttribute("src",data[0].img1);
  im2.setAttribute("src",data[0].img2);
  im3.setAttribute("src",data[0].img3);
  im4.setAttribute("src",data[0].img4);*/

}

main();
