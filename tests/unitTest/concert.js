const request = require("supertest");
const chai = require("chai");
const app = require("../../app");
const expect = chai.expect;


describe("GET Request - Concert Tickets ", ()=>{
    it("Hidra Concert Ticket",(done) => {
        request(app)
        .get("/hidra")
        .end((err,res)=>{
            expect(res.status).to.equal(200);
            done();
        });     
    })
    it("İkilem Concert Ticket",(done) => {
        request(app)
        .get("/ikilem")
        .end((err,res)=>{
            expect(res.status).to.equal(200);
            done();
        });     
    })
    
    it("Birileri Concert Ticket",(done) => {
        request(app)
        .get("/birileri")
        .end((err,res)=>{
            expect(res.status).to.equal(200);
            done();
        });     
    })
    it("Can Ozan Concert Ticket",(done) => {
        request(app)
        .get("/can-ozan")
        .end((err,res)=>{
            expect(res.status).to.equal(200);
            done();
        });     
    })
    it("Daniska Concert Ticket",(done) => {
        request(app)
        .get("/daniska")
        .end((err,res)=>{
            expect(res.status).to.equal(200);
            done();
        });     
    })
    it("Bulutsuzluk Özlemi Concert Ticket",(done) => {
        request(app)
        .get("/bulutsuzluk-ozlemi")
        .end((err,res)=>{
            expect(res.status).to.equal(200);
            done();
        });     
    })
    it("Hayki Concert Ticket",(done) => {
        request(app)
        .get("/hayki")
        .end((err,res)=>{
            expect(res.status).to.equal(200);
            done();
        });     
    })
    it("Mavi Gri Concert Ticket",(done) => {
        request(app)
        .get("/mavi-gri")
        .end((err,res)=>{
            expect(res.status).to.equal(200);
            done();
        });     
    })
    it("Şanışer Concert Ticket",(done) => {
        request(app)
        .get("/saniser")
        .end((err,res)=>{
            expect(res.status).to.equal(200);
            done();
        });     
    })
    it("Duman Concert Ticket",(done) => {
        request(app)
        .get("/duman")
        .end((err,res)=>{
            expect(res.status).to.equal(200);
            done();
        });     
    })
    it("Mabel Matiz Concert Ticket",(done) => {
        request(app)
        .get("/mabel-matiz")
        .end((err,res)=>{
            expect(res.status).to.equal(200);
            done();
        });     
    })
    it("Sagopa Kajmer Concert Ticket",(done) => {
        request(app)
        .get("/sagopa-kajmer")
        .end((err,res)=>{
            expect(res.status).to.equal(200);
            done();
        });     
    })
    it("Mor ve Ötesi Concert Ticket",(done) => {
        request(app)
        .get("/mor-ve-otesi")
        .end((err,res)=>{
            expect(res.status).to.equal(200);
            done();
        });     
    })
    it("Seksendört Concert Ticket",(done) => {
        request(app)
        .get("/seksendort")
        .end((err,res)=>{
            expect(res.status).to.equal(200);
            done();
        });     
    })
})