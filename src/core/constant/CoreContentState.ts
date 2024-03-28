import { CoreContentStatus } from "./CoreContentStatus";


export interface ICoreContentState {
    status: CoreContentStatus;
    message: string;
  }
  
  export class CoreContentState implements ICoreContentState {
    private _status: CoreContentStatus;
    private _message: string;
  
    public constructor(
      status: CoreContentStatus = CoreContentStatus.success,
      message: string = ""
    ) {
      this._status = status;
      this._message = message;
    }
  
    set status(value: CoreContentStatus) {
      this._status = value;
    }
  
    set message(value: string) {
      this._message = value;
    }
  
    get message(): string {
      return this._message;
    }
  
    get status(): CoreContentStatus {
      return this._status;
    }
  }
  