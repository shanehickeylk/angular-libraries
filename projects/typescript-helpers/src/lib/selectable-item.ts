export class SelectableItem<T> {

  constructor(public item: T,
              public selected = false,
              public disabled = false,
              public preselected = false) {}

}
