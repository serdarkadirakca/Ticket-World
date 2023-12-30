const request = require("supertest");
const chai = require("chai");
const app = require("../../app");
const expect = chai.expect;


describe("GET Requests - Pages", ()=>{
    it("Home",(done) => {
        request(app)
        .get("/")
        .end((err,res)=>{
            expect(res.status).to.equal(200);
            done();
        });     
    })
    it("Concert",(done) => {
        request(app)
        .get("/concert")
        .end((err,res)=>{
            expect(res.status).to.equal(200);
            done();
        });     
    })
    it("Cinema",(done) => {
        request(app)
        .get("/cinema")
        .end((err,res)=>{
            expect(res.status).to.equal(200);
            done();
        });     
    })
    it("Theatre",(done) => {
        request(app)
        .get("/theatre")
        .end((err,res)=>{
            expect(res.status).to.equal(200);
            done();
        });     
    })
    it("Musical",(done) => {
        request(app)
        .get("/musical")
        .end((err,res)=>{
            expect(res.status).to.equal(200);
            done();
        });     
    })
    it("Other Performing Arts",(done) => {
        request(app)
        .get("/other")
        .end((err,res)=>{
            expect(res.status).to.equal(200);
            done();
        });     
    })
    it("Products",(done) => {
        request(app)
        .get("/hidra")
        .end((err,res)=>{
            expect(res.status).to.equal(200);
            done();
        });     
    })
    it("Register",(done) => {
        request(app)
        .get("/register")
        .end((err,res)=>{
            expect(res.status).to.equal(200);
            done();
        });     
    })
    it("Login",(done) => {
        request(app)
        .get("/login")
        .end((err,res)=>{
            expect(res.status).to.equal(200);
            done();
        });     
    })
    it("Reset Password",(done) => {
        request(app)
        .get("/reset")
        .end((err,res)=>{
            expect(res.status).to.equal(200);
            done();
        });     
    })
})