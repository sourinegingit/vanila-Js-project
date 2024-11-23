import Navigo from "navigo";


export const router = new Navigo("/");

const changePage = (target) => {
  const root = document.getElementById("rootsElement");
  root.innerHTML = "";
  root.append(target());
};

const changePage2 = (target, item) => {
  // console.log(item);
  target(item).then((res) => {
    const root = document.getElementById("rootsElement");
    root.innerHTML = "";
    // console.log(res);
    root.append(res);
  });
};
