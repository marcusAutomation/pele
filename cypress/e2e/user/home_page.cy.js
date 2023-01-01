
import home_selector from "../../selectors/home.sel"

describe('Home page', () => {
    it('contains correct elements when launch the page', () => {
        cy.visit('')
        
    })

    it('contains correct elements when logged in ', () => {
        cy.visit('')

        cy.get(home_selector.ACEPTAR_CONTINUAR_BUTTON_ELEM).click()
        cy.on("window:confirm", (t) => {
            expect(t).to.equal('ACEPTAR Y CONTINUAR')
        })
        
    })

   
      
    


})
