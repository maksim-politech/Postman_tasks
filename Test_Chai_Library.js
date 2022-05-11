pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

///////////////////////////////////////////////////
let item_1=2
pm.test("Item_1_test",function() {
    pm.expect(item_1).to.equal(2)
})
//////////////////////////////////////////////////

//////////////////
//теперь в переменную персон присвоим объект джава скрипта json
let person = {
    "age": "21",
    "family": {
        "children": [
            [
                "Alex",
                24
            ],
            [
                "Kate",
                12
            ]
        ],
        "u_salary_1_5_year": 60000
    },
    "name": "Aboba",
    "salary": 15000
}


pm.test("Person",function() {
    pm.expect(person.age).to.deep.equal("21") ///дип это вроде еще и по ===(типу данных) - хотя обычный тоже по типу проверяет, Вадим хз
    // цифра в кавычках, потому что в данном джейсоне у нас там тоже строка
    //pm.expect(+person.age).to.deep.equal(21) //а так можно через приведение строки к числу 
})

//////////////////////////////////////////////////////////////
const jsonData = pm.response.json(); ///или вот так, чтобы не вручную объект какой-то писать, а доставать из пришедшей на наш запрос json
pm.test("Person2",function() {
    pm.expect(jsonData.age).to.deep.equal("22") 
})
////////////////////////////////////////////////////////////////
let person3 = {
    "age": "21",
    "family": {    /////family тоже объект
        "children": [["Alex", 24],["Kate",12]],   /////По сути это двумерный массив
        "u_salary_1_5_year": 60000
    },
    "name": "Aboba",
    "salary": 15000
}

pm.test("Person3",function() {
    pm.expect(person3.family.children[0][1]).to.deep.equal(24)
})

pm.test("Person4",function() {
    pm.expect(person3).to.have.property("name")
})

pm.test("Person5",function() {
    pm.expect(person3).to.deep.include({"salary": 15000})    ////внутри объект, поэтому скобки фигурные
})

pm.test("Person6",function() {
    pm.expect(person3.family.children[1]).to.deep.include("Kate") ////или например что 12 есть можно также проверить
})
//для массива include, а для person3.family.u_salary_1_5_year например через equal

pm.test("Person7",function() {
    pm.expect(person3.family.children[1]).to.be.a("Array") ///аналогично на string number проверяем
////можно в конце доавить /that.include(12)
})    ////можно писать an вместо a, это артикль


pm.test("Person8",function() {
    pm.expect(person3.name).to.be.a("string") 
})

pm.test("Person9",function() {
    pm.expect(person3.name).a("string") /////////а со статус кодом почему-то такое не сработало(убрать to have)
})

pm.test("Person10",function() {
    pm.expect(person3.name).to.be("string") 
})