export class ButtonMeta{
  readonly id: string;
  title: string;
  isActive: boolean;

  constructor(data: any = {}) {
    this.id = data.id;
    this.title = data.title ? data.title : '';
    this.isActive = data.isActive ? data.isActive : false;
  }
}
