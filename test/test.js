import chai from 'chai';
import chaiHttp from 'chai-http';
import 'chai/register-should';
import app from '../index';
import { it } from 'mocha';

chai.use(chaiHttp);
const { expect } = chai;

describe('Testing Meals API endpoints', () => {
    describe("Meals", () => {
        it('It should create a meal', (done) => {
            const meal = {
                size: 'Medium',
                price: '20.00',
                name: 'Eba'
            };
            chai.request(app)
            .post('/api/v1/meal')
            .send(meal)
            .end((err, res) => {
                expect(res.status).to.equal(201);
                expect(res.body).to.include({
                    size: meal.size,
                    price: meal.price,
                    name: meal.name
                });
                done();
            });
        });

        it('It should not create a meal with incomplete details', (done) => {
            const meal = {
                price: '20.00',
                name: 'Eba'
            };
            chai.request(app)
            .post('/api/v1/meal')
            .send(meal)
            .end((err, res) => {
                expect(res.status).to.equal(400);
                done();
            });
        });
        
        
        it('It should get all meals', (done) => {
            chai.request(app)
            .get('/api/v1/meals')
            .end((err, res) => {
                expect(res.status).to.equal(200);
                res.body[0].should.have.property('id');
                res.body[0].should.have.property('size');
                res.body[0].should.have.property('price');
                res.body[0].should.have.property('name');
                done();
            });
        });

        it('It should not get a particular meal not created', (done) => {
            const name = "Fried rice";
            chai.request(app)
            .get(`/api/v1/meals/${name}`)
            .end((err, res) => {
                expect(res.status).to.equal(404);
                res.body.should.have.property('message')
                .eql(`Meal not found`);
               
                done();
            });
        });

        it('It should update a meal', (done) => {
            const name = 'Eba';
            const updateMeal = {
                size: 'updated size',
                price: 30.00,
                name: 'Eba updated'
            }
            chai.request(app)
            .put(`/api/v1/meals/${name}`)
            .send(updateMeal)
            .end((err, res) => {
                expect(res.status).to.equal(200);
                expect(res.body.size).to.equal(updateMeal.size);
                expect(res.body.price).to.equal(updateMeal.price);
                expect(res.body.name).to.equal(updateMeal.name);
                done();
            })
        });
        
        it('It should not update a meal with invalid name', (done) => {
            const name = '922';
            const updateMeal = {
                size: 'updated size again',
                price: 35.00,
                name: 'Eba updated again' 
            }
            chai.request(app)
            .put(`/api/v1/meals/${name}`)
            .send(updateMeal)
            .end((err, res) => {
                expect(res.status).to.equal(404);
                res.body.should.have.property('message')
                                    .eql('Meal not found');
                done();
            });
        });

        it('It should delete a book with invalid name', (done) => {
            const name = 11;
            chai.request(app)
            .delete(`/api/v1/meals/${name}`)
            .end((err, res) => {
                expect(res.status).to.equal(404);
                res.body.should.have.property('message')
                                    .eql('Meal not found');
                done();
            });
        });
        
    });
})