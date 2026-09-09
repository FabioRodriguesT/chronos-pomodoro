const timeWorker = (event) => {
  console.log("WORKER recebeu:", event.data);
};

self.onmessage = function (event) {
  console.log("WORKER recebeu:", event.data);
};

export default timeWorker;
