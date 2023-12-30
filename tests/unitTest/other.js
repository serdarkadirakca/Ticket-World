const request = require("supertest");
const chai = require("chai");
const app = require("../../app");
const expect = chai.expect;


describe("GET Request - Other Performing Art Tickets ", ()=>{
    it("Masquerade",(done) => {
        request(app)
        .get("/masquerade")
        .end((err,res)=>{
            expect(res.status).to.equal(200);
            done();
        });     
    })
    it("Stand Up İstanbul",(done) => {
        request(app)
        .get("/stand-up-istanbul")
        .end((err,res)=>{
            expect(res.status).to.equal(200);
            done();
        });     
    })
    it("New Year Concert",(done) => {
        request(app)
        .get("/new-year-concert")
        .end((err,res)=>{
            expect(res.status).to.equal(200);
            done();
        });     
    })
    it("Hürrem Sultan",(done) => {
        request(app)
        .get("/hurrem-sultan")
        .end((err,res)=>{
            expect(res.status).to.equal(200);
            done();
        });     
    })
    it("When Children Cry",(done) => {
        request(app)
        .get("/when-children-cry")
        .end((err,res)=>{
            expect(res.status).to.equal(200);
            done();
        });     
    })
    it("Anatomy Exhibition of Real Animals",(done) => {
        request(app)
        .get("/anatomy-exhibition-of-real-animals")
        .end((err,res)=>{
            expect(res.status).to.equal(200);
            done();
        });     
    })
    it("Luna - Anatolian Fire",(done) => {
        request(app)
        .get("/luna-anatolian-fire")
        .end((err,res)=>{
            expect(res.status).to.equal(200);
            done();
        });     
    })
    it("Pure Comedy",(done) => {
        request(app)
        .get("/pure-comedy")
        .end((err,res)=>{
            expect(res.status).to.equal(200);
            done();
        });     
    })
    it("Fashion Week Turkey - Azerbaijan Exposure",(done) => {
        request(app)
        .get("/fashion-week-turkey-azerbaijan-exposure")
        .end((err,res)=>{
            expect(res.status).to.equal(200);
            done();
        });     
    })
    it("Izmir Horror Houses",(done) => {
        request(app)
        .get("/izmir-horror-houses")
        .end((err,res)=>{
            expect(res.status).to.equal(200);
            done();
        });     
    })
    it("Workshop Ankara",(done) => {
        request(app)
        .get("/workshop-ankara")
        .end((err,res)=>{
            expect(res.status).to.equal(200);
            done();
        });     
    })
    it("Free Art House",(done) => {
        request(app)
        .get("/free-art-house")
        .end((err,res)=>{
            expect(res.status).to.equal(200);
            done();
        });     
    })
    it("Istanbul Robot Show",(done) => {
        request(app)
        .get("/istanbul-robot-show")
        .end((err,res)=>{
            expect(res.status).to.equal(200);
            done();
        });     
    })
    it("Tolgshow",(done) => {
        request(app)
        .get("/tolgshow")
        .end((err,res)=>{
            expect(res.status).to.equal(200);
            done();
        });     
    })
    it("APKHAZETI",(done) => {
        request(app)
        .get("/apkhazeti")
        .end((err,res)=>{
            expect(res.status).to.equal(200);
            done();
        });     
    })
    it("Brands Festival",(done) => {
        request(app)
        .get("/brands-festival")
        .end((err,res)=>{
            expect(res.status).to.equal(200);
            done();
        });     
    })
    it("Listening Club",(done) => {
        request(app)
        .get("/listening-club")
        .end((err,res)=>{
            expect(res.status).to.equal(200);
            done();
        });     
    })
    it("Tambourine Workshop",(done) => {
        request(app)
        .get("/tambourine-workshop")
        .end((err,res)=>{
            expect(res.status).to.equal(200);
            done();
        });     
    })
    it("Laughing is Beautiful",(done) => {
        request(app)
        .get("/laughing-is-beautiful")
        .end((err,res)=>{
            expect(res.status).to.equal(200);
            done();
        });     
    })
    it("Literacy Meetings",(done) => {
        request(app)
        .get("/literacy-meetings")
        .end((err,res)=>{
            expect(res.status).to.equal(200);
            done();
        });     
    })
})