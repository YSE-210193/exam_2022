var id1 = document.getElementById("id")
var name1 = document.getElementById("name")
var job1 = document.getElementById("job")
var Lv1 = document.getElementById("Lv")
var hp1 = document.getElementById("HP")
var mp1 = document.getElementById("MP")
var exp1 = document.getElementById("Exp")




var character = {
    id : 1,
    name: "Alice",
    job: "wizard",
    Lv: 1,
    hp: 10,
    mp: 15,
    exp: 0,
}

const battlewizard = () => {
    //hpがあるか
    if(character.hp > 0){
        //mpがあるか
        if(character.mp >= 2){
            character.hp -= 2
            character.mp -= 2
            character.exp += 3 +(character.Lv / 2) + 2
            //hpが最大値の四分の一より少なく、mpが4以上なら回復する
            if(character.hp <= (10 + (character.Lv / 2))/ 4 && character.mp >= 4){
                character.hp = 10 + (character.Lv / 2)
                character.mp -= 4
            }
        //mpが無ければ
        }else{
            character.hp -= 4
            character.exp += 1
        }
        //expが一定以上なら
        if(character.exp >= 10 * character.Lv){
            character.Lv += 1
            character.exp = 0
            character.hp = 10 + (character.Lv / 2)
            character.mp = 15 + (character.Lv / 2) + 1
        }
    //hpが無ければ
    }else{
        character.hp = GAMEOVER
    }

    showStaus()
}
//関数
const showStaus = () => {
    name1.innerHTML = character.name
    job1.innerHTML = character.job
    Lv1.innerHTML = character.Lv
    hp1.innerHTML = character.hp
    mp1.innerHTML = character.mp
    exp1.innerHTML = character.exp
}

//const showStaus = () => {
// document.getElementById("name").innerHTML = character.name
// document.getElementById("job").innerHTML = character.job
// document.getElementById("HP").innerHTML = character.hp
// document.getElementById("MP").innerHTML = character.mp
// document.getElementById("Exp").innerHTML = character.exp
//}

console.log(character)
showStaus()