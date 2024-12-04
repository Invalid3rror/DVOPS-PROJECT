describe('Edit Blog Feature', () => {
  let baseUrl;

  before(() => {
    cy.task('startServer').then((url) => {
      baseUrl = url; // Store the base URL
      cy.visit(baseUrl);
    });
  });

  after(() => {
    return cy.task('stopServer'); // Stop the server after the tests
  });

  it('should open the edit modal when the wrench button is clicked', () => {
    cy.get('.blog-actions button') // Get all action buttons
      .first() // Select the first wrench button
      .click();

    // Verify that the modal opens
    cy.get('#editResourceModal').should('be.visible');

    // Check if the modal contains pre-filled data
    cy.get('#editTitle').should('have.value', 'dqdqdqd@gmail.com'); // Replace with actual title
    cy.get('#editDescription').should('have.value', 'dqdqdqd@gmail.com');
    cy.get('#editAuthor').should('have.value', 'dqdqdqd@gmail.com');
  });

  it('should validate form inputs before allowing submission', () => {
    cy.visit(baseUrl);

    // Open the modal
    cy.get('.blog-post')
      .eq(1)  // Select the second blog post (index 1)
      .find('.blog-actions button')
      .first()
      .click();

    // Clear fields to simulate empty input
    cy.get('#editTitle').clear();
    cy.get('#editDescription').clear();
    cy.get('#editAuthor').clear();

    // Click the update button
    cy.get('#updateButton').click();

    // Verify error message for empty fields
    cy.get('#editMessage')
      .should('be.visible')
      .and('have.class', 'text-danger')
      .and('contain.text', 'All fields are required!');
  });

  it('should show an error message for invalid email format', () => {
    cy.visit(baseUrl);

    // Open the modal for editing the second blog post
    cy.get('.blog-post')
      .eq(1)
      .find('.blog-actions button')
      .first()
      .click();

    // Fill in the invalid email
    cy.get('#editAuthor').clear().type('invalid-email');

    // Intercept the API call and simulate the invalid email response
    cy.intercept('PUT', '/edit-resource/*', {
      statusCode: 400,
      body: { message: 'Invalid email format for author!' },
    }).as('updateResource');

    // Click the update button
    cy.get('#updateButton').click();

    // Verify the error message and the class name for invalid email
    cy.get('#editMessage')
      .should('have.class', 'text-danger')
      .and('contain.text', 'Invalid email format for author!');
  });

  it('should hide the modal and redirect on successful update', () => {
    cy.visit(baseUrl);

    // Stub XMLHttpRequest to return a successful response
    cy.intercept('PUT', '/edit-resource/*', {
        statusCode: 200,
        body: { message: "Blog modified successfully!" },
    }).as('updateResource');

    // Open the modal
    cy.get('.blog-post')
      .eq(1)
      .find('.blog-actions button')
      .first()
      .click();

    // Fill out the form
    cy.get('#editTitle').clear().type('Updated Title');
    cy.get('#editDescription').clear().type('Updated Description');
    cy.get('#editAuthor').clear().type('valid.email@example.com');

    // Activate Cypress clock
    cy.clock();

    // Click the update button
    cy.get('#updateButton').click();

    // Wait for the PUT request
    cy.wait('@updateResource');

    // Verify that the success message appears
    cy.get('#editMessage')
        .should('be.visible')
        .and('have.class', 'text-success')
        .and('contain.text', 'Edited blog successfully!');

    // Advance the clock by 100ms to simulate the `setTimeout`
    cy.tick(100);

    // Verify that the modal is not visible (closed)
    cy.get('#editResourceModal').should('not.be.visible');

});


  it('should show a generic error message when unable to edit the blog', () => {
    cy.visit(baseUrl);

    // Open the modal for editing the second blog post
    cy.get('.blog-post')
      .eq(1)
      .find('.blog-actions button')
      .first()
      .click();

    // Fill in valid data
    cy.get('#editTitle').clear().type('Updated Title');
    cy.get('#editDescription').clear().type('Updated Description');
    cy.get('#editAuthor').clear().type('valid.email@example.com');

    // Intercept the API call and simulate a failure response
    cy.intercept('PUT', '/edit-resource/*', {
      statusCode: 404,
      body: { message: 'Unable to edit blog!' },
    }).as('updateResource');

    // Click the update button
    cy.get('#updateButton').click();

    // Verify the error message and the class name for failure
    cy.get('#editMessage')
      .should('have.class', 'text-danger')
      .and('contain.text', 'Unable to edit blog!');
  });


  it('should show an error message on network failure', () => {
    cy.visit(baseUrl);

    // Open the modal for editing the second blog post
    cy.get('.blog-post')
      .eq(1)
      .find('.blog-actions button')
      .first()
      .click();

    // Fill in valid data
    cy.get('#editTitle').clear().type('Updated Title');
    cy.get('#editDescription').clear().type('Updated Description');
    cy.get('#editAuthor').clear().type('valid.email@example.com');

    // Simulate network error
    cy.intercept('PUT', '/edit-resource/*', {
      forceNetworkError: true,
    }).as('updateResource');

    // Click the update button
    cy.get('#updateButton').click();

    // Verify the network error message
    cy.get('#editMessage')
      .should('have.class', 'text-danger')
      .and('contain.text', 'Network error occurred!');
  });
  it('should trigger the catch block on JSON parsing error', () => {
    // Visit the application page directly
    cy.visit(`${baseUrl}`); 

    // Open the edit modal
    cy.get('.blog-actions button').first().click(); // Adjust as per your DOM structure

    // Fill in valid data
    cy.get('#editTitle').clear().type('Updated Title');
    cy.get('#editDescription').clear().type('Updated Description');
    cy.get('#editAuthor').clear().type('valid.email@example.com');

    // Stub the XMLHttpRequest to return malformed JSON
    cy.intercept('PUT', `/edit-resource/*`, { force:true,
      statusCode: 200,
      body: 'This is not JSON', // Malformed response to trigger catch
    }).as('updateResource');

    // Click the update button
    cy.get('#updateButton').click();

    // Verify the error message shown in the catch block
    cy.get('#editMessage')
      .should('have.class', 'text-danger')
      .and('contain.text', 'Error updating blog!');
  });
});
