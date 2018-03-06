export interface ITable {
  link: string;
  title: string;
  point: number;
}

export class DataService {
 public data: ITable[] = [];

  static Max(tables: ITable[]): number[] {
    let rows = tables.sort(this.compare);
    return;
  }
  //  Max = (tables): number[] =>{
  //   let rows = tables.sort(this.compare);
  //   localStorage.setItem('data', JSON.stringify(tables));
  // return;
  // }

  static compare(a: ITable, b: ITable): number {
    if (a.point < b.point)
      return -1;
    if (a.point > b.point)
      return 1;
    return 0;
  }

  public setData(data: ITable[]): void {
    localStorage.setItem('data', JSON.stringify(data));
  }

  public getData(): ITable[] {
    return this.data = JSON.parse(localStorage.getItem('data')) || [];
  }
}