export class User {
  readonly id: number;
  name: string;
  email: string;

  constructor(data: any = {}) {
    this.id = data.id;
    this.name = data.name ? data.name : 'hello world';
    this.email = data.email ? data.email : 'artur@gmail.com';
  }
}
