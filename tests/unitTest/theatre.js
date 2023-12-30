const request = require("supertest");
const chai = require("chai");
const app = require("../../app");
const expect = chai.expect;


describe("GET Request - Theatre Tickets ", ()=>{
    it("Mikadonun Çöpleri",(done) => {
        request(app)
        .get("/mikadonun-copleri")
        .end((err,res)=>{
            expect(res.status).to.equal(200);
            done();
        });     
    })
    it("İki Maymun",(done) => {
        request(app)
        .get("/iki-maymun")
        .end((err,res)=>{
            expect(res.status).to.equal(200);
            done();
        });     
    })
    it("Kozalar",(done) => {
        request(app)
        .get("/kozalar")
        .end((err,res)=>{
            expect(res.status).to.equal(200);
            done();
        });     
    })
    it("Dava",(done) => {
        request(app)
        .get("/dava")
        .end((err,res)=>{
            expect(res.status).to.equal(200);
            done();
        });     
    })
    it("Hoşçakal Sabo",(done) => {
        request(app)
        .get("/hoscakal-sabo")
        .end((err,res)=>{
            expect(res.status).to.equal(200);
            done();
        });     
    })
    it("Kaktüslü Adam",(done) => {
        request(app)
        .get("/kaktuslu-adam")
        .end((err,res)=>{
            expect(res.status).to.equal(200);
            done();
        });     
    })
    it("Kalabalık Duası",(done) => {
        request(app)
        .get("/kalabalik-duasi")
        .end((err,res)=>{
            expect(res.status).to.equal(200);
            done();
        });     
    })
    it("Yüreğim Dağlardadır ",(done) => {
        request(app)
        .get("/yuregim-daglardadir ")
        .end((err,res)=>{
            expect(res.status).to.equal(200);
            done();
        });     
    })
    it("Şatonun Altında",(done) => {
        request(app)
        .get("/satonun-altinda")
        .end((err,res)=>{
            expect(res.status).to.equal(200);
            done();
        });     
    })
    it("Toz",(done) => {
        request(app)
        .get("/toz")
        .end((err,res)=>{
            expect(res.status).to.equal(200);
            done();
        });     
    })
    it("Eksik",(done) => {
        request(app)
        .get("/eksik")
        .end((err,res)=>{
            expect(res.status).to.equal(200);
            done();
        });     
    })
    it("Canavar",(done) => {
        request(app)
        .get("/canavar")
        .end((err,res)=>{
            expect(res.status).to.equal(200);
            done();
        });     
    })
    it("Bir Delinin Hatıra Defteri Metin Zakoğlu",(done) => {
        request(app)
        .get("/bir-delinin-hatira-defteri-metin-zakoglu")
        .end((err,res)=>{
            expect(res.status).to.equal(200);
            done();
        });     
    })
    it("Bir İdam Mahkumunun Son Günü",(done) => {
        request(app)
        .get("/bir-idam-mahkumunun-son-gunu")
        .end((err,res)=>{
            expect(res.status).to.equal(200);
            done();
        });     
    })
    it("Kuyu",(done) => {
        request(app)
        .get("/kuyu")
        .end((err,res)=>{
            expect(res.status).to.equal(200);
            done();
        });     
    })
    it("Plato",(done) => {
        request(app)
        .get("/plato")
        .end((err,res)=>{
            expect(res.status).to.equal(200);
            done();
        });     
    })
    it("Güzel Son",(done) => {
        request(app)
        .get("/guzel-son")
        .end((err,res)=>{
            expect(res.status).to.equal(200);
            done();
        });     
    })
    it("Baba ve Oğulları",(done) => {
        request(app)
        .get("/baba-ve-ogullari")
        .end((err,res)=>{
            expect(res.status).to.equal(200);
            done();
        });     
    })
    it("Bir Garip Orhan Veli & Taburenin Hikayesi",(done) => {
        request(app)
        .get("/bir-garip-orhan-veli-and-taburenin-hikayesi")
        .end((err,res)=>{
            expect(res.status).to.equal(200);
            done();
        });     
    })
    it("Veda Baladı",(done) => {
        request(app)
        .get("/veda-baladi")
        .end((err,res)=>{
            expect(res.status).to.equal(200);
            done();
        });     
    })
    it("Yük",(done) => {
        request(app)
        .get("/yuk")
        .end((err,res)=>{
            expect(res.status).to.equal(200);
            done();
        });     
    })
})