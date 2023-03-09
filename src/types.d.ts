interface DivDownProps{
    setObject: (object: {name:String,cardnumber:number,day:number,month:number,cvc:number}) => void
}
interface ObjectType{
    name:String,cardnumber:number,day:number,month:number,cvc:number
}

interface DataType{
    
    name:string,
    number:number,
    date:number
    
}

interface IFormInputs {
    name: string
    cardnumber: string
    day:number
    month:number
    cvc:number
  }