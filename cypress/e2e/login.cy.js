describe("login Administrador", () => {

  const userAdm = 'admin@lc.dev'
  const passwordAdm = 'Test123!'

  it("login Admistrador test", () => {

      cy.visit('https://portal.qa.clearsource.app.lc.dev/')
      cy.xpath('/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[2]/div[1]/button')
      .should('be.visible')
      .click()
      cy.xpath('/html/body/div[3]/div[4]/div/section/div/div/div/form/div[1]/div/input')
      .should('be.visible')
      .click()
      cy.xpath('/html/body/div[3]/div[4]/div/section/div/div/div/form/div[1]/div/input')
      .should('be.visible')
      .type(userAdm)
      cy.xpath('/html/body/div[3]/div[4]/div/section/div/div/div/form/div[2]/div/input')
      .should('be.visible')
      .click()
      cy.xpath('/html/body/div[3]/div[4]/div/section/div/div/div/form/div[2]/div/input')
      .should('be.visible')
      .type(passwordAdm)
      cy.xpath('/html/body/div[3]/div[4]/div/section/div/div/div/form/button')
      .should('be.visible')
      .click()
      cy.xpath('/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[2]/button')
      .should('exist')
      .contains('AD')

  })
})

describe("login Contractor", () => {

  const userAdm = 'ariadnersb@gmail.com'
  const passwordAdm = 'Ary@060580'

  it("login Contractor test", () => {

      cy.visit('https://portal.qa.clearsource.app.lc.dev/')
      cy.xpath('/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[2]/div[1]/button')
      .should('be.visible')
      .click()
      cy.xpath('/html/body/div[3]/div[4]/div/section/div/div/div/form/div[1]/div/input')
      .should('be.visible')
      .click()
      cy.xpath('/html/body/div[3]/div[4]/div/section/div/div/div/form/div[1]/div/input')
      .should('be.visible')
      .type(userAdm)
      cy.xpath('/html/body/div[3]/div[4]/div/section/div/div/div/form/div[2]/div/input')
      .should('be.visible')
      .click()
      cy.xpath('/html/body/div[3]/div[4]/div/section/div/div/div/form/div[2]/div/input')
      .should('be.visible')
      .type(passwordAdm)
      cy.xpath('/html/body/div[3]/div[4]/div/section/div/div/div/form/button')
      .should('be.visible')
      .click()
      cy.xpath('/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[2]/button')
      .should('exist')
      .contains('AR')

  })
})

describe("login Distributor", () => {

  const userAdm = 'ariadner@lc.dev'
  const passwordAdm = 'Test123!'

  it("login Distributor test", () => {

      cy.visit('https://portal.qa.clearsource.app.lc.dev/')
      cy.xpath('/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[2]/div[1]/button')
      .should('be.visible')
      .click()
      cy.xpath('/html/body/div[3]/div[4]/div/section/div/div/div/form/div[1]/div/input')
      .should('be.visible')
      .click()
      cy.xpath('/html/body/div[3]/div[4]/div/section/div/div/div/form/div[1]/div/input')
      .should('be.visible')
      .type(userAdm)
      cy.xpath('/html/body/div[3]/div[4]/div/section/div/div/div/form/div[2]/div/input')
      .should('be.visible')
      .click()
      cy.xpath('/html/body/div[3]/div[4]/div/section/div/div/div/form/div[2]/div/input')
      .should('be.visible')
      .type(passwordAdm)
      cy.xpath('/html/body/div[3]/div[4]/div/section/div/div/div/form/button')
      .should('be.visible')
      .click()
      cy.xpath('/html/body/div[1]/div/div[1]/div[1]/div[1]/div/div[2]/button')
      .should('exist')
      .contains('DS')

  })
})
