import type { TaskStateModel } from "../models/TaskStateModel";

let instance: TimerWorkerManager | null = null;

class TimerWorkerManager {
  private worker: Worker;

  private constructor() {
    this.worker = new Worker(new URL("./timerWorker.js", import.meta.url));
  }

  static getInstance() {
    if (!instance) {
      console.log("Criou Instancia");
      instance = new TimerWorkerManager();
    }

    console.log("Pegou Instancia");
    return instance;
  }

  postMessage(message: TaskStateModel) {
    this.worker.postMessage(message);
  }

  onmessage(cb: (event: MessageEvent) => void) {
    this.worker.onmessage = cb;
  }

  terminate() {
    this.worker.terminate();
    instance = null;
  }
}

export default TimerWorkerManager;
