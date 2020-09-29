'use strict';
{
  class UpURL{
    constructor(t,u,e){
      // 要素作成
      this.li=document.createElement("li");
      this.a =document.createElement("a");
      // 要素取得
      this.ul =document.querySelector("ul");
      // 変数・定数
      this.title=t;
      this.url=u;
      this.ex=e;

      // 代入
      this.a.textContent = this.title;
      this.a.href=this.url;
      this.a.target ="_blank";
      this.a.title = this.ex;
      this.li.appendChild(this.a);
      this.ul.appendChild(this.li);
    }
 }
 class Img{
   constructor(i){
    this.img =document.createElement("img");
    this.ul =document.querySelector("ul");
    this.img.src = i
    this.ul.appendChild(this.img);
   }
 }

 class NewSite{
   constructor(){
  // 情報
    this.count=0;
    this.counta =0;
    // this.img=[];
    // this.upUrl =[];
    this.title = ["Lisa占い"];
    this.url =["https://lisaaa13.github.io/Lisa_Fortune/"];
    this.ex =["Lisaのオリジナル占いです"];
    this.siteImg=["img/fortune.png"]
  // 要素の取得
  this.siteVer = document.getElementById("siteVer");

  this.siteVer.textContent="-New Site-"
  
  for(let i =0; i<this.title.length; i++)
  {
    new Img(this.siteImg[i]);
    new UpURL(this.title[i],this.url[i],this.ex[i]);
    // this.count +=1;
    // if(this.count%4 === 0){
    //   this.count =0
    //   this.counta += 1;
    //   console.log(this.counta);
    //   new Group(this.counta,this.img,this.upUrl);
    // }
  }
  // for (let i =0; i <this.count/4; i++){
  //   new Group(i)
  // }
 }}

 class SearchSite{
  constructor(newSite){
    this.newSite =newSite;
    this.count = 0;
    // 要素の取得
    this.siteVer=document.getElementById("siteVer");
    this.input =document.querySelector("input");
    this.ul=document.querySelector("ul");

    this.siteVer.textContent="-Search Site-"

    for(let i =0; i<newSite.title.length; i++)
  {
    if(newSite.title[i].indexOf(this.input.value) !==-1 ){
    new Img(newSite.siteImg[i]);
    new UpURL(newSite.title[i],newSite.url[i],newSite.ex[i]);
    this.count +=1;
    }
  }
  }
 }

//  4つずつグループ化する
class Group{
  constructor(i,img,url){
    // 要素追加
    this.li =document.createElement("li");
    this.a =document.createElement("a");
    // 要素取得
    this.pagi =document.getElementById("pagi");
    // 配列
    this.aPage =[];
    this.count =  0;
    this.number(i);
    this.four(i,img,url);
    }
    number(i){
      this.a.textContent=i;
      this.a.href=`${i}`
      this.li.appendChild(this.a);
      this.pagi.appendChild(this.li);
  }
   four(i,img,url){
    this.a.name =i;
     this.imgs =img;
    console.log(img);
    this.urls =url;
    console.log(url);

   }
}

const newSite = new NewSite();


  //検索ボタンが押されたら
 this.btn =document.getElementById("btn");
 this.ul =document.querySelector("ul");
 btn.addEventListener("click",()=>{
   while(ul.firstChild){
  ul.removeChild(ul.firstChild);
   }
  new SearchSite(newSite);
  if(ul.firstChild === null)
  {
    const li =document.createElement("li")
    li.textContent = "Not Search Results"
    document.querySelector("ul").appendChild(li);
  }
 })
}