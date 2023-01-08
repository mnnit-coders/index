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
    .then(async (res)=>{
        document.getElementById('songname').innerHTML=res.data[0].album
      document.getElementById('singer').innerHTML=res.data[0].singers
      songurl=res.data[0].media_url;
console.log(res.data[0].media_url);
console.log(res.data[0]);
const options = {
  method: 'GET',
  url: 'https://youtube-media-downloader.p.rapidapi.com/v2/search/videos',
  params: {keyword: `${song}`},
  headers: {
    'X-RapidAPI-Key': '6a470279c7mshc24e7631ba39188p13309ajsna8c3e521439b',
    'X-RapidAPI-Host': 'youtube-media-downloader.p.rapidapi.com'
  }
};

await axios.request(options).then(async function (response) {
  let id=response.data.items[0].id;
  const options1 = {
    method: 'GET',
    url: 'https://youtube-media-downloader.p.rapidapi.com/v2/video/details',
    params: {videoId: id},
    headers: {
      'X-RapidAPI-Key': '6a470279c7mshc24e7631ba39188p13309ajsna8c3e521439b',
      'X-RapidAPI-Host': 'youtube-media-downloader.p.rapidapi.com'
    }
  };
  
  await axios.request(options1).then(function (response) {
    console.log(response.data.videos.items[0].url)
    let vurl=response.data.videos.items[0].url;

    document.getElementById('video').innerHTML=`<video width="400" height="400"  controls>
  
    <source  id="videos" src=${vurl} type="video/mp4">
    
</video>`;
    // document.getElementById('image').src=response.data.videos.items[0].url
  }).catch(function (error) {
    console.error(error);
  });
}).catch(function (error) {
  console.error(error);
});
















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




