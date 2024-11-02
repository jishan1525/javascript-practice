let p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("I am resolved");
  }, 1000);
});

let p2 = new Promise((resolve) =>
  setTimeout(() => resolve("P2 resolved"), 2000)
);

async function errorhandler() {
  console.log("Waiting..");
  try {
    const res1 = await p1;
    console.log(res1);
    const res2 = await p2;
    console.log(res2);
  } catch (error) {
    console.log(error);
  }
}

errorhandler();
