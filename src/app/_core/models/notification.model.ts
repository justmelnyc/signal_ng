export class Notification {
  public message: string;
  public type: string;
  public dismiss: number;
  public timer: TimeCounter;
  public hidden: boolean;
  public index: number;

  constructor() {
    this.message = '';
    this.type = '';
    this.dismiss = 5000;
    this.index = -1;
    this.hidden = false;
    this.timer = new TimeCounter();
  }
}

class TimeCounter {
  public handle: any;
  public time: number;

  constructor() {
    this.handle = null;
    this.time = 0;
  }
}
