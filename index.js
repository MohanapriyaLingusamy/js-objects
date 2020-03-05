/*
//OBJECTS
const obj={
  Name:"A",
  city:"B",
  id:"C",
  marks:0,
  MobileNum:0,
  salary:0,
  
  setName:function(name)
  {
    this.Name=name;
  },
  getName:function()
  {
    return this.Name;
  },

  setCity:function(city)
  {
    this.city=city;
  },
  getCity:function()
  {
    return this.city;
  },

  setId:function(id)
  {
    this.id=id;
  },
  getId:function()
  {
    return this.id;
  },

  setmarks:function(marks)
  {
    this.marks=marks;
  },
  getmarks:function()
  {
    return this.marks;
  },

  setMobileNum:function(MobileNum)
  {
    this.MobileNum=MobileNum;
  },
  getMobileNum:function()
  {
    return this.MobileNum;
  },

  setSalary:function(salary)
  {
    this.salary=salary;
  },
  getSalary:function()
  {
    return this.salary;
  },

};
let name=obj.getName();
console.log('Name:',name);
obj.setName("priya");
console.log(obj.getName());

let city=obj.getCity();
console.log('city:',city);
obj.setCity("cbe");
console.log(obj.getCity());

let id=obj.getId();
console.log('ID:',id);
obj.setId("16ec075");
console.log(obj.getId());

let marks=obj.getmarks();
console.log('Marks:',marks);
obj.setmarks(98);
console.log(obj.getmarks());

let Mobile_Number=obj.getMobileNum();
console.log('phone:',Mobile_Number);
obj.setMobileNum(8098099309);
console.log(obj.getMobileNum());

let salary=obj.getSalary();
console.log('Marks:',salary);
obj.setSalary(35000);
console.log(obj.getSalary());
*/
//////////////////////////////
//Object creation with function

function Person(id)
{
  let _id=id;
  this.name='hi';
  this.setId=function(id)
  {
    _id=id;
  }
  this.getId=function()
  {
    return _id;
  }
}
const person=new Person('10');
person.setId(2)
console.log(person.getId())