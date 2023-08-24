const persons = [];

class Person {
  constructor(name, gender) {
    this.name = name;
    this.gender = gender;
    // 1. Tambahkan di constructor untuk set value gender
  }

  setTitle() {
    if (this.gender == "L") {
      console.log("Tuan " + this.name);
    } else {
      console.log("Nyonya " + this.name);
    }
    // 2. tambahkan argument untuk set title, jika gender L = "Tuan " apabila P = "Nyonya", maka nilai
    // name nya menjadi contoh,
    // name = Tuan Jhon
  }

  cobaCari(name) {
    // 6. tambahkan argument untuk pungsi pencarian dari array persons berdasarkan nama.
    const cari = persons.find((item) => {
      if (item.name === name) {
        return true;
      }
    });
    console.log(cari);
    if (cari) {
      console.log(`Nama "${name}" Ditemukan dalam list`);
    }
  }
}

// 3. buat kan 2 object person
// 1 person laki laki
// panggil funsi setTittle dari object person
// 1 person perempuan
// panggil funsi setTittle dari object person
const pria = new Person("Evander", "L");
pria.setTitle();
const wanita = new Person("Madeline", "P");
wanita.setTitle();

// 4. setiap object person nya ditambahkan ke array object persons
persons.push(pria);
persons.push(wanita);

// 5. tampilkan object persons.
console.log(persons);

// 7. panggil fungsi Person.find(name) dan muncul kan object person berdasarkan nama yang di input.
wanita.cobaCari("Madeline");
