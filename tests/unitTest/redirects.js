const request = require("supertest");
const chai = require("chai");
const app = require("../../app");
const expect = chai.expect;


describe("GET Request - Redirects ", ()=>{
    it("Account",(done) => {
        request(app)
        .get("/account")
        .end((err,res)=>{
            expect(res.status).to.equal(302);
            done();
        });     
    })
    it("Cart",(done) => {
        request(app)
        .get("/cart")
        .end((err,res)=>{
            expect(res.status).to.equal(302);
            done();
        });     
    })
    it("Checkout",(done) => {
        request(app)
        .get("/checkout")
        .end((err,res)=>{
            expect(res.status).to.equal(302);
            done();
        });     
    })
})