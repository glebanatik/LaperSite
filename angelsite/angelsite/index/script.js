imgslide=new Array ()
imgslide[0]=new Image()
imgslide[1]=new Image()
imgslide[2]=new Image()
imgslide[3]=new Image()
imgslide[4]=new Image()
imgslide[5]=new Image()
imgslide[6]=new Image()
imgslide[7]=new Image()
imgslide[8]=new Image()
imgslide[9]=new Image()
imgslide[10]=new Image()
imgslide[11]=new Image()
imgslide[12]=new Image()
imgslide[13]=new Image()
imgslide[14]=new Image()
imgslide[15]=new Image()
imgslide[16]=new Image()
imgslide[17]=new Image()
imgslide[18]=new Image()
imgslide[19]=new Image()
imgslide[20]=new Image()
imgslide[21]=new Image()
imgslide[22]=new Image()
imgslide[23]=new Image()
imgslide[24]=new Image()
imgslide[25]=new Image()
imgslide[26]=new Image()
imgslide[27]=new Image()
imgslide[28]=new Image()
imgslide[29]=new Image()
imgslide[30]=new Image()
imgslide[31]=new Image()
imgslide[32]=new Image()
imgslide[33]=new Image()
imgslide[34]=new Image()
imgslide[35]=new Image()
imgslide[36]=new Image()
imgslide[37]=new Image()
imgslide[38]=new Image()
imgslide[39]=new Image()
imgslide[40]=new Image()
imgslide[41]=new Image()
imgslide[42]=new Image()
imgslide[43]=new Image()
imgslide[44]=new Image()
imgslide[45]=new Image()
imgslide[46]=new Image()
imgslide[47]=new Image()
imgslide[48]=new Image()
imgslide[49]=new Image()
imgslide[50]=new Image()
imgslide[51]=new Image()
imgslide[52]=new Image()

imgslide[0].src="../pic/gallery/1.jpg"
imgslide[1].src="../pic/gallery/2.jpg"
imgslide[2].src="../pic/gallery/3.jpg"
imgslide[3].src="../pic/gallery/4.jpg"
imgslide[4].src="../pic/gallery/5.jpg"
imgslide[5].src="../pic/gallery/6.jpg"
imgslide[6].src="../pic/gallery/7.jpg"
imgslide[7].src="../pic/gallery/8.jpg"
imgslide[8].src="../pic/gallery/9.jpg"
imgslide[9].src="../pic/gallery/10.jpg"
imgslide[10].src="../pic/gallery/11.jpg"
imgslide[11].src="../pic/gallery/12.jpg"
imgslide[12].src="../pic/gallery/13.jpg"
imgslide[13].src="../pic/gallery/14.jpg"
imgslide[14].src="../pic/gallery/15.jpg"
imgslide[15].src="../pic/gallery/16.jpg"
imgslide[16].src="../pic/gallery/17.jpg"
imgslide[17].src="../pic/gallery/18.jpg"
imgslide[18].src="../pic/gallery/19.jpg"
imgslide[19].src="../pic/gallery/20.jpg"
imgslide[20].src="../pic/gallery/21.jpg"
imgslide[21].src="../pic/gallery/22.jpg"
imgslide[22].src="../pic/gallery/23.jpg"
imgslide[23].src="../pic/gallery/24.jpg"
imgslide[24].src="../pic/gallery/25.jpg"
imgslide[25].src="../pic/gallery/26.jpg"
imgslide[26].src="../pic/gallery/27.jpg"
imgslide[27].src="../pic/gallery/28.jpg"
imgslide[28].src="../pic/gallery/29.jpg"
imgslide[29].src="../pic/gallery/30.jpg"
imgslide[30].src="../pic/gallery/31.jpg"
imgslide[31].src="../pic/gallery/32.jpg"
imgslide[32].src="../pic/gallery/33.jpg"
imgslide[33].src="../pic/gallery/34.jpg"
imgslide[34].src="../pic/gallery/35.jpg"
imgslide[35].src="../pic/gallery/36.jpg"
imgslide[36].src="../pic/gallery/37.jpg"
imgslide[37].src="../pic/gallery/38.jpg"
imgslide[38].src="../pic/gallery/39.jpg"
imgslide[39].src="../pic/gallery/40.jpg"
imgslide[40].src="../pic/gallery/41.jpg"
imgslide[41].src="../pic/gallery/42.jpg"
imgslide[42].src="../pic/gallery/43.jpg"
imgslide[43].src="../pic/gallery/44.jpg"
imgslide[44].src="../pic/gallery/45.jpg"
imgslide[45].src="../pic/gallery/46.jpg"
imgslide[46].src="../pic/gallery/47.jpg"
imgslide[47].src="../pic/gallery/48.jpg"
imgslide[48].src="../pic/gallery/49.jpg"
imgslide[49].src="../pic/gallery/50.jpg"
imgslide[50].src="../pic/gallery/51.jpg"
imgslide[51].src="../pic/gallery/52.jpg"

var numimg;
numimg=1;

var a;
a="0";

function dem(a)
{
if(a=='forward')
{numimg++;
if (numimg==51) numimg=0;
}
else
{numimg--;
if(numimg==-1) numimg=51;
}
document.getElementById('show').src=imgslide[numimg].src
}

var category;
category="0";
function cc(category)
{
document.getElementById('mu1').style.display="none";
document.getElementById('mu2').style.display="none";
document.getElementById('mu3').style.display="none";
document.getElementById('mu4').style.display="none";
document.getElementById('mu5').style.display="none";
document.getElementById('museumsm').style.display="none";
document.getElementById('m1').style.display="none";
document.getElementById('m2').style.display="none";
document.getElementById('m3').style.display="none";
document.getElementById('m4').style.display="none";
document.getElementById('m5').style.display="none";
document.getElementById('m6').style.display="none";
document.getElementById('monumentsm').style.display="none";
document.getElementById('b1').style.display="none";
document.getElementById('b2').style.display="none";
document.getElementById('b3').style.display="none";
document.getElementById('b4').style.display="none";
document.getElementById('b5').style.display="none";
document.getElementById('b6').style.display="none";
document.getElementById('bridgesm').style.display="none";
document.getElementById('p1').style.display="none";
document.getElementById('p2').style.display="none";
document.getElementById('p3').style.display="none";
document.getElementById('p4').style.display="none";
document.getElementById('parksm').style.display="none";
document.getElementById('gallery').style.display="none";
document.getElementById('gallerym').style.display="none";
document.getElementById('nonem').style.display="none";
document.getElementById('else').style.display="none";
document.getElementById(category).style.display="block";
} 
var bridge;
bridge="b0";
function cb(bridge)
{
document.getElementById('b1').style.display="none";
document.getElementById('b2').style.display="none";
document.getElementById('b3').style.display="none";
document.getElementById('b4').style.display="none";
document.getElementById('b5').style.display="none";
document.getElementById('b6').style.display="none";
document.getElementById(bridge).style.display="block";
}
var museum;
function cmu(museum)
{
document.getElementById('mu1').style.display="none";
document.getElementById('mu2').style.display="none";
document.getElementById('mu3').style.display="none";
document.getElementById('mu4').style.display="none";
document.getElementById('mu5').style.display="none";
document.getElementById(museum).style.display="block";
}
var monument;
monument="m0";
function cm(monument)
{
document.getElementById('m1').style.display="none";
document.getElementById('m2').style.display="none";
document.getElementById('m3').style.display="none";
document.getElementById('m4').style.display="none";
document.getElementById('m5').style.display="none";
document.getElementById('m6').style.display="none";
document.getElementById(monument).style.display="block";
}
var parks;
bridge="p0";
function cp(parks)
{
document.getElementById('p1').style.display="none";
document.getElementById('p2').style.display="none";
document.getElementById('p3').style.display="none";
document.getElementById('p4').style.display="none";
document.getElementById(parks).style.display="block";
}
function sg()
{
document.getElementById('gallery').style.display="block";
}
