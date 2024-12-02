const { describe, it, before, after } = require('mocha');
const { expect } = require('chai');
const { app, server } = require('../index');
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

let baseUrl;
let resourceId;  // Declare resourceId to store the ID of the created resource

describe('Resource API', () => {
    before(async () => {
        // Set the base URL of the server for the tests
        const { address, port } = await server.address();
        baseUrl = `http://${address == '::' ? 'localhost' : address}:${port}`;

        // Create a resource first for testing edit
        const res = await chai.request(baseUrl)
            .post('/add-resource')
            .send({ title: 'Test Resource', description: 'Test description', author: 'test@example.com' });

        resourceId = res.body[res.body.length - 1].id; // Store the resource ID
    });

    after(() => {
        // Close the server after the tests are complete
        return new Promise((resolve) => {
            server.close(() => {
                resolve();
            });
        });
    });

    // Test Suite for editing a resource
    describe('PUT /edit-resource/:id', () => {
        it('should update an existing resource', (done) => {
            chai.request(baseUrl)
                .put(`/edit-resource/${resourceId}`)
                .send({
                    title: 'Updated Resource',
                    description: 'Updated description',
                    author: 'updated@example.com'
                })
                .end((err, res) => {
                    expect(res).to.have.status(201);  // Status should be 201 for successful update
                    expect(res.body.message).to.equal('Blog modified successfully!');
                    done();
                });
        });

        it('should return 404 for non-existent resource', (done) => {
            chai.request(baseUrl)
                .put('/edit-resource/invalid-id')  // Using an invalid ID for testing
                .send({
                    title: 'Non-existent Resource',
                    description: 'Non-existent description',
                    author: 'nonexistent@example.com'
                })
                .end((err, res) => {
                    expect(res).to.have.status(404);
                    expect(res.body.message).to.equal('Blog not found!');
                    done();
                });
        });

        it('should return 400 for invalid email format', (done) => {
            chai.request(baseUrl)
                .put(`/edit-resource/${resourceId}`)
                .send({
                    title: 'Invalid Email Resource',
                    description: 'Resource with invalid email format',
                    author: 'invalid-email'  // Invalid email
                })
                .end((err, res) => {
                    expect(res).to.have.status(400);
                    expect(res.body.message).to.equal('Invalid email format for author!');
                    done();
                });
        });

        it('should return 400 for missing title', (done) => {
            chai.request(baseUrl)
                .put(`/edit-resource/${resourceId}`)
                .send({
                    title: '',  // Missing required fields
                    description: 'valid field',
                    author: 'validfield@exmaple.com'
                })
                .end((err, res) => {
                    expect(res).to.have.status(400);
                    expect(res.body.message).to.include('Title is required');
                    done();
                });
        });
        it('should return 400 for missing description', (done) => {
            chai.request(baseUrl)
                .put(`/edit-resource/${resourceId}`)
                .send({
                    title: 'valid field',  
                    description: '',
                    author: 'validfield@exmaple.com'
                })
                .end((err, res) => {
                    expect(res).to.have.status(400);
                    expect(res.body.message).to.include('Description is required');
                    done();
                });
        });
        it('should return 400 for missing author', (done) => {
            chai.request(baseUrl)
                .put(`/edit-resource/${resourceId}`)
                .send({
                    title: 'valid field',  
                    description: 'valid field',
                    author: ''
                })
                .end((err, res) => {
                    expect(res).to.have.status(400);
                    expect(res.body.message).to.include('Email is required');
                    done();
                });
        });
    });
});
