const a = document.createElement("div");
a.innerHTML = `
<div class="my-image-wrapper">
      <img
        class="my-image"
        src="/confusion/assets/ElvisPresley.png"
        alt="(ElvisPresley)"
      />
    </div>
`;

const b = document.getElementById("a");
Array(60)
  .fill(0)
  .forEach(() => b.appendChild(a.cloneNode(true)));

const h = document.getElementById("h");
const helloArr = ["hello~~", "hi~", "halo~~~"];
const text = `그러니까찾아보고찾아보고다른것도궁금해하고그렇죠HTMLCSSBODY어떤경우에는자유형식으로쓰기도하지만레포트도보여주는거잖아요일단은다른이에게보여주는거니까자기생각이들어가긴해야되겠지글자거나아니면은이게또삐뚤빼뚤하면손으로쓰면모르겠는데글자체도첫페이지하고두페이지하고달라보는사람이불편하겠지좋은점수를못받을겁니다`

const i = document.getElementById("i");
const t = document.getElementById("t");

setInterval(() => {
  const rand = Math.floor(Math.random() * (helloArr.length - 1));
  h.innerText = helloArr[rand];
  const randX = Math.random() * (window.innerWidth - i.clientWidth);
  const randY = Math.random() * (window.innerHeight - i.clientHeight);
  i.style.transform = `translate(${randX}px, ${randY}px)`;

  const range = Math.floor(Math.random() * (text.length-9))
  const range2 = Math.floor(Math.random() * 7)+1
  const nt = text.slice(range, range+range2);
//   console.log(nt)
  t.innerText = nt;
}, 60);
