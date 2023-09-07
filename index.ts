let item: HTMLDivElement = document.getElementById("items") as HTMLDivElement;
let it: HTMLCollectionOf<Element> = document.getElementsByClassName("itm") as HTMLCollectionOf<Element>;

for(let i=0;i<it.length;i++){
  it[i]?.addEventListener("click", function handleClick(event): void {
    let current = document.getElementsByClassName("active");
    if (current.length > 0) { 
      current[0].className = current[0].className.replace(" active", "");
    }
    this.className += " active";
  });
}


async function final(): Promise<void> {

  try {
      const response = await fetch("./data.json");
      let data = await response.json();
  
    let div1: HTMLDivElement = document.createElement("div") as HTMLDivElement;
    div1.classList.add("content");
    document.body.insertBefore(div1, document.getElementById('ftr'));


    for(let i=0;i<data.length;i++){

      let div2: HTMLDivElement = document.createElement("div") as HTMLDivElement;
      if(data[i].isExpired) {
        div2.classList.add("container-1", "container-2");
        div1.appendChild(div2);
        let extradiv: HTMLDivElement = document.createElement("div") as HTMLDivElement;
        extradiv.classList.add("expire");
        extradiv.innerText = "EXPIRED";
        div2.appendChild(extradiv);
      }
      else{
        div2.classList.add("container-1");
        div1.appendChild(div2);
      }
      
      let div3: HTMLDivElement = document.createElement("div") as HTMLDivElement;
      div3.classList.add("upperpart");
      div2.appendChild(div3);

      let im: HTMLImageElement = document.createElement("img") as HTMLImageElement;
      im.setAttribute("id","main-image");
      im.setAttribute("src",data[i].image);
      div3.appendChild(im);

      let div4: HTMLDivElement = document.createElement("div") as HTMLDivElement;
      div4.classList.add("text");
      div3.appendChild(div4);

      let div5: HTMLDivElement = document.createElement("div") as HTMLDivElement;
      div5.classList.add("head");
      div4.appendChild(div5);

      let h5: HTMLHeadingElement = document.createElement("h5") as HTMLHeadingElement;
      h5.innerText = data[i].heading;
      div5.appendChild(h5);

      let sideimg: HTMLImageElement = document.createElement("img") as HTMLImageElement;
      sideimg.setAttribute("id","star");
      sideimg.classList.add("img");
      sideimg.setAttribute("src",data[i].sideimage);
      div5.appendChild(sideimg);

      if(data[i].isExpired){
        sideimg.setAttribute("class","spl");
      }

      let para: HTMLParagraphElement = document.createElement("p") as HTMLParagraphElement;
      div4.appendChild(para);

      let spn1: HTMLSpanElement = document.createElement("span") as HTMLSpanElement;
      spn1.setAttribute("id","subject");
      spn1.innerText = data[i].subject;
      para.appendChild(spn1);

      let spn2: HTMLSpanElement = document.createElement("span") as HTMLSpanElement;
      spn2.setAttribute("id","spn");
      para.appendChild(spn2);
    
      let spn3: HTMLSpanElement = document.createElement("span") as HTMLSpanElement;
      spn3.setAttribute("id","grade");
      spn3.innerText = data[i].grade;
      para.appendChild(spn3);

      let spn4: HTMLSpanElement = document.createElement("span") as HTMLSpanElement;
      spn4.setAttribute("id","extra-grade");
      spn4.classList.add("green");
      spn4.innerText = data[i].extra;
      para.appendChild(spn4);

      let para2: HTMLParagraphElement = document.createElement("p") as HTMLParagraphElement;
      div4.appendChild(para2);

      let str1: HTMLDivElement = document.createElement("strong") as HTMLDivElement;
      str1.setAttribute("id","unit");
      str1.innerText = data[i].units+" ";
      para2.appendChild(str1);

      let spn5: HTMLSpanElement = document.createElement("span") as HTMLSpanElement;
      spn5.innerText = "Units";
      para2.appendChild(spn5);

      let str2: HTMLDivElement = document.createElement("strong") as HTMLDivElement;
      str2.setAttribute("id","lesson");
      str2.style.marginLeft = "10px";
      str2.innerText = data[i].lessons+" ";
      para2.appendChild(str2);

      let spn6: HTMLSpanElement = document.createElement("span") as HTMLSpanElement;
      spn6.innerText = "Lessons";
      para2.appendChild(spn6);

      let str3: HTMLDivElement = document.createElement("strong")as HTMLDivElement;
      str3.setAttribute("id","topic");
      str3.style.marginLeft = "10px";
      str3.innerText = data[i].topics+" ";
      para2.appendChild(str3);

      let spn7: HTMLSpanElement = document.createElement("span") as HTMLSpanElement;
      spn7.innerText = "Topics";
      para2.appendChild(spn7);

      let sel: HTMLSelectElement = document.createElement("select") as HTMLSelectElement;
      sel.setAttribute("id","select");
      for (let j = 0; j < data[i].select.length; j++) {
        sel.innerHTML = sel.innerHTML + '<option>' + data[i].select[j]+ '</option>';
      }
      if(data[i].select[0]=="No Class"){
        sel.style.opacity = "0.4";
      }
      div4.appendChild(sel);

      let para3: HTMLParagraphElement = document.createElement("p") as HTMLParagraphElement;
      div4.appendChild(para3);

      let spn8: HTMLSpanElement = document.createElement("span") as HTMLSpanElement;
      spn8.setAttribute("id","students");
      spn8.innerText = data[i].students;
      para3.appendChild(spn8);
      
      if(data[i].students && data[i].date){
        let spn9 = document.createElement("span");
        spn9.setAttribute("id","spn");
        para3.appendChild(spn9);
      }

      let spn10: HTMLSpanElement = document.createElement("span") as HTMLSpanElement;
      spn10.setAttribute("id","date");
      spn10.innerText = data[i].date;
      para3.appendChild(spn10);

      let div6: HTMLDivElement = document.createElement("div") as HTMLDivElement;
      div6.classList.add("lowerpart");
      div2.appendChild(div6);

      let im1: HTMLImageElement = document.createElement("img") as HTMLImageElement;
      im1.setAttribute("id","img1");
      im1.setAttribute("src",data[i].img1);
      div6.appendChild(im1);
      if(!data[i].imgActive1){
        im1.style.opacity = "0.4";
      }

      let im2: HTMLImageElement = document.createElement("img") as HTMLImageElement;
      im2.setAttribute("id","img2");
      im2.setAttribute("src",data[i].img2);
      div6.appendChild(im2);
      if(!data[i].imgActive2){
        im2.style.opacity = "0.4";
      }

      let im3: HTMLImageElement = document.createElement("img") as HTMLImageElement;
      im3.setAttribute("id","img1");
      im3.setAttribute("src",data[i].img3);
      div6.appendChild(im3);
      if(!data[i].imgActive3){
        im3.style.opacity = "0.4";
      }

      let im4: HTMLImageElement = document.createElement("img") as HTMLImageElement;
      im4.setAttribute("id","img1");
      im4.setAttribute("src",data[i].img4);
      div6.appendChild(im4);
      if(!data[i].imgActive4){
        im4.style.opacity = "0.4";
      }

    }

  }
  catch(err) {
      console.log('Error: ', err.message);
  }
}

final();