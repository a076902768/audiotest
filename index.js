// const init = () => {
//   for(let i=1;i<10;i++) {
//     for (let j = 1; j < 10; j++) {
//       console.log(`${i} * ${j} = ${i * j}`);
//     }
//   }
// }

// init();

setTimeout(() => {
  window.addEventListener('click', bodyListener);
}, 1000);

const autoPlay = () => {
  console.log(123);
  const audio = document.getElementById('audio');
  audio.play();
  audio.muted = false;
}

const bodyListener = (e) => {
  console.log(e);
  autoPlay();
}
