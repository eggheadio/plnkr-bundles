import { Observable } from "rxjs"

export default {
  fromESObservable: Observable.from,
  toESObservable: stream => stream
}
