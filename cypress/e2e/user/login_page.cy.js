
import home_selector from "../../selectors/home.sel"

import LoginEnter from "../../pageObject/login"

describe('User wants to login into the app', () => {

    const login_access = new LoginEnter()

    
    context('successful login', () => {
        beforeEach(() => {

            // baseUrl is set in config - cypress.json file
            cy.visit('')
        })

        it('can I click on the aceptar continue button?', () => {
            
            // As I user I able to click on Aceptar and Continuar button
            login_access.click_on_aceptar_continuar_button()
            // Then I wait to the pup up dialog completlly disapear
            cy.wait(1000)
            // // Then I click on the login button
            login_access.click_on_area_client_button()
            

        })

        // it('should allow me to click on login button', () => {
        //     // Then I access the login page
        //     cy.origin("https://customers.securitasdirect.es", () => {
        //         cy.visit("/owa-static/login") 
        //     })

        // })

    })

   
})