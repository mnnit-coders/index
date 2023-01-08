console.log('hello')
let songurl;
let song




let btnsearch=document.getElementById('search');
btnsearch.addEventListener('click',async ()=>{
    song =document.getElementById('valu').value;
    console.log(song);
    if(!song){
        alert('Enter a name of song');
    }
    else{
    await axios.get('https://apimusic-xbv1.onrender.com/result/?query='+`${song}`)
    .then((res)=>{
        document.getElementById('songname').innerHTML=res.data[0].album
      document.getElementById('singer').innerHTML=res.data[0].singers
      songurl=res.data[0].media_url;
console.log(res.data[0].media_url);
console.log(res.data[0]);
document.getElementById('image').src=res.data[0].image
})
.catch((err)=>{
console.log(err)
})
    }
}
);


let sound;
let btnplay=document.getElementById('play')
btnplay.addEventListener('click',()=>{
  if(!songurl){
alert('please search a song')
  }
  else{
    if(sound){
        sound.pause()
    }
      sound=new Audio(songurl);
sound.play();
  }
})


let btnpause=document.getElementById('pause');

btnpause.addEventListener('click',()=>{
    if(!sound){
        alert('play first')
    }
    else{
sound.pause();
    }
})

