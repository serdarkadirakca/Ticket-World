const request = require("supertest");
const chai = require("chai");
const app = require("../../app");
const expect = chai.expect;


describe("GET Request - Cinema Tickets ", ()=>{
    it("Oppenheimer",(done) => {
        request(app)
        .get("/oppenheimer")
        .end((err,res)=>{
            expect(res.status).to.equal(200);
            done();
        });     
    })
    it("Spider-Man: Across the Spider-Verse",(done) => {
        request(app)
        .get("/spider-man-across-the-spider-verse")
        .end((err,res)=>{
            expect(res.status).to.equal(200);
            done();
        });     
    })
    it("Beau Is Afraid",(done) => {
        request(app)
        .get("/beau-is-afraid")
        .end((err,res)=>{
            expect(res.status).to.equal(200);
            done();
        });     
    })
    it("Infinity Pool",(done) => {
        request(app)
        .get("/infinity-pool")
        .end((err,res)=>{
            expect(res.status).to.equal(200);
            done();
        });     
    })
    it("Talk to Me",(done) => {
        request(app)
        .get("/talk-to-me")
        .end((err,res)=>{
            expect(res.status).to.equal(200);
            done();
        });     
    })
    it("Air",(done) => {
        request(app)
        .get("/air")
        .end((err,res)=>{
            expect(res.status).to.equal(200);
            done();
        });     
    })
    it("The Killer",(done) => {
        request(app)
        .get("/the-killer")
        .end((err,res)=>{
            expect(res.status).to.equal(200);
            done();
        });     
    })
    it("The Holdovers",(done) => {
        request(app)
        .get("/the-holdovers")
        .end((err,res)=>{
            expect(res.status).to.equal(200);
            done();
        });     
    })
    it("Elemental",(done) => {
        request(app)
        .get("/elemental")
        .end((err,res)=>{
            expect(res.status).to.equal(200);
            done();
        });     
    })
    it("Past Lives",(done) => {
        request(app)
        .get("/past-lives")
        .end((err,res)=>{
            expect(res.status).to.equal(200);
            done();
        });     
    })
    it("Passages",(done) => {
        request(app)
        .get("/passages")
        .end((err,res)=>{
            expect(res.status).to.equal(200);
            done();
        });     
    })
    it("The Covenant",(done) => {
        request(app)
        .get("/the-covenant")
        .end((err,res)=>{
            expect(res.status).to.equal(200);
            done();
        });     
    })
    it("Teenage Mutant Ninja Turtles: Mutant Mayhem",(done) => {
        request(app)
        .get("/teenage-mutant-ninja-turtles-mutant-mayhem")
        .end((err,res)=>{
            expect(res.status).to.equal(200);
            done();
        });     
    })
    it("Barbie",(done) => {
        request(app)
        .get("/barbie")
        .end((err,res)=>{
            expect(res.status).to.equal(200);
            done();
        });     
    })
})