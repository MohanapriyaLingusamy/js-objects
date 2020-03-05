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
obj.setName("priya");
console.log(obj.getName());

obj.setCity("cbe");
console.log(obj.getCity());

obj.setId("16ec075");
console.log(obj.getId());

obj.setmarks(98);
console.log(obj.getmarks());

obj.setMobileNum(8098099309);
console.log(obj.getMobileNum());

obj.setSalary(35000);
console.log(obj.getSalary());