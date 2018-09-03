// function name (firstname, lastname, gender) {

//     if (gender === 'Male') {
//         var person = ['Mr ' + firstname + ' ' + lastname]
//         return person;
//     }else if (gender === 'Female') {
//         var person = ['Ms ' + firstname + ' ' + lastname]
//         return person;

//     }

// }

// var PersonName = name('Aminul Islam', 'Sabbir', 'Male');

// console.log(PersonName);

// code Diffarent

function name (firstname, lastname, gender) {
            var person;
        if (gender === 'Male') {
             person = ['Mr ' + firstname + ' ' + lastname]
        
        }else if (gender === 'Female') {
            person = ['Ms ' + firstname + ' ' + lastname]
        }
        return person;
    }
var PersonName = name('Aminul Islam', 'Sabbir', 'Male');
console.log(PersonName);






function statment () {
    return {
        name : 'Aminul Islam Sabbir',
        skill : ['JavaScript','Html','Css'],
        Passion : ['wild photographer','World Tour','Stand-up comedy','Problem Solve'],

        print : function () {
            console.log('Name: ' + this.name, 'Passion: ' +this.Passion);
            
        }

    }
}

var obj = statment()
obj.print()
console.log(obj);


