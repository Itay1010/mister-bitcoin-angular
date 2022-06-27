
export class Contact {

  constructor(public _id?: string, public name: string = '', public email: string = '', public phone: string = '') {

  }
  setId?() {
    // Implement your own set Id
    this._id = this.makeId!()
  }
  private makeId?(length = 10) {
    var txt = ''
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (var i = 0; i < length; i++) {
      txt += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return txt
  }
}



export interface FilterBy {
  term: string
}

export interface User {
  name: string,
  coins: number,
  moves: Array<object>
}