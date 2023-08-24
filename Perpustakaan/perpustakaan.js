const LIST_OF_BOOK=[]

class Book{
    constructor(title,author,year){
    this.title = title
    this.author = author
    this.year = year
    }
    getBook(){
        return this
    }
}

// impelemntasi kelas turunan dari book
class BiografiBook extends Book{
    constructor(title,author,year){
        super(title,author,year)
    }
    setCategory(category){
        this.category=category
    }
}

class NovelBook extends Book {
    constructor(title,author,year){
        super(title,author,year)
    }
}
const novel_1 = new NovelBook("Rindu","Tere Liye","2009")
LIST_OF_BOOK.push(novel_1.getBook())

const novel_2 = new NovelBook("Si Putih","Tere Liye","2004")
LIST_OF_BOOK.push(novel_2.getBook())

const novel_3 = new NovelBook("Cantik Itu Luka","Eka Kurniawan","2002")
LIST_OF_BOOK.push(novel_3.getBook())

const biografi_1 = new BiografiBook("Al Wafa | siroh Nabawi","Imam Ibnul Qoyim","1990")
biografi_1.setCategory("Sejarah")
LIST_OF_BOOK.push(biografi_1.getBook())

const biografi_2 = new BiografiBook("Tarikh Khulafa","Salahuddin as=Suyuthi","1990")
biografi_2.setCategory("Sejarah")
LIST_OF_BOOK.push(biografi_2.getBook())

const biografi_3 = new BiografiBook("Sejarah Tuhan","Karen Armstrong","1993")
biografi_3.setCategory("Sejarah")
LIST_OF_BOOK.push(biografi_3.getBook())

LIST_OF_BOOK.forEach((data)=>{
    $("#table-book tbody").append(`<tr><td>${data.title}</td><td>${data.author}</td><td>${data.year}</td><td>${data.category} ? data.category:"-"}</td></tr>`)
})


