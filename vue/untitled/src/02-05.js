function addContact(name, mobile, home="없음", address="없음", email="없음") {
    var str =`name=${name}, moblie=${mobile}, home=${home}, address=${address}, email=${email}`
    console.log(str);
}

addContact("홍길동", "010-2222-3333");
addContact("이몽룡", "000-2222-3444", "02-3333-3333", "서울시");