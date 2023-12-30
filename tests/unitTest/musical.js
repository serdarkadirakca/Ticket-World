const request = require("supertest");
const chai = require("chai");
const app = require("../../app");
const expect = chai.expect;


describe("GET Request - Musical Tickets ", ()=>{
    it("Alice",(done) => {
        request(app)
        .get("/alice")
        .end((err,res)=>{
            expect(res.status).to.equal(200);
            done();
        });     
    })
    it("Yaşar Ne Yaşar Ne Yaşamaz",(done) => {
        request(app)
        .get("/yasar-ne-yasar-ne-yasamaz")
        .end((err,res)=>{
            expect(res.status).to.equal(200);
            done();
        });     
    })
    it("Kanlı Nigar",(done) => {
        request(app)
        .get("/kanli-nigar")
        .end((err,res)=>{
            expect(res.status).to.equal(200);
            done();
        });     
    })
    it("Tobi ve Çıt Çıt Terzi",(done) => {
        request(app)
        .get("/tobi-ve-cit-cit-terzi")
        .end((err,res)=>{
            expect(res.status).to.equal(200);
            done();
        });     
    })
    it("Çizmeli Kedi",(done) => {
        request(app)
        .get("/cizmeli-kedi")
        .end((err,res)=>{
            expect(res.status).to.equal(200);
            done();
        });     
    })
    it("Forforlu Cevriye",(done) => {
        request(app)
        .get("/fosforlu-cevriye")
        .end((err,res)=>{
            expect(res.status).to.equal(200);
            done();
        });     
    })
    it("Dracula",(done) => {
        request(app)
        .get("/dracula")
        .end((err,res)=>{
            expect(res.status).to.equal(200);
            done();
        });     
    })
    it("Todes Müzikali",(done) => {
        request(app)
        .get("/todes-muzikali")
        .end((err,res)=>{
            expect(res.status).to.equal(200);
            done();
        });     
    })
    it("Hisseli Harikalar Kumpanyası",(done) => {
        request(app)
        .get("/hisseli-harikalar-kumpanyasi")
        .end((err,res)=>{
            expect(res.status).to.equal(200);
            done();
        });     
    })
    it("İçinden Tramvay Geçen Şarkı",(done) => {
        request(app)
        .get("/icinden-tramvay-gecen-sarki")
        .end((err,res)=>{
            expect(res.status).to.equal(200);
            done();
        });     
    })
    it("Bir Garip Orhan Veli",(done) => {
        request(app)
        .get("/bir-garip-orhan-veli")
        .end((err,res)=>{
            expect(res.status).to.equal(200);
            done();
        });     
    })
    it("Bernarda",(done) => {
        request(app)
        .get("/bernarda")
        .end((err,res)=>{
            expect(res.status).to.equal(200);
            done();
        });     
    })
    it("Orada Duruverseydi Zaman",(done) => {
        request(app)
        .get("/orada-duruverseydi-zaman")
        .end((err,res)=>{
            expect(res.status).to.equal(200);
            done();
        });     
    })
    it("Galdilocks And The Three Bears",(done) => {
        request(app)
        .get("/goldilocks-and-the-three-bears")
        .end((err,res)=>{
            expect(res.status).to.equal(200);
            done();
        });     
    })
    it("Ariel Küçük Deniz Kızı",(done) => {
        request(app)
        .get("/ariel-kucuk-deniz-kizi")
        .end((err,res)=>{
            expect(res.status).to.equal(200);
            done();
        });     
    })
    it("Oyuncak Hikayesi",(done) => {
        request(app)
        .get("/oyuncak-hikayesi")
        .end((err,res)=>{
            expect(res.status).to.equal(200);
            done();
        });     
    })
    it("Oz Ülkesi",(done) => {
        request(app)
        .get("/oz-ulkesi")
        .end((err,res)=>{
            expect(res.status).to.equal(200);
            done();
        });     
    })
    it("Aladdin Müzikali",(done) => {
        request(app)
        .get("/aladdin-muzikali")
        .end((err,res)=>{
            expect(res.status).to.equal(200);
            done();
        });     
    })
    it("Tangopera",(done) => {
        request(app)
        .get("/tangopera")
        .end((err,res)=>{
            expect(res.status).to.equal(200);
            done();
        });     
    })
    it("Dolap Gençlik Müzikali",(done) => {
        request(app)
        .get("/dolap-genclik-muzikali")
        .end((err,res)=>{
            expect(res.status).to.equal(200);
            done();
        });     
    })
})